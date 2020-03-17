import React from "react";

const Members = props => {

   return (
      <div className='members'>
         {props.members.map(member => (
            <div className='member' key={member.id}>
               <h4>{member.name}</h4>
               <div className='memberAtts'>
                  <h5>Email: {member.email}</h5>
                  <h5>Role: {member.role}</h5>
               </div>
            </div>
         ))}
      </div>
   )
};

export default Members;