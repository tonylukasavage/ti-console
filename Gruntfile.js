var fs = require('fs');

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
      app: {
        files: {
          'ti-console.js': ['src/ti-console.js']
        }
      }
    },
    ti_run: {
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

  // finalize build
  grunt.registerTask('finalize', 'finalize ti-console.js file', function() {
    var code = fs.readFileSync('ti-console.js', 'utf8'),
      match = code.match(/\[(\d+)\]\);?\s*$/);
    fs.writeFileSync('ti-console.js', 'module.exports=' + code.replace(/;\s*$/,'') +
      '(' + match[1] + ');');
  });

  // lint and test node and titanium
  grunt.registerTask('default', ['jshint', 'browserify', 'finalize', 'ti_run', 'clean']);

};
