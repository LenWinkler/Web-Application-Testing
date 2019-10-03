import React from "react";
import styled from "styled-components";

const Counts = styled.div`
    display: flex;
    justify-content: center;
`

const CountDisplay = styled.div`
    margin: 4rem;
`

const CounterNum = styled.p`
    font-size: 5rem;
`

const Button = styled.button`
    width: 8rem;
    height: 3rem;
    border-radius: 5px;
    margin: 2rem;
    font-size: 2rem;
    background: green;
    color: white;
`

const NumOfXs = styled.p`
    font-size: 2rem;
`

class Count extends React.Component {
    constructor() {
        super();
        this.state = {
            strikes: 0,
            balls: 0
        }
    };

    increaseStrikes = () => {
        const strikesOnState = this.state.strikes;
        if (strikesOnState < 2) {
            this.setState(() => {
                return {strikes: strikesOnState +1} 
            })
        } else {
            this.setState(() => {
                return {strikes: 0,
                        balls: 0
                    }
            })
        }
    };

    increaseBalls = () => {
        const ballsOnState = this.state.balls;
        if (ballsOnState < 3) {
            this.setState(() => {
                return {balls: ballsOnState +1} 
            })
        } else {
            this.setState(() => {
                return {strikes: 0,
                        balls: 0
                    }
            })
        }
    };

    foulBall = () => {
        const strikesOnState = this.state.strikes;
        if (strikesOnState < 2) {
            this.setState(() => {
                return {strikes: strikesOnState + 1}
            })
        } else {
            this.setState(() => {
                return {strikes: strikesOnState}
            })
        }
    }

    hit = () => {
        this.setState({
            strikes: 0,
            balls: 0
        })
    }

    

    

    render() {
        return (
            <div className="count-card">
                <Counts>
                    <CountDisplay>
                            <CounterNum>{this.state.strikes}</CounterNum>
                            <NumOfXs># of Strikes</NumOfXs>
                    </CountDisplay>
                    <CountDisplay>
                            <CounterNum>{this.state.balls}</CounterNum>
                            <NumOfXs># of Balls</NumOfXs>
                    </CountDisplay>
                </Counts>
                <div className="buttons">
                    <Button onClick={this.increaseStrikes}>Strike</Button>
                    <Button onClick={this.increaseBalls}>Ball</Button>
                    <Button onClick={this.foulBall}>Foul</Button>
                    <Button onClick={this.hit}>Hit !</Button>
                </div>
            </div>
        )
    }
}

export default Count;