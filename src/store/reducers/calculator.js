const INITIAL_STATE = {
    display: "",
    currentValue: "",
    operator: "",
};
let newState;
const operations = {
    "+": addition,
    "-": subtration,
    "*": multiplication,
    "/": division,
};

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
        console.log(newValue);
        return newValue;
    }
    return value;
}

export default function calculator(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "CALCULATE":
            newState = { ...state };

            // If there is no have operator return newState
            if (state.operator === "") {
                return newState;
            }

            if (state.display === "") {
                newState.display = state.currentValue;
            } else {
                const { display, currentValue, operator } = newState;
                const response = String(
                    calculate(operator, currentValue, display)
                );
                newState.display = validateDisplay(response);
            }
            return newState;

        case "ADD_NUMBER":
            newState = { ...state };
            newState.display = validateDisplay(
                newState.display + action.payload
            );
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
