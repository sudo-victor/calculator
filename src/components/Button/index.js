import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "./styles";

export default function Button({ value, type }) {
    const dispatch = useDispatch();
    const calculator = useSelector((state) => state.calculatorReducer);
    const possibleClicks = {
        operator: handleOperation,
        number: handleAddNumber,
        action: handleActions,
    };
    const actions = {
        AC: handleClearAll,
        C: handleClear,
        "On/Off": handlePower,
        "+/-": handleChangeSign,
    };

    function handleOperation() {
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

    function handleAddNumber() {
        dispatch({ type: "ADD_NUMBER", payload: value });
    }

    function handlePower() {
        dispatch({ type: "ON_OFF", payload: {} });
    }

    function handleClearAll() {
        dispatch({ type: "CLEAR_ALL", payload: {} });
    }

    function handleClear() {
        dispatch({ type: "CLEAR", payload: {} });
    }

    function handleChangeSign() {
        dispatch({ type: "CHANGE_SIGN", payload: {} });
    }

    function handleActions() {
        actions[value]();
    }

    function handleClick() {
        possibleClicks[type]();
    }

    return <Container onClick={handleClick}>{value}</Container>;
}
