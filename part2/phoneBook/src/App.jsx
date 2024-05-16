import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number: "040-123456" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const exists = persons.find((person) => person.name === newName);
    !exists
      ? setPersons(persons.concat({ name: newName, number: newNumber }))
      : alert(`${newName} is already added to phonebook`);
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.number}>{person.name} {person.number}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
