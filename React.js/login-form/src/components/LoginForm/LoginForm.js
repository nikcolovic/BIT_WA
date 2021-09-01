import React from "react";
import "./LoginForm.css";

class LoginForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    getUsernameInput = (e) => {
        this.setState({ username: e.target.value })
    }

    getPasswordInput = (e) => {
        this.setState({ password: e.target.value });
    }

    alertInput = () => {
        alert(`Username: ${this.state.username}
Password: ${this.state.password}`);
    }

    removeInput = () => {
        this.setState({
            username: '',
            password: ''
        })
    }

    render() {
        return (
            <div className="LoginForm__wrapper" >
                <h1>Login</h1>
                <input type="text" id="LoginForm__username" placeholder="username" value={this.state.username} onChange={this.getUsernameInput} />
                <input type="password" id="LoginForm__password" placeholder="password" value={this.state.password} onChange={this.getPasswordInput} />
                <button onClick={this.alertInput} id="LoginForm__login">login</button>
                <button onClick={this.removeInput} type="reset" value="Reset" id="LoginForm__reset" >reset</button>
            </div>
        )
    }
}
export { LoginForm };