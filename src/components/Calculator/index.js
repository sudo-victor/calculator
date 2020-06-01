import React from "react";

import {
    Container,
    ContainerInput,
    ContainerKeyboard,
    Input,
    Button,
} from "./styles";

export default function Calculator() {
    return (
        <Container>
            <ContainerInput>
                <Input />
            </ContainerInput>
            <ContainerKeyboard>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>3</Button>
            </ContainerKeyboard>
        </Container>
    );
}
