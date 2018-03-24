const lodash = require('lodash');
const moment = require('moment');

function exec() {
  // https://lodash.com/docs/4.17.5#VERSION
  console.log(`lodash version ${lodash.VERSION}`);
  console.log(`latest_modules/lodash version ${require('latest_modules/lodash').VERSION}`);

  // https://stackoverflow.com/questions/45961818/how-to-console-log-moment-js-version
  // https://github.com/moment/moment/blob/2.21.0/moment.js#L4459
  console.log(`moment version ${moment.version}`);
  console.log(`latest_modules/moment version ${require('latest_modules/moment').version}`);
}

exec();
