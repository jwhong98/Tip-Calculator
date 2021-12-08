import styled from 'styled-components';

export const CalculatorContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: hsl(185, 41%, 84%);
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width:660px) {
        width: 100vw;
        height: 100vh;
    }
`;

export const CalculatorWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

export const CalculatorHeader = styled.div`
    width: 7rem;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 660px) {
        height: 170px;
    }
`;

export const Title = styled.h1`
    text-transform: uppercase;
    color: hsl(186, 14%, 43%);
    letter-spacing: 10px;
    word-break: break-all;
    font-size: 1.5rem;
`;

export const CalculatorBody = styled.div`
    width: 100%;
    background-color: white;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    @media screen and (min-width: 660px) {
        width: 70%;
        height: 60%;
        border-radius: 20px;
    }
`;

export const BodyWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;

    @media screen and (min-width: 660px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const FirstHalf = styled.div`
    @media screen and (min-width: 660px) {
        height: 100%;
        width: 48%;
        justify-content: space-between;
        align-items: center;
        display: flex;
        flex-direction: column;
    }
`

export const BodyHeader = styled.div`
    width: 100%;
    height: auto;
    
`;

export const Label = styled.p`
    color: ${({darkBg}) => (darkBg ? 'hsl(0, 0%, 100%)' : 'hsl(186, 14%, 43%)')} ;
    font-weight: 700;
`;

export const Input = styled.input`
    width: 100%;
    background-color: hsl(189, 41%, 97%);
    border: none;
    height: 2rem;
    font-family: 'Space Mono', monospace;
    color: hsl(183, 100%, 15%);
    font-size: 1.25rem;
    font-weight: 700;
    padding: 1rem;
    text-align: right;
    margin-bottom: 1.5rem;
    outline: none;
    border-radius: 5px;

    &:focus {
        border: 2px solid hsl(172, 67%, 45%);
    }
`;

export const TipSection = styled.div`
    width: 100%;
    margin-bottom: 1.5rem;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: row;

    @media screen and (min-width: 660px) {
        
    }
`;

export const Button = styled.button`
    background-color: hsl(183, 100%, 15%);
    color: hsl(0, 0%, 100%);
    font-family: 'Space Mono', monospace;
    font-weight: 700;
    border: none;
    margin: 10px;
    font-size: 1.25rem;
    padding: .25rem 3rem;
    cursor: pointer;
    border-radius: 5px;
    width: 150px;
    text-align: center;
    
    &:hover {
        background-color: hsl(185, 41%, 84%);
        color: hsl(183, 100%, 15%);
    }

    &:focus {
        background-color: hsl(172, 67%, 45%);
        color: hsl(183, 100%, 15%);
    }

    @media screen and (min-width: 660px) {
        width: 125px;
    }
`;

export const CustomTip = styled.input`
    background-color: hsl(189, 41%, 97%);
    color: hsl(186, 14%, 43%);
    font-family: 'Space Mono', monospace;
    font-weight: 700;
    border: none;
    margin: 10px;
    font-size: 1.25rem;
    border-radius: 5px;
    width: 150px;
    text-align: center;
    outline: none;


    &:focus {
        border: 2px solid hsl(172, 67%, 45%);
    }

    @media screen and (min-width: 660px) {
        width: 125px;
    }
`;

export const PeopleSection = styled.div`
    width: 100%;
`;

export const SecondHalf = styled.div`
    width: 100%;

    @media screen and (min-width: 660px) {
        height: 100%;
        width: 48%;
    }
`;

export const Results = styled.div`
    width: 100%;
    background-color: hsl(183, 100%, 15%);
    border-radius: 15px;

    @media screen and (min-width: 660px) {
        height: 100%;
        margin-top: -16px;
    }
`;

export const ResultsWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    margin-top: 1rem;

    @media screen and (min-width: 660px) {
        padding: 2.5rem;
    }
`;

export const Section = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: 660px) {
        margin-bottom: 2rem;
    }
`;

export const SectionLabel = styled.div`

`;

export const Measure = styled.p`
    color: hsl(185, 41%, 84%);
`;

export const Amount = styled.p`
    color: hsl(172, 67%, 45%);
    font-weight: 700;
    font-size: 1.75rem;
`;

export const ResultButton = styled.button`
    font-family: 'Space Mono', monospace;
    border: none;
    background-color: hsl(172, 67%, 45%);
    color: hsl(183, 100%, 15%);
    font-weight: 700;
    font-size: 1.25rem;
    width: 100%;
    border-radius: 5px;
    padding: .5rem;
    margin-top: 1.75rem;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        background-color: hsl(185, 41%, 84%);
    }

    @media screen and (min-width:660px) {
        margin-top: auto;
    }
`;