/*
 * https://github.com/5orenso
 *
 * Copyright (c) 2014 Øistein Sørensen
 * Licensed under the MIT license.
 */
'use strict';

var path = require('path'),
    commander = require('commander'),
    appPath = path.normalize(__dirname + '/../');

commander
    .option('-c, --config <file>', 'configuration file path', './config/config-dist.js')
    .option('-s, --server <server ip>', 'ip of server', '127.0.0.1')
    .parse(process.argv);
var config = require(appPath + commander.config);

var Logger = require(appPath + 'lib/logger');
var logger = new Logger({
    logLevel: config.logLevel
});

var app = require(appPath + 'lib/my-app.js')({
    logger: logger
});

app.run();
