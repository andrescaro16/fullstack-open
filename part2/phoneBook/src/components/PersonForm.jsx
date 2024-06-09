import { useState } from "react";
import phoneBookService from "../services/phoneBook";

const PersonForm = ({ persons, setPersons, setError, setSuccess }) => {
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

  const handleSubmit = async (event) => {
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
    
        try {
          const updatedPerson = await phoneBookService.putPerson(data);
          setPersons(
            persons.map((person) =>
              person.id != updatedPerson.id ? person : updatedPerson,
            ),
          );
    
          setSuccess(`'${data.name}' updated`);
          setTimeout(() => {
            setSuccess("");
          }, 5000);
        } catch {
          setError(`Error trying to update the number of '${data.name}'`);
          setTimeout(() => {
            setError("");
          }, 5000);
        }
      }
    } else {
      const data = {
        ...formData,
        id: (persons.length + 1).toString(),
      };

      try {
        const postedPerson = await phoneBookService.postPerson(data);
        setPersons(persons.concat(postedPerson));

        setSuccess(`'${data.name}' added`);
        setTimeout(() => {
          setSuccess("");
        }, 5000);
      } catch {
        setError(`Error trying to save '${data.name}' contact`);
        setTimeout(() => {
          setError("");
        }, 5000);
      }
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
