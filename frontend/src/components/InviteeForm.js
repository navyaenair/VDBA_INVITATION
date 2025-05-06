import React, { useState } from 'react';

function InviteeForm({ onAdd }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5001/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description })
    });
    const result = await response.json();

    const newInvitee = { name, email, description, category: result.category };
    await fetch('http://localhost:5000/api/invitees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newInvitee)
    });
    onAdd(newInvitee);
    setName(''); setEmail(''); setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required className="border p-2" />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required className="border p-2" />
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Describe the person..." required className="border p-2" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Invitee</button>
    </form>
  );
}

export default InviteeForm;
