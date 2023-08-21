import React, { Component } from 'react'

export default class AddLinkButton extends Component {
  render() {
    return (
        <div id="add_button">
            <a href='javascript:void(0)' onClick={this.props.openModal} >
                <img src="./icons/add_icon.png" alt="add button"></img>
            </a>
        </div>
    )
  }
}