const path = require("path");
const getQuestions = require("./questions");
const files = require("./files");

module.exports = async ({ inquirer, render, rimraf, name, where }) => {
    console.log(name, global.name);
    const answers = await inquirer.prompt(getQuestions({ name, where }));

    await Promise.all(files.map((file) => render(file, answers)));

    rimraf.sync(path.resolve(__dirname, "..", ".git"));
    rimraf.sync(__dirname);
};
