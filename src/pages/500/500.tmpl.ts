export const internalErrorTemplate: string = `
<div id="root">
    <div class="content-container">
        <div class="centered-container">
            <div class="error-page_container">
                <div class="error-page_code">
                    <span>500</span>
                </div>
                <div class="error-page_text">
                    <span>
                        Внутренняя ошибка сервера<br>
                        Пожалуйста, подождите, уже работаем над этим
                    </span>
                </div>
                <div class="error-page_img">
                    <img src="{{errorImageUrl}}" alt="">
                </div>
            </div>
        </div>
    </div>
</div>
`

