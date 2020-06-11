import React from "react";
import { useDispatch } from "react-redux";

import { Container } from "./styles";

export default function Button({ value, type }) {
    const dispatch = useDispatch();
    const possibleClicks = {
        operator: handlerOperation,
        number: handlerAddNumber,
        action: handleActions,
    };

    function handlerOperation() {
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

    function handlePress() {
        possibleClicks[type]();
    }

    return <Container onClick={handlePress}>{value}</Container>;
}
