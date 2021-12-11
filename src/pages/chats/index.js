import Handlebars from 'handlebars'

import {chatsTemplate} from "./chats.tmpl.js"
import '../../styles/global_styles.css';
import './chats.css';

import searchIcon from '../../../static/icons/search_icon.svg';
import actionsIcon from '../../../static/icons/actions_icon.svg';

const data = {
    searchIcon: searchIcon,
    actionsIcon: actionsIcon,
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = Handlebars.compile(chatsTemplate)(data);
})
