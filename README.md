# 🌠 Star Fall 🌠

> Collect as many stars while everything moving faster and faster as your score goes up. Try to survive to bring your name into the high scores list.


  <ul>
    <li><a href="#usage"><h6>Jump To: How To Use</h6></a> </li>
    <li><a href="#gameplay"><h6>Jump To: Gameplay</h6></a> </li>
    <li><a href="#tests"><h6>Jump To: Tests</h6></a> </li>
    <li><a href="#futurefeatures"><h6>Jump To: Future Features</h6></a> </li>
    <li><a href="#contributing"><h6>Jump To: Contributing</h6></a> </li>
  </ul>

## Live Demo

[Live Demo Link]()


![screenshot](assets/screenshots/main.png)

## Built With

- JavaScript
- Phaser
- Webpack
- Netlify
- Jest

## ⭐ Getting Started ⭐

### Prerequisites

- A modern browser, up to date.
- Node.js, if you are going to use it in the local environment.
- A text editor.

### <h3 id='usage'>Usage</h3>

- Click the [Live Demo Link]() and enjoy with the website.

### 🖥️ Running In The Local Environment

##### To run in the local environment first clone the repository(in Terminal):
- Clone the repository: `git clone git@github.com:kubilaycaglayan/star-fall-original.git`
- Enter the project directory: `cd star-fall-original`
- Run npm to install the dependencies `npm install`
- Start the game `npm run start`

### <h3 id='gameplay'> Gameplay</h3>

#### 🎮 Controls
##### Use arrow keys on your keyboard to play this game

<ul>
  <li>Up: Jump / Super jump</li>
  <li>Down: Pass through platform downwards</li>
  <li>Left: Go left</li>
  <li>Right: Go right</li>
</ul>

![screenshot](assets/screenshots/arrows.png)

#### Logic
- The game has a leveling system that shifts up on every 100 points.
- In every levelup ground creations and removal time intervals speeds up.
- Your objective is to survive with the highest possible score.
- The game has 20 levels on total.

#### Super Jump

- After character makes a jump from a platform, it can jump one more time in the air if the super jump is available.
- You can only super jump if you have just jumped. This means, if you are falling, you can't use super jump.

![screenshot](assets/screenshots/superjump.png)

#### Go Down

- You can pass through down from any platform to elevate down to the nearest platform. To do this use down arrow key when you are on a platform.

![screenshot](assets/screenshots/godown.png)

#### Input Your Name

- And your score will be automatically recorded each time you finish the game.
- If you are on the top 10, you can see yourself in the list.

##### Remember to change your name, to do this click to the green text at the intro.

![screenshot](assets/screenshots/naming.png)

### <h3 id='tests'>🧪 Automated Tests</h3>

- Clone the repository: `git clone git@github.com:kubilaycaglayan/star-fall-original.git`
- Enter the project directory: `cd star-fall-original`
- Run npm to install the dependencies `npm install`
- Run tests with `npm run test`
- Tests are added for public methods.
- Mocks are also used for testing.

### Future Features

- Platforms getting shorter as level goes higher.
- Different themes.
- Better star collecting sound effect.

## Author

👤 **Kubilay Caglayan**

- Website: [kubilay](https://kubilaycaglayan.com)
- Github: [@kubilaycaglayan](https://github.com/kubilaycaglayan)
- Twitter: [@kbcaglayan](https://twitter.com/kbcaglayan)
- Linkedin: [linkedin](https://linkedin.com/in/kubilaycaglayan)

## <h3 id='contributing'>🤝 Contributing</h3>

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/kubilaycaglayan/star-fall/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- https://phasertutorials.com/creating-a-phaser-3-template-part-1/

## 📝 License

This project is [MIT](LICENSE) licensed.
