// 과제 1
/*let age = Number(prompt('나이를 입력해주세요'));
    if(age >=20){
        console.log('성인')
    }else if(age >=17 && age >=0){
        console.log('고등학생')
    }else if(age >=14){
        console.log('중학생')
    }else if(age >=8){
        console.log('초등학생')
    }else if(age >=0){
        console.log('유아')
    }
*/

// 과제 2
/*let now = new Date().getHours();
if(now<=12){
    console.log('오전')
}else(
    console.log('오후')
)*/

// let num = Number(prompt('10000이하의 숫자를 입력해주세요'))
// for (let i=1; i<= num; i++) 
//     if (i%13===0 && i%2===1) {
//         console.log(i)
// }

// console.log(num)


// for (let i = 2; i <= 9; i++) {
//     for (let j = 2; j <= 9; j++) {
//       console.log(`${i} X ${j} = ${i * j}`);
//     }
//   }

// let sum = 0
// for(let i=0; i <=100; i++){
//     if(i%2 === 0 || i%5 === 0){
//         sum+=i;
//     }
// }

// console.log(sum);

// console.log('랜수:', Math.ceil(Math.random()*10))

// const getDay =
// if(now.getDay()===0||now.getDay()===6){
//     console.log('주말')
// } else console.log('평일')


// const checkDay = now.getDay()===0||now.getDay()===6?'주말':'평일'
// console.log(checkDay)

// let now = new Date()
// console.log(now)

// if(now.getDay()===0||now.getDay()===6){
//     console.log('주말')
// }else console.log('평일')


// let i=1
// for(let i=1;i<=100;i++){
//     console.log(i)
// }

// // 1~100까지의 배열 생성
// let numbers = [];
// for (let i = 1; i <= 100; i++) {
//     numbers.push(i);
// }

// // 합계 계산: for문 사용
// let sum1 = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum1 += numbers[i];
// }
// console.log("for문을 사용한 합계:", sum1);

// // 합계 계산: for of문 사용
// let sum2 = 0;
// for (let num of numbers) {
//     sum2 += num;
// }
// console.log("for of문을 사용한 합계:", sum2);

// // 합계 계산: forEach문 사용
// let sum3 = 0;
// numbers.forEach(num => {
//     sum3 += num;
// });
// console.log("forEach문을 사용한 합계:", sum3);

for(let i=1;i<=100;i++){
    console.log(i)
}

let n =100;
let sum=0;

for(let i = 1; i <= 100; i++){
    sum = sum + i
}
console.log(sum)

for(let i=0; i<=n.length; i++){
    console.log(sum[i])
}
console.log(sum)

let num1=[];
for(let i=1;i<=100;i++){
    num1.push(i)
}
console.log(num1)
