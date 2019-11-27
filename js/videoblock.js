Vue.component('videoblock', {
    props: ['item'],
    template: `<div class="videoblock_container">
                        <iframe  class="iframe" :src="item.link" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               </div>`
});