var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  writing: function() {
    if (arguments.length < 1) {
      throw new Error('Missing arugment');
    }

    this.fs.copyTpl(
      this.templatePath('./'),
      this.destinationRoot(),
      {
        appName: arguments[0]
      }
    );

    this.fs.copy(this.templatePath('.*'), this.destinationRoot());
  }
});