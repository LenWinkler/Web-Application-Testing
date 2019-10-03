import React from "react";
import styled from "styled-components";

const Counts = styled.div`
    display: flex;
    justify-content: center;
`

const CountDisplay = styled.div`
    margin: 1rem;
`

const CounterNum = styled.p`
    font-size: 2rem;
`

const Button = styled.button`

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
                            <p># of Strikes</p>
                    </CountDisplay>
                    <CountDisplay>
                            <CounterNum>{this.state.balls}</CounterNum>
                            <p># of Balls</p>
                    </CountDisplay>
                </Counts>
                <div className="buttons">
                    <Button onClick={this.increaseStrikes}>strike</Button>
                    <Button onClick={this.increaseBalls}>ball</Button>
                    <Button onClick={this.foulBall}>foul</Button>
                    <Button onClick={this.hit}>hit</Button>
                </div>
            </div>
        )
    }
}

export default Count;