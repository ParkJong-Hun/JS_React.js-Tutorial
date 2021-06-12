import React, { useState } from 'react';

const StateTutorial = () => {
    //number는 값이 저장될 state의 이름. inreaseNumber는 state의 핸들링 함수로 파라미터로
    //값을 넣어 호출하면 해당 파라미터가 계산된 값이 state의 값으로 변경됨.
    const [number, increaseNumber] = useState(0);
    const Click = () => {
        increaseNumber(number + 1);
    }

    return (
        <div>
            <p><strong>StateTutorial</strong></p>
            <p>Number: {number}</p>
            <button onClick = {Click}>증가</button>
            <hr />
        </div>
    );
}

export default StateTutorial;