import React from 'react';
import axios from 'axios';


export class Form extends React.Component {
    state = { userName: '' };

    reactoSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(response.data);
        this.setState({ userName: '' });
    }

    render() {
        return (
            <form onSubmit={this.reactoSubmit} >
                <input
                    type="text"
                    value={this.state.userName}
                    onChange={event => this.setState({ userName: event.target.value })}
                    placeholder="GitHub username"
                    required
                />
                <button>Add User Profile</button>
            </form>
        );
    }
}