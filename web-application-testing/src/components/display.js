import React from "react";
import styled from "styled-components";
import Dashboard from "./dashboard";

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

const NumOfXs = styled.p`
    font-size: 2rem;
`

export const addStrike = (currentStrikes) => {
        return currentStrikes + 1
}

export default class Display extends React.Component {
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
                return {strikes: addStrike(strikesOnState)} 
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
                <Dashboard increaseStrikes={this.increaseStrikes} increaseBalls={this.increaseBalls} foulBall={this.foulBall} hit={this.hit}/>
            </div>
        )
    }
}



