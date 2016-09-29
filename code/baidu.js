var page = require('webpage').create();
page.open('http://test.jack.com/jsfile.php', function () {
 page.render('baidu.png');
 phantom.exit();
});