import EventEmitter from "http://localhost:3000/js/libs/eventEmitter/EventEmitter.js";

class Components extends EventEmitter {

    constructor() {
        super();
        this.components = [];
    }

    components;

    add(component) {
        component.ele.addEventListener("click", () => {
            this.emit("selected", component);
        })

        this.emit("add", component);
        this.components.push(component);
    }

    remove(id) {
        // this.emit("remove");
        let comp = this.components.find(c => c.id == id);
        let idx = this.components.indexOf(comp);
        comp.ele.remove();

        this.components.splice(idx, 1);
    }
}

export default Components;