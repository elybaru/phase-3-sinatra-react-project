### Models

Poets
----
has_many poems

name


Poems
---
belongs_to poet
has_many favorites
has_many users through favorites
foreign key

name
title
poet
date

Favorites
---
belongs_to user
belongs_to poem
foreign key

name

Users
---
has_many poems through favorites
has_may favorites
name


### Routes

GET /poets (for sending back all poets)
GET /poems (for sending back all poems)
GET /poets/:id (for sending back a poet and all of their poems)

POST /poems

DELETE /poems:/id


### Localstorage
- If logout, clears local storage
- When login, 
- Create a route called
- Create a route in 


### Login
Create form for login
Validate that you get data back in console.log
Put users id into local storage
once that is done, need to check if a user is loggedin through local storage
If you click login, it should redirect 


### API
call an instance method within a .to_json for every instance 

Test endpoints
Seed data

Returns a list of all titles by Emily Dickinson:
"https://poetrydb.org/author/Emily Dickinson/title"

Finally some poems!
https://poetrydb.org/author/Charlotte%20Bronte

More poems!
https://poetrydb.org/author/Bronte


### Thursday 3/3/22
- Login 
- API
- Search Poems
- Search Poets
- Save to favorites
- Create and delete poem


