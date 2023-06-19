class ComponentService {
    constructor() {
        this.numberOneInput = document.getElementById("numberOne");
        this.numberTwoInput = document.getElementById("numberTwo");
        this.addValuesButton = document.getElementById("addValues");
        this.resultDiv = document.getElementById("result");
    }

    getInputs = () => {
        return [this.numberOneInput.value, this.numberTwoInput.value];
    }

    setResult = (result) => {
        this.resultDiv.innerText = result;
    }

    onClick = (handler) => {
        this.addValuesButton.addEventListener("click", handler);
    }
}