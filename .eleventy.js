const pluginWebc = require("@11ty/eleventy-plugin-webc");

const root_folder = "src"

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(pluginWebc, {
        components: root_folder + "/_includes/components/**/*.webc"
    });

    return {
        dir: {
            input: root_folder
        },
        htmlTemplateEngine: "webc",
        markdownTemplateEngine: "webc"
    }
};
