import React from "react";

import { Container, Author, Link } from "./styles";

export default function Footer() {
    return (
        <Container>
            <Author>
                Developed by{" "}
                <Link href="https://github.com/sudo-victor" target="_blank">
                    Victor de Souto
                </Link>
            </Author>
        </Container>
    );
}
