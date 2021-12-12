import * as Handlebars from 'handlebars';
import Block from '../../modules/block';

import {registerTemplate} from './register.tmpl';
import Button from "../../components/button/button";
import '../../styles/global_styles.css';
import './register.css';

import eyeIcon from '../../../static/icons/password_eye.svg';
import {template} from "handlebars";
import Input from "../../components/input/input";
import {focusOutValidation, submitEventValidation, valdiateInput} from "../../modules/input-validator";

class Register extends Block {
    constructor() {
        super('div', {
            emailInput: new Input({
                class: 'form_input',
                type: 'text',
                name: 'email',
                placeholder: 'Введите почту',
            }),
            loginInput: new Input({
                class: 'form_input',
                type: 'text',
                name: 'login',
                placeholder: 'Введите логин'
            }),
            firstNameInput: new Input({
                class: 'form_input',
                type: 'text',
                name: 'first_name',
                placeholder: 'Введите Имя'
            }),
            secondNameInput: new Input({
                class: 'form_input',
                type: 'text',
                name: 'second_name',
                placeholder: 'Введите Фамилию'
            }),
            phoneInput: new Input({
                class: 'form_input',
                type: 'text',
                name: 'phone',
                placeholder: 'Введите номер'
            }),
            passwordInput: new Input({
                class: 'form_input',
                type: 'password',
                name: 'password',
                placeholder: 'Введите пароль'
            }),
            repeatPasswordInput: new Input({
                class: 'form_input',
                type: 'password',
                name: 'repeat_password',
                placeholder: 'Повторите пароль'
            }),
            registerButton: new Button({
                text: 'Зарегестрироваться',
                class: 'form_button',
                type: 'submit'
            }),
            eyeIcon: eyeIcon,
            eventsList: {
                focusout: (event) => focusOutValidation(event),
                submit: (event) => [submitEventValidation(event), this.prepareForm(event)]
            },
        });
    }

    prepareForm(event: Event) {
        event.preventDefault();
        const target = event.target as HTMLElement;
        const notValidInputs: HTMLCollectionOf<Element> = target.getElementsByClassName('form_input_error')
        if (notValidInputs.length > 0) {
            return;
        }
        let formObject = {};
        const inputs: HTMLCollectionOf<HTMLInputElement> = target.getElementsByTagName('input');
        Object.values(inputs).forEach(input => {
            formObject[input.name] = input.value;
        });
        console.log(formObject);
    }

    render() {
        const registerTmpl = Handlebars.compile(registerTemplate);
        return registerTmpl({
                eyeIcon: this.props.eyeIcon,
                emailInput: this.props.emailInput.render(),
                loginInput: this.props.loginInput.render(),
                firstNameInput: this.props.firstNameInput.render(),
                secondNameInput: this.props.secondNameInput.render(),
                phoneInput: this.props.phoneInput.render(),
                passwordInput: this.props.passwordInput.render(),
                repeatPasswordInput: this.props.repeatPasswordInput.render(),
                registerButton: this.props.registerButton.render(),
            }
        )
    }

}

document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild((new Register()).getContent());
})
