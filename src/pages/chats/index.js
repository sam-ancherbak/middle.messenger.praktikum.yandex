import Handlebars from 'handlebars'

import {chatsTemplate} from "./chats.tmpl.js"
import '../../styles/global_styles.css';
import './chats.css';

import errorImageUrl from '../../../static/img/pepe_500.png';

const data = {
    errorImageUrl: errorImageUrl
};

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = Handlebars.compile(chatsTemplate)(data);
})
