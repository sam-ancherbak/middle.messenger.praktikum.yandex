import * as Handlebars from 'handlebars'

import {internalErrorTemplate} from "./500.tmpl"
import '../../styles/global_styles.css';
import './500.css';

import errorImageUrl from '../../../static/img/pepe_500.png';
import backIcon from "../../../static/icons/back_icon.svg";

import Block from "../../modules/block";

let internalErrorPage = new class InternalError extends Block {
    constructor() {
        super('div', {
            errorImageUrl: errorImageUrl,
            backIcon: backIcon
        });
    }

    render() {
        let internalErrorTmpl = Handlebars.compile(internalErrorTemplate)
        return internalErrorTmpl({
            errorImageUrl: this.props.errorImageUrl,
            backIcon: this.props.backIcon
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = internalErrorPage.render();
})
