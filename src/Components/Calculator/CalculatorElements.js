import styled from 'styled-components';

export const CalculatorContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: hsl(185, 41%, 84%);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CalculatorWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

export const CalculatorHeader = styled.div`
    width: 100%;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    text-transform: uppercase;
    color: hsl(186, 14%, 43%);
`;

export const CalculatorBody = styled.div`
    width: 100%;
    background-color: white;
    flex: 1 1 auto;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

export const BodyWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
`;

export const BodyHeader = styled.div`
    width: 100%;
    height: auto;
    
`;

export const Label = styled.p`
    color: hsl(186, 14%, 43%);
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
`;

export const TipSection = styled.div`
    width: 100%;
`;

export const ButtonWrapper = styled.div`

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
`;

export const PeopleSection = styled.div`
    width: 100%;
`;

export const Results = styled.div`

`;

export const ResultsWrapper = styled.div`

`;

export const Section = styled.div`

`;

export const SectionLabel = styled.div`

`;

export const Measure = styled.p`

`;

export const Amount = styled.p`

`;

export const ResultButton = styled.button`

`;