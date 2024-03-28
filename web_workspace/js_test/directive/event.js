//event.js

let template =`
    <div>
        <button type="button" v-on:click="upCounter(), printMsg($event)">Add 1</button>
        <p> The counter is : {{ counter }}</p>

        <hr>

        <input type="number" v-model="num">
        <button type="button" v-on:click="increseCount(num)">Add {{ num }}</button>
        <p> The counter is : {{ sum }}</p>

    </div>
    <div>
    <form style="border : 1px solid black" v-on:click="showAlert('form')" >
        <div v-on:click.self="showAlert('div')">
            <p style="border : 1px solid black" v-on:click.ones="showAlert('p')">
                <a v-on:click.prevent.stop href="http://www.naver.com">네이버</a>
            </p>
            click div tag
        </div>
    </form>
    <hr>
    <input type="text" v-model="keyword" v-on:keyup.enter="showAlert(keyword)">
    </div>
`;

export default {
    template,
    data() {
        return {
                counter : 0,
                num : 0,
                sum : 0,
                keyword : ''
        }
    },
    // computed : {
//              
    // },
    methods : {
        // 객체 내부에서 쓰이는거라서 this.가 쓰여야함.
        // upcounter : function() {}
        // this.data.counter += 1;
        upcounter(data) {
            console.log(data); // 매개변수로 넘어오는게 있는지, data 값 확인
            this.Counter += 1;
        },
        printMsg(event) {
            console.log(event);
            
        
        },
        increseCount(data) {
            this.sum += data;
        },
        showAlert(tag) {
            alert('click ' + tag);
        }
        
    }
}