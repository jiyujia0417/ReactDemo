import React from 'react'
import { connect } from 'react-redux'
//相当于把当前组件和状态树做一个连接
const Todos = (props) => {
    console.log(props);
    return (
        <div>
            {
                props.mydata.map((item, i) =>
                    <li key={i}>
                        {item}
                    </li>)
            }
            <button
                onClick={() => props.dispatch({
                    type: 'DEL_TODO',
                    value: '10000'
                })}>del</button>
            <button
                onClick={() => props.dispatch({
                    type: 'ADD_TODO',
                    value: '10000'
                })}>add</button>


        </div>
    )
}

//把状态映射到当前组件的属性中去
const mapaStateToProps = (state) => {
    return {
        mydata: state
    }
}

export default connect(mapaStateToProps)(Todos)