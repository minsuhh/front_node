// module1.js
// 외부 모듈(파일)을 이용하려면 먼저 require 해야함. 
// module에서 공개한 것 중 어떤 것을? 선별적으로 받을 수 있다. 
// {} 내에 받고자 하는 것 만 명시.
const {myData, myFun, MyClass} = require('./module1');
console.log(myData, myFun, MyClass) // 10 [Function: myFun] [class MyClass]

// module2.js
// // module.exports로 외부에서 공개한 것은 {}으로 받을 수 없다. 
// const {data2, myFun2, MyClass2} = require('./module2')
// console.log(data2, myFun2, MyClass2) // undefined undefined undefined

// 아래처럼 받아야 함. 
// 하나가 공개되었고, 공개된 것은 클래스다. 
const module2 = require('./module2')
console.log(module2) // [class MyClass2]

// module3.js
// 받을때 이름을 변경해서. 공개 이름: 사용 이름
const {data3:data33, myFun22, MyClass3} = require('./module3');
console.log(data33, myFun22, MyClass3) //10 [Function: myFun3] [class MyClass3]

//json으로 공개된 것을 위처럼 받아도 되고, 
//공개된 것 전체를 모두 이용하겠다면 객체명으로 받아도 된다. 
const module3 = require('./module3')
console.log(module3.data3, module3.myFun22, module3.MyClass3) //10 [Function: myFun3] [class MyClass3]