import * as Handlebars from 'handlebars';

import Block from "../../modules/block";
import Input from "../../components/input/input";
import Button from "../../components/button/button";

import {profileTemplate} from './profile.tmpl';
import '../../styles/global_styles.css';
import './profile.css';

import backIcon from '../../../static/icons/back_icon.svg';



let profilePage = new class Profile extends Block {
    constructor() {
        super('div', {
            emailInput: new Input({
                class: 'form_input',
                type: 'text',
                name: 'email',
                placeholder: 'Почта'
            }),
            firstNameInput: new Input({
                class: 'form_input',
                type: 'text',
                name: 'first_name',
                placeholder: 'Имя'
            }),
            secondNameInput: new Input({
                class: 'form_input',
                type: 'text',
                name: 'second_name',
                placeholder: 'Фамилию'
            }),
            displayNameInput: new Input({
                class: 'form_input',
                type: 'text',
                name: 'display_name',
                placeholder: 'Никнейм'
            }),
            loginInput: new Input({
                class: 'form_input',
                type: 'text',
                name: 'login',
                placeholder: 'Логин'
            }),
            phoneInput: new Input({
                class: 'form_input',
                type: 'text',
                name: 'phone',
                placeholder: 'Номер'
            }),
            saveButton: new Button({
                text: 'Сохранить изменения',
                class: 'form_button',
                type: 'submit'
            }),
        });
    }

    render() {
        const profileTmpl = Handlebars.compile(profileTemplate);
        return profileTmpl({
                backIcon: backIcon,
                emailInput: this.props.emailInput.render(),
                loginInput: this.props.loginInput.render(),
                firstNameInput: this.props.firstNameInput.render(),
                secondNameInput: this.props.secondNameInput.render(),
                phoneInput: this.props.phoneInput.render(),
                saveButton: this.props.saveButton.render(),
            }
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = profilePage.render();
})