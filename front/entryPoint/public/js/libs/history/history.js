export class History {

    history;

    constructor(data) {
        this.history = history;
        this.test();
    }

    pushState(data, title, url) {
        this.history.pushState(data, "", url);
        document.title = title;
    }

    back(url) {

    }



    test() {
        window.addEventListener('popstate', (event) => {
            console.log('Popstate event triggered. Current state:', event.state);
        });
    }

}