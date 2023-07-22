# Emoji Rating Component

![Emoji Rating](emoji-rating-screenshot.png)

## Description

The Emoji Rating Component is a fun and interactive React component that allows users to rate an item using emojis. It displays a list of emojis representing different ratings, and users can click on an emoji to select their rating. The selected emoji will be visually distinguished from the others, and the corresponding numerical value of the selected rating will be displayed on the screen.

## Table of Contents

- [Emoji Rating Component](#emoji-rating-component)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Challenges](#challenges)
  - [License](#license)

## Installation

To use the Emoji Rating Component in your React project, follow these steps:

1. Install the package using npm or yarn:

## Challenges

1. **Challenge 1: Define the Emoji Array**
   - Open the `EmojiRating.js` file.
   - In the `emojis` array, define emojis with different ratings and their values.
     Example: `{ emoji: '😍', label: 'Great!', value: 5 }`

2. **Challenge 2: Implement the Emoji Rating Logic**
   - Inside the `EmojiRating` component, implement the `handleEmojiClick` function.
   - Update the `selectedRating` state with the clicked emoji's value when an emoji is clicked.

3. **Challenge 3: Display the Emojis**
   - Use the `map` function to render each emoji along with its label inside a `div` element.
   - Apply the `emoji` and `label` properties from the `emojis` array in the mapping.

4. **Challenge 4: Highlight the Selected Emoji**
   - Conditionally add the "selected" class to the clicked emoji so that it appears visually distinguished from the others.
   - You can use the `selectedRating` state to achieve this effect.

5. **Challenge 5: Display the Selected Rating Value**
   - Conditionally display the selected rating value below the emoji container when a rating is selected.
   - Use the `selectedRating` state to display the numerical value of the selected emoji.

6. **Challenge 6: Include the EmojiRating Component**
   - Open the `App.js` file.
   - Add the import statement for the `EmojiRating` component at the top of the file.
   - Inside the `App` component, render the `EmojiRating` component using `<EmojiRating />`.

**Bonus Challenge (Optional): Customize and Experiment**
- Feel free to customize the emojis, labels, and values according to your preferences.
- Add more emojis to make the Emoji Rating component even more fun!
- Experiment with CSS styles and animations to enhance the user experience.


## License

This project is licensed under the [MIT License](LICENSE).
