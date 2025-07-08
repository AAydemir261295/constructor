export class SuccessMessage {
    constructor(container, elementsRef, router, csrf) {
        this.container = container;
        this.router = router;
        this.csrf = csrf;
        this.btn = container.querySelector(elementsRef.btn);
        this.toLoginForm();
    }

    container;
    router;
    csrf;
    btn;

    toLoginForm() {
        this.btn.addEventListener("click", () => {
            let email = history.state.email;
            this.router.redirect({ nested: true, path: "/login", anchorType: "login", anchorName: "loginForm", csrf: this.csrf.get(), email: email });
        })
    }
}