import { useState, useEffect } from 'react';
import Pet from './Pet';

const ANIMIALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];
const breeds = [];

const SearchParams = () => {
  // useState means default value of some state
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  const [pets, setPets] = useState([]);

  // everytime animal changes, useEffect will run
  useEffect(() => {
    requestPets();
  }, [animal])

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed('');
            }}
          >
            <option />
            {ANIMIALS.map((animal) => (
              <option value={animal}>{animal}</option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            disabled={breeds.length === 0}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />
            {breeds.map((breed) => (
              <option value={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {
        pets.map(pet => (
          <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
        ))
      }
    </div>
  );
};

export default SearchParams;
