import styled from 'styled-components';

export const Form = styled.form`
    margin: 20px;
    padding: 10px;
`;

export const List = styled.ul`
    margin: 20px;
    list-style: none;
    border: 1px solid #b3b3b3;
    
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    li {
        flex: 1
        font-weight: bold;
        padding: 5px;
        border-right: 1px solid #b3b3b3;
    }
    
    li:last-of-type {
        border: none;
    }
    
    button:first-of-type {
        border: none;
        padding: 10px 20px;
        background: orange;
        color: #fff;
    }
    
    button:nth-of-type(2) {
        border: none;
        padding: 10px 20px;
        background: blue;
        color: #fff;
    }
    
    button {
        border: none;
        padding: 10px 20px;
        background: tomato;
        color: #fff;
    }
`;