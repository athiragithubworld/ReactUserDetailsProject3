import React ,{useState ,useRef} from "react";
import Card from "../UI/Card";
import classes from  './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";


const AddUser = (props) =>{
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const collegeInputRef =useRef();


    // const [enteredUsername ,setEnteredUsername] =useState('')
    // const [enteredAge ,setenteredAge] =useState('')
    const [Error , setError] =useState()


const addUserHandler = (event) =>{
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    const enteredCollege =collegeInputRef.current.value;



    if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0 || enteredCollege.trim().length ===0){
        setError({
            title:'Invalid Output',
            message:"Please enter a valid name and age (non-empty values)."
        })
        return;
    }
     if (+enteredUserAge<1){
        setError({
            title:'Invalid Age',
            message:"Please enter a valid age (> 0)."
        })
        return;
     }
    // console.log(enteredUsername,enteredAge);
    props.onAddUser(enteredName,enteredUserAge,enteredCollege);
    nameInputRef.current.value='';
    ageInputRef.current.value='';
    collegeInputRef.current.value='';
    
    // setEnteredUsername('');
    // setenteredAge('');
}

// const usernameChangeHandler =(event) =>{
//     setEnteredUsername(event.target.value);
// }

// const userageChangeHandler =(event) =>{
//     setenteredAge(event.target.value);
// }

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
                //  value={enteredUsername}
                //  onChange={usernameChangeHandler}
                 ref={nameInputRef} 
                ></input>

                <label htmlFor="age">Age(Years)</label>
                <input id="age"
                 type="number"
                //  value={enteredAge}
                //  onChange={userageChangeHandler}
                 ref={ageInputRef}
                ></input>

                <label htmlFor="college">College Name</label>
                <input id ="college"
                 type="text"
                //  value={enteredUsername}
                //  onChange={usernameChangeHandler}
                 ref={collegeInputRef} 
                ></input>

                <Button type="submit" >Add User</Button>
            </form>
        </Card>
        </div>
    )
}

export default AddUser;