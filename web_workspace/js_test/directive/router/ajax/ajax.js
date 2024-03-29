// ajax.js
/*
    라우팅(Routing) 
    : 특정 엔드 포인트에 대한 클라이언트 요청에
      애플리케이션이 응답하는 방법을 결정하는 것
      엔드 포인트 = 메소드(Method) + 경로(Path)
    
    Rest
    = URI(자원) + METHOD(기능)  /SON
    => GET(조회), POST(등록), PUT(수정), DELETE(삭제)
    단건조회 : GET + empInfo?employeeId=100
    전체조회 : GET + empList
    등록     : POST + empInsert
    수정     : POST + empUpdate
    삭제     : GET + empDelete?employeeId=100
    
    

    REST방식 Restful Server

    단건조회 : GET  + emps/100
    전체조회 : GET  + emps
    등록     : POST + emps
    수정     : PUT  + emps/100
    삭제     : DELETE  + emps/100
*/

// javascript fatch
//단건 조회
fetch('https://jsonplaceholder.typicode.com/posts/'+1)
.then(response => {
    console.log(response);
    return response.json();
})
.then(data => {              // 파싱작업
    console.log(data);
})
.catch(err => console.log(err));

// rest 방식
fetch('https://jsonplaceholder.typicode.com/posts/'+2)
.then(res => res.json())
.then(data => {
    console.log(data);
    return response.json();
})
.catch(err => console.log(err));

//jquery
// $.ajax('https://jsonplaceholder.typicode.com/posts')
// .done(data => {
//     console.log(data);
// })
// .fail(err => console.log(err));

// 등록 JSON : {}, []
let post = {
    id : 100,
    title : 'Hello!!',
    userId : 10,
    body : 'Today is Friday!!!'
}
fetch('https://jsonplaceholder.typicode.com/posts',{
    method : 'post',
    headers : {
        'Content-type' : 'application/json'
    },
    body : JSON.stringify(post)
})
.then(res => res.json())
.then(data => {
    console.log(data);
})
.catch(err => console.log(err));

// 수정
fetch('https://jsonplaceholder.typicode.com/posts/'+1,{
    method : 'put',
    headers : {
        'Content-type' : 'application/json'
    },
    body : JSON.stringify({
        title : 'Welcome!',
        userId : 20,
        body : 'Test!'
    })
})
.then(res => res.json())
.then(data => {
    console.log(data);
})
.catch(err => console.log(err));

// 삭제
fetch('https://jsonplaceholder.typicode.com/posts/'+1,{
    method : 'Delete'
})
.then(res => res.json())
.then(data => {
    console.log(data);
})
.catch(err => console.log(err));



















