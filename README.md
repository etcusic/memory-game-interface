Rails API repo: https://github.com/etcusic/memory-game-api 

Instructions:

For the backend structure, clone the repository from the Rails API repo link and run the following commands in your CLI:

bundle install
rake db:migrate
rails s

(to initialize the seed data, type in 'rake db:seed' into your console)

This should set up the rails server if everything runs correctly. Then clone this repo and open up index.html into a browser and have fun!

License: 

CHECKLIST:

[x] Greeting Page
[x] Base Page
[x] High Scores Page
[x] Game Page
[ ] Practice Page
[ ] Create Deck page
[ ] Edit Deck page

Additional Features:
[ ] Refactor pages directory - consolidate views, add initialize method, and move ActionListeners into the Page classes
[ ] Be able to create new decks and cards
[ ] Add a practice element to the application
[ ] Allow user to choose side A or B to be quizzed on
[ ] Incorporate a pause and display correct/incorrect after every submission.
[ ] Inorporate different levels with scoring for the game
[ ] Scope out high scores for different decks, levels, and users
[ ] Incorporate rounds on the scoreboard during the game
[ ] Add a profile picture to page
[ ] "Logout" button - wipe and log session & return to landing page