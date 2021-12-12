import * as Handlebars from 'handlebars';

import { chatsTemplate } from './chats.tmpl';
import Block from '../../modules/block';
import ChatItem from '../../components/chat_item/chat_item';
import ChatMessage from '../../components/chat_message/chat_message';

import '../../styles/global_styles.css';
import './chats.css';

import searchIcon from '../../../static/icons/search_icon.svg';
import actionsIcon from '../../../static/icons/actions_icon.svg';

class Chats extends Block {
  constructor() {
    super('div', {
      chatMessageLeft: new ChatMessage({
        class: 'chat-message',
        text: 'Идейные соображения высшего порядка',
        time: '18:21',
      }),
      chatMessageRight: new ChatMessage({
        class: 'chat-message chat-message_right',
        text: 'Чё?',
        time: '18:21',
      }),
      chatItem: new ChatItem({
        author: 'Иван',
        text: 'Идейные соображения высшего порядка, а также дальнейшее р...',
        time: '18:21',
        counter: 3,
      }),
    });
  }

  render() {
    const chatsTmpl = Handlebars.compile(chatsTemplate);
    return chatsTmpl({
      chatMessageLeft: this.props.chatMessageLeft.render(),
      chatMessageRight: this.props.chatMessageRight.render(),
      chatItem: this.props.chatItem.render(),
      searchIcon: this.props.searchIcon,
      actionsIcon: this.props.actionsIcon,
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild((new Chats()).getContent());
});
