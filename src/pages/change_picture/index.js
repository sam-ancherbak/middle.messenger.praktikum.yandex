import Handlebars from 'handlebars';

import {changePictureTemplate} from './change_picture.tmpl.js';
import '../../styles/global_styles.css';
import './change_picture.css';

import backIcon from '../../../static/icons/back_icon.svg';

const data = {
    backIcon: backIcon
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = Handlebars.compile(changePictureTemplate)(data);
})
