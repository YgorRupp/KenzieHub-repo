import styled from "styled-components";


export const StyledCard = styled.li`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    height: 48px;
    
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 1rem;
    margin-top: 1rem;

    border: 1px solid var(--color-grey-4);
    border-radius: 4px;

    background-color: var(--color-grey-4);

    h2{
        margin-left: 0.75rem;

        font-weight: 700;
        font-size: 1rem;

        color: var(--color-grey-0);
    }
    span{
        margin-right: 0.75rem;
        
        font-weight: 400;
        font-size: 0.75rem;

        color: var(--color-grey-1);
    }

    img{
        margin-right: 1.125rem;
    }

`