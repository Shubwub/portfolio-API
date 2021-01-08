<h1 align="center" style="color: #ea2328">
  Personal Portfolio 👺
</h1>
<h2 align="center" style="color: #919191">
  THIS PROJECT IS A WORK IN PROGRESS
</h2>

<p align="center" style="font-size: 1.2rem;">
  This is the git repo for the API of my personal portfolio, if you have any questions, queries or feedback, please email me at contact@cameronthornton.dev.
</p>

<hr />

This project was designed as a way for me to display my personal work as a colletion of projects, as well as host a place for me to leave my thoughts in the form of blogs. The frontend for this project is hosted on an [**external GitHub repo**][FE].

[FE]: https://github.com/Shubwub/portfolio-frontend
[m]: https://www.mongodb.com/
[mo]: https://mochajs.org/
[ch]: https://www.chaijs.com/

- ## 📋 Requirements

  The requirements for running this application locally are the same as any standard node application, of course with additional dependancies provided by npm.

- ## 🎉 Installation and setup

  Once this repository is cloned, dependencies must be met through:

  ```bash
    npm i
  ```

  A local development server can then be spun up through

  ```bash
    npm start
  ```

  **WARNING**
  This project is currently a Work In Progress and is not in a finished state. There will likely be many "quirks" which will be fixed in time.

- ## 📖 Documentation

  - ### 🚧 Data

    This project makes use of a NoSQL database through [**MongoDB**][m]. This was done as a means of learning a new technology. At the time of beginning this project i'd primarily worked almost exclusively with SQL (MySQL and postgresql). Given the inconsistent nature of the items I'd be posting with blogs and projects as well as the shallow complexity of the project I thought it apt to try and learn NoSQL and mongoDB.

  - ### 🏷️ Typescript

    At the time of writing this project does not yet use Typescript, I felt using an unfamiliar technology in MongoDB and reintroducing myself to building Node API's was enough to be wrangling with for the time. There are plans to potentially port this project to TypeScript in the future however.

- ## 🧪 Testing

  Tests for this project will eventually be written with [**mocha**][mo] and [**chai**][ch].
