
import styled from "styled-components"


export const StyledUserInfo = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    border-bottom: 1px solid var(--color-grey-3);

    height: 131px;

    h2{
        font-weight: 700;
        font-size: 1.125rem;
        color: var(--color-grey-0);

        margin-left: 0.75rem;
    }
    p{
        font-weight: 600;
        font-size: 0.875rem;

        color: var(--color-grey-1);

        margin-left: 0.75rem;
    }
    @media (min-width: 1024px){
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        
        h2{
            margin-left: 100px;
        }
        p{
            margin-right: 100px;
        }
    }
    @media (min-width: 1280px){
        h2{
            margin-left: 150px;
        }
        p{
            margin-right: 150px;
        }
    }
    @media (min-width: 1440px){
        h2{
            margin-left: 200px;
        }
        p{
            margin-right: 200px;
        }
    }
    @media(min-width: 1600px){
        h2{
            margin-left: 250px;
        }
        p{
            margin-right: 250px;
        }
    }
    @media (min-width: 1750px){
        h2{
            margin-left: 300px;
        }
        p{
            margin-right: 300px;
        }
    }
    @media (min-width: 1920px){
        h2{
            margin-left: 350px;
        }
        p{
            margin-right: 350px;
        }
    }
`