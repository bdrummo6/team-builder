import React, { useState } from 'react';

import './App.css';

import Heading from "./components/Heading";
import Members from "./components/Members";
import Form from "./components/Form";


import memberData from "./memberData";

const App = props => {

  const [members, setMembers] = useState(memberData);

  const addMember = member => {
      const newMember = {
         id: Date.now(),
         name: member.name,
         email: member.email,
         role: member.role
      };

      setMembers([ ...members, newMember])
   };
   return (
         <div className="App">
         <Heading />
         <Form {...props} addMember={addMember} />
         <Members {...props} members={members}  />
      </div>
   )
   };

export default App;