import * as Handlebars from 'handlebars';

import '../../styles/global_styles.css';
import './404.css';

import errorImageUrl from '../../../static/img/pepe_404.png';
import backIcon from '../../../static/icons/back_icon.svg';

import Block from '../../modules/block';
import { notFoundTemplate } from './404.tmpl';

class NotFound extends Block {
  constructor() {
    super('div', {
      errorImageUrl,
      backIcon,
    });
  }

  render() {
    const notFoundTmpl = Handlebars.compile(notFoundTemplate);
    return notFoundTmpl({
      errorImageUrl: this.props.errorImageUrl,
      backIcon: this.props.backIcon,
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild((new NotFound()).getContent());
});
