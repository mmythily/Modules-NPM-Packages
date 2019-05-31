const chalk = require ('chalk');

//Using the chalk package to bring some color.
const message = {hello:'Hello ' + chalk.yellow('World'),
                what: `\nWhat are your ${chalk.green('hobbies')}`,
                sing: `\nHello from the ${chalk.red('other')} ${chalk.blue('side')}`
}

//Output
console.log(message.hello, message.what, message.sing);