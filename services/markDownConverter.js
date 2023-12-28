const showdown = require('showdown');

converter = new showdown.Converter();
converter.setOption('optionKey', 'value');
converter.setOption('simplifiedAutoLink', 'true');

function convert(){
    return converter.makeHtml(text);
}

module.exports = {
    convert  
};
  