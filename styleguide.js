var gemini = require('gemini');

gemini.suite('style-guide', function(suite) {
    suite.setUrl('/style-guide.html')
        .setCaptureElements(['.site-header', '.site-branding'])
        .capture('plain');
        // .capture('hovered', function(actions) {
        //     actions.mouseMove(this.link);
        // })
        // .capture('pressed', function(actions) {
        //     actions.mouseDown(this.link);
        // })
        // .capture('clicked', function(actions) {
        //     actions.mouseUp(this.link);
        // });;
});
