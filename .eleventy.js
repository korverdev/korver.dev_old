module.exports = function (eleventyConfig) {
    return {
        dir: {
            input: "src"
        },
        htmlTemplateEngine: "webc",
        markdownTemplateEngine: "webc"
    }
};
