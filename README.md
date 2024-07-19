# Simon Game

This repository contains the files for a Simon game implementation using HTML, CSS, and JavaScript.

## File Descriptions

- `index.html`: The main HTML file that structures the game interface.
- `styles.css`: The CSS file that styles the game interface.
- `game.js`: The JavaScript file that contains the game logic (to be created and added to the repository).

## Project Overview

The Simon game is a simple memory game where players need to remember and repeat a sequence of colors. The game gets progressively harder as the sequence length increases.

## Files

### index.html

The HTML file structures the game interface, including the title and the color buttons.

### styles.css

The CSS file styles the game interface, defining the appearance of the game buttons, the title, and the game over state.

```css
body {
  text-align: center;
  background-color: #011F3F;
}

#level-title {
  font-family: 'Press Start 2P', cursive;
  font-size: 3rem;
  margin:  5%;
  color: #FEF2BF;
}

.container {
  display: block;
  width: 50%;
  margin: auto;
}

.btn {
  margin: 25px;
  display: inline-block;
  height: 200px;
  width: 200px;
  border: 10px solid black;
  border-radius: 20%;
}

.game-over {
  background-color: red;
  opacity: 0.8;
}

.red {
  background-color: red;
}

.green {
  background-color: green;
}

.blue {
  background-color: blue;
}

.yellow {
  background-color: yellow;
}

.pressed {
  box-shadow: 0 0 20px white;
  background-color: grey;
}
