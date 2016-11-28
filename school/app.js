(function () {

    const port = 8881;

    let http = require('http');
    let express = require('express');
    let app = express();

    app.use(express.static('./public'));
    app.listen(port, function (error) {
        console.log(`started at port ${port}`);
    });

})();