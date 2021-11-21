export const profileTemplate = `
<div id="root">
    <div class="content-container">
        <div class="side-menu">
            <a href="/">
                <img  src="{{backIcon}}"/>
            </a>
        </div>
        <div class="centered-container">
            <div class="form">
                <form action="/" method="post">
                    <div class="form_header">
                        <a href="../change_picture/change_picture.html">
                            <div class="form_profile-picture"></div>
                        </a>
                    </div>
                    <div class="form_element-wrapper">
                        <input class="form_input" type="text" name="email" placeholder="Почта">
                    </div>
                    <div class="form_element-wrapper">
                        <input class="form_input" type="text" name="login" placeholder="Логин">
                    </div>
                    <div class="form_element-wrapper">
                        <input class="form_input" type="text" name="first_name" placeholder="Имя">
                    </div>
                    <div class="form_element-wrapper">
                        <input class="form_input" type="text" name="second_name" placeholder="Фамилия">
                    </div>
                    <div class="form_element-wrapper">
                        <input class="form_input" type="text" name="display_name" placeholder="Никнейм">
                    </div>
                    <div class="form_element-wrapper">
                        <input class="form_input" type="text" name="phone" placeholder="Номер">
                    </div>
                    <div class="form_element-wrapper">
                        <button class="form_button form_button_disabled" type="submit">Сохранить изменения</button>
                    </div>
                    <div class="form_element-wrapper">
                        <a href="../change_password/change_password.html" class="form_link form_link_black">Изменить пароль</a>
                    </div>
                    <div class="form_element-wrapper">
                        <a href="/" class="form_link">Выйти</a>
                    </div>
                </form>
            </div>

        </div>
    </div>

</div>
`
