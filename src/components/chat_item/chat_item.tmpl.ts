const chatItemTemplate: string = `
    <div class="chat-item">
        <div class="chat-item__avatar"></div>
        <div class="chat-item__text-block">
            <span class="chat-item__message-author">
                {{author}}
            </span>
            <span class="chat-item__message-text">
                {{text}}
            </span>
        </div>
        <div class="chat-item__info-block">
             <div class="chat-item__message-time"><span>{{time}}</span></div>
             <div class="chat-item__message-counter"><span>{{counter}}</span></div>
        </div>
    </div>
`;

export default chatItemTemplate;
