import Card from "../UI/Card";
import classes from './UserList.module.css'

const UserList =(props) =>{

    // const saveUserList = (enteredUserList) =>{

    //     const dataUserList = {
    //         username : props.username,
    //         age :props.age,
    //         id:Math.random().toString()
    //     }
    // }

    return(
        <Card className={classes.users}>
        <ul>
            {props.users.map( user => 
            <li key ={user.id}> 
                {user.name} ({user.age} years old) 
            </li>
            )}
        </ul>
        </Card>
    )

}
export default UserList;