//ref_parent.js
import ChildComponent from './ref_child.js';
let template =`
    <div>
        <ChildComponent ref="child" />
        <button type="button"
                @click="changeChildData">
                change child dats
        </button>
        <button type="button"
                @click="clickChildEvent">
                child click Event
        </button>
        <button type="button"
                @click="executeChildFun">
                child click Event
        </button>
        <p> {{ msg }} </p>
    </div>
`;

export default{
    template,
    computed : {
        msg() {
            return this.$refs.child.msg;
        }
    },
    methods :{
        changeChildData() {
            //console.log(this.$refs.child);
            this.$refs.child.msg = 'Data Update';
        },
        clickChildEvent() {
            let childCom = this.$refs.child;
            let childBtn = childCom.$refs.btn;
            console.log(childBtn);
            childBtn.click();

            this.$refs.child.$refs.btn.click();
        },
        executeChildFun() {
            this.$refs.child.childFunc();
        }
    },
    components :{
        ChildComponent
    }
}