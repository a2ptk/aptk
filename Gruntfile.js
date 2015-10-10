module.exports = function(grunt) {

  // Load S3 plugin
  grunt.loadNpmTasks('grunt-aws');

  // Static Webserver
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.loadNpmTasks('grunt-bowercopy');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    aws: grunt.file.readJSON('.aws.json'),
    s3: {
      options: {
        accessKeyId: "<%= aws.accessKeyId %>",
        secretAccessKey: "<%= aws.secretAccessKey %>",
        bucket: "<%= aws.bucket %>"
      },
      build: {
        cwd: "public",
        src: "**"
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: "public",
          keepalive: true
        }
      }
    },
    bowercopy: {
      options: {
        srcPrefix: 'bower_components'
      },
      scripts: {
        options: {
          destPrefix: 'public/scripts/vendor'
        },
        files: {
         'fullpage.js/jquery.fullPage.js': 'fullpage.js/jquery.fullPage.js',
         'fullpage.js/jquery.fullPage.css': 'fullpage.js/jquery.fullPage.css' 
        }
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: 'public/assets/all/sass',
          cssDir: 'public/assets/all/stylesheets',
          raw: 'require "bootstrap-sass"'
	}
      }
    },
    watch: {
      css: {
        files: 'public/assets/all/sass/*.scss',
        tasks: ['compass']
      }
    }
  });

  // Load additional tasks
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['connect']);
  grunt.registerTask('watcher', ['watch']);
};
