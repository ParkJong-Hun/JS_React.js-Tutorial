import React, { useState } from 'react';

//클래스 컴포넌트: 자주 사용되지는 않음. 비교적 예전에 많이 사용. 유지보수 때문에 가끔 사용하는 회사가 있음.
//state, lifeCycle 기능 사용
//메모리를 더 사용함
//내부에 임의 메서드 적용 가능
//constructor로 state를 초기화할 수 있음.
//state는 객체 형식
//this.setState로 state 값을 변경시킬 수 있음.
//props는 this.props로 값을 불러와야 한다.
//이벤트 핸들링을 할 때의 함수를 사용하기 위해서 this.를 사용해야 한다.
// class ClassComponent extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             number = 0,
//             name = "empty"
//         };
//     }
//     numberChanger = () => {
//         this.setState(name += 1);
//     }
//     render() {
//         const comment = this.props
//         return (
//             <div>
//                 {comment}
//                 <button onClick={this.numberChanger}>버튼</button>
//             </div>
//         );
//     }
// }
// export default ClassComponent;

//함수 컴포넌트: 현재 자주 사용됨. ES6. React Hook.
//state, lifeCycle 기능 사용 x(React Hook으로 해결)
//메모리를 덜 사용함
//그때 그때 선언이 간단함
//useState로 state를 초기화할 수 있음.
//state는 개별 형식. 첫번째 인덱스에는 변경되는 state의 이름, 두번째에는 첫번째 state를 변경시킬 때 사용하는 함수 이름이다.
//props를 사용할 때 값을 불러오기 위해 this.props를 쓰지 않고 그냥 쓴다.
//이벤트 핸들링을 할 때 함수를 const로 선언한다. this를 사용하지 않고 함수 사용이 가능하다.
const FunctionComponent = ({comment}) => {
    const [number, numberChange] = useState(0);
    const [name, nameChanger] = useState("empty");
    const numberChanger = () => {
        numberChange(number+1)
    }
    return (
        <div>
            <p><strong>Component</strong></p>
            {comment}
            <p><button onClick={numberChanger}>버튼</button></p>
            <hr></hr>
        </div>
    );
}
export default FunctionComponent;