import styled from "styled-components";


export const StyledCreateTechnology = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 95%;

    margin-top: 1.625rem;

    h3{
        margin-left: 0.813rem;

        font-weight: 600;
        font-size: 1rem;
        color: var(--color-grey-0);
    }
    button{
        display: flex;
        align-items: center;
        justify-content: center;

        width: 32px;
        height: 32px;

        font-weight: 500;
        font-size: 25px;

        color: #FFFFFF;
        background-color: var(--color-grey-3);

        border: 1px solid var(--color-grey-3);
        border-radius: 4px;
    }
    @media (min-width: 1024px) {
        h3{
            margin-left: 100px;
        }
        button{
            margin-right: 52px;
        }
    }
    @media (min-width: 1280px){
        h3{
            margin-left: 150px;
        }
        button{
            margin-right: 90px;
        }
    }
    @media (min-width: 1440px){
        h3{
            margin-left: 200px;
        }
        button{
            margin-right: 128px;
        }
    }
    @media (min-width: 1600px){
        h3{
            margin-left: 250px;
        }
        button{
            margin-right: 170px;
        }
    }
    @media (min-width: 1750px){
        h3{
            margin-left: 300px;
        }
        button{
            margin-right: 213px;
        }
    }
    @media (min-width: 1920px){
        h3{
            margin-left: 350px;
        }
        button{
            margin-right: 257px;
        }
    }
`