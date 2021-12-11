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
                    <div class="chat-item">
                        <div class="chat-item__avatar"></div>
                        <div class="chat-item__text-block">
                            <span class="chat-item__message-author">
                                Иван
                            </span>
                            <span class="chat-item__message-text">
                                Идейные соображения высшего порядка, а также дальнейшее р...
                            </span>
                        </div>
                        <div class="chat-item__info-block">
                             <div class="chat-item__message-time"><span>10:15</span></div>
                             <div class="chat-item__message-counter"><span>3</span></div>
                        </div>
                    </div>
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
                    <div class="chat-message">
                        <span>Идейные соображения высшего порядка</span>
                        <span>18:21</span>
                    </div>
                    <div class="chat-message">
                        <span>
                            Товарищи! новая модель организационной деятельности требуют
                            определения и уточнения соответствующий условий активизации.
                            Таким образом новая модель организационной деятельности требуют
                            от нас анализа соответствующий условий активизации. 
                            Товарищи! начало повседневной работы по формированию позиции 
                            позволяет оценить значение системы обучения кадров, соответствует
                            насущным потребностям. 
                        </span>
                        <span>18:21</span>
                    </div>
                    <div class="chat-message chat-message_right">
                        <span>Чё?</span>
                        <span>18:21</span>
                    </div>
                </div>
                <input class="active-chat__send-input" placeholder="Текст сообщения" name="message">
        </div>
    </div>
</div>
`

