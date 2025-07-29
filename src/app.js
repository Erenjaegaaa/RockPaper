import { useState } from 'react';

function App() {
  // State to keep track of scores and game results
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const [gameMessage, setGameMessage] = useState('Choose Rock, Paper, or Scissors!');

  // Array of choices for the computer to pick from
  const choices = ['rock', 'paper', 'scissors'];

  // Function to get computer's random choice
  const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  };

  // Function to determine who wins
  const determineWinner = (player, computer) => {
    if (player === computer) {
      return 'tie';
    }
    
    if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      return 'player';
    }
    
    return 'computer';
  };

  // Main game function that runs when player makes a choice
  const playGame = (playerChoice) => {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);

    // Update state with choices
    setPlayerChoice(playerChoice);
    setComputerChoice(computerChoice);

    // Update scores and messages based on winner
    if (winner === 'player') {
      setPlayerScore(playerScore + 1);
      setResult('You Win! 🎉');
      setGameMessage(`${playerChoice} beats ${computerChoice}!`);
    } else if (winner === 'computer') {
      setComputerScore(computerScore + 1);
      setResult('Computer Wins! 🤖');
      setGameMessage(`${computerChoice} beats ${playerChoice}!`);
    } else {
      setResult("It's a Tie! 🤝");
      setGameMessage(`Both chose ${playerChoice}!`);
    }
  };

  // Function to reset the game
  const resetGame = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setPlayerChoice('');
    setComputerChoice('');
    setResult('');
    setGameMessage('Choose Rock, Paper, or Scissors!');
  };

  // Function to get emoji for each choice
  const getEmoji = (choice) => {
    if (choice === 'rock') return '🪨';
    if (choice === 'paper') return '📄';
    if (choice === 'scissors') return '✂️';
    return '❓';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        {/* Game Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Rock Paper Scissors
        </h1>

        {/* Score Display */}
        <div className="flex justify-between items-center mb-8 bg-gray-100 rounded-lg p-4">
          <div className="text-center">
            <div className="text-sm text-gray-600">You</div>
            <div className="text-2xl font-bold text-blue-600">{playerScore}</div>
          </div>
          <div className="text-2xl font-bold text-gray-400">VS</div>
          <div className="text-center">
            <div className="text-sm text-gray-600">Computer</div>
            <div className="text-2xl font-bold text-red-600">{computerScore}</div>
          </div>
        </div>

        {/* Game Message */}
        <div className="mb-6">
          <p className="text-lg text-gray-700 mb-2">{gameMessage}</p>
          {result && (
            <p className="text-xl font-bold text-purple-600">{result}</p>
          )}
        </div>

        {/* Choices Display */}
        {playerChoice && computerChoice && (
          <div className="flex justify-between items-center mb-6 bg-gray-50 rounded-lg p-4">
            <div className="text-center">
              <div className="text-4xl mb-2">{getEmoji(playerChoice)}</div>
              <div className="text-sm text-gray-600">You chose</div>
              <div className="font-semibold capitalize">{playerChoice}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">{getEmoji(computerChoice)}</div>
              <div className="text-sm text-gray-600">Computer chose</div>
              <div className="font-semibold capitalize">{computerChoice}</div>
            </div>
          </div>
        )}

        {/* Game Buttons */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <button
            onClick={() => playGame('rock')}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 px-2 rounded-lg transition-colors duration-200 transform hover:scale-105"
          >
            <div className="text-3xl mb-1">🪨</div>
            <div className="text-sm">Rock</div>
          </button>
          <button
            onClick={() => playGame('paper')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-2 rounded-lg transition-colors duration-200 transform hover:scale-105"
          >
            <div className="text-3xl mb-1">📄</div>
            <div className="text-sm">Paper</div>
          </button>
          <button
            onClick={() => playGame('scissors')}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-2 rounded-lg transition-colors duration-200 transform hover:scale-105"
          >
            <div className="text-3xl mb-1">✂️</div>
            <div className="text-sm">Scissors</div>
          </button>
        </div>

        {/* Reset Button */}
        <button
          onClick={resetGame}
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200"
        >
          Reset Game
        </button>

        {/* Game Rules */}
        <div className="mt-6 text-xs text-gray-500">
          <p>Rock beats Scissors • Paper beats Rock • Scissors beats Paper</p>
        </div>
      </div>
    </div>
  );
}

export default App;