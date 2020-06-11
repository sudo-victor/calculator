const INITIAL_STATE = {
    display: "OFF",
    currentValue: "",
    operator: "",
    calculated: false,
    on: false,
};
const operations = {
    "+": addition,
    "-": subtration,
    "*": multiplication,
    "/": division,
};
let newState;

function addition(value1, value2) {
    return value1 + value2;
}

function subtration(value1, value2) {
    return value1 - value2;
}

function multiplication(value1, value2) {
    return value1 * value2;
}

function division(value1, value2) {
    return value1 / value2;
}

function calculate(operator, value1, value2) {
    return operations[operator](Number(value1), Number(value2));
}

function validateDisplay(value) {
    if (value.length > 8) {
        alert("ultrapassou");
        const arrayValue = value.split("");
        const filteredValue = arrayValue.filter((value, index) => index < 8);
        const newValue = filteredValue.join("");
        return String(newValue);
    }
    return String(value);
}

function changeSign(value) {
    const newValue = Number(value) * -1;
    return newValue;
}

export default function calculator(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "CALCULATE":
            if (state.on) {
                newState = { ...state };

                // If there is no have operator return newState
                if (state.operator === "") {
                    return newState;
                }

                if (state.operator === "=") {
                    newState.operator = action.payload.operator;
                    return newState;
                }

                if (state.display === "") {
                    newState.display = state.currentValue;
                } else {
                    const { display, currentValue, operator } = newState;
                    const response = calculate(operator, currentValue, display);

                    newState.display = validateDisplay(response);
                }

                if (action.payload.operator) {
                    newState.calculated = true;
                    newState.operator = action.payload.operator;
                }
                return newState;
            }

            return { ...state };

        case "ADD_NUMBER":
            if (state.on) {
                newState = { ...state };
                if (newState.calculated) {
                    newState.currentValue = newState.display;
                    newState.calculated = false;
                    newState.display = "";
                }
                newState.display = validateDisplay(
                    newState.display + action.payload
                );
                return newState;
            }

            return { ...state };

        case "DATA_STORAGE":
            if (state.on) {
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
            }

            return { ...state };

        case "CLEAR_ALL":
            if (state.on) {
                newState = { ...state };
                newState.display = "";
                newState.currentValue = "";
                newState.operator = "";
                newState.calculated = false;
                return newState;
            }

            return { ...state };

        case "CLEAR":
            if (state.on) {
                let arrayDisplay = state.display.split("");
                arrayDisplay.pop();
                newState = { ...state };
                newState.display = arrayDisplay.join("");
                return newState;
            }

            return { ...state };

        case "CHANGE_SIGN":
            if (state.on) {
                newState = { ...state };
                newState.display = changeSign(newState.display);
                return newState;
            }
            return { ...state };

        case "ON_OFF":
            newState = { ...state };
            newState.on = newState.on ? false : true;
            newState.display = newState.on ? "" : "OFF";
            return newState;

        default:
            return { ...state };
    }
}
