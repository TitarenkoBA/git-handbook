Vue.component('articles', {
    props: ['article'],
    template: `<div class="article_text_container">
                    <h1>{{article.title}}</h1>
                    <div v-for="(item, index) in article.subtitle">
                        <h3 v-if="article.subtitle.length > 1"><a :name="item.split('|')[0]">{{item.split('|')[0]}}</a></h3>
                        <img :src="article.images[index]">
                        <p class="article_text" v-html="article.text[index]"></p>                 
                    </div>
               </div>`
});