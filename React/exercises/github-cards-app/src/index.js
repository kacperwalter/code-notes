import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
	const testData = [
			{name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
      {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  		{name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
	];
*/

// Card
class Card extends React.Component {
    render() {
        return (
            <div className="github-profile">
                <img src="https://placehold.it/75" />
                <div className="info">
                    <div className="name">Name here...</div>
                    <div className="company">Company here...</div>
                </div>
            </div>
        );
    }
}

// List
class App extends React.Component {
    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <Card />
            </div>
        );
    }
}


ReactDOM.render(
    <App title="The Github Cards App" />,
    document.getElementById('root'),
)