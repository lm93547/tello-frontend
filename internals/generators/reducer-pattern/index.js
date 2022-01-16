const fs = require('fs');
const path = require('path');
var files = fs.readdirSync('./app/containers');
module.exports = {
  description: 'Add a reducer pattern',
  prompts: [
    {
      type: 'list',
      name: 'container',
      message: 'Which container do you want to add the reducer pattern to?',
      choices: files
    },
    {
      type: 'name',
      name: 'name',
      message: 'What do you want to call your reducer pattern'
    },
  ],
  actions: data => {
    const actions = [
      {
        type: 'append',
        path: '../../app/containers/{{container}}/actions.js',
        templateFile: './reducer-pattern/actions.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'append',
        path: '../../app/containers/{{container}}/constants.js',
        templateFile: './reducer-pattern/constants.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'append',
        path: '../../app/containers/{{container}}/reducer.js',
        pattern: 'switch (action.type) {',
        templateFile: './reducer-pattern/reducer.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'append',
        path: '../../app/containers/{{container}}/saga.js',
        pattern: "// PUT ALL SAGAS BELOW THIS LINE AND DO NOT REMOVE",
        templateFile: './reducer-pattern/saga.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'append',
        path: '../../app/containers/{{container}}/saga.js',
        pattern: "// add new takeeveryhere DO NOT REMOVE",
        templateFile: './reducer-pattern/takeEvery.js.hbs',
        abortOnFail: true,
      },
    ]
    // actions.push({
    //   type: 'prettify',
    //   path: '/containers/',
    // });
    return actions
  }
};