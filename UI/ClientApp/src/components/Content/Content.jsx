import React, { Component } from 'react'

import './Content.css';
export default class Content extends Component {
    render() {
        return (
            <div className="column content-column">
                    {this.props.children}
            </div>
        )
    }
}
