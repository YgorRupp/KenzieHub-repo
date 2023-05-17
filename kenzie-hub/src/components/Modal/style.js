import styled from "styled-components";

export const StyledDivModal = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 100%;

    position: fixed;
    top: 0;
    left: 0;

    background-color: rgba(0, 0, 0, .25);
    
    form{
        display: flex;
        flex-direction: column;
        gap: 18px;
    }

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;

        background-color: var(--color-grey-2);

        height: 50px;
    }
    header p {
        font-weight: 700;
        font-size: 12px;

        color: var(--color-grey-0);

        margin-left: 1rem;
    }
    header button {
        width: 20px;
        height: 0;
        background: none;
        color: var(--color-grey-1);

        border: none;

        font-weight: 600;
        font-size: 0.813rem;

        margin-right: 1rem;
    }

    label{
        margin-left: 1.125rem;
        
        font-weight: 400;
        font-size: 0.75rem;

        color: var(--color-grey-0);
    }

    input{
        margin-left: 1.125rem;

        width: 90%;
        height: 38px;

        background-color: var(--color-grey-2);
        color: var(--color-grey-0);

        border: 1px solid var(--color-grey-0);
        border-radius: 4px;
    }
    
    input::placeholder{
        padding-left: 0.75rem;

        font-weight: 400;
        font-size: 0.813rem;

        color: var(--color-grey-0);
    }

    select{
        margin-left: 1.125rem;

        width: 92%;
        height: 38px;

        background-color: var(--color-grey-2);

        border: 1px solid var(--color-grey-0);
        border-radius: 4px;
    }

    select > option {
        padding-left: 0.75rem;

        color: white;
    }

    button{
        margin-left: 1.125rem;
        margin-bottom: 1rem;

        width: 92%;
        height: 38px;

        background-color: var(--color-primary);
        color: var(--color-grey-0);
        
        border: 1px solid var(--color-primary);

        font-weight: 500;
        font-size: 0.813rem;

    }
    .modalBox{
        background-color: var(--color-grey-3);

        width: 95%;
        max-width: 425px;
    
    }
`