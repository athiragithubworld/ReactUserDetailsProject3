import React ,{useState} from "react";
import Card from "../UI/Card";
import classes from  './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";


const AddUser = (props) =>{

    const [enteredUsername ,setEnteredUsername] =useState('')
    const [enteredAge ,setenteredAge] =useState('')
    const [Error , setError] =useState()


const addUserHandler = (event) =>{
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
        setError({
            title:'Invalid Output',
            message:"Please enter a valid name and age (non-empty values)."
        })
        return;
    }
     if (+enteredAge<1){
        setError({
            title:'Invalid Age',
            message:"Please enter a valid age (> 0)."
        })
        return;
     }
    // console.log(enteredUsername,enteredAge);
    props.onAddUser(enteredUsername,enteredAge);
    setEnteredUsername('');
    setenteredAge('');
}

const usernameChangeHandler =(event) =>{
    setEnteredUsername(event.target.value);
}

const userageChangeHandler =(event) =>{
    setenteredAge(event.target.value);
}

const errorHandler = () =>{
    setError(null);
}

    return (
        <div>
        {Error && <ErrorModal title={Error.title} message={Error.message} onConfirm={errorHandler}></ErrorModal>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">User Name</label>
                <input id ="username"
                 type="text"
                 value={enteredUsername}
                 onChange={usernameChangeHandler} 
                ></input>
                <label htmlFor="age">Age(Years)</label>
                <input id="age"
                 type="number"
                 value={enteredAge}
                 onChange={userageChangeHandler}
                ></input>
                <Button type="submit" >Add User</Button>
            </form>
        </Card>
        </div>
    )
}

export default AddUser;