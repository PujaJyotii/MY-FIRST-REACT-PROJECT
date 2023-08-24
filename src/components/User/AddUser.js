import React, { useState } from "react"
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = props => {
    const [enteredUsername,setEnteredUsername]=useState('')
    const [enteredAge,setEnteredAge]=useState('')
    const [error,setError]=useState()
const submitHandler= event => {
    event.preventDefault()
    console.log(enteredUsername,enteredAge);
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length===0)
    {
        setError({
            title:'Invalid input',
            message:'Please enter a valid and age (non empty value).'
        })
        return
    }
    if(+enteredAge<1)
    {
        setError({ 
            title:"Invalid age",
            message:'Please enter a valid age (>0).'
        })
        return
    }
    props.onAddUser(enteredUsername,enteredAge)
    setEnteredUsername('');
    setEnteredAge('')
}
const usernameChangeHandler=(event) => {
    setEnteredUsername(event.target.value)
}

const userChangeAgeHandler=(event) => {
    setEnteredAge(event.target.value)
}

const errorHandler =() => {
    setError(null)
}

    return (
        <Wrapper>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
        <form onSubmit={submitHandler}>
        <label htmlFor="username">Name</label>
        <input className="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
        <label htmlFor="age">Age(Year)</label>
        <input className="age" type="number" value={enteredAge} onChange={userChangeAgeHandler} />
        <Button type="submit">AddUser</Button>
    </form>
    </Card>
    </Wrapper>
    )
}
export default AddUser