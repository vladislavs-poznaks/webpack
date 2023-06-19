const alertService = new AlertService();
const componentService = new ComponentService();

const run = (alertService, componentService) => {
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

run(alertService, componentService);