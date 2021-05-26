import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 10px;
    padding-bottom: 0px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 18px;
    font-weight: 700;
    text-align: ${(props) => (props.on ? "end" : "center")};
    background: #191622;
    color: ${(props) => (props.on ? "#fff" : "#ccc")};
    border-radius: 5px;
    box-shadow: 0px 0px 10px #000;
    border: none;
    outline: none;
    cursor: default;
`;
