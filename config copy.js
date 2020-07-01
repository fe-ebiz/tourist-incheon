module.exports = function () {

    var source = 'src',
        development = 'dist',
        test = 'test',
        remove = ['.sass-cache', 'dist'],
        

        // 템플릿 경로
        template = {
            src: source + '/template/**/!(_)*.html',
            parts: source + '/template/**/_*.html',
            dest: development + '/views',
            src_m: source + '/template_m/**/!(_)*.html',
            parts_m: source + '/template_m/**/_*.html',
            dest_m: development + '/views_m',
        },

        // Sass 경로
        sass = {
            src: source + '/assets/sass/**/!(_)*.{scss,sass}',
            parts: source + '/assets/sass/**/_*.{scss,sass}',
            dest: development + '/static/css'
        },

        // Css 경로
        css = {
            src: source + '/assets/css/**/*.css',
            dest: development + '/static/css'
        },

        // JS 경로
        js = {
            src: source + '/assets/js/**/*.js',
            dest: development + '/static/js'
        },

        // Img 경로
        img = {
            // src : source + '/assets/assets/img/**/*.{gif,jpg,png,ico}',
            src: source + '/assets/img/**/!(sprite)*/*',
            src_sprite: source + '/assets/img/**/sprite*/*',
            dest: development + '/img',
        },

        // etc 경로
        etc = {
            src: source + '/assets/!(css|sass|js|img)/**',
            dest: development + '/static',
        },

        // HTML 옵션
        htmlbeautify = {
            "indentSize": 4
        };

    return {
        del: remove,
        src: source,
        test: test,
        dev: development,

        template: template,
        css: css,
        sass: sass,
        js: js,
        img: img,
        etc: etc,

        htmlbeautify: htmlbeautify


    };
};