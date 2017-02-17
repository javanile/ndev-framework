
//
var exec     = require("child_process").exec;
var basename = require("path").basename;

//
var path = process.cwd();

//
module.exports = {

    //
    run: function(args) {

        //
        var tool = args[0];

        //
        switch (tool) {
            case "clone": return ndev_clone(args);
            case "install": return ndev_install(args);
            case "publish": return ndev_publish(args);
            default: console.error("Undefined tool:", tool);
        }
    }
}

//
function ndev_clone(args) {

    //
    if (!args[1]) {
        console.error("Error repository required.");
        return;
    }

    //
    var repo = args[1];

    //
    var name = args[2] ? args[2] : basename(repo, ".git");

    //
    exec(__dirname + "/../exec/ndev-clone.sh " + path + " " + repo + " " + name,
        function (error, stdout, stderr) {
            console.log(stderr.trim());
        }
    );
}

//
function ndev_install(args) {

    //
    exec(__dirname + "/../exec/ndev-install.sh " + path,
        function (error, stdout, stderr) {
            console.log(stderr.trim());
        }
    );
}

//
function ndev_publish(args) {

    //
    if (!args[1]) {
        console.error("Error ndev module required.");
        return;
    }

    //
    var name = args[1];

    //
    exec(__dirname + "/../exec/ndev-publish.sh " + path + " " + name,
        function (error, stdout, stderr) {
            console.log(stderr.trim(), stdout);
        }
    );
}










