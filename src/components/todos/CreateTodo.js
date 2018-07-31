import React, { Component } from 'react'

class CreateTodo extends Component {
  render() {
    return(
      <div>
        <form>
          </p>
            <label>Add ToDo</label>
            <input type="text" onChange={(event) => this.handleChange(event)}/>
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

export default CreateTodo;
