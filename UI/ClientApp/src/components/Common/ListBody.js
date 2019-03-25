import React, { Component } from 'react'

export default class ListBody extends Component {


  constructor(props) {
    super(props)

    this.state = {

    }
  }


  componentDidMount() {
    this.apiCall();
  }

  apiCall = async () => {
    const api = await fetch('https://localhost:5001/api/values');
    const json = api.json();
    console.log(json);
  }


  render() {
    return (
      <div className="scroll-y noscroll-x fill body scrollbox list-body" style={{borderBottom:'1px solid red'}}>
      <h4>main content</h4>
      <br/>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>ankush</h5>
      <h5>Monica</h5>
      </div>
    )
  }
}
