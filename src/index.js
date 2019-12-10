import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Добро пожаловать в игру !\n');
  const name = readlineSync.question('Введите ваше имя :\n');
  console.log(`Привет, ${name} !`);
};

const questionGeneration = (quiz) => {
  const questionForUser = 'Сколько будет';
  const operandOne = Math.floor(Math.random() * 100);
  const operandTwo = Math.floor(Math.random() * 100);
  const userAnswer = readlineSync.question(`${questionForUser} ${operandOne} ${quiz.operator} ${operandTwo} ?\n`);
  return [userAnswer, operandOne, operandTwo];
};


export const run = (questions) => {
  greeting();
  let numberOfQuestion = readlineSync.question('Сколько примеров хотите решить ?\n');

  const iter = (quiz) => {
    if (numberOfQuestion <= 0) {
      console.log('Поздравляем ! Вы прошли игру !');
      return;
    }

    numberOfQuestion -= 1;
    let correctAnswer;
    const [userAnswer, operandOne, operandTwo] = questionGeneration(quiz);
    switch (quiz.operator) {
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
    iter(quiz);
  };

  iter(questions);
};
