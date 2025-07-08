import MyForm from "http://localhost:3000/js/core/MyForm.js";
import { request } from "http://localhost:3000/js/libs/request/fetch.js";
import { PincodeContainer } from "/js/pages/login/libs/PincodeContainer.js";



const url = (csrf, email, pincode) => `http://localhost:4000/pincode/${csrf}/${email}/${pincode}`

export class PincodeForm extends MyForm {


    constructor(form, elementsRef, router, csrf) {
        super(form, [elementsRef.emailInput, ...elementsRef.pincodesIds]);
        this.csrf = csrf;
        this.router = router;
        this.pincodeContainer = new PincodeContainer(elementsRef.pincodeContainer,
            [this.form.elements[elementsRef.pincodesIds[0]],
            this.form.elements[elementsRef.pincodesIds[1]],
            this.form.elements[elementsRef.pincodesIds[2]],
            this.form.elements[elementsRef.pincodesIds[3]],
            this.form.elements[elementsRef.pincodesIds[4]],
            this.form.elements[elementsRef.pincodesIds[5]]]);
        this.onSubmit();
    }

    pincodeContainer;
    router;
    csrf;

    onSubmit() {
        this.form.addEventListener("submit", async (ev) => {
            let isValid = this.pincodeContainer.validate();
            if (isValid) {
                let pincode = this.pincodeContainer.getValue();
                let email = history.state.email;
                console.log(this.csrf.get(), email, pincode);
                let response = await request(url(this.csrf.get(), email, pincode));

                if (response) {
                    if (response.result) {
                        // window.location.replace("/home");
                    } else {
                        this.pincodeContainer.showError();
                    }
                    this.csrf.update(response.csrf);
                }
            }
        })
    }
}