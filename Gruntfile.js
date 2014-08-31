module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: true
      },
      src: ['src/ti-console.js', 'test/**/*.js']
    },
    browserify: {
      build: {
        files: {
          'ti-console.js': ['src/ti-console.js']
        }
      }
    },
    ti_run: {
      options: {
        build: {
          iosVersion: '7.1'
        }
      },
      app: {
        files: {
          'tmp/app/Resources': ['ti-console.js', 'test/app.js',
            'node_modules/should/should.js', 'node_modules/ti-mocha/ti-mocha.js']
        }
      }
    },
    clean: {
      src: ['tmp']
    }
  });

  // Load grunt plugins for modules
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-titanium');

  // run build
  // grunt.registerTask('build', 'finalize ti-mocha.js release file', function() {
  //   grunt.log.write('Reading build ti-mocha.js...');
  //   var contents = fs.readFileSync(C.BUILD_FILE, 'utf8');
  //   grunt.log.ok();

  //   grunt.log.write('Copying "' + path.relative('.', C.BUILD_FILE) + '" to "' + path.relative('.', C.RELEASE_FILE) + '"...');
  //   fs.writeFileSync(C.RELEASE_FILE, contents);
  //   fs.chmodSync(C.RELEASE_FILE, fs.lstatSync(C.BUILD_FILE).mode);
  //   grunt.log.ok();
  // });

  // lint and test node and titanium
  grunt.registerTask('default', ['jshint', 'browserify', 'ti_run', 'clean']);

};
