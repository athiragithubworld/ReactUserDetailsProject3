import React , {useState} from 'react';
// import './App.css'
import AddUser from './Components/User/AddUser';
import UserList from './Components/User/UserList';

function App() {
const [userList , setUserList] = useState([]);

const addUserHandler = (uName ,uAge) =>{
  setUserList((prevUserList) =>{
    return [...prevUserList ,{name:uName ,age:uAge ,id:Math.random().toString()}]
  })
}


  return (
    <div>
        <AddUser onAddUser={addUserHandler}></AddUser>
        <UserList users={userList}></UserList>
    </div>
  );
}

export default App;
