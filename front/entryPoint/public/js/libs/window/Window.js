class Window {

    // 2100;

    constructor() {
        this.browserWidth = window.innerWidth;
        this.listeners();
    }


    listeners() {

        window.addEventListener("resize", (ev) => {

            if (ev.target.matchMedia("(min-width: 2100px)").matches) {
                console.log("bigget than 2100");
            }

        })


        // window.addEventListener("resize", (ev) => {
        //     console.log(ev.innerWidth);
        // })
    }

    getMediaType() {
        if (window.matchMedia("(min-width: 2100px)").matches) {
            return 2100;
        } else {
            return "other";
        }
    }




}

export default Window;