export const changePasswordTemplate: string = `
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
                        {{{passwordInput}}}
                        <img class="form_input-icon" src="{{eyeIcon}}"/>
                    </div>
                    <div class="form_element-wrapper">
                        {{{repeatPasswordInput}}}
                        <img class="form_input-icon" src="{{eyeIcon}}"/>
                    </div>
                    <div class="form_element-wrapper">
                        {{{saveButton}}}
                    </div>
                </form>

            </div>
        </div>
    </div>

</div>

`
