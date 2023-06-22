import React from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component {

    constructor() {
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        UserService.getUsers().then((response) =>{
            this.setState({users: response.data})
        })
    }
        render(){
            return (
                <div>
                    <h1 className = ""text-center>Users List</h1>

                </div>
            )
        }
    
 }



export default UserComponent