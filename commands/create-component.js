/* eslint-disable no-console,import/no-extraneous-dependencies */
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const replace = require('replace-in-file');

const name = _.get(process, 'argv[2]', null);

const basePath = './src';

const nameArr = name.split('/');
const componentFolderPath = path.join(basePath, ...nameArr);
const componentFolderName = _.kebabCase(_.lowerCase(_.last(nameArr)));

const componentBaseName = _.upperFirst(_.camelCase(_.startCase(componentFolderName)));
const componentName = componentBaseName;

if (!name || !nameArr.length || !componentName) {
  console.log('Please specify the components name: npm run create-component [path+path]');
  console.log('Example: "npm run create-component common/my-component"');
  process.exit(0);
}


console.log(`Creating component: ${componentName} in path: ${componentFolderPath}`);


try {
  fs.mkdirSync(componentFolderPath, { recursive: true });
  fs.copyFileSync(path.join('./commands/create-component/index.js'), path.join(componentFolderPath, 'index.js'));
  fs.copyFileSync(path.join('./commands/create-component/ComponentName.js'), path.join(componentFolderPath, `${componentName}.js`));
  fs.copyFileSync(path.join('./commands/create-component/style.scss'), path.join(componentFolderPath, 'style.scss'));
  fs.copyFileSync(path.join('./commands/create-component/jest.js'), path.join(componentFolderPath, `${componentName}.test.js`));


  replace.sync({
    files: [
      path.join(componentFolderPath, 'index.js'),
      path.join(componentFolderPath, `${componentName}.js`),
      path.join(componentFolderPath, 'style.scss'),
      path.join(componentFolderPath, `${componentName}.test.js`),
    ],
    from: /ComponentName/g,
    to: componentName,
  });

  replace.sync({
    files: [path.join(componentFolderPath, `${componentName}.test.js`)],
    from: '{path}',
    to: `./${componentName}`,
  });
} catch (err) {
  console.log(err);
  process.exit(-1);
}
