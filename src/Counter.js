import React, { Component } from 'react';
const Problematic = () => {
    throw (new Error('버그가 나타났다!'));
    return (
      <div>
        
      </div>
    );
  };
  
class Counter extends Component {
    state = {
        number : 0,
        error : false
    }
    constructor(props){
        super(props);
        console.log('constructor');
    }
    componentWillMount() {
        //v16.3 에서는 decprecated 됨, 이후 UNSAFE_componentWillMount() 로 사용 됨
        console.log("componentWillMount (deprecated)");
    }
    componentDidMount() {
        //
        console.log("componentDidMount");
    }
    shouldComponentUpdate(nextPross, nextState){
        console.log('shouldComponent')
        //if(nextState.number % 5 === 0 ) return false;
        return true;
    }
    componentWillReceiveProps(nextProps){
        //this.props 는 아직 바뀌지 않은 상태
        console.log("componentWillReceiveProps")
    }
    componentWillUpdate(nextProps, nextState){
        console.log("componentWillUpdate");
    }
    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate");
    }
    componentDidCatch(error, info){
        console.log("componentDidcatch");
        this.setState({
            error: true
        });
    }
    handleIncrease = () => {
        const { number } = this.state;
        this.setState({
            number: number + 1
        });
    }
    handleDecrease = () => {
        const { number } = this.state;
        this.setState({
            number: number - 1
        })
    }
    render(){
        console.log('render');
        console.log(this.state.error);
        if (this.state.error) return (<h1>에러발생!</h1>);
        
        return(
            <div>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
                { this.state.number === 4 && <Problematic /> }
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;