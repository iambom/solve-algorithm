// 정수 제곱근 판별
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다. n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

function solution(n) {
    let x = Math.floor(Math.sqrt(n));
    
    if(n === Math.pow(x, 2)) {
        return Math.pow(x+1, 2);
    }else {
        return -1
    }
}

/*
    Math.sqrt(n) : 제곱근 구할 때 사용. n이 음수라면 NaN 반환
        Math.sqrt(9) // 3
        Math.sqrt(2) // 1.414213562373095
        Math.sqrt(1) // 1
        Math.sqrt(0) // 0
        Math.sqrt(-1)  // NaN

    Math.pow(base, exponent) : 밑 값(base)을 지수(exponent)로 거듭제곱 한 숫자 값을 반환
        Math.pow(2, 10) // 1024
        Math.pow(4, 0.5) // 2
        Math.pow(8, 1/3) // 2

    Math.floor(n) : 주어진 수 이하의 가장 큰 정수 반환 (올림)
        Math.floor(45.95) // 45
        Math.floor(45.05) // 45
        Math.floor(4)     // 4
        Math.floor(-45.05) // -46 

    Math.ceil(n) : 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자 반환 (내림)
        Math.ceil(.95)  // 1
        Math.ceil(4)    // 4
        Math.ceil(7.004) // 8
        Math.ceil(-0.75) // -0
        Math.ceil(-7.004) // -7

    Math.round(n) :  n을 반올림한 값과 가장 가까운 정수 반환 (반올림)
        Math.round(20.49)   // 20
        Math.round(20.5)    // 21
        Math.round(42)      // 42
        Math.round(-20.5)   // -20
        Math.round(-20.51)  // -21

    Math.abs(n) : 주어진 숫자의 절대값 반환
        Math.abs('-1')  // 1
        Math.abs(-2)    // 2
        Math.abs(null)  // 0
        Math.abs('')    // 0
        Math.abs([])    // 0
        Math.abs([2])   // 2
        Math.abs([1,2]) // NaN
        Math.abs({})    // NaN
        Math.abs('string) // NaN
        Math.abs()      // NaN
*/