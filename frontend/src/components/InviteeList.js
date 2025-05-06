import React from 'react';

function InviteeList({ invitees }) {
  return (
    <ul className="space-y-2">
      {invitees.map((invitee, index) => (
        <li key={index} className="border p-2 rounded">
          <strong>{invitee.name}</strong> ({invitee.email})<br />
          <em>{invitee.category}</em>: {invitee.description}
        </li>
      ))}
    </ul>
  );
}

export default InviteeList;
