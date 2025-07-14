class DropDownInput {

    constructor(input, elementsRef, items) {
        this.inputRef = input;
        this.ddownRef = document.querySelector(elementsRef.elementsDdown);
        this.itemsRef = document.querySelectorAll(elementsRef.elementsItem);
        this.items = items;

        this.setListeners();
    }

    inputRef;
    ddownRef;
    itemsRef;

    items;

    show() {
        this.ddownRef.classList.remove("hidden");

        setTimeout(() => {
            this.ddownRef.classList.remove("invisible");
        }, 10)
    }

    hide() {
        this.ddownRef.classList.add("invisible");
        setTimeout(() => {
            this.ddownRef.classList.add("hidden");
        }, 200)
    }


    sanitizeInput(s) {
        return s.replace(/&/g, '').replace(/</g, '').replace(/"/g, '');
    }


    setListeners() {
        this.inputRef.addEventListener("click", (ev) => {
            this.show();
        })


        this.inputRef.addEventListener("input", (ev) => {
            let inputValue = this.inputRef.value.toLowerCase();

            this.items.forEach((v, idx) => {
                if (v.indexOf(inputValue) == -1) {
                    this.itemsRef[idx].classList.add("hidden");
                } else {
                    this.itemsRef[idx].classList.remove("hidden");
                }
            })
        })

        window.addEventListener("click", (ev) => {
            if (ev.target != this.inputRef) {
                this.hide();
            }
        })

        this.itemsRef.forEach((listItem, idx) => {
            listItem.addEventListener("click", (ev) => {
                this.inputRef.value = this.items[idx];
            })
        })
    }



}

export default DropDownInput