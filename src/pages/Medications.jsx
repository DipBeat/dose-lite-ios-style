import React, { useState, useEffect } from 'react';

export default function Medications() {
  const [meds, setMeds] = useState(() => JSON.parse(localStorage.getItem('meds')) || []);
  const [name, setName] = useState('');

  useEffect(() => {
    localStorage.setItem('meds', JSON.stringify(meds));
  }, [meds]);

  const addMed = () => {
    if (name.trim()) {
      setMeds([...meds, { id: Date.now(), name }]);
      setName('');
    }
  };

  const removeMed = (id) => {
    setMeds(meds.filter(m => m.id !== id));
  };

  return (
    <div className="page">
      <h2>Medications</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Medication name" />
      <button onClick={addMed}>Add</button>
      <ul>
        {meds.map(m => (
          <li key={m.id}>
            {m.name}
            <button onClick={() => removeMed(m.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
