//tehtävä 2.1-2.5
/** 
import Course from "./Course";
const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <Course course={courses} />
    </div>
  );
};

export default App;
*/
import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const handleChange = (event) => {
    setNewName(event.target.value);
    persons.forEach((element) => {
      if (event.target.value === element.name) {
        alert(`${newName} is already added to phonebook`);
      } else {
        setNewName(event.target.value);
      }
    });
  };
  const handlePerson = (event) => {
    console.log(Alert);
    event.preventDefault();
    const newPersons = [...persons, { name: newName }];
    setPersons(newPersons);
    setNewName("");
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handlePerson}>
        <div>
          name: <input onChange={handleChange} value={newName} />
          <br />
          number: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((henkilo) => (
          <li key={Math.random()}>{henkilo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;


