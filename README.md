# The Metamatic Car App (Two-Way-Events Variant)
A demo app for showcasing The Metamatic Framework.

### Introduction

A demo app written in ES6 on React to demonstrate how to implement the MetaStore, which is a central data store in your app
taking advantage of the [Metamatic Framework](https://www.npmjs.com/package/metamatic). Read more about the ideas behind
the Metamatic framework in an [introductory article](http://www.oppikone.fi/blog/introducing-metamate-framework.html).

The Metamatic Framework consists of two parts:

1) The Metamatic event functions that you install and 
2) The MetaStore - the central state container that you implement.

Check NPM package of the Metamatic Framework is available at (https://www.npmjs.com/package/metamatic)

Read a blog article about The Metamatic Framework  at (http://www.oppikone.fi/blog/introducing-metamate-framework.html)

## Two-Way-Events Variant

This project demonstrates the Two-Way-Events variant of the Metamatic State Container. 
You may also like to check the (One-Way-Events variant)[https://github.com/develprr/metamatic-car-app-with-one-way-events].
To read more about implementing a state container, read a related (blog post)[http://www.oppikone.fi/blog/implementing-metamatic-state-container.html].

## Start the frontend

Make sure you have Node installed!

In project folder type:

```js
npm install
```

And then run the app:

```js
npm start
```

## Start the backend

The app will only work when the  mock car data server is up and running. To start the server,
navigate to the server directory:

```js
cd src/server
```

Then install the packages needed by the server:

```js
npm install
```

And finally run the server:

```js
node car-server.js
```
    
## License

Apache 2.0

## Author

[Heikki Kupiainen](https://www.linkedin.com/in/heikki-kupiainen-oppikone) / (Metamatic)[http:/www.metamatic.net]
