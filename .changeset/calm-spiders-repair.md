---
"tmdb-request": minor
---

add additional meaning to parser

Nowadays, We allow `route` to be empty. In this case, we get the `route` (`url` and `method`) from `opts`.

Modify the overload of the `request` function to keep identical behavior.