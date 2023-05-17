import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledDivRegister = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 120vh;

    background-color: var(--color-grey-4);

    p{
        margin-left: 1.125rem;
        color: var(--color-primary);
    }

    div{
        display: flex;
        justify-content: space-between;

        width: 95%;

        margin-bottom: 2.375rem;
        margin-top: 3.563rem;
    }
    div button {
        width: 80px;
        height: 30px;

        background-color: var(--color-grey-3);
        color: var(--color-grey-0);
        
        border: none;

        font-weight: 600;
        font-size: 0.625rem;

    }
    form {
        display: flex;
        flex-direction: column;
        gap: 18px;

        background-color: var(--color-grey-3);

        width: 95%;
    }
    form div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 18px;

        margin-top: 2.063rem;

        width: 100%;

    }
    form div p {
        font-weight: 700;
        font-size: 0.938rem;

        color: var(--color-grey-0);
    }
    form div span {
        font-weight: 400;
        font-size: 0.625rem;

        color: var(--color-grey-1);
    }
    label {
        margin-left: 1.125rem;

        font-weight: 400;
        font-size: 0.75rem;

        color: var(--color-grey-0);
    }
    input {
        margin-left: 1.125rem;

        width: 90%;
        height: 38px;

        background-color: var(--color-grey-2);
        color: var(--color-grey-0);

        border: 1px solid var(--color-grey-2);
        border-radius: 4px;

        outline: none;
    }
    input::placeholder{
        padding-left: 0.75rem;

        color: #868E96;

        font-weight: 400;
        font-size: 0.75rem;
    }
    select {
        margin-left: 1.125rem;

        width: 92%;
        height: 38px;

        background-color: var(--color-grey-2);

        border: 1px solid var(--color-grey-2);
        border-radius: 4px;
    }
    select > option {
        padding-left: 0.75rem;

        color: white;
    }
    button {

        margin-left: 1.125rem;
        margin-bottom: 1.25rem;

        width: 92%;
        height: 38px;

        background-color: var(--color-primary-negative);
        color: #FFFFFF;
    
        border: 1px solid var(--color-primary-negative);
        border-radius: 4px;

        font-weight: 500;
        font-size: 0.75rem;
    }

    @media (min-width: 1024px){
        div{
            width: 35%;
        }
        form{
            width: 35%;
        }
    }
    @media (min-width: 1440px){
        div{
            width: 30%;
        }
        form{
            width: 30%;
        }
    }
    @media (min-width: 1600px){
        div{
            width: 25%;
        }
        form{
            width: 25%;
        }
    }
    @media (min-width: 1920px){
        div{
            width: 20%;
        }
        form{
            width: 20%;
        }
    }

`
export const StyledLink = styled(Link)`

    display: flex;
    align-items: center;
    justify-content: center;

    height: 40px;
    width: 68px;

    background-color: var(--color-grey-3);
    color: var(--color-grey-0);

    text-decoration: none;

    font-family: inter;

    font-weight: 600;
    font-size: 12px;

    border-radius: 4px;
`