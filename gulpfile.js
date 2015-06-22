var gulp = require('gulp'),
    coffee = require('gulp-coffee'),
    gutil = require('gulp-util'),

    coffeeStream = coffee({bare: true}),
    AppName = 'js-coding';


var paths = {
    app: {
        js: './'+AppName+'-app/js/'
    },
    src: {
        coffee: './src/'+ AppName + 'coffee/*.coffee'
    },
    watch: {
        coffee: './src/'+ AppName + 'coffee/*.coffee'
    },
    clean: './'+AppName+'-app'
};


gulp.task('coffee:app', function() {
    gulp.src(paths.src.coffee)
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(gulp.dest(paths.app.js))
});

gulp.task('app', [
    'coffee:app'
]);

gulp.task('watch', function(){
    gulp.watch([path.watch.coffee], function(event, cb) {
        gulp.start('coffee:app');
    });
});

gulp.task('default', ['app', 'watch']);