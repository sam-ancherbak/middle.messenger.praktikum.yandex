export const registerTemplate = `
<div id="root">
    <div class="centered-container">
        <div class="form">
            <form action="/" method="post">
                <div class="form_header">
                    <span>Регистрация</span>
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
                    {{{phoneInput}}}
                </div>
                <div class="form_element-wrapper">
                    {{{passwordInput}}}
                    <img class="form_input-icon" src="{{eyeIcon}}"/>
                </div>
                <div class="form_element-wrapper">
                    {{{repeatPasswordInput}}}
                    <img class="form_input-icon" src="{{eyeIcon}}"/>
                </div>
                <div class="form_element-wrapper">
                    {{{registerButton}}}
                </div>
                <div class="form_element-wrapper">
                    <a href="/" class="form_link">Войти</a>
                </div>
            </form>
        </div>
    </div>
</div>
`;
