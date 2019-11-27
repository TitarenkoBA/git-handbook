Vue.component('filter_articles', {
    props: ['article', 'subtitles', 'index'],
    data: function() {
        return {
            active_id: this.article.id
        }
    },
    template: `<span>
                    <a v-if="subtitles.length == 0" v-on:click="$emit('change_active', active_id)">{{article.title}}</a>
                    <a v-else v-for="item in subtitles[index]" :href="'#' + item.split('|')[0]" v-on:click="$emit('change_active', active_id)">{{item.split('|')[0]}}</a>
               </span>`
});