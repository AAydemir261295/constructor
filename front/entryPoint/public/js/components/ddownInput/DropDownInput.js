class DropDownInput {

    constructor() {

        this.setListeners();
    }

    input = document.querySelector("#input");
    ddown = document.querySelector("#ddown");
    items = document.querySelectorAll(".type-input-container__ddown-item");


    show() {
        this.ddown.classList.remove("hidden");

        setTimeout(() => {
            this.ddown.classList.remove("invisible");
        }, 10)
    }

    hide() {
        this.ddown.classList.add("invisible");
        setTimeout(() => {
            this.ddown.classList.add("hidden");
        }, 200)
    }



    setListeners() {
        this.input.addEventListener("click", (ev) => {
            this.show();
        })

        window.addEventListener("click", (ev) => {
            if (ev.target != input) {
                this.hide();
            }
        })

        this.items.forEach((listItem) => {
            listItem.addEventListener("click", (ev) => {
                
            })
        })
    }



}

export default DropDownInput