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
    text-align: ${(props) => (props.on ? "end" : "center")};
    background: #fff;
    color: ${(props) => (props.on ? "#333" : "#ccc")};
    border-radius: 5px;
    box-shadow: 0px 0px 10px #000;
    border: none;
    outline: none;
    cursor: default;
`;
