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

let num = Number(prompt('10000이하의 숫자를 입력해주세요'))
for (let i=1; i<= 10000; i++) 
    if (i%13===0 && i%2===1) {
        console.log(i)
}

console.log(num)


