import { useState } from "react";
import phoneBookService from "../services/phoneBook";

const PersonForm = ({ persons, setPersons }) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const exists = persons.find((person) => person.name === formData?.name);

    if (exists) {
      if (
        window.confirm(
          `${formData?.name} is already added to phonebook, replace the old number with a new one?`,
        )
      ) {
        const data = {
          ...formData,
          id: exists.id,
        };

        phoneBookService
          .putPerson(data)
          .then((updatedPerson) =>
            setPersons(
              persons.map((person) =>
                person.id != updatedPerson.id ? person : updatedPerson,
              ),
            ),
          );
      }
    } else {
      const data = {
        ...formData,
        id: (persons.length + 1).toString(),
      };

      phoneBookService
        .postPerson(data)
        .then((newPerson) => setPersons(persons.concat(newPerson)));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:{" "}
        <input name="name" value={formData?.newName} onChange={handleChange} />
      </div>
      <div>
        number:{" "}
        <input
          name="number"
          value={formData?.newNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
