import React from 'react'
import LogInForm from './LogInForm';
import RegisterForm from './RegisterForm';

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
export default WelcomeForm
