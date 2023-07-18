import React, { Component } from 'react'
import './App.css'

class EmployeeData extends Component {
  state = {
    Name: "",
    Department: "",
    emptyData: []
  }

  HandleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    // this.setState({[e.target.name]: e.target.value})
  }

  HandleClick = (e) => {
    e.preventDefault()
    const object = {
      name: this.state.name,
      department: this.state.department,
      rating: this.state.rating
    }
    this.state.emptyData.push(object);
    this.setState({ Data: this.state.Data, name: "" })
    this.setState({ Data: this.state.Data, department: "" })
    this.setState({ Data: this.state.Data, rating: "" })
  }

  render() {
    return (
      <div className='line'>

        <h1 className='head1'>EMPLOYEE FEEDBACK FORM</h1>
        
        <div className='box'>

        <div className='name1'>
        <label className='head' htmlFor='name'>Name:</label>
        <input id='name' name='name' type='text' placeholder='Enter your name' value={this.state.name} onChange={this.HandleChange} />
        </div>

        <div className='name1'>
        <label className='head' htmlFor='department'>Department:</label>
        <input id='name' name='department' type='text' placeholder='Enter your department' value={this.state.department} onChange={this.HandleChange} />
        </div>

        <div className='name1'>
        <label className='head' htmlFor='rating'>Rating:</label>
        <input id='name' type='text' name='rating' value={this.state.rating} placeholder='Please Enter Ratings' onChange={this.HandleChange} />
        </div>
        <button className='btn' onClick={this.HandleClick}>Submit</button>

        </div>


        <div className='add'>
          {this.state.emptyData.map((item, index) => {
            return (
              <div key={index}>
                <h2 className='add1'>
                Name:{item.name} || Department:{item.department} ||Rating:{item.rating}

                </h2>

              </div>
            )
          })}
        </div>
      </div>
    )
  }

}
export default EmployeeData;