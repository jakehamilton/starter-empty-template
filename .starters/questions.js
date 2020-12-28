const path = require("path");

const getQuestions = ({ name, where }) => (console.log(name, where), [
    {
        type: "input",
        name: "package.name",
        default: name || path.basename(where),
        message: "Package Name",
    },
    {
        type: "input",
        name: "package.description",
        message: "Package Description",
    },
    {
        type: "input",
        name: "package.keywords",
        message: "Keywords"
    },
    {
        type: "input",
        name: "package.license",
        message: "Package License",
        required: true,
    },
    {
        type: "input",
        name: "author.name",
        message: "Author Name",
        required: true,
    },
    {
        type: "input",
        name: "author.email",
        message: "Author Email",
        required: true,
    },
]);

module.exports = getQuestions;
