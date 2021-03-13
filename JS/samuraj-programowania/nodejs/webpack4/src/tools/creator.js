export default class {
    constructor() {
        this.element = document.createElement('div');
        this.element.style.height = '100px';
        document.body.appendChild(this.element);
    }
    addBgColor(color) {
        this.element.style.backgroundColor = color;
    }
} 