import EventEmitter from "http://localhost:3000/js/libs/eventEmitter/EventEmitter.js"

class DragResize extends EventEmitter {

    constructor(ele, parent) {
        super();
        this.ele = ele;
        this.parent = parent;

        this.resizeEle = this.ele.children[0];

        this.minimumWidth = +this.resizeEle.offsetWidth;
        this.minimumHeight = +this.resizeEle.offsetHeight;

        this.currWidth = this.ele.offsetWidth;
        this.currHeight = this.ele.offsetHeight;

        this.refreshMaxSizes();

        // this.maxWidth = this.parent.offsetWidth - this.ele.offsetLeft - 10;
        // this.maxHeight = this.parent.offsetHeight - this.ele.offsetTop - 10;

        if (this.ele.children.length > 8) {
            this.resizers = Array.from(this.ele.children).splice(1, this.ele.children.length);
        } else {
            this.resizers = Array.from(this.ele.children);
        }

        this.dragElement();
        this.resizeElement();
    }

    parent;
    ele;
    eleParent;
    resizeEle;
    resizers;

    minimumWidth;
    minimumHeight;

    currWidth;
    currHeight;

    maxWidth;
    maxHeight;

    pos1 = 0;
    pos2 = 0;
    pos3 = 0;
    pos4 = 0;

    boundedElementDrag = this.elementDrag.bind(this);
    boundedDragMouseDown = this.dragMouseDown.bind(this);
    boundedCloseDragElement = this.closeDragElement.bind(this);



    originalWidth;
    originalHeight;
    originalMouseX;
    originalMouseY;
    minLeft;
    minTop;
    mouseClickOnCornerBoundedWidthX;
    mouseClickOnCornerBoundedWidthY;

    boundedStopResize = this.stopResize.bind(this);

    boundedLeftResize = this.resizeLeft.bind(this);
    boundedLeftTopResize = this.resizeLeftTop.bind(this);
    boundedTopResize = this.resizeTop.bind(this);
    boundedRightTopResize = this.resizeRightTop.bind(this);
    boundedRightResize = this.resizeRight.bind(this);
    boundedRightBottomResize = this.resizeRightBottom.bind(this);
    boundedBottomResize = this.resizeBottom.bind(this);
    boundedLeftBottomResize = this.resizeLeftBottom.bind(this);


    mouseUpController = new AbortController();
    mouseUpSignal = this.mouseUpController.signal;

    mouseMoveController = new AbortController();
    mouseMoveSignal = this.mouseMoveController.signal;


    refreshMaxSizes() {
        this.maxWidth = this.parent.offsetWidth - this.ele.offsetLeft - 10;
        this.maxHeight = this.parent.offsetHeight - this.ele.offsetTop - 10;
    }

    resizeLeft(e) {
        this.maxWidth = this.ele.offsetLeft + this.ele.offsetWidth - 10;
        this.currWidth = Math.max(Math.min(this.originalWidth - (e.pageX - this.originalMouseX), this.maxWidth), this.minimumWidth)
        this.ele.style.width = `${this.currWidth}px`
    }

    resizeLeftTop(e) {
        this.maxWidth = this.ele.offsetLeft + this.ele.offsetWidth - 10;
        this.maxHeight = this.ele.offsetHeight + this.ele.offsetTop - 10;

        this.currWidth = Math.max(Math.min(this.originalWidth - (e.pageX - this.originalMouseX), this.maxWidth), this.minimumWidth)
        this.currHeight = Math.max(Math.min(this.originalHeight - (e.pageY - this.originalMouseY), this.maxHeight), this.minimumHeight)

        this.ele.style.width = `${this.currWidth}px`
        this.ele.style.height = `${this.currHeight}px`
    }

    resizeTop(e) {
        this.maxHeight = this.ele.offsetHeight + this.ele.offsetTop - 10;
        this.currHeight = Math.max(Math.min(this.originalHeight - (e.pageY - this.originalMouseY), this.maxHeight), this.minimumHeight)
        this.ele.style.height = `${this.currHeight}px`
    }

    resizeRightTop(e) {
        this.maxWidth = this.parent.offsetWidth - this.ele.offsetLeft - 10;
        this.maxHeight = this.ele.offsetHeight + this.ele.offsetTop - 10;

        this.currWidth = Math.max(Math.min(this.originalWidth + (e.pageX - this.originalMouseX), this.maxWidth), this.minimumWidth)
        this.currHeight = Math.max(Math.min(this.originalHeight - (e.pageY - this.originalMouseY), this.maxHeight), this.minimumHeight)

        this.ele.style.width = `${this.currWidth}px`;
        this.ele.style.height = `${this.currHeight}px`;
    }


    resizeRight(e) {
        this.maxWidth = this.parent.offsetWidth - this.ele.offsetLeft - 10;
        this.currWidth = Math.max(Math.min(this.originalWidth + (e.pageX - this.originalMouseX), this.maxWidth), this.minimumWidth)
        this.ele.style.width = `${this.currWidth}px`
    }

    resizeRightBottom(e) {
        this.maxWidth = this.parent.offsetWidth - this.ele.offsetLeft - 10;
        this.maxHeight = this.parent.offsetHeight - this.ele.offsetTop - 10;

        this.currWidth = Math.max(Math.min(this.originalWidth + (e.pageX - this.originalMouseX), this.maxWidth), this.minimumWidth)
        this.currHeight = Math.max(Math.min(this.originalHeight + (e.pageY - this.originalMouseY), this.maxHeight), this.minimumHeight)

        this.ele.style.width = `${this.currWidth}px`
        this.ele.style.height = `${this.currHeight}px`
    }

    resizeBottom(e) {
        this.maxHeight = this.parent.offsetHeight - this.ele.offsetTop - 10;
        this.currHeight = Math.max(Math.min(this.originalHeight + (e.pageY - this.originalMouseY), this.maxHeight), this.minimumHeight)
        this.ele.style.height = `${this.currHeight}px`;
    }

    resizeLeftBottom(e) {
        this.maxWidth = this.ele.offsetLeft + this.ele.offsetWidth - 10;
        this.maxHeight = this.parent.offsetHeight - this.ele.offsetTop - 10;

        this.currWidth = Math.max(Math.min(this.originalWidth - (e.pageX - this.originalMouseX), this.maxWidth), this.minimumWidth)
        this.currHeight = Math.max(Math.min(this.originalHeight + (e.pageY - this.originalMouseY), this.maxHeight), this.minimumHeight)

        this.ele.style.width = `${this.currWidth}px`;
        this.ele.style.height = `${this.currHeight}px`;
    }




    stopResize(editTypes) {
        console.log(editTypes);
        editTypes.forEach((type) => {
            console.log(this.currHeight);
            if (type == "width") {
                this.emit("resized", { propType: type, propValue: this.currWidth })
            } else if (type == "height") {
                this.emit("resized", { propType: type, propValue: this.currHeight });
            }
        })
        this.removeListeners();
    }





    removeListeners() {
        this.mouseMoveController.abort();
        this.mouseMoveController = new AbortController();
        this.mouseMoveSignal = this.mouseMoveController.signal;

        this.mouseUpController.abort();
        this.mouseUpController = new AbortController();
        this.mouseUpSignal = this.mouseUpController.signal;
    }


    getMouseMoveSignal() {
        return this.mouseMoveSignal;
    }

    getMouseUpSignal() {
        return this.mouseUpSignal;
    }

    resizeElement() {
        // left
        this.resizers[0].addEventListener('mousedown', (e) => {
            e.preventDefault();

            this.originalWidth = parseFloat(getComputedStyle(this.resizeEle, null).getPropertyValue('width').replace('px', ''));
            this.originalHeight = parseFloat(getComputedStyle(this.resizeEle, null).getPropertyValue('height').replace('px', ''));

            this.originalMouseX = e.pageX;
            this.originalMouseY = e.pageY;

            this.minLeft = this.ele.offsetLeft + this.ele.offsetWidth - this.minimumWidth;
            this.minTop = this.ele.offsetTop + this.ele.offsetHeight - this.minimumHeight;

            this.mouseClickOnCornerBoundedWidthX = e.offsetX;
            this.mouseClickOnCornerBoundedWidthY = e.offsetY;


            let parentWidth = this.parent.offsetWidth;
            let eleLeft = this.ele.offsetLeft;

            this.ele.style.removeProperty("left");

            this.ele.style.right = `${parentWidth - eleLeft - this.ele.offsetWidth - 4}px`;

            document.addEventListener('mousemove', this.resizeLeft.bind(this), { signal: this.getMouseMoveSignal() })
            document.addEventListener('mouseup', (ev) => this.stopResize(["width"]), { signal: this.getMouseUpSignal() })
        })

        // leftTop
        this.resizers[1].addEventListener('mousedown', (e) => {
            e.preventDefault();

            this.originalWidth = parseFloat(getComputedStyle(this.resizeEle, null).getPropertyValue('width').replace('px', ''));
            this.originalHeight = parseFloat(getComputedStyle(this.resizeEle, null).getPropertyValue('height').replace('px', ''));

            this.originalMouseX = e.pageX;
            this.originalMouseY = e.pageY;

            this.minLeft = this.ele.offsetLeft + this.ele.offsetWidth - this.minimumWidth;
            this.minTop = this.ele.offsetTop + this.ele.offsetHeight - this.minimumHeight;

            this.mouseClickOnCornerBoundedWidthX = e.offsetX;
            this.mouseClickOnCornerBoundedWidthY = e.offsetY;


            let parentHeight = this.parent.offsetHeight;
            let eleTop = this.ele.offsetTop;

            let parentWidth = this.parent.offsetWidth;
            let eleLeft = this.ele.offsetLeft;

            this.ele.style.removeProperty("top");
            this.ele.style.removeProperty("left");


            this.ele.style.bottom = `${parentHeight - eleTop - this.ele.offsetHeight - 4}px`;
            this.ele.style.right = `${parentWidth - eleLeft - this.ele.offsetWidth - 4}px`;

            document.addEventListener('mousemove', this.resizeLeftTop.bind(this), { signal: this.getMouseMoveSignal() })
            document.addEventListener('mouseup', (ev) => this.stopResize(["width", "height"]), { signal: this.getMouseUpSignal() })
        })

        // top
        this.resizers[2].addEventListener('mousedown', (e) => {
            e.preventDefault();

            this.originalWidth = parseFloat(getComputedStyle(this.resizeEle, null).getPropertyValue('width').replace('px', ''));
            this.originalHeight = parseFloat(getComputedStyle(this.resizeEle, null).getPropertyValue('height').replace('px', ''));

            this.originalMouseX = e.pageX;
            this.originalMouseY = e.pageY;

            this.minLeft = this.ele.offsetLeft + this.ele.offsetWidth - this.minimumWidth;
            this.minTop = this.ele.offsetTop + this.ele.offsetHeight - this.minimumHeight;

            this.mouseClickOnCornerBoundedWidthX = e.offsetX;
            this.mouseClickOnCornerBoundedWidthY = e.offsetY;

            let parentHeight = this.parent.offsetHeight;
            let eleTop = this.ele.offsetTop;

            this.ele.style.removeProperty("top");

            this.ele.style.bottom = `${parentHeight - eleTop - this.ele.offsetHeight - 4}px`;

            document.addEventListener('mousemove', this.resizeTop.bind(this), { signal: this.getMouseMoveSignal() })
            document.addEventListener('mouseup', (ev) => this.stopResize(["height"]), { signal: this.getMouseUpSignal() })
        })

        // rightTop
        this.resizers[3].addEventListener('mousedown', (e) => {
            e.preventDefault();

            this.originalWidth = parseFloat(getComputedStyle(this.resizeEle, null).getPropertyValue('width').replace('px', ''));
            this.originalHeight = parseFloat(getComputedStyle(this.resizeEle, null).getPropertyValue('height').replace('px', ''));

            this.originalMouseX = e.pageX;
            this.originalMouseY = e.pageY;

            this.minLeft = this.ele.offsetLeft + this.ele.offsetWidth - this.minimumWidth;
            this.minTop = this.ele.offsetTop + this.ele.offsetHeight - this.minimumHeight;

            this.mouseClickOnCornerBoundedWidthX = e.offsetX;
            this.mouseClickOnCornerBoundedWidthY = e.offsetY;

            let parentHeight = this.parent.offsetHeight;
            let eleTop = this.ele.offsetTop;

            let eleLeft = this.ele.offsetLeft;

            this.ele.style.removeProperty("top");
            this.ele.style.removeProperty("right");


            this.ele.style.bottom = `${parentHeight - eleTop - this.ele.offsetHeight - 4}px`;
            this.ele.style.left = `${eleLeft}px`


            document.addEventListener('mousemove', this.resizeRightTop.bind(this), { signal: this.getMouseMoveSignal() })
            document.addEventListener('mouseup', (ev) => this.stopResize(["width", "height"]), { signal: this.getMouseUpSignal() })
        })

        // right
        this.resizers[4].addEventListener('mousedown', (e) => {
            e.preventDefault();

            this.originalWidth = parseFloat(getComputedStyle(this.resizeEle, null).getPropertyValue('width').replace('px', ''));
            this.originalHeight = parseFloat(getComputedStyle(this.resizeEle, null).getPropertyValue('height').replace('px', ''));

            this.originalMouseX = e.pageX;
            this.originalMouseY = e.pageY;

            this.minLeft = this.ele.offsetLeft + this.ele.offsetWidth - this.minimumWidth;
            this.minTop = this.ele.offsetTop + this.ele.offsetHeight - this.minimumHeight;

            this.mouseClickOnCornerBoundedWidthX = e.offsetX;
            this.mouseClickOnCornerBoundedWidthY = e.offsetY;


            let eleLeft = this.ele.offsetLeft;

            this.ele.style.removeProperty("right");
            this.ele.style.left = `${eleLeft}px`


            document.addEventListener('mousemove', this.resizeRight.bind(this), { signal: this.getMouseMoveSignal() })
            document.addEventListener('mouseup', (ev) => this.stopResize(["width"]), { signal: this.getMouseUpSignal() })
        })

        // rightBottom
        this.resizers[5].addEventListener('mousedown', (e) => {
            e.preventDefault();

            this.originalWidth = parseFloat(getComputedStyle(this.resizeEle, null).getPropertyValue('width').replace('px', ''));
            this.originalHeight = parseFloat(getComputedStyle(this.resizeEle, null).getPropertyValue('height').replace('px', ''));

            this.originalMouseX = e.pageX;
            this.originalMouseY = e.pageY;

            this.minLeft = this.ele.offsetLeft + this.ele.offsetWidth - this.minimumWidth;
            this.minTop = this.ele.offsetTop + this.ele.offsetHeight - this.minimumHeight;

            this.mouseClickOnCornerBoundedWidthX = e.offsetX;
            this.mouseClickOnCornerBoundedWidthY = e.offsetY;

            let left = this.ele.offsetLeft;
            let top = this.ele.offsetTop;

            this.ele.style.removeProperty("right");
            this.ele.style.removeProperty("bottom");

            this.ele.style.top = `${top}px`;
            this.ele.style.left = `${left}px`;

            document.addEventListener('mousemove', this.resizeRightBottom.bind(this), { signal: this.getMouseMoveSignal() })
            document.addEventListener('mouseup', (ev) => this.stopResize(["width", "height"]), { signal: this.getMouseUpSignal() })
        })

        // bottom
        this.resizers[6].addEventListener('mousedown', (e) => {
            e.preventDefault();

            this.originalWidth = parseFloat(getComputedStyle(this.resizeEle, null).getPropertyValue('width').replace('px', ''));
            this.originalHeight = parseFloat(getComputedStyle(this.resizeEle, null).getPropertyValue('height').replace('px', ''));

            this.originalMouseX = e.pageX;
            this.originalMouseY = e.pageY;

            this.minLeft = this.ele.offsetLeft + this.ele.offsetWidth - this.minimumWidth;
            this.minTop = this.ele.offsetTop + this.ele.offsetHeight - this.minimumHeight;

            this.mouseClickOnCornerBoundedWidthX = e.offsetX;
            this.mouseClickOnCornerBoundedWidthY = e.offsetY;

            let eleTop = this.ele.offsetTop;

            this.ele.style.removeProperty("bottom");

            this.ele.style.top = `${eleTop}px`;

            document.addEventListener('mousemove', this.resizeBottom.bind(this), { signal: this.getMouseMoveSignal() })
            document.addEventListener('mouseup', (ev) => this.stopResize(["height"]), { signal: this.getMouseUpSignal() })
        })

        // leftBottom
        this.resizers[7].addEventListener('mousedown', (e) => {
            e.preventDefault();

            this.originalWidth = parseFloat(getComputedStyle(this.resizeEle, null).getPropertyValue('width').replace('px', ''));
            this.originalHeight = parseFloat(getComputedStyle(this.resizeEle, null).getPropertyValue('height').replace('px', ''));

            this.originalMouseX = e.pageX;
            this.originalMouseY = e.pageY;

            this.minLeft = this.ele.offsetLeft + this.ele.offsetWidth - this.minimumWidth;
            this.minTop = this.ele.offsetTop + this.ele.offsetHeight - this.minimumHeight;

            this.mouseClickOnCornerBoundedWidthX = e.offsetX;
            this.mouseClickOnCornerBoundedWidthY = e.offsetY;

            let eleTop = this.ele.offsetTop;
            let parentWidth = this.parent.offsetWidth;
            let eleLeft = this.ele.offsetLeft;

            this.ele.style.removeProperty("left");
            this.ele.style.removeProperty("bottom");

            this.ele.style.top = `${eleTop}px`;
            this.ele.style.right = `${parentWidth - eleLeft - this.ele.offsetWidth - 4}px`;

            document.addEventListener('mousemove', this.resizeLeftBottom.bind(this), { signal: this.getMouseMoveSignal() })
            document.addEventListener('mouseup', (ev) => this.stopResize(["width", "height"]), { signal: this.getMouseUpSignal() })
        })
    }


    dragElement() {
        this.ele.style.removeProperty("bottom");
        this.ele.style.removeProperty("right");

        // this.ele.onmousedown = this.boundedDragMouseDown;
        this.ele.addEventListener("mousedown", this.boundedDragMouseDown);
    }

    elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        this.pos1 = this.pos3 - e.clientX;
        this.pos2 = this.pos4 - e.clientY;
        this.pos3 = e.clientX;
        this.pos4 = e.clientY;

        const top = Math.max(Math.min((this.ele.offsetTop - this.pos2), this.parent.offsetHeight - this.ele.offsetHeight - 10), 10)
        const left = Math.max(Math.min((this.ele.offsetLeft - this.pos1), this.parent.offsetWidth - this.ele.offsetWidth - 10), 10)

        console.log(top);
        console.log(left);
        this.ele.style.top = `${top}px`;
        this.ele.style.left = `${left}px`;


        this.emit("move", { top: top, left: left, width: this.ele.offsetWidth, height: this.ele.offsetHeight });
    }

    dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();


        if (this.resizers.indexOf(e.target) == -1) {
            this.pos3 = e.clientX;
            this.pos4 = e.clientY;

            document.addEventListener("mouseup", this.boundedCloseDragElement);
            document.addEventListener("mousemove", this.boundedElementDrag);
        }
    }


    closeDragElement() {
        this.refreshMaxSizes();

        document.removeEventListener("mouseup", this.boundedCloseDragElement);
        document.removeEventListener("mousemove", this.boundedElementDrag);
    }
}

export default DragResize