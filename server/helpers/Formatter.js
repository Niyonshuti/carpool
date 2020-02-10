const fs = require('fs');
const path = require('path');

const exportModules = new Object();

fs.readdirSync(path.resolve(__dirname, 'formatters')).forEach((file) => {
    const requiredModules = require(path.resolve(__dirname, 'formatters', file));
    Object.entries(requiredModules).forEach((requiredModule) => {
        exportModules[requiredModule[0]] = requiredModule[1];
    });
});

module.exports = exportModules;
