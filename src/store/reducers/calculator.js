const INITIAL_STATE = {
    display: "",
    currentValue: "",
    operator: "",
};
let newState;

export default function calculator(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "CALCULATE":
            newState = { ...state };
            if (state.display === "") {
                newState.display = state.currentValue;
            } else {
                const { display, currentValue, operator } = newState;
                if (operator === "+") {
                    const addition = String(
                        Number(currentValue) + Number(display)
                    );
                    newState.display = addition;
                } else if (operator === "-") {
                    const subtration = String(
                        Number(currentValue) - Number(display)
                    );
                    newState.display = subtration;
                } else if (operator === "*") {
                    const multiplication = String(
                        Number(currentValue) * Number(display)
                    );
                    newState.display = multiplication;
                } else if (operator === "/") {
                    const divison = String(
                        Number(currentValue) / Number(display)
                    );
                    newState.display = divison;
                }
            }
            return newState;

        case "ADD_NUMBER":
            newState = { ...state };
            newState.display += action.payload;
            return newState;

        case "DATA_STORAGE":
            newState = { ...state };
            newState.currentValue = state.display;
            newState.operator = action.payload;
            if (newState.operator === "=") {
                newState.currentValue = state.display;
            }
            if (newState.display === "") {
                newState.operator = "";
            }
            newState.display = "";
            return newState;

        case "CLEAR_ALL":
            newState = { ...state };
            newState.display = "";
            newState.currentValue = "";
            newState.operator = "";
            return newState;

        case "CLEAR":
            let arrayDisplay = state.display.split("");
            arrayDisplay.pop();
            newState = { ...state };
            newState.display = arrayDisplay.join("");

            return newState;

        default:
            return state;
    }
}
