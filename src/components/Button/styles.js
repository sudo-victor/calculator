import styled from "styled-components";

export const Container = styled.button`
    width: 50px;
    height: 50px;
    margin: 5px 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: #191622;
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    box-shadow: 0px 0px 10px #000;
    outline: none;
    border: none;
    cursor: pointer;

    &:active {
        position: relative;
        top: 2px;
    }
`;
