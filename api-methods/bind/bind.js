var bh = new BH;

bh.match('header', function(ctx) {
    ctx.tag('header');
});


var App = Backbone.Model.extend({
    defaults: {
        text: 'hello world'
    }
});

var app = new App();

window.onload = function() {
    bj.init({
        bemjson: [{
            block: 'header',
            bind: 'app',
            content: function(app) {
                return app.get('text');
            }
        }, {
            block: 'text',
            content: 'Попробуй ввести в консоли `app.set(\'text\', \'что-то\');`'
        }],
        models: {
            app: app
        },
        adapter: bj.adapters.native,
        templateEngine: bh
    });
};
