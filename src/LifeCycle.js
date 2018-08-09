import React, { Component } from 'react';

class LifeCycle extends Component {
    
    componentWillMount() {
        //v16.3 에서는 decprecated 됨, 이후 UNSAFE_componentWillMount() 로 사용 됨
        console.log("componentWillMount");
    }
    componentDidMount() {
        //외부 라이브러리 연동: D3, masonry, etc
        // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
        // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
        console.log("componentDidMount");
    }
    componentWillReceiveProps(nextProps){
        /*
        이 API 는 컴포넌트가 새로운 props 를 받게됐을 때 호출됩니다. 
        이 안에서는 주로, state 가 props 에 따라 변해야 하는 로직을 작성합니다. 새로 받게될 props 는 nextProps 로 조회 할 수 있으며, 이 때 this.props 를 조회하면 업데이트 되기 전의 API 이니 참고하세요. 이 API 또한 v16.3 부터 deprecate 됩니다. v16.3 부터는 UNSAFE_componentWillReceiveProps() 라는 이름으로 사용됩니다. 그리고, 이 기능은 상황에 따라 
        새로운 API getDerivedStateFromProps 로 대체 될 수도 있습니다.
        */
        console.log("componentWillReceiveProps")
    }
    shouldComponentUpdate(nextProps, nextState){
        //return false 하면 업데이트 안함
        //return this.props.checked !== nextProps.checked
        return true;
    }
    componentWillUpdate(nextProps, nextState){
        /*
        이 API는 shouldComponentUpdate 에서 true 를 반환했을때만 호출됩니다. 만약에 false 를 반환했었다면 이 함수는 호출되지 않습니다. 여기선 주로 애니메이션 효과를 초기화하거나, 이벤트 리스너를 없애는 작업을 합니다. 이 함수가 호출되고난 다음에는, render() 가 호출됩니다.        
        이 API 또한 v16.3 이후 deprecate 됩니다. 
        기존의 기능은 getSnapshotBeforeUpdate 로 대체 될 수 있습니다.        
        */
    }
    static getDerivedStateFromProps(nextProps, prevState){
        // 여기서는 setState 를 하는 것이 아니라
        // 특정 props 가 바뀔 때 설정하고 설정하고 싶은 state 값을 리턴하는 형태로
        // 사용됩니다.
        /*
        if (nextProps.value !== prevState.value) {
            return { value: nextProps.value };
        }
        return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미
        */
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        // DOM 업데이트가 일어나기 직전의 시점입니다.
        // 새 데이터가 상단에 추가되어도 스크롤바를 유지해보겠습니다.
        // scrollHeight 는 전 후를 비교해서 스크롤 위치를 설정하기 위함이고,
        // scrollTop 은, 이 기능이 크롬에 이미 구현이 되어있는데, 
        // 이미 구현이 되어있다면 처리하지 않도록 하기 위함입니다.
        // 전체 코드 https://codesandbox.io/s/484zvr87ow
        if (prevState.array !== this.state.array) {
            const {
            scrollTop, scrollHeight
            } = this.list;
    
            // 여기서 반환 하는 값은 componentDidMount 에서 snapshot 값으로 받아올 수 있습니다.
            return {
            scrollTop, scrollHeight
            };
        }        
    }
    componentDidUpdate(prevProps, prevState, snapshot){

    }
    componentWillUnmount(){

    }
    componentDidCatch(error, info){
        this.setState({
            error: true
        });
    }
    render(){
        return(
            <div>
                <h1>LifeCyle</h1>
            </div>
        )
    }
}

export default LifeCycle;