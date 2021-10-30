import React from 'react';
import { CalculatorContainer, CalculatorWrapper, CalculatorHeader, Title, CalculatorBody, BodyWrapper,
BodyHeader, Label, Input, TipSection, ButtonWrapper, Button, PeopleSection, Results, ResultsWrapper,
Section, SectionLabel, Measure, Amount, ResultButton } from './CalculatorElements';

const Calculator = () => {
    return (   
        <CalculatorContainer>
            <CalculatorWrapper>
                <CalculatorHeader>
                    <Title>splitter</Title>
                </CalculatorHeader>
                <CalculatorBody>
                    <BodyWrapper>
                        <BodyHeader>
                            <Label>Bill</Label>
                            <Input></Input>
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
                            <Input></Input>
                        </PeopleSection>
                        <Results>
                            <ResultsWrapper>
                                <Section>
                                    <SectionLabel>
                                        <Label></Label>
                                        <Measure></Measure>
                                    </SectionLabel>
                                    <Amount></Amount>
                                </Section>
                                <Section>
                                    <SectionLabel>
                                        <Label></Label>
                                        <Measure></Measure>
                                    </SectionLabel>
                                    <Amount></Amount>
                                </Section>
                                <ResultButton></ResultButton>
                            </ResultsWrapper>
                        </Results>
                    </BodyWrapper>
                </CalculatorBody>
            </CalculatorWrapper>
        </CalculatorContainer>
        
    )
}

export default Calculator;
