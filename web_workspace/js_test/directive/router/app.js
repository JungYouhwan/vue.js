//app.js
import router from './router/router.js';

// <router-link /> 라우터를 보여주겠습니다.
// <router-view /> 선택된 라우터를 보여주겠습니다.

const { createApp } = Vue

const template=`
    <div>
    <!-- <router-link v-bind:to="{ path : '/home' }">Home</router-link> -->
         <router-link v-bind:to="{ name : 'home' }">Home</router-link>
     ||  <router-link v-bind:to="{ path: '/postList' }">전체조회</router-link>
     ||  <router-link v-bind:to="{ path: '/postInfo' }">단건조회</router-link>
        <router-view :key="$route.fullPath" />

    </div>
`;
createApp({
    template
})
.use(router)
.mount('#app');
