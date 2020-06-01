import React from "react";

import { Container } from "./styles";
import Display from "../Display";
import Keyboard from "../Keyboard";

export default function Calculator() {
    return (
        <Container>
            <Display />
            <Keyboard />
        </Container>
    );
}
