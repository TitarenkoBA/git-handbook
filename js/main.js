var app = new Vue({

    // DOM элемент, к которому прикреплена сущность
    el: '#app',

    // Начало модели.
    // Определяем свойства и присваиваем им необходимые значения.
    data: {
        searchString: "",
        active: '',
        articleList: articleList,
        videoList: videoList
    },
    computed: {
        // Вычисленное свойство, которое содержит только те статьи, которые соответствуют searchString.
        filteredArticles: function() {
            let articles_array = this.articleList;
            let searchString = this.searchString;
            let array_of_index_subtitles = [];

            if (!searchString) {
                return [articles_array, array_of_index_subtitles];
            };

            searchString = searchString.trim().toLowerCase();

            articles_array = articles_array.filter(function(item) {

                let flag = false;
                let array_of_subtitles = [];
                item.subtitle.forEach(function(subtitle) {
                    if (subtitle.toLowerCase().includes(searchString)) {
                        array_of_subtitles.push(subtitle);
                        flag = true;
                    };
                });
                if (flag == true) {
                    array_of_index_subtitles.push(array_of_subtitles)
                };
                return flag;

            });

            // Возвращает массив с отфильтрованными данными.

            return [articles_array, array_of_index_subtitles];

        }
    },

    // Функции, которые будем использовать.
    methods: {
        makeActive: function(item) {
            // Когда модель будет изменена, представление обновится.
            this.active = item;
        },
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
    },
    
});
