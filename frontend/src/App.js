import React, { useEffect, useState } from 'react';
import InviteeForm from './components/InviteeForm';
import InviteeList from './components/InviteeList';

function App() {
  const [invitees, setInvitees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/invitees')
      .then(res => res.json())
      .then(setInvitees);
  }, []);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">VBDA 2025 Invitations</h1>
      <InviteeForm onAdd={(newInvitee) => setInvitees([...invitees, newInvitee])} />
      <InviteeList invitees={invitees} />
    </div>
  );
}

export default App;
