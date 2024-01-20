import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";

function App() {
  const firstContacts = contactsData.slice(0, 5);
  const [contacts, setContacts] = useState(firstContacts);

  const addContact = () => {
    const randomContact = Math.floor(Math.random() * contactsData.length);
    const newContact = contactsData[randomContact];
    if (!contacts.some((contact) => contact.name === newContact.name)) {
      setContacts((prevContacts) => [...prevContacts, newContact]);
    }
  };
  const sortByName = () => {
    setContacts((firstContacts) =>
      [...firstContacts].sort((a, b) => a.name.localeCompare(b.name))
    );
  };

  const sortByPopularity = () => {
    setContacts((firstContacts) =>
      [...firstContacts].sort((a, b) => b.popularity - a.popularity)
    );
  };

  const deleteContact = (id) => {
    setContacts((firstContacts) =>
      firstContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addContact}>Add Contact</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <button onClick={sortByName}>Sort by Name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.name}>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt={contact.name}
                  style={{ width: "70px", height: "70px", borderRadius: "50%" }}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? "🏆" : "❌"}</td>
              <td>{contact.wonEmmy ? "⭐️" : "❌"}</td>
              <td>
                <button onClick={() => deleteContact(contact.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
