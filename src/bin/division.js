#!/usr/bin/env node
import { run } from '..';

const divisionQuiz = [
  {
    operator: '/',
  },
  {
    operator: '/',
  },
  {
    operator: '/',
  },
];
console.log('\nДанная игра в качествве параметра принимает только целые числа !\n При написании ответа вам необходимо округлить результат в меньшую или большую сторону :)\n');
run(divisionQuiz);
