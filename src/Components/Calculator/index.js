import React from 'react';
import { CalculatorContainer, CalculatorWrapper, CalculatorHeader, Title, CalculatorBody, BodyWrapper,
BodyHeader, Label, Input, TipSection, ButtonWrapper, Button, PeopleSection, Results, ResultsWrapper,
Section, SectionLabel, Measure, Amount, ResultButton } from './CalculatorElements';

const index = () => {
    return (   
        <CalculatorContainer>
            <CalculatorWrapper>
                <CalculatorHeader>
                    <Title></Title>
                </CalculatorHeader>
                <CalculatorBody>
                    <BodyWrapper>
                        <BodyHeader>
                            <Label></Label>
                            <Input></Input>
                        </BodyHeader>
                        <TipSection>
                            <Label></Label>
                            <ButtonWrapper>
                                <Button></Button>
                                <Button></Button>
                                <Button></Button>
                                <Button></Button>
                                <Button></Button>
                                <Button></Button>
                            </ButtonWrapper>
                        </TipSection>
                        <PeopleSection>
                            <Label></Label>
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

export default index
