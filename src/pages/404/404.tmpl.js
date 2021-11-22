export const notFoundPage = `
<div id="root">
    <div class="content-container">
        <div class="centered-container">
            <div class="error-page_container">
                <div class="error-page_code">
                    <span>404</span>
                </div>
                <div class="error-page_text">
                    <span>
                        Страница не найдена.<br>Возможно, она была перемещена,<br>или вы неверно указали адрес страницы
                    </span>
                </div>
                <div class="error-page_img">
                    <img src="{{this.errorImageUrl}}" alt="">
                </div>
            </div>
        </div>
    </div>
</div>
`
