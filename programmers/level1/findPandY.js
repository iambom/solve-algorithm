// 문자열 내 p, y 찾기


function solution(string) {
    let p = [];
    let y = [];
    
    for(let i = 0; i < string.length; i++) {
      if(string[i] === 'p' || string[i] === 'P') {
        p.push(string[i])
      } else if(string[i] === 'y'|| string[i] === 'Y') {
        y.push(string[i])
      }
    }
    
    return p.length === y.length ? true : false
  }

// 다른 사람 풀이
function numPY(s){
      return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

function numPY(s) {
    return s.match(/p/ig).length == s.match(/y/ig).length;
  }