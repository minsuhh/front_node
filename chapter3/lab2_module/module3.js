let data3 = 10
function myFun3() {}
class MyClass3 {
    data3 = 30
}

// 가장 일반적인 형태
// 여러개를 json object로 
module.exports = {
    data3, // json은 key:value 형태이지만, key와 value가 동일하다면 data3만 써도 됨 해석하자면 data3: data3
    myFun22: myFun3, //myFun3을 외부에서 myFun22로 
    MyClass3 
}