const chalk = require ('chalk');

//Using the chalk package to bring some color.
const message = {hello:'Hello ' + chalk.yellow('World'),
                sing: `\nHello from the ${chalk.red('other')} ${chalk.blue('side')}`,
                chain: `\n${chalk.underline.red('Here we go again')}`,
                anotherchain: `\n${chalk.blue.bgRed.bold('WOW')}`
}

//Output
console.log(message.hello, message.sing, message.chain, message.anotherchain);