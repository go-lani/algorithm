// 삽입정렬

// 삽입정렬이란?
// 삽입 정렬은 두번째 인덱스 부터 시작
// 해당 인덱스(key 값) 앞에 있는 데이터(B)부터 비교해서 key 값이 더 작으면, B값을 뒤 인덱스로 복사
// 이를 key값이 더 큰 데이터를 만날때까지 반복 수행, 그리고 큰 데이터를 만난 위치 바로 뒤에 key 값을 이동

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

function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      } else {
        break;
      }
    }
  }
  return arr;
}

console.log(solution(randomArray([], 5)));
