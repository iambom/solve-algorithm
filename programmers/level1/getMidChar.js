// 가운데 글자 가져오기
//단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

function solution(s) {
    var answer = '';
    let mid = s.length / 2;
    
    if(s.length % 2 === 0) {
        answer = s[mid - 1] + s[mid]
    }else{
        answer = s[mid - 0.5]
    }
    return answer;
}

solution('abcde'); // return 'c'
solution('qwer'); // return 'we'

/*
문자열의 개개의 문자에 접근할 수 있는 방법 2가지
1) charAt() 사용
    return 'cat'.charAt(1); // returns 'a'

2) 브라켓[] 사용 (배열과 같은 오브젝트로 취급하여 문자에 해당하는 인덱스 사용)
    return 'cat'[1]; // returns 'a'
*/