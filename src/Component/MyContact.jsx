// GET -  retrieve data /api/endpoint
// POST -  send and retrieve data (body required) /api/endpoint
// DELETE - delete data (id required) /api/:id
// PUT - Update data (id & body required) /api/:id

// 1. Create user from component
// 2. Show user count in navbar
// 3. Add search filter in navbar
// 4. Filter by gender
// 5. Custom modal to view user data
// 6. Update user form component with pre-filled data
// 7. Add loading animation

import { useState, useEffect } from "react";
import axios from "axios";

const MyContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [userName, setUserName] = useState('');

  const getUsers = async () => {
    try {
      const res = await axios.get("https://6443f21e466f7c2b4b5df7ed.mockapi.io/users");
      setContacts(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const addUser = async (e) => {
    e.preventDefault();
    try {
      const payload = { name: userName };
      const res = await axios.post("https://6443f21e466f7c2b4b5df7ed.mockapi.io/users", payload);
      setContacts([...contacts, res.data]);
      setUserName('');
    } catch (error) {
      console.log(error);
    }
  }

  const deleteContact = async (id) => {
    try {
      await axios.delete(`https://6443f21e466f7c2b4b5df7ed.mockapi.io/users/${id}`);
      setContacts(contacts.filter(person => person.id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl font-semibold mb-8 text-center">My Contacts</h1>

      <form onSubmit={addUser} className="flex items-center gap-4 mb-6">
        <input
          type="text"
          name="name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter name"
          className="border p-2 rounded w-2/3 focus:outline-none focus:border-blue-500"
        />
        <button type="submit" className="py-2 px-4 bg-green-500 text-white font-semibold rounded hover:bg-green-600 focus:outline-none">
          Add Contact
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {contacts.map((person) => (
          <div key={person.id} className="bg-white p-6 rounded-md shadow-md">
            <p className="text-xl font-semibold mb-4">{person.name}</p>
            <button
              className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 focus:outline-none"
              onClick={() => deleteContact(person.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyContacts;

