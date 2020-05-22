import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux';
import reducer from './index.reducer'

//创建store
const store = createStore(reducer);

//订阅事件
// store.subscribe(() =>
//     console.log(store.getState())
// );

//派发事件
// store.dispatch(increase)
// console.log(store.getState())


//需要渲染什么数据
// function mapStateToProps(state) {
//     return {
//         tiger: state
//     }
// }

//需要触发什么行为
// function mapDispatchToProps(dispatch) {
//     return {
//         PayIncrease: () => dispatch({type: '涨工资'}),
//         PayDecrease: () => dispatch({type: '扣工资'})
//     }
// }

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
