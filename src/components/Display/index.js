import React from "react";
import { useSelector } from "react-redux";

import { Container, Input } from "./styles";

export default function Display() {
    const calculator = useSelector((state) => state.calculatorReducer);
    //let display = `${calculator.calculated} | ${calculator.operator} | ${calculator.currentValue} | ${calculator.display}`;
    const display = calculator.display;
    return (
        <Container>
            <Input disabled value={display} />
        </Container>
    );
}
