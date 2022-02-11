# Currency Converter

#### By [Will W.](https://wjwat.com/)

#### Enter the amount of money you have in a number of different currencies and find out how much it is in an equally different number of currencies.

## :computer: Technologies Used

* HTML
* CSS
  - YACCK
* JavaScript
  - Node v14.x
  - npm v6.x
  - jQuery
  - Babel
  - Webpack
  - ESLint
* Netlify
* Modern Plumbing

## :memo: Description

This project gave me an opportunity to explore making asynchronous calls to a currency exchange API. The API itself (https://www.exchangerate-api.com/docs/standard-requests) has some sharp edges that made me rethink assumptions I had made at first about how to structure my code to best interact with it. As an example the API will return an error reponse for requests it doesn't understand, but will use a 40x HTTP status code. Originally all my error messages were the same regardless of what was returned by the API, but that is terrible for end users to better understand what is going on, and hopefully how to fix it. I was also able to explore caching the results of a successful API call because the values are only updated once a day. I'm also going to try and host this on netlify just to see if I can. Wish me luck!

## :gear: Setup/Installation & Usage Instructions

- List of instructions

## :world_map: Roadmap

* [X] cache results to cut back on calls to API
  - API updates once a day
* [ ] Display all conversion rates by themselves
* [ ] Display values of input for all available conversions
* [ ] Add symbols for each type of currency

## :lady_beetle: Known Bugs

* Bugs

## :warning: License

MIT License

Copyright (c) 2022 Will W.

