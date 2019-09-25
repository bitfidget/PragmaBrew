# PragmaBrew

> React/Node/Webpack example code assessment

## Contents

- [Run with one line](#run-with-one-line)
- [Further commands](#further-commands)
- [The brief](#the-brief)
- [Questions I would ask](#questioning-the-brief)
- [The approach](#the-approach)
- [Conclusions](#conclusions)

---

## Run with one line

Assuming you have already saved the entire package locally and run 'npm start', you can run both apps (front and backend) and open up front-end in a new browser window, with one command:

```shell
npm start
```

## **[⬆ back to top](#contents)**

---

## Further commands

| Command          | Description                                          |
| ---------------- | ---------------------------------------------------- |
| `npm install`    | Run before anything else - installs all dependencies |
| `npm run start`  | Starts server and app concurrently                   |
| `npm run client` | Starts front-end server                              |
| `npm run server` | Starts backend server                                |
| `npm run build`  | Create deploy files inside `dist/`                   |
| `npm run test`   | Runs all tests using Jest/Enzyme                     |
| `npm run format` | Reformats all code according to prettier rules       |

## **[⬆ back to top](#contents)**

---

## The brief

### Introduction

Meet Shane. He works at PragmaBrewery, a boutique microbrewery in a rural area of Australia,
and is the creator of 6 unique beer varieties. Shane is responsible for driving the large transport
truck, delivering goods from the brewery to a number of pubs across Sydney each week.
Each beer has its own specific refrigeration needs while being transported:

- Beer 1 (Pilsner): 4°C - 6°C
- Beer 2 (IPA): 5°C - 6°C
- Beer 3 (Lager): 4°C - 7°C
- Beer 4 (Stout): 6°C - 8°C
- Beer 5 (Wheat beer): 3°C - 5°C
- Beer 6 (Pale Ale): 4°C - 6°C

The refrigerated truck is loaded with multiple containers with beer bottles inside, each
container set to a specific temperature and each containing a thermometer sensor.
While driving, Shane is alerted if any of the containers fall outside of the temperature range.
Unfortunately, this is common due to factors such as opening the doors to unload, the heat of
the Sydney summer or sometimes due to forgetting the container doors ajar.
Develop a solution that allows Shane to be aware of the current temperature of each container
and notifies him when the temperatures are outside the correct range.

### Constraints

- You must use JavaScript technology for most of the solution
- The solution must be implemented with an acceptable level of automated tests; we
  should be able to verify it from the command line.
- There must be a web front-end component as well as a back-end component.
- Your back-end component must integrate with our temperature service available at
  https://temperature-sensor-service.herokuapp.com/sensor/{id} with {id} being
  any string value you pass through. The service will return a JSON containing the
  string value you passed as id plus a temperature value between -2 and 10. Your
  back-end component must then be the data provider for your front-end component.
- You must not use a code generator (e.g. create-react-app, Angular-CLI, Rails etc.)
  because we want to see how you do it and how you create your own setup (not how
  the frameworks does it for you), so that we can assess your own software design skills.
- You are free to use libraries (eg. React, Jest, ExpressJS) but you cannot use anything
  that creates the structure/scaffolding for you, for the same reason above

Version 4.0 - July 2019

- The solution must run via the command-line and we should be able to boot it with a
  single command. The less dependencies on the operating system, the better. Once
  the minimum requirements are met, we must be able to boot it with a one-liner.
- A database server isn’t required, if needed, mock the data in any application layer.

### Instructions

1. Use your time to deliver a solution that showcases your coding skills and the level of
   quality you expect (but no need to gold plate it).
2. In a real-life scenario, you would ask questions to clarify any doubts but for this
   challenge, document the questions you would ask and provide your own answers in
   the readme file.
3. Once complete, send us a link to the package for download (if you are using a private
   repository in BitBucket/GitHub please share it with talent@pragma.team)
4. Make sure your package contains a readme file with all relevant information necessary
   to run your solution, including:
   - What are the highlights of your logic/code writing style?
   - What could you do better in your code next iteration?
   - What were the questions you would ask and your own answers/assumptions?
   - Any other notes you feel relevant for the evaluation of your solution.

## **[⬆ back to top](#contents)**

---

## Questioning the brief

1. How often does Shane need to have this data updated?
   (assumed: frequently - made use of websockets so the front-end does not need to continually poll the back-end)
2. Is Shane's load likely to change (can he carry more/less/different beer?)
   (assumed: yes! have created app end-to-end so that it could deal with different loads without issue)
3. What is the device Shane is using to assess his beer health?
   (assumed: anything - basic responsive layout provided)
4. Can I please sample each of the beers?
   (assumed: no - Shane and PragmaBrewery are ficticious :( )

## **[⬆ back to top](#contents)**

---

## The approach

The following is a log of my approach and what I learned along the way.

### 1. Set up tools

Get the tooling right - build up a webpack config that includes all the necessary tools to run the front-end:

1. Webpack development server and scripts
2. React app
3. Babel for transpiling JS back to es2015 so it's runnable
4. Jest and Enzyme for unit and browser mock-up tests
5. Config babel and webpack further to allow tests to run correctly with es2017 javascript
6. Bonus clean formatting in the form of prettier

#### Lessons learned / Wins / What I would do differently

1. I had not previously configured webpack from scratch (I normally use create-react-app, and used to use Grunt/Gulp) so this was a fun exercise that I enjoyed, and for the most part, easier than I expected. :
2. I struggled with running both apps with one command (see point 4 below)
3. Also ran into issues configuring babel/webpack to run tests correctly

(approx 2 hours to get to this point)

### 2. First test

Build the basics of a react app and include at least one test to ensure the app loads and runs using the webapck config

(approx 1 hour)

### 3. Create Node server

Built a very basic Node server based on Express including:

1. Web sockets service for front-end to connect with
2. Service that polls the supplied beer temp API every 15 seconds
3. (some) tests

#### Lessons learned / Wins / What I would do differently

1. I had never built a Node server in a very long time so there was a lot of stretching of the memory!
2. I also had not ever played with websockets in Node before - happy to have this working
3. I had never written tests for Node before - my tests are basic and do not cover all code, but the ones I did write, I did use to develop with (using a TDD approach) so I was happy with that.
4. Reasonably happy with the async operations that query the API server before pushing new data back via the websocket.

(approx 8 hours)

### 4. Argued with WebPack

Discovered that the method I was using to run the full app (front and back end) with one command was spawning a new process each time that I had to manually kill. it got messy, and there were some stern words. In the end, I removed that method (using webpack-dev-middleware) and reverted to running both servers separately with individual commands.

I have since added a new run-with-one-command using a simple pipe, but it surfaces a new issue - the client does not connect to the server properly on startup (possibly because the node server has not yet started) so there is no data coming through - you need to refresh the browser to get the app to run properly.

#### Lessons learned / Wins / What I would do differently

1. I really need to sit down and get to understand webpack. There is a lot of config in there that I do not fully understand and need to spend more time with.

(approx 5 hours - webpack and I are not friends)

### 5. Built front-end app

This was the quick and easy part - my comfort zone of this project, though I didn't spend anywhere near as much time as I would have like to here (I had already spent my time).

#### Lessons learned / Wins / What I would do differently

1. I spent very little time on this - I would really have liked to make this shine... but: time.
2. The app gives no indication of connection/loading status which is not ideal.
3. Some tests included and were used for a TDD approach which I'm happy with and I found it helpful for development.

## **[⬆ back to top](#contents)**

---

## Conclusions

This is one of those projects that looked very simple from the outset (and could have been) but is quickly made more complicated as you move closer to the solution. I spent most of my time on getting webpack runnig and the Node server, both of which I don't have much prior experience with. I further complicated things by choosing to go ahead with websockets, but it just seemed the right thing to do - having a front-end poll an API just doesn't feel right to me. Further to this, the decisions as to how to structure that websocket connection can make things more complicated, and I'm not sure my solution is the best (could have had a seprate connection per beer).
