/* 1. 태그 낸부 내용 */
/* 
- innerText
- textContent
- innerHTML
*/

let div1 = document.getElementById('div1')
div1.innerText='     여기는 <b>첫번째</b> 태그입니다.&hearts;     /'
// 2칸이상의 공백문자 제거, 앞뒤로 공백문자 제거
console.log(div1.innerText)

div1.innerHTML='여기는 <b>첫번째</b> 태그입니다.&hearts;'

div1.textContent='     여기는 <b>첫번째</b> 태그입니다.&hearts;     /'
console.log(div1.textContent)
// 공백이 그대로 나타난다 