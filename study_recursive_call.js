// 재귀 용법

// 재귀 용법이란?
// 함수 안에서 동일한 함수를 호출하는 형태
// 주로, 재귀호출하며 함수의 인수에 숫자를 줄여준다든지, 배열의 길이를 줄인다는지의 방법을 사용하여 원하는 결과값을 도출

// 중복없는 난수 배열 만드는 함수
function randomArray(array, length) {
  const n = Math.floor(Math.random() * (length * 2)) + 1;

  if (array.length < length) {
    if (array.indexOf(n) < 0) array.push(n);
    return randomArray(array, length);
  } else {
    return array;
  }
}

// 예제 1
// 1부터 num까지의 곱이 출력되게 만들어라

function multiple(num) {
  // 반복문을 활용
  // let result = 1;
  // for (let i = num; i > 0; i--) {
  //   result *= i;
  // }
  // return result;

  // 재귀함수 활용
  if (num > 1) return num * multiple(num - 1);
  return num;
}

console.log(multiple(10));

// 예제2
// 숫자가 들어 있는 배열이 주어졌을때, 리스트의 합을 리턴하는 함수를 만들어라
function sum(arr) {
  console.log(arr);
  if (arr.length > 1) return arr[0] + sum(arr.slice(1));
  return arr[0];
}

console.log(sum(randomArray([], 10)));

// 예제3
// 순서를 거꾸로 읽어도 제대로 읽는 것과 같은 단어와 문장(회문)을 판별할 수 있는 함수를 만드세요
// MOTOR(X)
// LEVEL(O)

// 풀이
// function solution3(str) {
//   let flag = false;
//   if (str[0] === str[str.length - 1]) flag = true;
//   if (str.length === 1) return flag;
//   if (flag) return solution3(str.slice(1, -1));
//   return flag;
// }

// 디벨롭
function palindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] === str[str.length - 1]) return palindrome(str.slice(1, -1));
  return false;
}

console.log(palindrome('level'));

// 예제4
// 정수 n에 대해 n이 홀수이면 3 x n + 1을 하고, 짝수이면 n을 2로 나눠 n이 1이 될 때까지 반복합니다.
// 위의 과정에 n이 1이 되는 과정을 모두 출력하는 함수를 만드세요

function processing(n) {
  console.log(n);

  if (n === 1) return n;

  if (n % 2) return processing(3 * n + 1);
  else return processing(n / 2);
}

processing(3);
