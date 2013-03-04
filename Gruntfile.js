module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
    	bootstrap: {
		  	options: {
		      paths: ["bootstrap/less"]
		    },
		    files: {
		      "css/bootstrap.css": "bootstrap/less/bootstrap.less",
		      "css/bootstrap-responsive.css": "bootstrap/less/responsive.less"
		    },
      },
		  vitals: {
	    	options: {
	    		paths: ["less"]
	    	},
	    	files: {
	    		"css/vitals.css": "less/vitals.less",
	    	}
		  }
    },
    jshint: {
      files: ['Gruntfile.js','app/**/*.js','js/**/*.js','test/**/*.js'],
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['jshint', 'less']);
};