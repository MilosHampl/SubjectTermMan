"use strict";
const SubjecttermmanMainAbl = require("../../abl/subjecttermman-main-abl.js");

class SubjecttermmanMainController {
  init(ucEnv) {
    return SubjecttermmanMainAbl.init(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
}

module.exports = new SubjecttermmanMainController();
