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
    'resources/public/css/separate/pages/login.min.css',
    'resources/public/css/lib/font-awesome/font-awesome.min.css',
    'resources/public/css/lib/bootstrap/bootstrap.min.css',
    'resources/public/css/main.css'
], 'public/css/login.css');

mix.scripts([
    'resources/public/js/lib/jquery/jquery-3.2.1.min.js',
    'resources/public/js/lib/popper/popper.min.js',
    'resources/public/js/lib/tether/tether.min.js',
    'resources/public/js/lib/bootstrap/bootstrap.min.js',
    'resources/public/js/plugins.js',
    'resources/public/js/lib/match-height/jquery.matchHeight.min.js',
    'resources/public/js/app.js'
], 'public/js/login.js');

mix.copy('resources/public/img/company/pgsl_logo-min.jpg','public/img/company/pgsl_logo-min.jpg');
mix.copy('resources/public/fonts/Proxima_Nova_Regular.ttf','public/fonts/Proxima_Nova_Regular.ttf');
mix.copy('resources/public/fonts/Proxima_Nova_Regular.woff','public/fonts/Proxima_Nova_Regular.woff');
mix.copy('resources/public/fonts/Proxima_Nova_Regular.woff2','public/fonts/Proxima_Nova_Regular.woff2');
mix.copy('resources/public/fonts/Proxima_Nova_Semibold.ttf','public/fonts/Proxima_Nova_Semibold.ttf');
mix.copy('resources/public/fonts/Proxima_Nova_Semibold.woff','public/fonts/Proxima_Nova_Semibold.woff');
mix.copy('resources/public/fonts/Proxima_Nova_Semibold.woff2','public/fonts/Proxima_Nova_Semibold.woff2');