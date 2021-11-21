import Handlebars from 'handlebars'

import {notFoundPage} from './404.tmpl.js'
import '../../styles/global_styles.css';
import './404.css';

import errorImageUrl from '../../../static/img/pepe_404.png';

const data = {
    errorImageUrl: errorImageUrl
};

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = Handlebars.compile(notFoundPage)(data);
})
