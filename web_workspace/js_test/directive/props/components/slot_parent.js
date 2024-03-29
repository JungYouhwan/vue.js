// slot_parent.js
import ChildComponent from './slot_child.js'
let template =`
<!-- parentComponent -->
<!-- 가진 슬롯 수 만큼 작성 -->
<div>
    <ChildComponent>
        <template v-slot:title>
            <h1>팝업 타이틀</h1>
        </template>
        <p>다른 내용</p>
        <template v-slot:content>
            <p>팝업 컨텐츠1</p>
            <p>팝업 컨텐츠2</p>
        </template>
        <template v-slot:default>
            <button type="button">닫기</button>
        </template>
    </ChildComponent>
</div>
<hr>
<div>
    <ChildComponent>
        <template v-slot:title>
        <h3>infor</h3>
        </template>
        <p>다른 내용</p>
        <template v-slot:content>
        <p>Service</p>
        <input type="radio" v-model="select" value="A"> A 유형<br>
        <input type="radio" v-model="select" value="B"> B 유형<br>            
        </template>
        <template v-slot:default>
            <button type="button">닫기</button>
        </template>
    </ChildComponent>
</div>


<!-- ChildComponent -->
<div>
    <p> 자식 컴포넌트 활용</p>
</div>

`;
export default {
        template,
        data() {
            return {
                select :''
            }
        },
        components : {
            ChildComponent
        }
}
        