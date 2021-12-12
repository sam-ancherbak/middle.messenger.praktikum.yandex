export const loginTemplate: string = `
<div id="root">
    <div class="centered-container">
        <div class="form">
            <form action="/" method="post">
                <div class="form_header">
                    <span>Вход</span>
                </div>
                <div class="form_element-wrapper">
                    <input class="form_input" type="text" name="login" placeholder="Введите логин">
                </div>
                <div class="form_element-wrapper">
                    <input class="form_input" type="password" name="password" placeholder="Введите пароль">
                    <img class="form_input-icon" src="{{eyeIcon}}"/>
                </div>
                <div class="form_element-wrapper">
                    <button class="form_button" type="submit">Вход</button>
                </div>
            </form>
        </div>
    </div>
</div>
`
