const Pet = (props) => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement('h1', { className: 'first-animal'}, props.name),
      React.createElement('h2', {}, props.animal),
      React.createElement('h2', {}, props.breed),
    ]
  )
}

const App = () => {
  return React.createElement(
    'div', 
    { className: 'test-class'},
    [
      React.createElement('h1', {}, 'Adopt Me!'),
      React.createElement(Pet, {
        animal: "Dog",
        name: "Luna",
        breed: "Havaneese",
      }),
      React.createElement(Pet, {
        animal: "Bird",
        name: "Pepper",
        breed: "Cockatiel",
      }),
      React.createElement(Pet, {
        animal: "Cat",
        name: "Doink",
        breed: "Mixed",
      }),
    ]
  )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))