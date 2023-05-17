import styled from "styled-components";

export const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 92%;
    height: 300px;

    margin-left: 0.813rem;
    margin-top: 1.75rem;

    background-color: var(--color-grey-3);

    max-height: 600px;
    overflow-x: auto;

    ::-webkit-scrollbar {
    width: 0;
    }

    .containerCards{
        max-height: 500px;
    }

    @media(min-width: 1024px){
        margin-left: 100px;
        width: 80%;
    }
    @media(min-width: 1280px) {
        margin-left: 150px;
        width: 76%;
    }
    @media(min-width: 1440px){
        margin-left: 200px;
        width: 72%;
    }
    @media(min-width: 1600px){
        margin-left: 250px;
        width: 69%;
    }
    @media (min-width: 1750px){
        margin-left: 300px;
        width: 66%;
    }
    @media (min-width: 1920px) {
        margin-left: 350px;
        width: 63%;
    }

`