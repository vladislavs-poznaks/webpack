import {parseInputs} from "./utils/parse-inputs";
import {inputsAreValid} from "./utils/inputs-valid";

export const run = (alertService, componentService) => {
    alertService.hideErrors();

    componentService.onClick(() => {
        alertService.hideErrors();

        const inputs = componentService.getInputs();
        const parsedInputs = parseInputs(...inputs);

        if (inputsAreValid(...parsedInputs)) {
            const [a, b] = parsedInputs;

            componentService.setResult(a + b);
        } else {
            alertService.handleAdditionError(inputs, parsedInputs);

            componentService.setResult("");
        }
    });
};