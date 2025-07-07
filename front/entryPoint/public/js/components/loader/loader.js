const loaderEle = {
    tree:
    {
        ele: "div", classList: ["loader-container"], childs: [
            { ele: "div", classList: ["loader-container__loader"] },
            { ele: "div", classList: ["loader-container__loader"] },
            { ele: "div", classList: ["loader-container__loader"] },
            { ele: "div", classList: ["loader-container__loader"] },
            { ele: "div", classList: ["loader-container__loader"] },
            { ele: "div", classList: ["loader-container__loader"] },
            { ele: "div", classList: ["loader-container__loader"] },
            { ele: "div", classList: ["loader-container__loader"] },
            { ele: "div", classList: ["loader-container__loader"] },
            { ele: "div", classList: ["loader-container__loader"] },
            { ele: "div", classList: ["loader-container__loader"] },
            { ele: "div", classList: ["loader-container__loader"] },
            { ele: "div", classList: ["loader-container__loader"] },
            { ele: "div", classList: ["loader-container__loader"] },
            { ele: "div", classList: ["loader-container__loader"] },
            { ele: "div", classList: ["loader-container__loader"] },
            { ele: "div", classList: ["loader-container__loader"] },
            { ele: "div", classList: ["loader-container__loader"] },
            { ele: "div", classList: ["loader-container__loader"] },
            { ele: "div", classList: ["loader-container__loader"] },
            { ele: "div", classList: ["loader-container__loader"] },
            { ele: "div", classList: ["loader-container__loader"] },
            { ele: "div", classList: ["loader-container__loader"] },
            { ele: "div", classList: ["loader-container__loader"] },
            { ele: "div", classList: ["loader-container__loader"] },

        ]
    }
}

export class Loader {
    constructor() {
        this.loaderContainer = document.querySelector(".loader-container");
        this.childs = this.loaderContainer.children;
    }


    body;
    loaderContainer;
    childs;
    interval;
    scales = [];

    animation = (x, y, scale) => {
        return [
            { transform: `translateX(${x}px) translateY(${y}px) scale(${scale})` }
        ]
    }

    timings = (ms) => {
        return {
            duration: ms,
            iteration: 1,
            easing: "ease-out",
            fill: "forwards",
        }
    }

    getRandomInitPosition() {
        let max = 200;
        let min = -200;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    getScale() {
        let scale = Math.random() * 0.7 + 0.3;
        this.scales.push(scale);
        return scale;
    }


    blocksOnStart() {
        for (const ele of this.childs) {
            let x = this.getRandomInitPosition();
            let y = this.getRandomInitPosition();
            let scale = this.getScale();
            ele.style.transform = `translateX(${x}px) translateY(${y}px) scale(${scale})`;
        }
    }


    startAnimation() {
        for (let q = 0; q < this.childs.length; q++) {
            let ele = this.childs[q];
            let animation = this.animation(this.getRandomInitPosition(), this.getRandomInitPosition(), this.scales[q]);
            let timings = this.timings(1000);
            ele.animate(animation, timings);
            ele.animate(animation, {})
        }
    }

    endAnimation() {
        for (let q = 0; q < this.childs.length; q++) {
            let ele = this.childs[q];
            let animation = this.animation(0, 0, 1);
            let timings = this.timings(1000);
            ele.animate(animation, timings);
        }
    }

    start() {
        this.blocksOnStart();
        this.loaderContainer.style.animation = "show 0.2s linear forwards";
        this.startAnimation();
        this.interval = setInterval(this.startAnimation.bind(this), 1000);
    }

    stop() {
        clearInterval(this.interval);
        this.endAnimation();
        setTimeout(() => {
            this.loaderContainer.style.animation = "hide 0.2s linear forwards";
            setTimeout(() => {
                this.loaderContainer.remove();
            }, 200)
        }, 1000)
    }
}