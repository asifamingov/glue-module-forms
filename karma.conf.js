module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    reporters: ['spec' , 'html'],
          htmlReporter: {
              outputDir: './test/unit/result_html',
              templatePath: null,
              focusOnFailures: true,
              namedFiles: true,
              pageTitle: "Unit Test Result",
              urlFriendlyName: false,
              reportName: 'report'
          },
    browsers: ['PhantomJS'],
    files: [
        'node_modules/knockout/build/output/knockout-latest.js',
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/highcharts/highcharts.js',
        'test/unit/all.js',
        'test/unit/specs/*.js'
    ]
  });
};