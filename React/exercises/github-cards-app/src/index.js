import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  	{name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];


class FetchApi {
    constructor(url) {
        this.url = url;
    }
    async fetch() {
        const resp = await fetch(this.url);
        const data = await resp.json();
        return data; 
    }
}

const fetchProfile = new FetchApi('https://api.github.com/users/kacperwalter');
// fetchProfile.fetch().then(data => console.log(data.login));


const CardList = (props) => {
    return(
    <div>
        {testData.map(profile => <Card {...profile}/>)}
    </div>
    )
};

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

class Form extends React.Component {
    render() {
        return (
            <form action="">
                <input type="text" placeholder="GitHub username"/>
                <button>AddCard</button>
            </form>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <CardList />
            </div>
        );
    }
}

ReactDOM.render(
    <App title="The Github Cards App" />,
    document.getElementById('root'),
)