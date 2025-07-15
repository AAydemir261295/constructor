class DragResize {
    constructor(ele) {
        this.ele = ele;
        this.corners = Array.from(this.ele.children);
        this.parent = document.querySelector(".borders");
        this.dragElement();
        this.resizeElement();
    }

    parent;
    ele;
    corners;

    pos1 = 0;
    pos2 = 0;
    pos3 = 0;
    pos4 = 0;

    boundedElementDrag = this.elementDrag.bind(this);
    boundedDragMouseDown = this.dragMouseDown.bind(this);
    boundedCloseDragElement = this.closeDragElement.bind(this);


    resizeElement() {

        const element = this.ele;
        const resizers = this.corners;

        const minimum_size = 50;
        let originalWidth = 0;
        let originalHeight = 0;
        let originalMouseX = 0;
        let originalMouseY = 0;


        let boundedResize = null;
        let boundedStopResize = null;

        let mouseClickOnCornerBoundedWidthX = 0;
        let mouseClickOnCornerBoundedWidthY = 0;

        let that = this;

        let minLeft = 0;
        let minTop = 0;

        for (let i = 0; i < resizers.length; i++) {
            const currentResizer = resizers[i];

            currentResizer.addEventListener('mousedown', function (e) {
                e.preventDefault()
                originalWidth = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
                originalHeight = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));

                originalMouseX = e.pageX;
                originalMouseY = e.pageY;


                minLeft = that.ele.offsetLeft + that.ele.offsetWidth - minimum_size;
                minTop = that.ele.offsetTop + that.ele.offsetHeight - minimum_size;


                mouseClickOnCornerBoundedWidthX = e.offsetX;
                mouseClickOnCornerBoundedWidthY = e.offsetY;

                boundedResize = resize.bind(that);
                boundedStopResize = stopResize.bind(that);

                document.addEventListener('mousemove', boundedResize)
                document.addEventListener('mouseup', boundedStopResize)
            })

            function resize(e) {
                if (currentResizer.classList.contains('right-bottom')) {
                    const maxWidth = this.parent.offsetWidth - this.ele.offsetLeft;
                    const maxHeight = this.parent.offsetHeight - this.ele.offsetTop;

                    element.style.width = `${Math.max(Math.min(originalWidth + (e.pageX - originalMouseX), maxWidth), minimum_size)}px`
                    element.style.height = `${Math.max(Math.min(originalHeight + (e.pageY - originalMouseY), maxHeight), minimum_size)}px`

                } else if (currentResizer.classList.contains('left-bottom')) {
                    const maxWidth = this.ele.offsetLeft + this.ele.offsetWidth;
                    const maxHeight = this.parent.offsetHeight - this.ele.offsetTop;

                    element.style.width = `${Math.max(Math.min(originalWidth - (e.pageX - originalMouseX), maxWidth), minimum_size)}px`;
                    element.style.height = `${Math.max(Math.min(originalHeight + (e.pageY - originalMouseY), maxHeight), minimum_size)}px`;
                    element.style.left = `${Math.min(Math.max(e.clientX - this.parent.offsetLeft - mouseClickOnCornerBoundedWidthX - 1, 0), minLeft)}px`;
                }
                else if (currentResizer.classList.contains('right-top')) {
                    const maxWidth = this.parent.offsetWidth - this.ele.offsetLeft;
                    const maxHeight = this.ele.offsetHeight + this.ele.offsetTop;

                    element.style.width = `${Math.max(Math.min(originalWidth + (e.pageX - originalMouseX), maxWidth), minimum_size)}px`;
                    element.style.height = `${Math.max(Math.min(originalHeight - (e.pageY - originalMouseY), maxHeight), minimum_size)}px`;
                    element.style.top = `${Math.min(Math.max(e.clientY - this.parent.offsetTop - mouseClickOnCornerBoundedWidthY - 1, 0), minTop)}px`
                }
                else if (currentResizer.classList.contains("left-top")) {
                    const maxWidth = this.ele.offsetLeft + this.ele.offsetWidth;
                    const maxHeight = this.ele.offsetHeight + this.ele.offsetTop;

                    element.style.width = `${Math.max(Math.min(originalWidth - (e.pageX - originalMouseX), maxWidth), minimum_size)}px`
                    element.style.left = `${Math.min(Math.max(e.clientX - this.parent.offsetLeft - mouseClickOnCornerBoundedWidthX - 1, 0), minLeft)}px`;
                    element.style.height = `${Math.max(Math.min(originalHeight - (e.pageY - originalMouseY), maxHeight), minimum_size)}px`
                    element.style.top = `${Math.min(Math.max(e.clientY - this.parent.offsetTop - mouseClickOnCornerBoundedWidthY - 1, 0), minTop)}px`
                } else if (currentResizer.classList.contains("left")) {
                    const maxWidth = this.ele.offsetLeft + this.ele.offsetWidth;
                    element.style.width = `${Math.max(Math.min(originalWidth - (e.pageX - originalMouseX), maxWidth), minimum_size)}px`
                    element.style.left = `${Math.min(Math.max(e.clientX - this.parent.offsetLeft - mouseClickOnCornerBoundedWidthX - 1, 0), minLeft)}px`;
                }
                else if (currentResizer.classList.contains("top")) {
                    const maxHeight = this.ele.offsetHeight + this.ele.offsetTop;

                    element.style.height = `${Math.max(Math.min(originalHeight - (e.pageY - originalMouseY), maxHeight), minimum_size)}px`
                    element.style.top = `${Math.min(Math.max(e.clientY - this.parent.offsetTop - mouseClickOnCornerBoundedWidthY - 1, 0), minTop)}px`
                }
                else if (currentResizer.classList.contains("right")) {
                    const maxWidth = this.parent.offsetWidth - this.ele.offsetLeft;

                    element.style.width = `${Math.max(Math.min(originalWidth + (e.pageX - originalMouseX), maxWidth), minimum_size)}px`
                }
                else if (currentResizer.classList.contains("bottom")) {
                    const maxHeight = this.parent.offsetHeight - this.ele.offsetTop;

                    element.style.height = `${Math.max(Math.min(originalHeight + (e.pageY - originalMouseY), maxHeight), minimum_size)}px`;
                }
            }

            function stopResize() {
                document.removeEventListener('mousemove', boundedResize)
            }

        }
    }


    dragElement() {
        this.ele.onmousedown = this.boundedDragMouseDown;
    }

    elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        this.pos1 = this.pos3 - e.clientX;
        this.pos2 = this.pos4 - e.clientY;
        this.pos3 = e.clientX;
        this.pos4 = e.clientY;

        this.ele.style.top = Math.max(Math.min((this.ele.offsetTop - this.pos2), this.parent.offsetHeight - this.ele.offsetHeight), 0) + "px";
        this.ele.style.left = Math.max(Math.min((this.ele.offsetLeft - this.pos1), this.parent.offsetWidth - this.ele.offsetWidth), 0) + "px";
    }

    dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        if (this.corners.indexOf(e.target) == -1) {
            this.pos3 = e.clientX;
            this.pos4 = e.clientY;

            document.addEventListener("mouseup", this.boundedCloseDragElement);
            document.addEventListener("mousemove", this.boundedElementDrag);
        }
    }


    closeDragElement() {
        document.removeEventListener("mouseup", this.boundedCloseDragElement);
        document.removeEventListener("mousemove", this.boundedElementDrag);
    }
}

export default DragResize