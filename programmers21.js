// 모의고사

// 문제 설명
// 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.
// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 시험은 최대 10,000 문제로 구성되어있습니다.
// 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
// 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.


// 입출력 예
// answer
// [1,2,3,4,5]

// return
// [1]

function solution(answers) {
  const a = [1, 2, 3, 4, 5];
  const b = [2, 1, 2, 3, 2, 4, 2, 5];
  const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const winner = [];
  let aAnswerCount = 0;
  let bAnswerCount = 0;
  let cAnswerCount = 0;

  for (let i = 0; i < answers.length; i++) {
      if (i >= a.length) {
          if (a[i % a.length] === answers[i]) aAnswerCount++;
      } else {
          if (a[i] === answers[i]) aAnswerCount++;
      }
  }

  for (let j = 0; j < answers.length; j++) {
      if (j >= b.length) {
          if (b[j % b.length] === answers[j]) bAnswerCount++;
      } else {
          if (b[j] === answers[j]) bAnswerCount++;
      }
  }

  for (let z = 0; z < answers.length; z++) {
      if (z >= c.length) {
          if (c[z % c.length] === answers[z]) cAnswerCount++;
      } else {
          if (c[z] === answers[z]) cAnswerCount++;
      }
  }

  const max = Math.max(aAnswerCount, bAnswerCount, cAnswerCount);

  if (max === aAnswerCount) winner.push(1);
  if (max === bAnswerCount) winner.push(2);
  if (max === cAnswerCount) winner.push(3);

  return winner;
}