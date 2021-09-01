import React, { useState, useEffect } from "react";

// import { randomUsers } from "../../data/random-user"
import { User } from "../User/User";
import { GridCard } from '../GridCard/GridCard'

import "./UserList.css"
import { getUsers } from "../../services/userService"

export const UserList = (props) => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setfilteredUsers] = useState ([])
    const [inputValue, setInputValue] = useState ("")

    useEffect (() => {
        getUsers ().then((users) => {
            //console.log(users);
            setUsers(users);
            setfilteredUsers(users)
        });
    },[])

    const onRefresh = () => {
        getUsers().then((users) => {
            setUsers(users);
            setfilteredUsers(users)
            setInputValue("")
        })
    }

    const onTyping = (e) => {
        setInputValue (e.target.value)
        const fUsers = filteredUsers.filter(user => user.name.first.includes(inputValue))
        setfilteredUsers(fUsers)
    }

    if (users.length === 0) return <div>  Loading....</div>
    return (
        <React.Fragment>
        <div>
        <input value = {inputValue} type="text" onChange = {onTyping}/>
            <button onClick={onRefresh}>Refresh page</button>
        </div>
        <div className={`main-container ${props.isListView ? '' : 'grid'}`}>
            {
            filteredUsers.map((user, index) =>props.isListView 
                ? <User userData={user} key={index} />
                : <GridCard userData={user} key={index}/>
            )
            }
        </div>
        </React.Fragment>
    )
}


/*export class  UserList extends Component {
    constructor(props) {
        super (props)
        this.state={
            users:[]
        }
    }
componentDidMount () {
    getUsers()
    .then(users => {
        this.setState({users})
    })
}
render(){

if(this.state.users.length === 0)

return <div>Loading...</div>
    return (
        <div className={`main-container ${this.props.isListView ? '' : 'grid'}`}>
            {
            randomUsers.results.map((user, index) => this.props.isListView 
                ? <User userData={user} key={index} />
                : <GridCard userData={user} key={index}/>
            )
            }
        </div>
    )
};
}*/