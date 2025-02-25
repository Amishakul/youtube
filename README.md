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



Cache:

Time complexity through search in array = O(n)
Time complexity through search in Object = O(1) -> this is far better than array

[i, ip, iph, iphone] -> array

{
    i:
    ip:
    iph:
    iphone:
} -> object

new Map(); -> better than object

Implemented Search Bar using live API, Debouncing, Caching i.e. Implemented optimized search (our search bar is better than flipcart.)

LRU Cache -> Least Recently used, this can also be used -> it restricts our cache only to store 100 keys(in this case 100), if the cache size increases beyond 100, start removing from top. List -> Object

Youtube comment section is 2 level nested -> one is the basic comment and another is the reply to that basic comment. 

Reddit has n level nested comment section.

YouTube uses polling api, youtube makes an api call to get the live chat messages of people in the ui
