import Handlebars from 'handlebars';

import {profileTemplate} from './profile.tmpl.js';
import '../../styles/global_styles.css';
import './profile.css';

import backIcon from '../../../static/icons/back_icon.svg';

const data = {
    backIcon: backIcon
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = Handlebars.compile(profileTemplate)(data);
})
