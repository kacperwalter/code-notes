import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import './index.css';

class Card extends React.Component {
    render() {
        const profile = this.props;
        return (
            <div className="github-profile">
                <img src={profile.avatar_url}/>
                <div className="info">
                    <div className="name">{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        );
    }
}

const CardList = (props) => {
    return(
    <div>
        {props.profiles.map(profile => <Card {...profile}/>)}
    </div>
    )
};

// Event handler in React UI
class Form extends React.Component {
    state = { userName: '', empty: '' };
    handleSubmit = async (event) => {
        event.preventDefault(); // its important - without that form will refresh the page
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(resp.data);
        this.setState({ userName: '' });
    };
    resetInput = () => {
        
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                type="text"
                value={this.state.userName}
                onChange={event => this.setState({ userName: event.target.value })}
                placeholder="GitHub username" 
                required
                />
                <button>AddCard</button>
            </form>
        );
    }
}

class App extends React.Component {
    state = {
        profiles: [],
    };
    addNewProfile = (profileData) => {
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profileData],
        }));
    };
    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <Form onSubmit={this.addNewProfile}/>
                <CardList profiles={this.state.profiles}/>
            </div>
        );
    }
}

ReactDOM.render(
    <App title="The Github Cards App" />,
    document.getElementById('root'),
)