export const loginTemplate: string = `
<div id="root">
    <div class="centered-container">
        <div class="form">
            <form action="/" method="post">
                <div class="form_header">
                    <span>Вход</span>
                </div>
                <div class="form_element-wrapper">
                    {{{loginInput}}}
                </div>
                <div class="form_element-wrapper">
                    {{{passwordInput}}}
                    <img class="form_input-icon" src="{{eyeIcon}}"/>
                </div>
                <div class="form_element-wrapper">
                    {{{loginButton}}}
                </div>
            </form>
        </div>
    </div>
</div>
`
