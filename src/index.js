import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Добро пожаловать в игру !\n');
  const name = readlineSync.question('Введите ваше имя :\n');
  console.log(`Привет, ${name} !`);
};

export const run = (questions) => {
  greeting();
  const iter = (quiz) => {
    if (quiz.length <= 0) {
      console.log('Поздравляем ! Вы прошли игру !');
      return;
    }
    const [head, ...tail] = quiz;
    const questionForUser = 'Сколько будет';
    const operandOne = Math.floor(Math.random() * 100);
    const operandTwo = Math.floor(Math.random() * 100);
    const userAnswer = readlineSync.question(`${questionForUser} ${operandOne} ${head.operator} ${operandTwo} ?\n`);
    let correctAnswer;
    switch (head.operator) {
      case '+':
        correctAnswer = `${operandOne + operandTwo}`;
        break;
      case '-':
        correctAnswer = `${operandOne - operandTwo}`;
        break;
      case '*':
        correctAnswer = `${operandOne * operandTwo}`;
        break;
      case '/':
        correctAnswer = `${Math.round(operandOne / operandTwo)}`;
        break;
      default:
    }
    if (userAnswer !== correctAnswer) {
      console.log('Увы ! Ответ неверный. Вы проиграли');
      return;
    }
    iter(tail);
  };

  iter(questions);
};
