import React, { Component } from 'react';
import axios from 'axios';

class EditKeep extends Component {

    constructor(props){
        super(props);

        this.onChangeKeepDescription= this.onChangeKeepDescription.bind(this);
        this.onChangeKeepResponsible= this.onChangeKeepResponsible.bind(this);
        this.onChangeKeepPriority= this.onChangeKeepResponsible.bind(this);
        this.onChangeKeepCompleted= this.onChangeKeepCompleted.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state = {
            keepDescription: '',
            keepResponsible: '',
            keepPriority: '',
            keepCompleted: false
        }
    }

    componentDidMount(){
        axios.get('http://localhost:4000/keep/'+this.props.match.params.id)
        .then(response =>{
            this.setState({
                keepDescription: response.data.keepDescription,
                keepResponsible: response.data.keepResponsible,
                keepPriority: response.data.keepPriority,
                keepCompleted: response.data.keepCompleted
            })
        })
        .catch(function(error){
            console.log(error)
        })
    }
    onChangeKeepDescription(e){
        this.setState({
            keepDescription: e.target.value
        });
    }

    onChangeKeepResponsible(e){
        this.setState({
            keepResponsible: e.target.value
        });
    }
    onChangeKeepPriority(e){
        this.setState({
            keepPriority: e.target.value
        });
    }

    onChangeKeepCompleted(e){
        this.setState({
            keepCompleted: !this.state.keepCompleted
        });
    }

    onSubmit(e){
        e.preventDefault();
        const obj = {
            keepDescription: this.state.keepDescription,
            keepResponsible: this.state.keepResponsible,
            keepPriority: this.state.keepPriority,
            keepCompleted: this.state.keepCompleted
        };
        axios.post('http://localhost:4000/keep/update/'+this.props.match.params.id,obj)
        .then(res => console.log(res.data));
        this.props.history.push('/');
    }



    render() {
        return (
            <div>
                <h3>Update Keep</h3>
                <form onSubmit ={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                              className="form-control"
                              value={this.state.keepDescription}
                              onChange={this.onChangeKeepDescription}
                              />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input type="text"
                              className="form-control"
                              value={this.state.keepResponsible}
                              onChange={this.onChangeKeepResponsible}
                              />
                    </div>
                    <div className="form-group">
                    
                            <div className="form-check">
                                <input type="checkbox"
                                       className="form-check-input"
                                       id="completedCheckbox"
                                       name="completedCheckbox"
                                       onChange={this.onChangeKeepCompleted}
                                       checked={this.state.keepCompleted}
                                       value={this.state.keepCompleted}
                                       />
                                       <label className="form-check-label" htmlFor="completedCheckbox">
                                           Completed
                                       </label>
                            </div>
                            <br/>

                            <div className="form-group">
                                <input type="submit" value="Update Keep" className="btn btn-primary"/>

                            </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditKeep;