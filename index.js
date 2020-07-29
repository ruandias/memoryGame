function onLoad() {
  const dependencies = {
    screen: Screen
  }

  const memoryGame = new Game(dependencies) 
  memoryGame.init()
}

window.onload = onLoad