import { useState, useEffect } from "react";
import phoneBookService from "./services/phoneBook";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [personsToShow, setPersonsToShow] = useState(persons);

  useEffect(() => {
    phoneBookService.getAll().then((persons) => setPersons(persons));
  }, []);

  const deleteContact = (id, name) => {
    if (window.confirm(`Sure you want to delete ${name}?`)) {
      phoneBookService
        .deletePerson(id)
        .then((deletedContact) => {
          setPersons(persons.filter((person) => person.id != deletedContact.id))
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter data={persons} setData={setPersonsToShow} />
      <h2>Add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
