import React, { useState } from 'react';
import { Button } from 'reactstrap';

const Form = props => {
   const formStyle = {
      marginTop: '30px'
   };

   const nameStyle = {
      marginLeft: '0px',
      marginRight: '10px'
   };

   const lblStyle = {
      marginLeft: '10px',
      marginRight: '10px'
   };

   const btnStyle = {
      marginTop: '15px',
      marginBottom: '15px',
      background: '#5F9EA0'
   };

   const [member, setMember] = useState({ name: '', email: '', role: '' });

   const handleChange = event => {
      setMember({...member, [event.target.name]: event.target.value });
   };

   const handleSubmit= event => {
      event.preventDefault();
      props.addMember(member);
      setMember({ name: '', email: '', role: '' });
   };

   return (
      <form onSubmit={event => handleSubmit(event)} style={formStyle} >
         <label htmlFor='nameInput' style={nameStyle}>Name: </label>
         <input
            type='text'
            maxLength='30'
            id='nameInput'
            name='name'
            placeholder='Full Name'
            value={member.name}
            onChange={event => handleChange(event)}
            autoFocus='true'
         />

         <label htmlFor='emailInput' style={lblStyle}>Email: </label>
         <input
            type='text'
            maxLength='30'
            id='emailInput'
            name='email'
            placeholder='name@example.com'
            value={member.email}
            onChange={event => handleChange(event)}
         />

         <label htmlFor='roleInput' style={lblStyle}>Role: </label>
         <input
            type='text'
            maxLength='30'
            id='roleInput'
            name='role'
            placeholder='Team Role'
            value={member.role}
            onChange={event => handleChange(event)}
         />
         <br/>
         <Button type='submit' style={btnStyle}>Add New Member</Button>
      </form>
   )
};

export default Form;