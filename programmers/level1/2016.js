// 2016 요일 리턴

function solution(a, b) {
    const week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    let day = new Date(`2016-${a}-${b}`).getDay();
    
    let answer = week[day];
    return answer;
}
