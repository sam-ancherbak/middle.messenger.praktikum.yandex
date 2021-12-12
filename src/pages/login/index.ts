import * as Handlebars from 'handlebars';
import Block from '../../modules/block';
import Input from '../../components/input/input';
import Button from '../../components/button/button';

import { loginTemplate } from './login.tmpl';
import '../../styles/global_styles.css';
import './login.css';

import eyeIcon from '../../../static/icons/password_eye.svg';
import { focusOutValidation, submitEventValidation, valdiateInput } from '../../modules/input-validator';

class Login extends Block {
  constructor() {
    super('div', {
      loginInput: new Input({
        class: 'form_input',
        type: 'text',
        name: 'login',
        placeholder: 'Введите логин',
      }),
      passwordInput: new Input({
        class: 'form_input',
        type: 'password',
        name: 'password',
        placeholder: 'Введите пароль',
      }),
      loginButton: new Button({
        text: 'Войти',
        class: 'form_button',
        type: 'submit',
      }),
      eventsList: {
        focusout: (event) => focusOutValidation(event),
        submit: (event) => submitEventValidation(event),
      },
    });
  }

  render() {
    const loginTmpl = Handlebars.compile(loginTemplate);
    return loginTmpl({
      loginInput: this.props.loginInput.render(),
      passwordInput: this.props.passwordInput.render(),
      loginButton: this.props.loginButton.render(),
      eyeIcon: this.props.eyeIcon,
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild((new Login()).getContent());
});
