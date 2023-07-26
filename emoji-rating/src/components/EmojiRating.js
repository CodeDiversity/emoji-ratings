import './EmojiRating.css';

const React = require('react');
const { useState } = require('react');

const EmojiRating = () => {
  const emojis = [
    { emoji: '😍', label: 'Great!', value: 5 },
    { emoji: '😄', label: 'Good!', value: 4 },
    { emoji: '😐', label: 'Meh', value: 3 },
    { emoji: '😞', label: 'Bad', value: 2 },
    { emoji: '😠', label: 'Terrible!', value: 1 },
  ];

  const [selectedRating, setSelectedRating] = useState(null);

  const handleEmojiClick = (value) => {
    setSelectedRating(value);
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
