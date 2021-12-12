import buttonTemplate from "./button.tmpl";
import Block from "../../modules/block";

interface ButtonProps {
    class: string;
    text: string;
    type?: string;
}
export default class Button extends Block {
    constructor(props: ButtonProps) {
        super(buttonTemplate, props);
    }
}
