# Social Media Counter

This is a lightweight webserver responsible for fetching the share counters from
different social media (twitter, facebook, linkedin, googleplus, ...)

The API is quite simple, there is just one end point `/`.

You can run the server simply with:
```
npm start
```

At the moment, since it's just a demo, you can only fetch counters for Twitter
and Facebook.

The only end point take two arguments, `urls` and `networks`.

### urls

One or many urls. If many, you must separate them with a comma: `,`

E.G:
```
http://localhost:8000/?urls=https://www.mynewsdesk.com/devcorner/blog_posts/reacteurope-conference-summary-37545,http://www.mynewsdesk.com/devcorner/blog_posts/reacteurope-conference-summary-37545
```

### networks

List of networks separated by comma: `,`. By default it will fetch counters from all the available
networks.

E.G:
```
http://localhost:8000/?networks=twitter,facebook
```

## Installation

Clone the respository and `cd` into it.

It requires nodejs 4.0 minimum. (You can use `nvm` to manage you node version
per project)

Install the dependencies:
```
npm install
```

Run the server:
```
npm start
```
