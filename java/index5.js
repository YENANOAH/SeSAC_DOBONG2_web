/* for문
for(변수 선언과 초기화;조건식(어디까지 증가,감소할건지);증감식){
    반복 실행 코드    
}
*/

// 증가식 : i++, i=i+1, i+=1,
     //    i--, i=i-2, i-=1


for(let i=0;i<10;i++){
    console.log('안녕',i)
}

for(let i=0;i<10;i=i+2){
    console.log(`안녕 ${i}`)
}

// 1~5까지 출력하는 방법

for(let i=1;i<=5;i++){
    console.log(i)
}

for(let i=1;i<6;i++){
    console.log(i)
}

for(let i=0; i<5; i++){
    console.log(i+1)
}

//5~1출력

for(let i = 5; i > 0; i--){
    console.log(i)
}

let fruits = ['apple', 'banana', 'orange', 'mango']
console.log(fruits.length)
// fruits 전체 요소 for문을 이용해서 출력
for(let i=0; i< fruits.length; i++){
    console.log(fruits[i]) //0,1,2,3
}

//퀴즈

//1~n까지 더하기
let n =11
let sum=0;
// 반복문을 사용해서 덧셈 만들기.
/*
3
sum = 0
sum = sum + 1 > 1
sum = sum + 2 > 3
sum = sum = 3 > 6 */

console.log(sum)
for(let i = 1; i <= n; i++){
    sum = sum + i
}
console.log(sum)

let arr = [99,98,85,77,100,50]
// 배열 내부의 합 구하기
let sum2=0
for(let i=0; i<arr.length; i++){
    sum2+=arr[i]
}

console.log(sum2)

// 1이상 20이하의 수중에서 짝수만 더한 값 출력하기

let sum3=0
for(let i=1; i<=20; i++){
    if(i%2===0){
        sum3+=i
    }
}

console.log(sum3)

let sum4=0
for(let i=0; i<=20; i=i+2){
    sum4+=i
}

console.log(sum4)


// 과제

age()
function age(num){
    let promptage = prompt('나이를 입력해주세요')

    if(age >=20){
        console.log('성인')
    }else if(age >=17){
        console.log('고등학생')
    }else if(age >=14){
        console.log('중학생')
    }else if(age >=8){
        console.log('초등학생')
    }else{
        console.log('유아')
    }

}
