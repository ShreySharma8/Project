import { useState, useEffect } from "react";
import axios from "axios";

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


const MyContacts = () => {
    const [contacts, setContacts] = useState([]);
    const [userName, setUserName] = useState('');

    const getUsers = async () => {
        try {
            const res = await axios.get("https://6443f21e466f7c2b4b5df7ed.mockapi.io/users");
            console.log(res.data);
            setContacts(res.data);
            console.log(contacts)
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
            const res = await axios.delete(`https://6443f21e466f7c2b4b5df7ed.mockapi.io/users/${id}`);
            console.log(res);
            getUsers();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUsers();
    }, [])

    useEffect(() => {
        console.log("new user", userName)
    }, [userName])

    return (
        <div className="p-10">

            <h1 className="font-semibold text-2xl text-white text-center">My Contacts</h1>

            <form onSubmit={addUser} className="flex gap-3 my-2">
                <input
                    type="text"
                    name="name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Name"
                    className="border-4 w-1/4 rounded"
                />

                <button type="submit" className="py-1 px-2 font-semibold rounded bg-green-500">ADD USER</button>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                {
                    contacts.map((person) => (
                        <h3 className="bg-slate-400 flex items-center justify-between p-2 mb-1 shadow-md" key={person.id}>
                            <span className="font-semibold text-lg">
                                {person.name}
                            </span>

                            <button className="bg-orange-600 text-white font-semibold rounded p-1" onClick={() => deleteContact(person.id)}>Remove Contact</button>
                        </h3>
                    ))
                }
            </div>
        </div>
    )
}

export default MyContacts;