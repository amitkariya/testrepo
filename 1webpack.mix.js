const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles([
    'resources/public/css/main.css'
], 'public/css/main.css');

mix.styles([
    'resources/public/css/app.css'
], 'public/css/app.css');

mix.styles([
    'resources/public/css/lib/bootstrap/bootstrap.min.css'
], 'public/css/lib/bootstrap/bootstrap.min.css');

mix.styles([
    'resources/public/css/lib/font-awesome/font-awesome.min.css'
], 'public/css/lib/font-awesome/font-awesome.min.css');

mix.styles([
    'resources/public/css/separate/pages/login.min.css'
], 'public/css/separate/pages/login.min.css');

mix.scripts([
    'resources/public/js/app.js'
], 'public/js/app.js');

mix.scripts([
    'resources/public/js/plugins.js'
], 'public/js/plugins.js');

mix.scripts([
    'resources/public/js/lib/bootstrap/bootstrap.min.js'
], 'public/js/lib/bootstrap/bootstrap.min.js');

mix.scripts([
    'resources/public/js/lib/jquery/jquery-3.2.1.min.js'
], 'public/js/lib/jquery/jquery-3.2.1.min.js');

mix.scripts([
    'resources/public/js/lib/match-height/jquery.matchHeight.min.js'
], 'public/js/lib/match-height/jquery.matchHeight.min.js');

mix.scripts([
    'resources/public/js/lib/popper/popper.min.js'
], 'public/js/lib/popper/popper.min.js');

mix.scripts([
    'resources/public/js/lib/tether/tether.min.js'
], 'public/js/lib/tether/tether.min.js');

mix.copy('resources/public/img/company/pgsl_logo-min.jpg','public/img/company/pgsl_logo-min.jpg');