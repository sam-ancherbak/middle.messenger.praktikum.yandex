import Handlebars from 'handlebars'

import {internalErrorPage} from "./500.tmpl.js"
import '../../styles/global_styles.css';
import './500.css';

import errorImageUrl from '../../../static/img/pepe_500.png';

const data = {
    errorImageUrl: errorImageUrl
};

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = Handlebars.compile(internalErrorPage)(data);
})
