import React, { useState, useRef } from 'react';
import { CalculatorContainer, CalculatorWrapper, CalculatorHeader, Title, CalculatorBody, BodyWrapper,
FirstHalf, BodyHeader, Label, Input, TipSection, ButtonWrapper, Button, CustomTip, PeopleSection, SecondHalf, Results,
ResultsWrapper, Section, SectionLabel, Measure, Amount, ResultButton } from './CalculatorElements';

const Calculator = () => {
    const [tipAmount, setTipAmount] = useState(0);
    const [totalTip, setTotalTip] = useState(0);
    const [bill, setBill] = useState(0);
    const [people, setPeople] = useState(0);
    const [tipPercent, setTipPercent] = useState(0);
    
    const peopleRef = useRef(people);
    const totalTipRef = useRef(totalTip);
    const setTipPercents = (e) => {
        let percent = Number(e.target.value);
        setTipPercent(percent);
    };

    const setBills = (event) => {
        setBill(event.target.value)
    }

    const setPeoples = (event) => {
        peopleRef.current = event.target.value;
        setPeople(event.target.value)
        let tempTip = bill * tipPercent / peopleRef.current;
        setTipAmount(tempTip);
        totalTipRef.current = tempTip;
        setTotalTip(bill/peopleRef.current+ totalTipRef.current);
    }

    const handleReset = () => {
        setBill(0);
        setTipPercent(0);
        setPeople(0);
        setTipAmount(0);
        setTotalTip(0);  
    }

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
                                <Label darkBg={false}>Bill</Label>
                                <Input type="number" placeholder="0" onChange={setBills} />
                            </BodyHeader>
                            <TipSection>
                                <Label darkBg={false}>Select Tip %</Label>
                                <ButtonWrapper>
                                    <Button value=".05" onClick={e => setTipPercents(e, "value")}>5%</Button>
                                    <Button value=".1" onClick={e => setTipPercents(e, "value")}>10%</Button>
                                    <Button value=".15" onClick={e => setTipPercents(e, "value")}>15%</Button>
                                    <Button value=".25" onClick={e => setTipPercents(e, "value")}>25%</Button>
                                    <Button value=".5" onClick={e => setTipPercents(e, "value")}>50%</Button>
                                    <CustomTip type="number" placeholder="Custom"/>
                                </ButtonWrapper>
                            </TipSection>
                            <PeopleSection>
                                <Label darkBg={false}>Number of People</Label>
                                <Input type="number" placeholder="0" onChange={setPeoples} />
                            </PeopleSection>
                        </FirstHalf>
                        <SecondHalf>
                            <Results>
                                <ResultsWrapper>
                                    <Section>
                                        <SectionLabel>
                                            <Label darkBg={true}>Tip Amount</Label>
                                            <Measure>/ person</Measure>
                                        </SectionLabel>
                                        <Amount>${tipAmount.toFixed(2)}</Amount>
                                    </Section>
                                    <Section>
                                        <SectionLabel>
                                            <Label darkBg={true}>Total</Label>
                                            <Measure>/ person</Measure>
                                        </SectionLabel>
                                        <Amount>${totalTip.toFixed(2)}</Amount>
                                    </Section>
                                    <ResultButton onClick={handleReset}>Reset</ResultButton>
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
