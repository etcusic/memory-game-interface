// requirejs(["helper/util"], function(util) {
//     //This function is called when scripts/helper/util.js is loaded.
//     //If util.js calls define(), then this function is not fired until
//     //util's dependencies have loaded, and the util argument will hold
//     //the module value for "helper/util".
// });

requirejs.config({
    baseUrl: 'scripts',
    paths: {
        app: '../app'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main']);