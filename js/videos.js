Vue.component('video_list', {
    props: ['videos'],
    template: `<div class="videoblock_container">
                    <div class="video_container" :key="item.id" v-for="item in videos" v-on:click="$emit('choose_video', item.id)">
                        <h3>{{item.title}}</h3>
                        <img src="img/unnamed.jpg" class="videoblock">
                    </div>
               </div>`
});