import chatItemTemplate from "./chat_item.tmpl";
import Block from "../../modules/block";

interface chatItemProps {
    author: string;
    text: string,
    time: string;
    counter: number;
}

export default class ChatItem extends Block {
    constructor(props: chatItemProps) {
        super(chatItemTemplate, props);
    }
}
