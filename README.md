Video breakdown: https://youtu.be/s1jilVl3tU8 
Blog entry: https://etcusic.github.io/single_page_javascript_app_using_object_orientation 
Rails API repo: https://github.com/etcusic/memory-game-api 

Instructions:

For the backend structure, clone the repository from the Rails API repo link and run the following commands in your CLI:

bundle install
rake db:migrate
rails s

(to initialize the seed data, type in 'rake db:seed' into your console)

This should set up the rails server if everything runs correctly. Then clone this repo and open up index.html into a browser and have fun!

CHECKLIST:

[x] Greeting Page
[x] Base Page
[x] High Scores Page
[x] Game Page
[ ] Practice Page
[ ] Create Deck page
[ ] Edit Deck page

Additional Features:
[x] Create Page class to substitute Display class properties and set as parent class to pages
[x] Refactor pages directory - consolidate views, add initialize method
[x] Refactor HTML fragments in their own class
[ ] Allow user to choose side A or B to be quizzed on
[ ] Incorporate a pause and display correct/incorrect after every submission
[ ] Incorporate rounds on the scoreboard during the game
[ ] Inorporate different levels with scoring for the game
[ ] Add a practice element to the application
[ ] Be able to create new decks and cards
[ ] Scope out high scores for different decks, levels, and users
[ ] Display current users high scores after game
[ ] Add a profile picture to page
[ ] "Logout" button - wipe and log session & return to landing page
[ ] Refactor HTML fragments as their own "components"