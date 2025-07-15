import Component from "/js/components/constructor/core/Component.js";

class Button extends Component {


    constructor() { }

    eleData = {
        ele: "button",
        css: ["pointer", "btn-submit", "nostyle-btn"],
        styles: ["buttonMin"],
        options: { type: "button", innerText: "текст" }
    }





}

export default Button;