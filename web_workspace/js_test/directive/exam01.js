// exam01.js =>modelComponent

let template = `
    <div>
    <p><input type="text" v-model="name"><br></p>

    <input type="radio" v-model="color" value="빨강" v-bind:disabled="name == 0">빨강
    <input type="radio" v-model="color" value="녹색" v-bind:disabled="name == 0">녹색
    <input type="radio" v-model="color" value="파랑" v-bind:disabled="name == 0">파랑
    <input type="radio" v-model="color" value="노랑" v-bind:disabled="name == 0">노랑
    <input type="radio" v-model="color" value="회색" v-bind:disabled="name == 0">회색

    <p>내 이름은 {{ name }} 이고</p>
    <p>좋아하는 색은 {{ color }} 입니다.
    
    </div>
`;
// 제목:자기소개 이름:input 
// 좋아하는 색은: checkbox
// 빨강 녹색 파란색 노란색 회색 (중 1)
// <내 이름은 홍길동이고 
// 좋아하는 색은 blue 입니다.
// 다하면 응용 이름이 입력되었을떄만 색을 선택할수있도록.
export default {
    template,
    data() {
        return{
            name: '',
            color: ''
            
        }
    }
}
