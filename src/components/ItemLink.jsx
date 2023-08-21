import React, { Component } from 'react'

export default class ItemLink extends Component {
  render() {
    return (
        <a href={this.props.link} target="_blank">
            <p>{this.props.title}</p>
        </a>
    )
  }
}

/*import React from 'react';

const ItemLink = ({title, link}) => {
  return (
      <a href={link} target="_blank">
          <img className="icon" src="./icons/instagram.png" alt="instagram icon"></img>
          <p>{title}</p>
      </a>
  )
}

export default ItemLink;*/