const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(pluginWebc);

    return {
        dir: {
            input: "src",
            layouts: "_layouts"
        },
        htmlTemplateEngine: "webc",
        markdownTemplateEngine: "webc"
    }
};
