/* eslint-disable no-console,import/no-extraneous-dependencies */
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const replace = require('replace-in-file');

const componentFolderPath = _.get(process, 'argv[2]', null);
const componentName = _.get(process, 'argv[3]', null);

const basePath = './src';

const componentFullFolderPath = path.join(basePath, componentFolderPath);
const testName = `${componentName}.test.js`;

if (!componentName || !componentFolderPath) {
  console.log('Please specify the component`s name and path: npm run create-test [name] [path]');
  console.log('Example: "npm run create-test component-path/my-component MyComponent"');
  process.exit(0);
}


console.log(`Creating test for component: ${componentName} in path: ${componentFullFolderPath}. Test name: ${testName}`);


try {
  fs.copyFileSync(path.join('./commands/create-test/jest.js'), path.join(componentFullFolderPath, testName));

  replace.sync({
    files: [
      path.join(componentFullFolderPath, testName),
    ],
    from: /ComponentName/g,
    to: componentName,
  });

  replace.sync({
    files: [path.join(componentFullFolderPath, testName)],
    from: '{path}',
    to: `./${componentName}`,
  });
} catch (err) {
  console.log(err);
  process.exit(-1);
}
