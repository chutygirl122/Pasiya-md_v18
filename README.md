PASIYA-MD V18

# Amira Bot Base
Amira bot base is a chatbot base that has many features in it to make development easier and faster, Amira bot has a base with clean, neat and structured code. We offer features that can make it easier for developers to create their whatsapp bots easily using a good command handling system as well as other additional handlers such as event handlers, plugins handlers and much more.
# Setup
Before running this script, you need a few settings so that this script runs well. the settings are quite easy, you can follow the steps below.

## Installation
First, clone the repo from github.
```bash
git clone https://github.com/zanixongroup/amira-bot-base.git amira
```

then, go to the local repo directory.
```bash
cd amira
```

execute the npm command to install the dependencies.
```bash
npm install
```

## Setup config.js
Once you have installed the dependencies, you need to set the bot number to your bot number. change your bot number [here](https://github.com/ZanixonGroup/amira-bot-base/blob/master/src%2Fconfig.js#L7), the config is like this.

```js
global.botNumber = "628xxxxx"; // change this with your number, start with your country code number
global.bot = {
  antiCall: true, // auto reject call switch
  owner: ["6285697103902"], // owner number
  sessionName: "session", // session name directory
}
```

## Start the bot
Ok, you managed to do all the settings, now you can run the bot with the command as below.

### new
```bash
npm run new
```
This command used to creating new session if you not logged-in before, you can't start the bot if the bot not logged-in.

### start
```bash
npm run start
```
Start running the bot

### dev
```bash
npm run dev
```
This command is used for development mode, if you run this command.. your bot will automatic restart if you change some code inside your bot.


## Relevant
- [Introduction](https://github.com/ZanixonGroup/amira-bot-base/blob/master/docs%2Fintroduction.md)
- [How to make new command](https://github.com/ZanixonGroup/amira-bot-base/blob/master/docs%2FCommands.md)
- [How to use MessageCollector](https://github.com/ZanixonGroup/amira-bot-base/blob/master/docs%2FMessageCollector.md)
