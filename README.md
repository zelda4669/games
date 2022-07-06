# Minigames

This site features Javascript-based minigames. This version took my console-based rock, paper, scissors game and added a user interface. The most recent update also adds a second game, a sketchpad.

## Version Overview

### Rock, Paper, Scissors

Using vanilla JS, the user can play rock, paper, scissors against the computer. The site dynamically keeps score so the user can see how they are doing vs the computer, and also keeps track of how many rounds have been played this session.

#### New Concepts

This version makes use of event handlers to keep the HTML up-to-date.

#### Next Steps:

- Game logic does not adhere to DRY principles -- it needs to be refactored to be more elegant
- CSS needs to be applied to make a more interesting site

### Sketchpad
Users can select a grid size from 1x1 to 100x100. By mousing over squares in the grid, users can create designs in the grid.

#### New Concepts
This project really took my knowledge of dynamically updating HTML with javascript to the next level. Most challenging was the button that allows the user to resize the grid -- it took me awhile to figure out that I needed to delete the old grid first.

#### Next Steps
- The site needs better design. I've used some CSS to make the grid work properly, but the UI is still very basic
- Implement a feature that will allow the user to change the color they are drawing in
- Change the mouseover event so that it only applies the color, rather than erasing it, and then add an eraser function