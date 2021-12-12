export const chatsTemplate = `
<div id="root">
    <div class="content-container">
        <div class="chat-list__content-container">
               <div class="chat-list__menu-block">
                    <div class="chat-list__menu-bar">
                           <span>Профиль</span>
                           <span>Создать чат</span>
                    </div>
                    <input class="search-input" placeholder="Поиск">
               </div>
               <div class="chat-list__chats-block">
                    {{{chatItem}}}
               </div>
        </div>
        <div class="active-chat__content-container">
               <div class="active-chat__menu-block">
                    <div class="active-chat__person-info-block">
                        <div class="active-chat__person-avatar"></div>
                        <div class="active-chat__person-name"><span>Максим</span></div>
                    </div>
                    <img class="active-chat__actions-icon" src="{{actionsIcon}}"/>
                </div>
                <div class="active-chat__messages-block">
                    <div class="chat-date">
                        <span>14 ноября</span>
                    </div>
                    {{{chatMessageLeft}}}
                    {{{chatMessageRight}}}
                </div>
                <input class="active-chat__send-input" placeholder="Текст сообщения" name="message">
        </div>
    </div>
</div>
`;
