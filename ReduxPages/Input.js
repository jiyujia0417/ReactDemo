import React from 'react'
import { connect } from 'react-redux'

const Input = (props) => {
    console.log(props);
    return (
        <div>
            {/* 使用受控对象，回车来更新 */}
            <input
                onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                        props.dispatch({
                            type: 'ADD_TODO',
                            value: e.target.value
                        })
                        e.target.value='';
                    }
                }}
                type="text"
            />
        </div>
    )
}

// 只要加上了connect，在组件的props中就能拿到dispatch
export default connect()(Input)
