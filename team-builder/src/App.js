import React, { useState } from 'react';

import './App.css';

import Members from "./components/Members";
import Heading from "./components/Heading";

import memberData from "./memberData";

const App = props => {

  const [members, setMembers] = useState(memberData);

  return (
     <div className="App">
       <Heading />
       <Members {...props} members={members}  />
     </div>
  )
};

export default App;