import React from "react";

const Members = props => {
   const membersStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      justifyContent: 'space-between',

   };

   const memberStyle = {
      display: 'flex',
      width: '60%',
      margin: '10px 20% 10px 20%',
      padding: '10px 0 10px 0',
      flexDirection: 'column',
      alignContent: 'center',
      justifyContent: 'space-between',
      color: '#FFFAFA',
      background: '#5F9EA0',
      border: '2px solid black'
   };

   const attsStyle = {
      display: 'flex',
      justifyContent: 'center'
   };

   const emailStyle = {
      fontSize: '1.2rem',
      fontWeight: 'normal',
      marginRight: '5px',
      marginLeft: '0px'
   };

   const roleStyle = {
      fontSize: '1.2rem',
      fontWeight: 'normal',
      marginRight: '5px',
      marginLeft: '20px'
   };

   const btnStyle = {
      width: '10%',
      margin: '5px 45% 5px 45%',
      color: '#5F9EA0',
      background: '#FFFAFA',
      fontWeight: 'bold'
   };

   return (
      <div className='members' style={membersStyle} >
         {props.members.map(member => (
            <div className='member' key={member.id} style={memberStyle}>
               <h4>{member.name}</h4>
               <div className='memberAtts' style={attsStyle}>
                  <h5><span style={emailStyle}>Email: </span>{member.email}</h5>
                  <h5><span style={roleStyle}>Role: </span>{member.role}</h5>
               </div>
               <button style={btnStyle}>Edit</button>
            </div>
         ))}
      </div>
   )
};

export default Members;