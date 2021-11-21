import Handlebars from 'handlebars';

import {changePasswordTemplate} from './change_password.tmpl.js';
import '../../styles/global_styles.css';
import './change_password.css';

import eyeIcon from '../../../static/icons/password_eye.svg';
import backIcon from '../../../static/icons/back_icon.svg';

const data = {
    eyeIcon: eyeIcon,
    backIcon: backIcon
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = Handlebars.compile(changePasswordTemplate)(data);
})
