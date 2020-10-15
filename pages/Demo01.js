import React, { Component } from 'react'
import Context from './Context'
import PropType from 'prop-types'
import { findDOMNode } from 'react-dom'

//使用propTypes进行类型检查
Demo01.propTypes = {
    name: propTypes.string.isRequired
}

//使用defaultProps设置默认值
Demo01.defaultProps={
    name:'tom'
}

const Demo01 = () => {
    return (
        <div style={{ width: 100, height: 100 }}>
            <h2>Context</h2>
            <ul>
                <Context.Consumer>
                    {
                        data => data.data.map(item => <li key={item}>{item}</li>)
                    }
                </Context.Consumer>
            </ul>
        </div>
    )

}

export default Demo01