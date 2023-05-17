import styled from "styled-components"

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;


    height: 72px;
    width: 100%;

    
    border-bottom: 1px solid var(--color-grey-3);

    img{
        margin-left: 0.813rem;
    }
    button{
        margin-right: 0.813rem;
        
        height: 38px;
        width: 55px;

        background-color: var(--color-grey-3);
        color: var(--color-grey-0);

        border: 1px solid var(--color-grey-3);
        border-radius: 4px;
    }
    @media (min-width: 1024px){
        img{
            margin-left: 100px;
        }
        button{
            margin-right: 100px;
        }
    }
    @media (min-width: 1280px){
        img{
            margin-left: 150px;
        }
        button{
            margin-right: 150px;
        }
    }
    @media (min-width: 1440px){
        img{
            margin-left: 200px;
        }
        button{
            margin-right: 200px;
        }
    }
    @media (min-width: 1600px){
        img{
            margin-left: 250px;
        }
        button{
            margin-right: 250px;
        }
    }
    @media (min-width: 1750px){
        img{
            margin-left: 300px;
        }
        button{
            margin-right: 300px;
        }
    }
    @media (min-width: 1920px){
        img{
            margin-left: 350px;
        }
        button{
            margin-right: 350px;
        }
    }


`