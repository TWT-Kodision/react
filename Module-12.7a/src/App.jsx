import { useEffect, useState } from "react";
import { UserDetail } from "./UserDetail";
import { UserForm } from "./UserForm";

const App = () => {
  const [usersList, setUsersList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/users");
      const json = await response.json();
      setUsersList(json);
    }
    fetchData();
  }, []);

  const createUser = async (user) => {
    // No error handling, normally you would do that.
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json;charset=utf-8" },
    });
    user.id = (await response.json()).id;
    setUsersList(users.concat(user));
  };

  return (
    <div className="App">
      <h1>React Hooks exercise starter</h1>
      <UserForm createUser={createUser} />
      <ul>
        {usersList.map((user) => (
          <li onClick={() => setSelectedUser(user)} key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
      {selectedUser && <UserDetail user={selectedUser} />}
    </div>
  );
};

export default App;
