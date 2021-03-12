let svgCaptcha = require('svg-captcha');

export function diplayCaptcha() {
    const captchaDiv = document.querySelector(".captcha");
    const captcha = svgCaptcha.create();
    captchaDiv.innerHTML = captcha;
}