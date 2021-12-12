export const profileTemplate: string = `
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
                        {{{emailInput}}}
                    </div>
                    <div class="form_element-wrapper">
                        {{{loginInput}}}
                    </div>
                    <div class="form_element-wrapper">
                        {{{firstNameInput}}}
                    </div>
                    <div class="form_element-wrapper">
                        {{{secondNameInput}}}
                    </div>
                    <div class="form_element-wrapper">
                        {{{displayNameInput}}}
                    </div>
                    <div class="form_element-wrapper">
                        {{{phoneInput}}}
                    </div>
                    <div class="form_element-wrapper">
                        {{{saveButton}}}
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
