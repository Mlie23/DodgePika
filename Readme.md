# GP3 - JavaScript Game Object Design
Class: CS301 – Internet Applications Development   
Last Modified: 1/7/2022
Authors: Kent Jones, Peter Tucker, and other CS Faculty

## Overview
The goal of this third group project is to finish your side-scrolling JavaScript game. 
* Visual Design: Make a game that will attract your intended audience to your website.
* User Interface Design: Make a game that lets users easily discover how to operate it. 
* Business Considerations: If you wanted to collect revenue from your game by advertising on this website, how would design it so advertizing does not distract from the game, but, still allows customers to see it.
* Technical Implementation and Design: Make a game that's easy to understand how it work and easy for future developers to maintain.


### Grade Break Down
|----------------------------------------------------------|
| Part                                     |     | Points  |
|------------------------------------------|-----|---------|
| visual layout and visual design          |     |  25 pts |
| Technical Design                         |     |  25 pts |
| Game works                               |     |  25 pts |
| Presentation                             |     |  25 pts |
| TOTAL                                    |     | 100 pts |
|----------------------------------------------------------|


### Evaluation Criteria
* 25 pts Good visual layout and visual design (5 pts will be class critique) (use of color, negative space, relationship between visual elements, etc.)
* 25 pts Good Technical Design:  Good repository commit comments, Good documentation in the JavaScript code and header comments in ALL the js/html files, References to any resources used from the web, Good design of JavaScript code and objects, included both Design.md and ControllerDesign.png as described below in the directions, Good  use of JavaScript functions, works on different platforms (mobile, ipad, desktop)
* 25 pts Game works and functions for presentation
* 25 pts Presentation


### Directions
1.	As a group, identify the main objects for your game. List them.
2.	What properties and methods will each object need? Do not write code yet. Design a psuedo UML diagram, like I have illustrated below, for each object. Identify the properties ( key : variable value) pairs and the methods ( key : anonymous function value) pairs. Use the Coyote object as an example. Put this in a file called Design.md and save it in your repository folder. Your class diagram (in the Design.md file) should look like this:

| aGameObjectName - short description of purpose                                     |
|------------------------------------------------------------------------------------|
| property_name_1  :  property_type_1 ( short description of propterty 1 )           |
| property_name_2  :  property_type_2 ( short description of propterty 2 )           |
| ...  :  ...                                                                        |
| method_name_1  :  anonymous function ( short description purpose of the method 1 ) |
| method_name_2  :  anonymous function ( short description purpose of the method 2 ) |
| ...  :  ...                                                                        |

3.	Design a rough outline for the main controller script flow diagram.  Do not write code yet. Make a picture/drawing called ControllerDesign.png and put a copy in your repository folder. 
4. Identify the tasks do you want your main controller script to do? (A controller script will be called roughly once every 25 ms) Here are the tasks my controller does. What do you want yours to do?
a.	Registers one or more callback functions (more on this next class)
b.	Update each objects
c.	Checks for collisions (if collisions implemented)
d.	What else do you want?
5. Now you can start working on code. Each of you should have a branch of the project. 
6. I recommend either (a) breaking into pairs and coding that way or (b) coding as a group. Make sure to share development time. 
7. Remember, each of you must have your own branch of the project! 
8. Branch early, commit and synch often, and make sure to use descriptive comments each of your commits!
5.	For grading this exercise, we will look at the requirements listed above! Make sure to have someone in your group check that you are meeting the requirements!


Future improvement:
1. A lot of work still needs to be done!! I personally think that classes can still be structured and polished. (Too many global variables)
2. Nothing is bad from frame rates, but when the user plays for more than 2 minutes, the refresh rate becomes slower and slower (I think there is a memory leak somewhere, dont have time to fix this)
3. Character still needs improvement. I tried to create a spritesheet where the character can have a good animation but it does not work
4. Enemies need to be diversivy (not just Pikachu)
5. Add more level
6. Make it a multiplayer game
