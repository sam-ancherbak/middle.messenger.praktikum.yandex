export const registerTemplate = `
<div id="root">
    <div class="centered-container">
        <div class="form">
            <form action="/" method="post">
                <div class="form_header">
                    <span>Регистрация</span>
                </div>
                <div class="form_element-wrapper">
                    <input class="form_input" type="text" name="email" placeholder="Введите почту">
                </div>
                <div class="form_element-wrapper">
                    <input class="form_input" type="text" name="login" placeholder="Введите логин">
                </div>
                <div class="form_element-wrapper">
                    <input class="form_input" type="text" name="first_name" placeholder="Введите Имя">
                </div>
                <div class="form_element-wrapper">
                    <input class="form_input" type="text" name="second_name" placeholder="Введите Фамилию">
                </div>
                <div class="form_element-wrapper">
                    <input class="form_input" type="text" name="phone" placeholder="Введите номер">
                </div>
                <div class="form_element-wrapper">
                    <input class="form_input" type="password" name="password" placeholder="Введите пароль">
                    <img class="form_input-icon" src="{{eyeIcon}}"/>
                </div>
                <div class="form_element-wrapper">
                    <input class="form_input" type="password" name="repeat_password" placeholder="Повторите пароль">
                    <img class="form_input-icon" src="{{eyeIcon}}"/>
                </div>
                <div class="form_element-wrapper">
                    <button class="form_button form_button_disabled" type="submit">Зарегистрироваться</button>
                </div>
                <div class="form_element-wrapper">
                    <a href="/" class="form_link">Войти</a>
                </div>
            </form>
        </div>
    </div>
</div>
`
