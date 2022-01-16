const fs = require('fs');
const path = require('path');
var files = fs.readdirSync('./app/containers');
module.exports = {
  description: 'Add a api file',
  prompts: [
    {
      type: 'list',
      name: 'container',
      message: 'Which container do you want to add the api to?',
      choices: files
    },
    {
      type: 'name',
      name: 'name',
      message: 'What do you want to call your api'
    },
    {
        type: "list",
        name: 'method',
        choices: ["get", "post", "patch", "delete"],
        default: "get",
        message: 'What type of API is it?',
      },
  ],
  actions: data => {
    const actions = [
        {
            type: 'append',
            path: '../../app/containers/{{container}}/api.js',
            pattern: '// APIs go here',
            templateFile: './api/api.js.hbs',
            abortOnFail: true,
          },
    ]
    return actions
   }
};