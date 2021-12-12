import * as Handlebars from "handlebars";
import EventBus from "./event-bus";
import Input from "../components/input/input";

export default class Block {
    static EVENTS = {
        INIT: "flow:init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_RENDER: "flow:render",
        FLOW_CDU: "flow:component-did-update",
    };

    _element: HTMLElement;
    _meta: {
        template: string;
        props: { [key: string]: any }
    };
    props: { [key: string]: any };

    eventBus: () => EventBus;

    constructor(template: string = 'div', props: {} = {}) {
        this._meta = {template, props};
        this._element = document.createElement('div');
        this.props = this._makePropsProxy(props);

        const eventBus = new EventBus();
        this.eventBus = () => eventBus;
        this._registerEvents(eventBus);

        eventBus.emit(Block.EVENTS.INIT);
    }

    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this._componentInit.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    }

    setProps = (nextProps: { [key: string]: any }) => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    _render() {
        let renderedElement = this.render();
        this._removeEvents();
        this._element.innerHTML = renderedElement;
        this._addEvents();
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    render() {
        const block = Handlebars.compile(this._meta.template)(this.props);
        return block;
    }

    getContent(): HTMLElement {
        return this._element;
    }

    _makePropsProxy(props) {
        return new Proxy(props, {
            get(target: { [key: string]: any }, prop: string) {
                if (prop.indexOf('_') === 0) {
                    throw new Error('Отказано в доступе');
                }
                const value = target[prop];
                return typeof value === 'function' ? value.bind(target) : value;
            },
            set: (target: { [key: string]: any[] }, prop: string, value) => {
                if (prop.indexOf('_') === 0) {
                    throw new Error('Отказано в доступе');
                }
                target[prop as keyof typeof target] = value;
                this.eventBus().emit(Block.EVENTS.FLOW_CDU, this.props, target);
                return true;
            },
            deleteProperty() {
                throw new Error("Отказано в доступе");
            },
        });
    }

    _componentInit() {
        this.componentInit();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    componentInit() {
    }

    _componentDidMount() {
        this.componentDidMount();
    }

    componentDidMount() {
    }

    _componentDidUpdate(oldProps, newProps) {
        const response = this._componentShouldBeUpdated(oldProps, newProps);

        if (response) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    _componentShouldBeUpdated(oldProps: { [key: string]: any }, newProps: { [key: string]: any }) {
        return oldProps !== newProps;
    }

    _addEvents() {
        const {eventsList = {}} = this.props;
        let element = this._element;
        if (this.constructor.name === 'Input') {
            element = this._element.querySelector('input') as HTMLElement;
        }
        Object.keys(eventsList).forEach(eventName => {
            element.addEventListener(eventName, eventsList[eventName]);
        });
    }

    _removeEvents() {
        const {eventsList = {}} = this.props;
        Object.keys(eventsList).forEach(eventName => {
            this._element.removeEventListener(eventName, eventsList[eventName]);
        });
    }

}
