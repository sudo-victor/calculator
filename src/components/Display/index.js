import React from "react";
import { useSelector } from "react-redux";

import { Container, Input } from "./styles";

export default function Display() {
    const calculator = useSelector((state) => state.calculatorReducer);
    const display = calculator.display;
    return (
        <Container>
            <Input disabled value={display} on={calculator.on} />
        </Container>
    );
}
