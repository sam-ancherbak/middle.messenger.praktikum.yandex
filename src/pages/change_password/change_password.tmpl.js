export const changePasswordTemplate = `
<div id="root">
    <div class="content-container">
        <div class="side-menu">
            <a href="/">
                <img src="{{backIcon}}"/>
            </a>
        </div>
        <div class="centered-container">
            <div class="form">
                <form action="/" method="post">
                    <div class="form_element-wrapper">
                        <input class="form_input" type="password" name="oldPassword" placeholder="Введите текущий пароль">
                        <img class="form_input-icon" src="{{eyeIcon}}"/>
                    </div>
                    <div class="form_element-wrapper">
                        <input class="form_input" type="password" name="newPassword" placeholder="Введите новый пароль">
                        <img class="form_input-icon" src="{{eyeIcon}}"/>
                    </div>
                    <div class="form_element-wrapper">
                        <button class="form_button form_button_disabled" type="submit">Сохранить новый пароль</button>
                    </div>
                </form>

            </div>
        </div>
    </div>

</div>

`
