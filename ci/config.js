var _ = require("underscore");

var base = {
  credentials: {
    accessKeyId: "AKIAIGEHZO373H6MTW6Q",
    secretAccessKey: "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"
  }
};

module.exports = function(env) {
  switch (env) {
    case "test":
      return _.extend({
        distribution_id: "E2RLH6IBUKUALW",
        invalidationPath: "/*"
      }, base)
      break;
    case "prod":
      return _.extend({
        distribution_id: "E2M5BZKICTAZ82",
        invalidationPath: "/*"
      }, base)
      break;
  }
};
