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

  const handleEmojiClick = (id) => {
    // TODO: Update the selectedRating state with the clicked emoji's value instead of id
    const selectedEmoji = emojis.find((emoji) => emoji.value === id);
    setSelectedRating(selectedEmoji ? selectedEmoji.value : null);
  };

  return (
    <div>
      <h2>Rate this item:</h2>
      <div className="emoji-container">
        {emojis.map(({ emoji, label, value }) => (
          <div
            key={value}
            className={`emoji ${selectedRating === value ? 'selected' : ''}`}
            onClick={() => handleEmojiClick(value)}
          >
            {emoji}
          </div>
        ))}
      </div>
      {selectedRating !== null && (
        <p>Selected Rating: {selectedRating}</p>
      )}
    </div>
  );
};

export default EmojiRating;
