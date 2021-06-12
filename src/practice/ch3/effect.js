import React, {useEffect, useState} from 'react';

const Effect = () => {
    const [number, addNumber] = useState(0);
    const Click = () => {
        addNumber(number + 1);
    }
    //Effect = 화면이 렌더링 될 때 마다, 마운트 될 때 마다 실행됨
    //마운트 = state, props가 바뀌는 상황
    //console에 들어가서 언제 number가 출력되는지 확인해보자
    useEffect(() => {
        console.log("useEffect로 출력됨 : " + number);
    }, [number])
    return(
        <div>
            <p><strong>Effect</strong></p>
            {number}
            <div><button onClick={Click}>마운트</button></div>
        </div>
    );
}

export default Effect;