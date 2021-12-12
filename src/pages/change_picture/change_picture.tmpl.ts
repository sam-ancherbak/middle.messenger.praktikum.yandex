export const changePictureTemplate: string = `
<div id="root">
    <div class="content-container">
        <div class="side-menu">
            <a href="/">
                <img src="{{ backIcon }}"/>
            </a>
        </div>
        <div class="centered-container">
            <div class="form_background-panel"></div>
            <div class="form">
                <form action="/" method="post">
                    <div class="form_header">
                        <div class="form_profile-picture">
                            <a href="/"></a>
                        </div>
                    </div>
                    <div class="form_element-wrapper">
                        {{{button}}}
                    </div>
                </form>
            </div>
        </div>
    </div>

</div>
`
