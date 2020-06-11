import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "./styles";

export default function Button({ value, type }) {
    const dispatch = useDispatch();
    const calculator = useSelector((state) => state.calculatorReducer);
    const possibleClicks = {
        operator: handlerOperation,
        number: handlerAddNumber,
        action: handleActions,
    };

    function handlerOperation() {
        const { operator, display, currentValue } = calculator;

        if (operator && display && currentValue) {
            dispatch({ type: "CALCULATE", payload: { operator: value } });
            return;
        }

        if (value === "=") {
            dispatch({ type: "CALCULATE", payload: {} });
            return;
        }
        dispatch({ type: "DATA_STORAGE", payload: value });
    }

    function handlerAddNumber() {
        dispatch({ type: "ADD_NUMBER", payload: value });
    }

    function handleActions() {
        if (value === "AC") {
            handleClearAll();
        } else if (value === "C") {
            handlerClear();
        }
    }

    function handleClearAll() {
        dispatch({ type: "CLEAR_ALL", payload: {} });
    }

    function handlerClear() {
        dispatch({ type: "CLEAR", payload: {} });
    }

    function handleClick() {
        possibleClicks[type]();
    }

    return <Container onClick={handleClick}>{value}</Container>;
}
