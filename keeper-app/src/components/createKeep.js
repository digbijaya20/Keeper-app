// eslint-disable-next-line
import React, { Component } from 'react';
import axios from 'axios';

class CreateKeep extends Component {
    constructor(props){
        super(props);
        this.onChangeKeepDescription = this.onChangeKeepDescription.bind(this);
        this.onChangeKeepResponsible = this.onChangeKeepResponsible.bind(this);
        this.onChangeKeepPriority = this.onChangeKeepPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            keepDescription: '',
            keepResponsible: '',
            keepPriority: '',
            keepCompleted: false
        }
    }
    onChangeKeepDescription(e){
        this.setState({
            keepDescription:e.target.value
        });
    }
    onChangeKeepResponsible(e){
        this.setState({
            keepResponsible:e.target.value
        });
    }
    onChangeKeepPriority(e){
        this.setState({
            keepPriority:e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        console.log('Form submitted:');
        console.log('Keep Description:${this.state.keepDescription}');
        console.log('Keep Responsible:${this.state.keepResponsible}');
        console.log('Keep Priority:${this.state.keepPriority}');
        console.log('Keep Completed:${this.state.keepCompleted}');

        const newKeep = {
            keepDescription: this.state.keepDescription,
            keepResponsible: this.state.keepResponsible,
            keepPriority: this.state.keepPriority,
            keepCompleted: this.state.keepCompleted
        }
        axios.post('http://localhost:4000/keep/add', newKeep)
         .then(res => console.log(res.data));



        this.setState({
            keepDescription:'',
            keepResponsible:'',
            keepPriority:'',
            keepCompleted:false
        })
    }
    render() {
        return (
            <div style={{marginTop:20}}>
                <h3>Create New Keep</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text"
                                className="form-control"
                                value={this.state.keepDescription}
                                onChange={this.onChangeKeepDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible:</label>
                        <input type="text"
                                className="form-control"
                                value={this.state.keepResponsible}
                                onChange={this.onChangeKeepResponsible}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                            type="radio"
                            name="priorityOptions"
                            id="priorityLow"
                            value="Low"
                            checked={this.state.keepPriority==='Low'}
                            onChange={this.onChangeKeepPriority}
                            />
                            <label className="form-check-label">Low</label>
                            </div> 
                            <div className="form-check form-check-inline">
                            <input className="form-check-input"
                            type="radio"
                            name="priorityOptions"
                            id="priorityMedium"
                            value="Medium"
                            checked={this.state.keepPriority==='Medium'}
                            onChange={this.onChangeKeepPriority}
                            />
                            <label className="form-check-label">Medium</label>
                            </div> 
                            <div className="form-check form-check-inline">
                            <input className="form-check-input"
                            type="radio"
                            name="priorityOptions"
                            id="priorityHigh"
                            value="High"
                            checked={this.state.keepPriority==='High'}
                            onChange={this.onChangeKeepPriority}
                            />
                            <label className="form-check-label">High</label>
                            </div> 
                    </div>
                    <div className="form-group">
                        <input type="submit" value="create keep" className="btn btn-primary"/>
                    </div>
                   

                </form>

               
            </div>
        );
    }
}

export default CreateKeep;