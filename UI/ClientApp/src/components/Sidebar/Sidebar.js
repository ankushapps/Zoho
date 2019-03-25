import React, { Component } from 'react'


import './Sidebar.css';

export default class Sidebar extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       collapsed: '',
       shrinkSidebar:''
    }
  }
  
  collapseSidebar=()=>{
    this.setState({
      collapsed: this.state.collapsed === '' ? 'tab-column-collapsed' : '',
      shrinkSidebar:this.state.shrinkSidebar === '' ? 'shrink-sidebar' : '', 
    })
  }

  render() {
    return (
      <div className={`${this.state.collapsed} noscroll-x sidebar scroll-y tab-column main-tab-column`}>
        <ul className="nav nav-pills nav-stacked fill nav-bottom-spacing"> 
          <li className="active">
          <a href="#" onClick={this.collapseSidebar} id="ember771" className="active ember-view"> 
           Dashboard </a>
          </li>
          <li>
          <a href="#" onClick={this.collapseSidebar} id="ember771" class="active ember-view"> 
           Dashboard </a>
          </li><li>
          <a href="#" onClick={this.collapseSidebar} id="ember771" class="active ember-view"> 
           Dashboard </a>
          </li><li>
          <a href="#" onClick={this.collapseSidebar} id="ember771" class="active ember-view"> 
           Dashboard </a>
          </li><li>
          <a href="#" onClick={this.collapseSidebar} id="ember771" class="active ember-view"> 
           Dashboard </a>
          </li><li>
          <a href="#" onClick={this.collapseSidebar} id="ember771" class="active ember-view"> 
           Dashboard </a>
          </li><li>
          <a href="#" onClick={this.collapseSidebar} id="ember771" class="active ember-view"> 
           Dashboard </a>
          </li><li>
          <a href="#" onClick={this.collapseSidebar} id="ember771" class="active ember-view"> 
           Dashboard </a>
          </li><li>
          <a href="#" onClick={this.collapseSidebar} id="ember771" class="active ember-view"> 
           Dashboard </a>
          </li><li>
          <a href="#" onClick={this.collapseSidebar} id="ember771" class="active ember-view"> 
           Dashboard </a>
          </li><li>
          <a href="#" onClick={this.collapseSidebar} id="ember771" class="active ember-view"> 
           Dashboard </a>
          </li><li>
          <a href="#" onClick={this.collapseSidebar} id="ember771" class="active ember-view"> 
           Dashboard </a>
          </li><li>
          <a href="#" onClick={this.collapseSidebar} id="ember771" class="active ember-view"> 
           Dashboard </a>
          </li><li>
          <a href="#" onClick={this.collapseSidebar} id="ember771" class="active ember-view"> 
           Dashboard </a>
          </li><li>
          <a href="#" onClick={this.collapseSidebar} id="ember771" class="active ember-view"> 
           Dashboard </a>
          </li><li>
          <a href="#" onClick={this.collapseSidebar} id="ember771" class="active ember-view"> 
           Dashboard </a>
          </li><li>
          <a href="#" onClick={this.collapseSidebar} id="ember771" class="active ember-view"> 
           Dashboard </a>
          </li><li>
          <a href="#" onClick={this.collapseSidebar} id="ember771" class="active ember-view"> 
           Dashboard </a>
          </li><li>
          <a href="#" onClick={this.collapseSidebar} id="ember771" class="active ember-view"> 
           Dashboard </a>
          </li><li>
          <a href="#" onClick={this.collapseSidebar} id="ember771" class="active ember-view"> 
           Dashboard </a>
          </li><li>
          <a href="#" onClick={this.collapseSidebar} id="ember771" class="active ember-view"> 
           Dashboard </a>
          </li><li>
          <a href="#" onClick={this.collapseSidebar} id="ember771" class="active ember-view"> 
           Dashboard </a>
          </li><li>
          <a href="#" onClick={this.collapseSidebar} id="ember771" class="active ember-view"> 
           Dashboard </a>
          </li><li>
          <a href="#" onClick={this.collapseSidebar} id="ember771" class="active ember-view"> 
           Dashboard </a>
          </li><li>
          <a href="#" onClick={this.collapseSidebar} id="ember771" class="active ember-view"> 
           Dashboard </a>
          </li><li>
          <a href="#" onClick={this.collapseSidebar} id="ember771" class="active ember-view"> 
           Dashboard </a>
          </li><li>
          <a href="#" onClick={this.collapseSidebar} id="ember771" class="active ember-view"> 
           Monica bhanushali </a>
          </li><li>
          <a href="#" onClick={this.collapseSidebar} id="ember771" class="active ember-view"> 
           Ankush </a>
          </li>
        </ul>
        {/* <span className="collapse-expand" ></span>
        <a className={`expand-sidebar ${this.state.shrinkSidebar}`} >Collapse</a> */}
      </div>
    )
  }
}
