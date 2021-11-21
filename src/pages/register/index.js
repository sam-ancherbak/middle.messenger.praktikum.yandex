import Handlebars from 'handlebars';

import {registerTemplate} from './register.tmpl.js';
import '../../styles/global_styles.css';
import './register.css';

import eyeIcon from '../../../static/icons/password_eye.svg';

const data = {
    eyeIcon: eyeIcon
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = Handlebars.compile(registerTemplate)(data);
})
