import { useState, useEffect } from "react";
import phoneBookService from "./services/phoneBook";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import "./index.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [personsToShow, setPersonsToShow] = useState(persons);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    phoneBookService.getAll().then((persons) => setPersons(persons));
  }, []);

  const deleteContact = async (id, name) => {
    if (window.confirm(`Sure you want to delete ${name}?`)) {
      try {
        const deletedContact = await phoneBookService.deletePerson(id);
        setPersons(
          persons.filter((person) => person.id != deletedContact.id),
        );

        setSuccess(`Contact '${name}' deleted`);
        setTimeout(() => {
          setSuccess("");
        }, 5000);
      } catch (error) {
        if (error.response.status === 404) {
          setError(
            `Information of ${name} has already been removed from the server`,
          );
          setTimeout(() => {
            setError(null);
          }, 5000);
        } else {
          setError(
            `Error deleting contact ${name} from the server. Please try again later.`,
          );
          setTimeout(() => {
            setError(null);
          }, 5000);
        }
      }
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      {error && <Notification className="error-notification" message={error} />}
      {success && (
        <Notification className="success-notification" message={success} />
      )}
      <Filter data={persons} setData={setPersonsToShow} />
      <h2>Add a new</h2>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        setError={setError}
        setSuccess={setSuccess}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
