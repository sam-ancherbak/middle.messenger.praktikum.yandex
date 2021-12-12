import * as Handlebars from 'handlebars';

import {changePictureTemplate} from './change_picture.tmpl';
import '../../styles/global_styles.css';
import './change_picture.css';

import backIcon from '../../../static/icons/back_icon.svg';
import Button from "../../components/button/button";
import Block from "../../modules/block";

let changePicturePage = new class ChangePicture extends Block {
    constructor() {
        super('div', {
            button: new Button({
                class: 'form_button',
                text: 'Выберите файл',
            }),
            backIcon: backIcon
        });
    }

    render() {
        let changePictureTmpl = Handlebars.compile(changePictureTemplate)
        return changePictureTmpl({
            button: this.props.button.render(),
            backIcon: this.props.backIcon,
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = changePicturePage.render();
})
