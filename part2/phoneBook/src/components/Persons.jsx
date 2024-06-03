const Persons = ({ personsToShow, deleteContact }) => {
  return (
    <ul>
      {personsToShow.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}{" "}
          <button onClick={() => deleteContact(person.id, person.name)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Persons;
