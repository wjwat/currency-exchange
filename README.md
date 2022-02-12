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
  - Webpack
  - ESLint
* Netlify
* Modern Plumbing

## :memo: Description

This project gave me an opportunity to explore making asynchronous calls to a currency exchange API. The API itself (https://www.exchangerate-api.com/docs/standard-requests) has some sharp edges that made me rethink assumptions I had made at first about how to structure my code to best interact with it. As an example the API will return an error reponse for requests it doesn't understand, but will use a 40x HTTP status code. Originally all my error messages were the same regardless of what was returned by the API, but that is terrible for end users to better understand what is going on, and hopefully how to fix it. I was also able to explore caching the results of a successful API call because the values are only updated once a day. I'm also going to try and host this on netlify just to see if I can. Wish me luck!

## :gear: Setup/Installation & Usage Instructions

### Getting an API key

- Go to the [ExchangeRate-API](https://www.exchangerate-api.com/) site.
- Type in your email address and click the `Get Free Key!` button.
- Choose a password for your free account and click the `Accept Terms & Create API Key!` button.
- Check your email account for a verification email & click the link in it to activate your account.
- You will be redirected to your account page on _exchangerate-api.com_ & your API key will be listed. Do not share this key, but do make note of it and how to retrieve it easily.
- [Clone this repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) to your device
- [Install Node & npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Using your terminal](https://www.freecodecamp.org/news/how-you-can-be-more-productive-right-now-using-bash-29a976fb1ab4/) navigate to the directory where you have cloned this repo.
- With a text editor or from the command line create a file in the root of the project directory named `.env`
- In this file type in `API_KEY=<YOUR API KEY>` substituting `<YOUR API KEY>` with your API key from _exchangerate-api.com_.
  - This will allow you to use the site as intended and make calls to the _exchangerate-api.com_ API.
- Run `npm install` and wait for it to finish.
- If you'd like to view the project as is, at this point you can do one of:
  - Run `npm run start` and a browser window will open displaying this project
  - Run `npm run build` and all the files necessary to view this project will be put under the `dist\` directory in the root of the project directory.
- If you'd like to modify the source please look in the `src\` directory.
  - Be sure to include the `.env` file in your `.gitignore`!

## :world_map: Roadmap

* [X] cache results to cut back on calls to API
  - API updates once a day
* [ ] Display all conversion rates by themselves
* [ ] Display values of input for all available conversions
* [ ] Add symbols for each type of currency
* [ ] Reorganize code to be cleaner

## :lady_beetle: Known Bugs

* If any are found please feel free to open an issue or email me at wjwat at
  onionslice dot org

## :warning: License

MIT License

Copyright (c) 2022 Will W.

