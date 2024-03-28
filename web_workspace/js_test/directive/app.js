// app.js
// => Root Component
import RawComponent from './raw.js';
import InputComponent from './input.js';
import modelComponent from './exam01.js';
import listComponent from './list.js';
import exam02 from './exam02.js';
import ifComponent from './if.js';
import eventComponent from './event.js';
import watchComponent from './watch.js';
const { createApp } = Vue

const template =`
<div>
    <!-- 자식 컴포넌트 추가 -->
    <!--<RawComponent/> -->
    <!--<InputComponent/>-->
    <!--<modelComponent/>-->
    <!--<listComponent />-->
    <!--<exam02 /> -->
    <!-- <ifComponent /> -->
    <!--<eventComponent /> -->
    <watchComponent />
</div>
`;
 // 'raw-component' : RawComponent
createApp({
    template,
    components: {
        RawComponent,
        InputComponent,
        modelComponent,
        listComponent,
        exam02,
        ifComponent,
        eventComponent,
        watchComponent
    }
})
.mount('#app');