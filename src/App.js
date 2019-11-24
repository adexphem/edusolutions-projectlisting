import React, { Component } from 'react'
import { projectsRef } from './base'
import './App.css';

export default class App extends Component {
  state = {
    title: '',
    url: '',
    projectList: []
  }

  componentDidMount() {
    this.getProjects();
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({[name]: value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {url, title} = this.state;
    const data = {
      title,
      url
    }
    projectsRef.push().set(data)
    this.clearIinput();
    this.getProjects();
  }

  clearIinput() {
    this.setState({
      title: '',
      url: ''
    })
  }

  removeProject = (data) => {
    projectsRef.child(data).remove();
  }

  async getProjects() {
    await projectsRef.on("value", snapshot => {
      this.setState({ projectList: snapshot.val() });
    });
  }

  loadingLists = (data) => {
    const list = Object.keys(data);
    
    const lists = list.map((key, index) => { 
      return (<span className="listing" key={index}>{data[key].title} <span className="remove" onClick={() => this.removeProject(list[index])}>x</span></span>);
    });

    return lists;
  }

  render() {
    const { title, url, projectList } = this.state;

    return (
      <div className="App">
      <header className="App-header">
        <p>
          Load Data Into Apps
        </p>
        <form>
          <div className="from_group">
            <label>Enter project title</label>
            <input type="text" name="title" onChange={(e) => this.handleChange(e)} value={title} />
          </div>
          <div className="from_group">
            <label>Enter project url</label>
            <input type="text" name="url" onChange={(e) => this.handleChange(e)} value={url} />
          </div>
          <div className="from_group">
            <button value='Submit' className="submit" onClick={(e) => this.handleSubmit(e)}>Submit</button>
          </div>
        </form>

        <div>
          <h3>Project Lists</h3>
          <div>
            {projectList && this.loadingLists(projectList)}
            {projectList && projectList.length < 1 && <div className="loading">...loading</div>}
          </div>
        </div>
      </header>
    </div>
    )
  }
}
