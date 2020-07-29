class Game {
  constructor({ screen }) {
    this.screen = screen
    this.initialHeros = [
      { img: './images/batman.png', name: 'batman'},
      { img: './images/captain.png', name: 'captain'},
      { img: './images/flash.png', name: 'flash'},
      { img: './images/wolverine.png', name: 'wolverine'},
    ]
  }

  init() {
    this.screen.updateImage(this.initialHeros)
  }
}