import MyForm from "http://localhost:3000/js/core/MyForm.js";
import { request } from "http://localhost:3000/js/libs/request/fetch.js";
import { PincodeContainer } from "/js/pages/login/libs/PincodeContainer.js";



const url = (csrf, email, pincode) => `http://localhost:4000/pincode/${csrf}/${email}/${pincode}`

export class PincodeForm extends MyForm {


    constructor(elements, router, csrf, email) {
        super(elements.ref.loginForm, [elements.ref.emailInput, ...elements.ref.pincodesIds]);
        this.csrf = csrf;
        this.router = router;
        this.email = email;
        this.pincodeContainer = new PincodeContainer(elements.ref.pincodeContainer,
            [this.form.elements[elements.ref.pincodesIds[0]],
            this.form.elements[elements.ref.pincodesIds[1]],
            this.form.elements[elements.ref.pincodesIds[2]],
            this.form.elements[elements.ref.pincodesIds[3]],
            this.form.elements[elements.ref.pincodesIds[4]],
            this.form.elements[elements.ref.pincodesIds[5]]],
            elements.animations.show);
        this.onSubmit();
    }

    pincodeContainer;
    pincode;
    router;
    csrf;
    email;

    onSubmit() {
        this.form.addEventListener("submit", async (ev) => {
            let isValid = this.pincodeContainer.validate();
            if (isValid) {
                let pincode = this.pincodeContainer.getValue();
                let response = await request(urls.pincode(this.csrf.get(), this.email, pincode));
                console.log(response);
                if (response) {
                    if (response.result) {
                        window.location.replace("/home");
                    } else {
                        this.pincodeContainer.showError();
                    }
                    this.csrf.update(response.csrf);
                }
            }
        })
    }

    hide() {
        this.form.classList.add("invisible");
    }

    show() {
        this.form.classList.remove("invisible");
    }

}