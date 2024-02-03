import './App.scss';
import { useState, useEffect } from 'react';

const App = () => {
  const [winner, setWinner] = useState('');
  const [userOne, setUserOne] = useState('');
  const [userTwo, setUserTwo] = useState('');
  const [userOneClass, setUserOneClass] = useState('');
  const [userTwoClass, setUserTwoClass] = useState('');

  const variants = ['rock', 'paper', 'scissors'];
  // создание искусственного игрока и его проверка
  const generateUserTwoChoice = () => {
    const arrayIndex = Math.floor(Math.random() * variants.length);
    setUserTwo(variants[arrayIndex]);
    console.log(variants[arrayIndex]);
  };
  // условия победы(все возможные варианты и их результат)
  const determineWinner = () => {
    switch (userOne + '-' + userTwo) {
      case 'rock-scissors':
      case 'paper-rock':
      case 'scissors-paper':
        setWinner('User One Win!');
        break;
      case 'rock-paper':
      case 'paper-scissors':
      case 'scissors-rock':
        setWinner('User Two Win!');
        break;
      case 'rock-rock':
      case 'paper-paper':
      case 'scissors-scissors':
        setWinner('Dead Heat');
        break;
      default:
        setWinner('Who Win?');
    }
  };
  // тесты и присвоение значений первому
  // камень
  const testRock = () => {
    setUserOne('rock');
    console.log('rock');
    playGame();
  };
  // бумага
  const testPaper = () => {
    setUserOne('paper');
    console.log('paper');
    playGame();
  };
  // ножницы
  const testScissors = () => {
    setUserOne('scissors');
    console.log('scissors');
    playGame();
  };

  const playGame = () => {
    // условие победы
    determineWinner();
    // второй игрок
    generateUserTwoChoice();
  };

  useEffect(() => {
    // присвоение класса первому
    switch (userOne) {
      case 'rock':
        setUserOneClass('rock_one');
        break;
      case 'paper':
        setUserOneClass('paper_one');
        break;
      case 'scissors':
        setUserOneClass('scissors_one');
        break;
      default:
      // Handle default case if needed
    }

    // присвоение класса второму
    switch (userTwo) {
      case 'rock':
        setUserTwoClass('rock_two');
        break;
      case 'paper':
        setUserTwoClass('paper_two');
        break;
      case 'scissors':
        setUserTwoClass('scissors_two');
        break;
      default:
      // Handle default case if needed
    }

    // Timeout for playGame function
    const timeoutId = setTimeout(playGame, 0);

    // Cleanup function
    return () => clearTimeout(timeoutId);
  }, [userOne]);

  return (
    <>
      {/* Контент */}
      <div className="content">
        {/* Текст */}
        <aside className="text">
          <p>Rock Paper Scissors Game</p>
        </aside>
        {/* Опции */}
        <section className="options">
          {/* Кольцо */}
          <div className="ring">
            {/* Игрок 1 */}
            <div className={`user one ${userOneClass}`}></div>
            {/* Игрок 2 */}
            <div className={`user two ${userTwoClass}`}></div>
          </div>
          {/* Победитель */}
          <div className="winners">
            <p>{winner}</p>
          </div>
          {/* Выбор */}
          <div className="choice">
            {/* Камень */}
            <label>
              <button id="rock" onClick={testRock} className="button"></button>
              Камень
            </label>
            {/* Бумага */}
            <label>
              <button
                id="paper"
                onClick={testPaper}
                className="button"
              ></button>
              Бумага
            </label>
            {/* Ножницы */}
            <label>
              <button
                id="scissors"
                onClick={testScissors}
                className="button"
              ></button>
              Ножницы
            </label>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
