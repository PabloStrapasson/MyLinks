import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    return (
        <div id="content">
            <div id="form_content">
                <form action="/" id="create_link">
                    <div id="input_links">
                        <label for="title">Título:</label><br/>
                        <input type="text" id="title" name="title" required/><br/>
                        <label for="link">Link:</label><br/>
                        <input type="text" id="link" name="link" required/><br/>
                    </div>
                    <div id="save_button">
                        <button type="submit" form="create_link">Salvar Link</button>
                    </div>
                </form>
            </div>
        </div>
    )
  }
}
