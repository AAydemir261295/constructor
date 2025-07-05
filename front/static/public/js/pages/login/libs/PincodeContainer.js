export class PincodeContainer {

  pincodeContainer;
  inputs;
  animation;


  regex1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  onBackspace = false;
  allIsFilled = false;
  result = [];


  constructor(id, pincodeInputs, animation) {
    this.pincodeContainer = document.querySelector(id);
    this.inputs = pincodeInputs;
    this.animation = animation;
    this.onInput();
  }

  getValue() {
    return this.result.join("");
  }

  showError() {
    for (const ele of this.inputs) {
      ele.classList.add("input--error");
    }
  }

  hideError() {
    for (const ele of this.inputs) {
      ele.classList.remove("input--error");
    }
  }

  validate() {
    let isValid = this.result.length == 6;
    if (isValid) {
      return true;
    } else {
      this.showError();
      return false;
    }
  }

  setPincode(value) {
    var that = this;
    let length = Math.min(6, value.length);
    for (let q = 0; q < length; q++) {
      if (that.regex1.indexOf(value[q]) != -1) {
        const input = that.inputs[q];
        input.value = value[q];
        that.writeValue(value[q]);
        that.inputs[Math.min(5, q + 1)].focus();
      }
    }
    if (length == 6) {
      this.allIsFilled = true;
    }
  }


  writeValue(val) {
    this.result.push(val);
  }

  removeValue(idx) {
    this.result.splice(idx, 1);
  }

  isNumber(numb) {
    return this.regex1.indexOf(numb) != -1;
  }

  resetInputs() {
    for (let q = 0; q < this.inputs.length; q++) {
      const input = this.inputs[q];
      input.value = "";
    }
  }

  inputRules(input, idx) {
    var that = this;
    input.addEventListener("keypress", function (ev) {
      ev.preventDefault();
      if (that.isNumber(ev.key) && !that.allIsFilled) {
        that.hideError();

        // ev.target.value = ev.key;
        ev.target.value = ev.key;
        that.writeValue(ev.key);
        that.inputs[Math.min(5, idx + 1)].focus();
        if (idx == 5) {
          that.allIsFilled = true;
        }
      }
    });

    input.addEventListener("keydown", function (ev) {
      if (ev.keyCode == 8 || (ev.keyCode == 46 && !that.allIsFilled)) {
        that.hideError();

        that.onBackspace = true;
        ev.target.value = "";
        that.removeValue(idx);
        setTimeout(() => {
          that.inputs[Math.max(0, idx - 1)].focus();
        }, 1);
        that.allIsFilled = false;
      }
    });

    input.addEventListener("paste", function (ev) {

      ev.preventDefault();
      that.hideError();

      let pasted = ev.clipboardData.getData("text");
      let splitted = pasted.split("");
      that.resetInputs();
      that.setPincode(splitted);
    });

    input.addEventListener("cut", function (ev) {
      setTimeout(() => {
        if (ev.target.value == "") {
          that.removeValue(idx);
          that.inputs[Math.max(0, idx - 1)].focus();
        }
      }, 1);
      that.allIsFilled = false;
    });
  }

  focusRules(input, idx) {
    var that = this;
    input.addEventListener("focusin", function (ev) {
      if (that.onBackspace) {
        that.onBackspace = false;
      } else {
        if (that.allIsFilled) {
          that.inputs[5].focus();
        } else if (idx == 0 && that.inputs[idx + 1].value == "") {
        } else if (idx == 5 && that.inputs[idx - 1].value != "") {
        } else {
          for (let q = 0; q < that.inputs.length; q++) {
            const tmp = that.inputs[q];
            if (tmp.value == "") {
              tmp.focus();
              break;
            }
          }
        }
      }
    });
  }

  onInput() {
    for (let q = 0; q < this.inputs.length; q++) {
      const input = this.inputs[q];
      this.inputRules(input, q);
      this.focusRules(input, q);
    }
  }

  show() {
    this.pincodeContainer.classList.remove("hidden");
    this.pincodeContainer.style.animation = this.animation;
  }

}