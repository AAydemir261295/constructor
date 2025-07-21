class DropDownInput {

    constructor(input, elementsRef, items, showSelectedItem) {
        this.inputRef = input;
        this.items = items;
        this.showSelectedItemFn = showSelectedItem;
        this.ddownRef = document.querySelector(elementsRef.elementsDdown);
        this.itemsRef = document.querySelectorAll(elementsRef.elementsItem);
        this.setListeners();
    }

    inputRef;
    ddownRef;
    itemsRef;
    showSelectedItemFn;

    items;

    show() {
        this.ddownRef.classList.remove("hidden");
    }

    hide() {
        this.ddownRef.classList.add("hidden");
    }

    showItems(...args) {
        let idx = args[0];

        this.inputRef.value = this.items[idx];
        this.showSelectedItemFn(this.items[idx], idx);
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
            listItem.addEventListener("click", this.showItems.bind(this, idx))
        })
    }



}

export default DropDownInput