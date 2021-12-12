const emailRule = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
const phoneRule = /^\d[\d\(\)\ -]{4,14}\d$/;
const loginRule = /^([A-Za-zА-Яа-я0-9_\-.]){2,10}$/;
const passwordRule = /^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const name = /^([А-ЯЁ][а-яё]{1,29}|[A-Z]{1}[a-z]{1,29})$/;
const displayName = /[А-ЯЁа-яё]{1,30}|[A-Za-z]{1,30}$/;

const inputErrorClass = 'form_input_error';

export function valdiateInput(element) {
    let inputName: string = element.name;
    let rule: RegExp | null = null;
    switch (inputName) {
        case 'email':
            rule = emailRule;
            break
        case 'phone':
            rule = phoneRule;
            break
        case 'login':
            rule = loginRule;
            break
        case 'password':
        case 'repeat_password':
            rule = passwordRule;
            break
        case 'first_name':
        case 'second_name':
            rule = name;
            break
        case 'display_name':
            rule = displayName;
            break;
    }
    if (rule && !rule.test(element.value)) {
        element.classList.add(inputErrorClass);
    } else {
        element.classList.remove(inputErrorClass);
    }
}

export function focusOutValidation(event: Event) {
    const element = event.target as HTMLElement;
    if (element && element.tagName !== 'INPUT') {
        return;
    }
    valdiateInput(element);
}

export function submitEventValidation(event: Event) {
    event.preventDefault();
    const target = event.target as HTMLElement;
    const inputs: HTMLCollectionOf<HTMLInputElement> = target.getElementsByTagName('input');
    Object.values(inputs).forEach(input => {
        valdiateInput(input)
    });
}
