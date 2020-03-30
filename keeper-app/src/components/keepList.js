import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Keep = props =>(
    <tr>
        <td className={props.keep.keepCompleted ? 'completed':''}>{props.keep.keepDescription}</td>
        <td className={props.keep.keepCompleted ? 'completed':''}>{props.keep.keepResponsible}</td>
        <td className={props.keep.keepCompleted ? 'completed':''}>{props.keep.keepPriority}</td>
        <td>
            <Link to={"/edit/"+props.keep._id}>Edit</Link>
        </td>
    </tr>
)

class KeepList extends Component {

    constructor(props){
        super(props);
        this.state = {keep:[]};
    }
     
    componentDidMount(){
        axios.get('http://localhost:4000/keep/')
        .then(response =>{
            this.setState({keep: response.data});
        })
        .catch(function(error){
            console.log(error);
        })
    }
    componentDidUpdate(){
        axios.get('http://localhost:4000/keep/')
        .then(response =>{
            this.setState({keep: response.data});
        })
        .catch(function(error){
            console.log(error);
        })

    }

    keepList(){
        return this.state.keep.map(function(currentKeep,i){
            return<Keep keep={currentKeep} key={i}/>
        });
    }

    render() {
        return (
            <div>
                <h3> Keep List</h3>
                <table className="table table-striped" style={{ marginTop:20}}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.keepList()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default KeepList;