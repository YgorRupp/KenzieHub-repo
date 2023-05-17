import { Link } from "react-router-dom"
import styled from "styled-components"

export const StyledDivLogin = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: var(--color-grey-4);

    width: 100%;
    height: 100vh;

    p{
        margin-left: 1.125rem;
        color: var(--color-primary);
    }

    img {
        margin-bottom: 20px;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 18px;

        background-color: var(--color-grey-3);

        width: 95%;

    }
    h2 {
        width: 100%;
        display: flex;
        justify-content: center;

        margin-top: 33px;

        font-weight: 700;
        font-size: 0.875rem;
        
        color: var(--color-grey-0);
    }
    label{
        display: flex;
        justify-content: flex-start;

        margin-left: 1.125rem;

        width: 100%;

        font-weight: 400;
        font-size: 0.75rem;

        color: var(--color-grey-0);
    }
    input {
        height: 38px;
        width: 90%;

        margin-left: 1.125rem;

        border: 1px solid var(--color-grey-2);
        border-radius: 4px;
        outline: 1px solid var(--color-grey-0);

        background-color: var(--color-grey-2);
        color: var(--color-grey-0);

    }
    input::placeholder{
        padding-left: 13px;

        font-weight: 400;
        font-size: 0.813rem;

        color: var(--color-grey-0);
    }
    span {
        display: flex;
        justify-content: center;

        width: 100%;

        font-weight: 600;
        font-size: 12px;

        color: var(--color-grey-1);
    };
    form > button:first-of-type {
        height: 38px;
        width: 92%;

        margin-left: 1.125rem;

        background-color: var(--color-primary);
        color: #FFFFFF;

        border: 1px solid var(--color-primary);
        border-radius: 4px;

        font-weight: 500;
        font-size: 0.875rem;

    }
    button {
        height: 38px;
        width: 92%;

        background-color: yellow;
        background-color: var(--color-grey-1);
        color: var(--color-grey-0);

        border: 1px solid var(--color-grey-1);
        border-radius: 4px;

        margin-left: 1.125rem;
        margin-bottom: 2.063rem;

        font-weight: 500;
        font-size: 0.875rem;

    }
    @media (min-width: 1024px){
        form {
            width: 35%;
            border-radius: 4px;
        }
    }
    @media (min-width: 1440px){
        form{
            width: 30%;
        }
    }
    @media (min-width: 1600px){
        form{
            width: 25%;
        }
    }
    @media (min-width: 1920px){
        form{
            width: 20%;
        }
    }
`
export const StyledLinkLogin= styled(Link)`

        display: flex;
        align-items: center;
        justify-content: center;

        height: 38px;
        width: 92%;

        background-color: var(--color-grey-1);
        color: var(--color-grey-0);

        border: 1px solid var(--color-grey-1);
        border-radius: 4px;

        margin-left: 1.125rem;
        margin-bottom: 2.063rem;

        font-weight: 500;
        font-size: 1rem;

        font-family: 'Inter', sans-serif;

        text-decoration: none;
    
`