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