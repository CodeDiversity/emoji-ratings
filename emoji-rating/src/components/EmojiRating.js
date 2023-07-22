import React, { useState } from 'react';

const EmojiRating = () => {
  // TODO: Define an array of emojis with different ratings and their values (e.g., { emoji: '😍', label: 'Great!', value: 5 })
  const emojis = [
    { emoji: '😍', label: 'Great!', value: 5 },
    { emoji: '😄', label: 'Good!', value: 4 },
    { emoji: '😐', label: 'Meh', value: 3 },
    { emoji: '😞', label: 'Bad', value: 2 },
    { emoji: '😠', label: 'Terrible!', value: 1 },
  ];

  const [selectedRating, setSelectedRating] = useState(null);

  // TODO: Implement a function to handle emoji clicks and update the selected rating
  const handleEmojiClick = (value) => {
    // TODO: Update the selectedRating state with the clicked emoji's value
    setSelectedRating(value);
  };

  return (
    <div>
      <h2>Rate this item:</h2>
      <div className="emoji-container">
        {/* TODO: Use the map function to render each emoji with its label */}
        {emojis.map(({ emoji, label, value }) => (
          <div
            key={value}
            className={`emoji ${selectedRating === value ? 'selected' : ''}`}
          >
            {emoji}
          </div>
        ))}
      </div>
      {selectedRating !== null && (
        // TODO: Display the selected rating value below the emoji container
        <p>Selected Rating: {selectedRating}</p>
      )}
    </div>
  );
};

export default EmojiRating;
