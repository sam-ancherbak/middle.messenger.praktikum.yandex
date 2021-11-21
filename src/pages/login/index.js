import Handlebars from 'handlebars';

import {loginTemplate} from './login.tmpl.js';
import '../../styles/global_styles.css';
import './login.css';

import eyeIcon from '../../../static/icons/password_eye.svg';

const data = {
    eyeIcon: eyeIcon
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = Handlebars.compile(loginTemplate)(data);
})
