import React, { useRef, useState } from "react"
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = props => {
   const nameInputRef=useRef();
   const ageInputRef = useRef();
   const collegeInputRef=useRef();

    
    const [error,setError]=useState()
const submitHandler= event => {
    event.preventDefault()

    const enteredName=nameInputRef.current.value;
    const enteredUserAge=ageInputRef.current.value;
    const enteredCollegeName=collegeInputRef.current.value;
    if(enteredName.trim().length === 0 || enteredUserAge.trim().length===0 || enteredCollegeName.trim().length === 0 )
    {
        setError({
            title:'Invalid input',
            message:'Please enter a valid and age (non empty value).'
        })
        return
    }
    if(+enteredUserAge<1)
    {
        setError({ 
            title:"Invalid age",
            message:'Please enter a valid age (>0).'
        })
        return
    }
    props.onAddUser(enteredName,enteredUserAge)
    nameInputRef.current.value='';
    ageInputRef.current.value='';
    collegeInputRef.current.value='';
    
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
        <input className="username" type="text" ref={nameInputRef}/>
        <label htmlFor="age">Age(Year)</label>
        <input className="age" type="number" ref={ageInputRef}/>
        <label htmlFor="cllg">College Name</label>
        <input className="cllg" type="text" ref={collegeInputRef}/>
        <Button type="submit">AddUser</Button>
    </form>
    </Card>
    </Wrapper>
    )
}
export default AddUser