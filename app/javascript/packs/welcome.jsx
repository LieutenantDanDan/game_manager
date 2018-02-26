import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


class LogInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert('A name and password was submitted: ' + this.state.name + ' ' + this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input type="text" name="username" value={this.state.name} onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Password:
                        <input type="text" name="password" value={this.state.password} onChange={this.handleInputChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <p> {this.state.username} </p>
            </div>
        );
    }

}

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            steamid: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert('A name and password was submitted: ' + this.state.name + ' ' + this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input type="text" name="username" value={this.state.name} onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Steam ID:
                        <input type="text" name="steamid" value={this.state.steamid} onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Password:
                        <input type="text" name="password" value={this.state.password} onChange={this.handleInputChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <p> {this.state.username} </p>
            </div>
        );
    }

}

class WelcomeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            newUser: !this.state.newUser
        })
    }

    render() {
        var Form = this.state.newUser ? RegisterForm : LogInForm;
        return (
            <div >
                <Form />
                <button onClick={this.handleClick}>
                    { this.state.newUser ? 'Have an account?' : 'New User?' }
                </button>
            </div>

        )
    }
}


document.addEventListener('DOMContentLoaded', () => {

    ReactDOM.render(
        <WelcomeForm />,
        document.body.appendChild(document.createElement('div'))
    );
})