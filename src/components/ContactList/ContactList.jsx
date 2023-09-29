import React from 'react';

export default function ContactList({ contacts, filter, deleteContact }) {
  return (
    <div>
      <ul>
        {contacts
          .filter(el => el.name.toLowerCase().includes(filter.toLowerCase()))
          .map(el => (
            <li key={el.id}>
              {el.name}: {el.number}{' '}
              <button onClick={() => deleteContact(el.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
