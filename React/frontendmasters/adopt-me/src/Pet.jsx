const Pet = (props) => {
  return (
    <div>
      <h1 className="first-animal">{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
};

export default Pet;