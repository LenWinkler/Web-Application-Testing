import React from "react";
import styled from "styled-components";

const Button = styled.button`
    width: 8rem;
    height: 3rem;
    border-radius: 5px;
    margin: 2rem;
    font-size: 2rem;
    background: green;
    color: white;
`


const Dashboard = (props) => {
    

    return (
        <div className="buttons">
                    <Button onClick={props.increaseStrikes}>Strike</Button>
                    <Button onClick={props.increaseBalls}>Ball</Button>
                    <Button onClick={props.foulBall}>Foul</Button>
                    <Button onClick={props.hit}>Hit !</Button>
                </div>
    )
}

export default Dashboard;

