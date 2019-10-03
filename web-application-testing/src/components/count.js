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
    constructor(props) {
        super(props);
        this.state = {
            strikes: 0,
            balls: 0
        }
    };

    increaseStrikes = () => {
        const strikesOnState = this.state.strikes;
        if (strikesOnState < 3) {
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
    }

    

    render() {
        return (
            <div className="count-card">
                <Counts>
                    <CountDisplay>
                            <CounterNum>0</CounterNum>
                            <p># of Strikes</p>
                    </CountDisplay>
                    <CountDisplay>
                            <CounterNum>0</CounterNum>
                            <p># of Balls</p>
                    </CountDisplay>
                </Counts>
                <div className="buttons">
                    <Button>strike</Button>
                    <Button>ball</Button>
                    <Button>foul</Button>
                    <Button>hit</Button>
                </div>
            </div>
        )
    }
}

export default Count;