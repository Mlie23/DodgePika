Last Modified: 1/10/2022
Authors: Michael Lie, Erin Bell

# Overview
The goal of this third group project is to finish your side-scrolling JavaScript game.

# Goals:

## Business Perspective:
* Visual Design: Make a game that will attract your intended audience to your website.
* User Interface Design: Make a game that lets users easily discover how to operate it.
* Business Considerations: If you wanted to collect revenue from your game by advertising on this website, how would design it so advertizing does not distract from the game, but, still allows customers to see it.
* Technical Implementation and Design: Make a game that's easy to understand how it work and easy for future developers to maintain.

## Objective Perspective:
* Implement Javascript and object oriented knowledge into the website
* Import and utilize clock function
* Understand object call and implementation between 3 relations (Javascript, css, and HTML)

# Future Improvements:
1. A lot of work still needs to be done!! I personally think that classes can still be structured and polished. (Too many global variables)
2. Nothing is bad from frame rates, but when the user plays for more than 2 minutes, the refresh rate becomes slower and slower (I think there is a memory leak somewhere, dont have time to fix this)
3. Character still needs improvement. I tried to create a spritesheet where the character can have a good animation but it does not work
4. Enemies need to be diversivy (not just Pikachu)
5. Add more level
6. Make it a multiplayer game

## Controller Design:
![ControllerDesign](https://user-images.githubusercontent.com/72538674/157141127-869980c9-0316-4c21-bf7e-070d8381d9ef.png)

## Game Design: 
| Player : Simulates the protagonist in the game  |     
|---|
| x : integer (stores the x coordinates of the player)  |
| y : integer (stores the y coordinates of the player)  |
| w : integer (stores the width of the player)  |
| h : integer (stores the height of the player)  |
| c :  string  (determines how the object the view of the object in canvas  |
| xVelocity : integer ( speed of the object in x-plane)  |
| dy : integers ( change in the y coordinates wrt to time)  |
| jumpForce : integer ( momentum the player uses to jump ) |
| originalHeight : integer ( initial height when game begins used to determine when the player ducks or jumps.   |
| grounded : boolean (determines when the player is on the ground) |
| jumpTimer : integer ( determines how long the player jumps for )  |
| life : integer (the number of life the player has decreased when hits obstacles )  |
| Animate: anonymous function (Simulates real-time movements of the player in response to key pressing and and game logic) |       
| Jump: anonymous function ( on user input makes invokes the jump equations for the player and sends data to animate to simulate jumping )  |    
| Shot : anonymous function ( Performs the shooting simulation)  |
| Draw : anonymous function (Draws the real time simulation unto the canvas ) |
|   |


| Text : Simulates the text update unto the screen |
|---|
| t : string (text to display unto screen)  |
| x : integer (x coordinates of text) |
| y : integer (y coordinate of text) |
| a : string (position of the text) |
| c : color (color of the text) |
| s : size ( size of text) |
