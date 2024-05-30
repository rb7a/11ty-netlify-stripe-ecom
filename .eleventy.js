module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("_includes/style.css");
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  }
};