import React from 'react';

const PropsTutorial = ({string}) => {
    //다른 컴포넌트에서 이 컴포넌트를 호출할 때 전달하는 값.
    //한 번 값이 전달되면 이후에는 변경이 불가능.
    const defaultProps = {
        string: 'Nothing'
        //index.js에서 string = 'Hello World'로 호출하기!
    }
    return (
        <div><div><strong>PropsTutorial</strong></div>{string}<hr/></div>
    );
}

export default PropsTutorial;