Debouncing: If you are typing very fast then the differnce between the 2 keystrokes is very less. And vice versa if i type fast

typing slow = 200ms
typing fast = 150ms

If a user types very fast, the user does not needs any intermediate suggestions, it is useless to call api for every keystroke

without debouncing = 14 letters * 1000 people = 140000 api calls
with debouncing = 3 API calls * 1000 = 3000 api calls

it makes a huge difference in performance. 

Search suggestions are given to make a better user experience.

Debouncing with 200ms: 
- if differnce between 2 key strokes is < 200(user is typing fast) -> decline api call
- if > 200ms (user is typing slow) make an api call