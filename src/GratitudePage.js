import React, { useState, useEffect } from 'react';

const GratitudePage = () => {
  // Load from local storage when the component mounts
  const getInitialGratitudes = () => {
    const storedGratitudes = localStorage.getItem('gratitudes');
    return storedGratitudes ? JSON.parse(storedGratitudes) : {};
  };

  const [gratitudes, setGratitudes] = useState(getInitialGratitudes);
  const [newGratitude, setNewGratitude] = useState('');
  const [collapsedDates, setCollapsedDates] = useState({});

  // Save gratitudes to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('gratitudes', JSON.stringify(gratitudes));
  }, [gratitudes]);

  // Handle adding new gratitude
  const addGratitude = () => {
    if (!newGratitude.trim()) return;

    const today = new Date().toISOString().split('T')[0];
    const updatedGratitudes = { ...gratitudes };

    if (!updatedGratitudes[today]) {
      updatedGratitudes[today] = [];
    }
    updatedGratitudes[today].push(newGratitude);
    setGratitudes(updatedGratitudes);
    setNewGratitude('');
  };

  // Toggle collapse/uncollapse for a date
  const toggleCollapse = (date) => {
    setCollapsedDates((prev) => ({
      ...prev,
      [date]: !prev[date],
    }));
  };

  return (
    <div className="gratitude-page">
      <h2>Gratitude Journal</h2>
      <div className="input-section">
        <input
          type="text"
          value={newGratitude}
          onChange={(e) => setNewGratitude(e.target.value)}
          placeholder="What are you grateful for?"
        />
        <button onClick={addGratitude}>Add Gratitude</button>
      </div>

      <div className="gratitude-list">
        {Object.keys(gratitudes)
          .sort((a, b) => new Date(b) - new Date(a))
          .map((date) => (
            <div key={date} className="gratitude-group">
              <div className="date-header" onClick={() => toggleCollapse(date)}>
                <h3>{date}</h3>
                <button>{collapsedDates[date] ? 'Show' : 'Hide'}</button>
              </div>
              {!collapsedDates[date] && (
                <ul>
                  {gratitudes[date].map((gratitude, index) => (
                    <li key={index}>{gratitude}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default GratitudePage;
