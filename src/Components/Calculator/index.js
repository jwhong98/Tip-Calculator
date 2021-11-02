import React from 'react';
import { CalculatorContainer, CalculatorWrapper, CalculatorHeader, Title, CalculatorBody, BodyWrapper,
FirstHalf, BodyHeader, Label, Input,Img, TipSection, ButtonWrapper, Button, PeopleSection, SecondHalf, Results,
ResultsWrapper, Section, SectionLabel, Measure, Amount, ResultButton } from './CalculatorElements';

let tipAmount = "0.00";
let totalTip = "0.00";

const Calculator = () => {
    return (   
        <CalculatorContainer>
            <CalculatorWrapper>
                <CalculatorHeader>
                    <Title>splitter</Title>
                </CalculatorHeader>
                <CalculatorBody>
                    <BodyWrapper>
                        <FirstHalf>
                            <BodyHeader>
                                <Label>Bill</Label>
                                <Input placeholder="0" />
                            </BodyHeader>
                            <TipSection>
                                <Label>Select Tip %</Label>
                                <ButtonWrapper>
                                    <Button>5%</Button>
                                    <Button>10%</Button>
                                    <Button>15%</Button>
                                    <Button>25%</Button>
                                    <Button>50%</Button>
                                    <Button>Custom</Button>
                                </ButtonWrapper>
                            </TipSection>
                            <PeopleSection>
                                <Label>Number of People</Label>
                                <Input placeholder="0" />
                            </PeopleSection>
                        </FirstHalf>
                        <SecondHalf>
                            <Results>
                                <ResultsWrapper>
                                    <Section>
                                        <SectionLabel>
                                            <Label>Tip Amount</Label>
                                            <Measure>/ person</Measure>
                                        </SectionLabel>
                                        <Amount>${tipAmount}</Amount>
                                    </Section>
                                    <Section>
                                        <SectionLabel>
                                            <Label>Total</Label>
                                            <Measure>/ person</Measure>
                                        </SectionLabel>
                                        <Amount>${totalTip}</Amount>
                                    </Section>
                                    <ResultButton>Reset</ResultButton>
                                </ResultsWrapper>
                            </Results>
                        </SecondHalf>
                    </BodyWrapper>
                </CalculatorBody>
            </CalculatorWrapper>
        </CalculatorContainer>
        
    )
}

export default Calculator;
