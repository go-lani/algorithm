// 시저 암호

// 문제 설명
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
// 예를 들어 AB는 1만큼 밀면 BC가 되고, 3만큼 밀면 DE가 됩니다. z는 1만큼 밀면 a가 됩니다.
// 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 제한사항
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.

// s
// "AB"
// "z"
// "a B z"

// n
// 1
// 1
// 4

// result
// "BC"
// "a"
// "e F d"

function solution(s, n) {
    // 정답
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            result += ' ';
            continue;
        }

        let code = s[i].charCodeAt();
        let sum = code + n;

        // 대문자
        if (code >= 65 && code <= 90) {
            sum > 90 ? result += String.fromCharCode(64 + sum - 90) : result += String.fromCharCode(sum);
        }

        // 소문자
        if (code >= 97 && code <= 122) {
            sum > 122 ? result += String.fromCharCode(96 + sum - 122) : result += String.fromCharCode(sum);
        }
    }

    return result;

    // 유니코드에 대한 내장함수를 이용하여 for문 풀이 - 예제 3개는 성공, 나머지 테스트 케이스 실패
    // for (let word of s) {
    //     if (word === ' ') {
    //         result += ' ';
    //         continue;
    //     }

    //     let code = word.charCodeAt();

    //     if (code === 90 || code === 122) {
    //         if (word.charCodeAt() === 90) code = 65 - 1;
    //         if (word.charCodeAt() === 122) code = 97 - 1;
    //     }
    //     result += String.fromCharCode(code + n);
    // }

    // return result;
}