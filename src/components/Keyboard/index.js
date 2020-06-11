import React from "react";

import { Container } from "./styles";
import Button from "../Button";

export default function Keyboard() {
    return (
        <Container>
            <Button value={"C"} type={"action"} />
            <Button value={"AC"} type={"action"} />
            <Button value={"+/-"} type={"action"} />
            <Button value={"/"} type={"operator"} />

            <Button value={7} type={"number"} />
            <Button value={8} type={"number"} />
            <Button value={9} type={"number"} />
            <Button value={"*"} type={"operator"} />

            <Button value={4} type={"number"} />
            <Button value={5} type={"number"} />
            <Button value={6} type={"number"} />
            <Button value={"-"} type={"operator"} />

            <Button value={3} type={"number"} />
            <Button value={2} type={"number"} />
            <Button value={1} type={"number"} />
            <Button value={"+"} type={"operator"} />

            <Button value={"."} type={"action"} />
            <Button value={0} type={"number"} />
            <Button value={""} />
            <Button value={"="} type={"operator"} />
        </Container>
    );
}
