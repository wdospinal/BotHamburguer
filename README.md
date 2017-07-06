# Hamburger Bot Example
Simple example using bot framework to create a hamburguer buy chatbot.


![alt text](https://firebasestorage.googleapis.com/v0/b/imagenesuso.appspot.com/o/capturaHamburguer.PNG?alt=media&token=2cde8e5c-5585-4e5b-ba40-9c030c0acd0d)

## Tools used along this project
* [NodeJS](https://nodejs.org) as backend server.
* [Restify](http://restify.com/) as backend api framework.
* [Botbuilder](https://github.com/Microsoft/BotBuilder) as bot framework.
* [ES6](http://es6-features.org) as main language.
* [ESLint](http://eslint.org) as JavaScript linter.
* [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) as plugin for helping to follow the code style guide

## Workflow and code style guide
We use [airbnb-javascript](https://github.com/airbnb/javascript) as JavaScript style guide.

**Guidelines:**

* If your code will perform asynchronous operations it must use promises
* Every bug should be registered as an issue
* Your code should be almost entirely written in english
* Your code should follow the [airbnb-javascript](https://github.com/airbnb/javascript) style guide
* Your commits should be written in english, they must be descriptive and minimalist
* You should try to use testing in your code, but this is not required

**Note:** _Your code could be rejected by breaking the above rules._

## Running the project
1. Install the project dependencies ```npm install```
2. Run the app ```npm app.js```
3. Run [Bot Framework Emulator](https://emulator.botframework.com/)  and connect ```http://localhost:3978/api/messages```

## Contributing to the project
If you want to contribute to this project, you must follow the [**Workflow**](#workflow-and-code-style-guide) and have in mind the next points:
* The project is configured with ESLint, so we highly recommend you to install globally ESLint: ```npm install -g eslint```
* If you use Visual Studio Code, you should disable the javascript validation putting ```"javascript.validate.enable": false``` inside your workspace settings.


