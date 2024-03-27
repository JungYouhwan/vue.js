// exam02.js

let template =`
    <div>
        <div>
        <p v-for="line in 5" :key="line">
            <span v-for="num in line" :key="num">
            {{'*'}}
            </span>
            </p>
        </div>
        <div>
        <p v-for="stars in 10" :key="stars">
            {{stars}}
            </p>
        </div>
    </div>
`;

export default{
    template,
    data() {
        return {
            stars : ['*', '**', '***', '****', '*****',]

        }

    }
}
