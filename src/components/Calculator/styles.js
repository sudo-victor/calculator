import styled from "styled-components";

export const Container = styled.div`
    width: 250px;
    background: #333;
    border-radius: 10px;
    overflow: hidden;
`;

export const ContainerInput = styled.div`
    width: 100%;
    padding: 10px;
    padding-bottom: 0px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 18px;
    text-align: end;
    border-radius: 5px;
    border: none;
    outline: none;
`;

export const ContainerKeyboard = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
`;

export const Button = styled.div`
    width: 50px;
    height: 50px;
    margin: 5px 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0px 0px 10px #000;

    &:active {
        position: relative;
        top: 2px;
    }
`;
