//component.js

// name로 컴포넌트의 이름을 지정할수 있다.
// 줄바꿈은 먹히지않음
let component = {
    name : '',           // 컴포넌트 이름
    template : ``,       // View 컴포넌트의 템플릿.
    data(){},            // Data : CRUD가 가능.
    computed : {},       // Data : Read만 가능. computed :컴퓨터를 애기함.
    methods : {},        // code : 기능 정의 || 컴포넌트 안에있는 모든 메소드를 애기함. 
    watch : {},          // watch: 감시. -> 연속행위를 정의 || 데이터를 감시함. 데이터는 data, computed 둘다 애기
    // 독립된 컴포넌트면 상관없음 root
    components : {}      // 자식 컴포넌트들 추가. 모든 컴포넌트가 가질 수 있음. (필수가 아님) (페이징기능, 검색기능 컴포넌트안에 컴포넌트 혼자서는 아무것도 못하는 컴포넌트를 해당함.)
};sss

