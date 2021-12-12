import Block from "../../modules/block";
import chatMessageTempalte from "./chat_message.tmpl";

interface chatMessageProps {
    text: string,
    time: string,
    class: string,
}

export default class ChatMessage extends Block {
    constructor(props: chatMessageProps) {
        super(chatMessageTempalte, props);
    }
}
