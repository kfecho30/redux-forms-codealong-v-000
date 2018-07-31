import React, { Component } from 'react'

class CreateTodo extends Component {
  constructor(){
    super();
    this.state = {
      text: '',
    };
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return(
      <div>
        <form>
          </p>
            <label>Add ToDo</label>
            <input type="text" onChange={this.handleChange} value={this.state.text}/>
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

export default CreateTodo;
