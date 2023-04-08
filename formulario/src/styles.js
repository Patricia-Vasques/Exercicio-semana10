import styled from "styled-components"

export const SCButton = styled.button`
    font-size: 15px;
    padding: 10px;
    border-radius: 10px;
    border: none;
    margin-right: 15px;
`;

export const SCFormContainer = styled.div`
    max-width: 600px;
    height: auto; 
    margin: 0 auto;
    background-color: #f1f1f1 ;
    padding: 1.5rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 5px;
    border: solid 2px;

    form {
        max-width: 500px;
        margin: 0 auto;
    }
    .acoes {
        margin-top: 15px;
    }
`;

export const SCHeader = styled.header`
    text-align: center;
    margin-bottom: 10px;
    padding-top: 10px;
    h2 {
        font-size: 15px;
        margin-bottom: 15px;
    }
`;