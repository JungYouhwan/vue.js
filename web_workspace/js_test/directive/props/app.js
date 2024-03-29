//app.js
import MyNameComponent from './components/myName.js';
import checkComponent from './components/check.js';
import ref_parentComponent from './components/ref_parent.js';
import slotcomponent from './components/slot_parent.js'
const { createApp } = Vue

let template =`
    <div>
        <!-- <MyNameComponent /> -->
        <!--<checkComponent /> -->
        <!--<ref_parentComponent /> -->
        <slotcomponent />

    </div>
    
`;

createApp({
    template,
    components : {
        MyNameComponent,
        checkComponent,
        ref_parentComponent,
        slotcomponent
    }
})
.mount('#app');