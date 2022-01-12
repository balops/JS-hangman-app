import Hangman from './hangman'
import getPuzzle from './request'
//import { v4 as uuidv4 } from 'uuid'
//import validator from 'validator';

//console.log(uuidv4())
//console.log(validator.isEmail('foo@bar.'))

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1

window.addEventListener('keypress', (e) => {
    const guess = e.key
    game1.makeGuess(guess)
    render()
}) 

const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.statusMessage

    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })

}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle , 4)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()