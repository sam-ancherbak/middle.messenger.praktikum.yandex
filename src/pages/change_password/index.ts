import * as Handlebars from 'handlebars';

import { changePasswordTemplate } from './change_password.tmpl';
import '../../styles/global_styles.css';
import './change_password.css';

import eyeIcon from '../../../static/icons/password_eye.svg';
import backIcon from '../../../static/icons/back_icon.svg';
import Block from '../../modules/block';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import { focusOutValidation, submitEventValidation } from '../../modules/input-validator';

class ChangePassword extends Block {
  constructor() {
    super('div', {
      passwordInput: new Input({
        class: 'form_input',
        type: 'password',
        name: 'password',
        placeholder: 'Введите текущий пароль',
      }),
      repeatPasswordInput: new Input({
        class: 'form_input',
        type: 'password',
        name: 'repeat_password',
        placeholder: 'Введите новый пароль',
      }),
      saveButton: new Button({
        class: 'form_button',
        text: 'Сохранить новый пароль',
        type: 'submit',
      }),
      eyeIcon,
      backIcon,
      eventsList: {
        focusout: (event: Event) => focusOutValidation(event),
        submit: (event: Event) => submitEventValidation(event),
      },
    });
  }

  render() {
    const changePasswordTmpl = Handlebars.compile(changePasswordTemplate);
    return changePasswordTmpl({
      passwordInput: this.props.passwordInput.render(),
      repeatPasswordInput: this.props.repeatPasswordInput.render(),
      saveButton: this.props.saveButton.render(),
      eyeIcon: this.props.eyeIcon,
      backIcon: this.props.backIcon,
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild((new ChangePassword()).getContent());
});
