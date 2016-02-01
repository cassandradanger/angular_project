module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'client/scripts/app.js',
                dest: 'public/javascripts/app.min.js'
            },
            pos: {
                src: 'client/scripts/controllers/home.js',
                dest: 'public/javascripts/controllers/home.min.js'
            },
            newVendor: {
                src: 'client/scripts/controllers/cat.js',
                dest: 'public/javascripts/controllers/cat.min.js'
            },
            newItem: {
                src: 'client/scripts/controllers/dog.js',
                dest: 'public/javascripts/controllers/dog.min.js'
            },
            scripts: {
                src: 'client/scripts/scripts.js',
                dest: 'public/javascripts/scripts.min.js'
            }
        },
        copy: {
            angular: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "angular/angular.min.js",
                    "angular/angular.min.js.map",
                    "angular/angular-csp.css",
                    "angular-animate/angular-animate.min.js",
                    "angular-aria/angular-aria.min.js",
                    "angular-material/angular-material.min.js",
                    "angular-material/angular-material.min.css"
                ],
                "dest": "public/vendor/"
            },
            angularRoute:{
                expand: true,
                cwd: "node_modules/",
                src: [
                    "angular-route/angular-route.min.js",
                    "angular-route/angular-route.min.js.map"
                ],
                "dest": "public/vendor/"
            },
            bootstrap: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "bootstrap/dist/css/bootstrap.css",
                    "bootstrap/dist/css/bootstrap.css.map",
                    "bootstrap/dist/fonts/glyphicons-halflings-regular.eot",
                    "bootstrap/dist/fonts/glyphicons-halflings-regular.svg",
                    "bootstrap/dist/fonts/glyphicons-halflings-regular.ttf",
                    "bootstrap/dist/fonts/glyphicons-halflings-regular.woff",
                    "bootstrap/dist/fonts/glyphicons-halflings-regular.woff2",
                    "bootstrap/dist/js/bootstrap.min.js"
                ],
                "dest": "public/vendor/"
            },
            styles: {
                expand: true,
                cwd: "client",
                src: [
                    "stylesheets/style.css"
                ],
                "dest": "public/"
            },
            views: {
                expand: true,
                cwd: "client",
                src: [
                    "views/routes/home.html",
                    "views/routes/cat.html",
                    "views/routes/dog.html"
                ],
                "dest": "public/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['copy', 'uglify']);

};