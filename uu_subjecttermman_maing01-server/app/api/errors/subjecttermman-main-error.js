"use strict";
const SubjecttermmanMainUseCaseError = require("./subjecttermman-main-use-case-error.js");

const Init = {
  UC_CODE: `${SubjecttermmanMainUseCaseError.ERROR_PREFIX}init/`,

  InvalidDtoIn: class extends SubjecttermmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  SchemaDaoCreateSchemaFailed: class extends SubjecttermmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.status = 500;
      this.code = `${Init.UC_CODE}schemaDaoCreateSchemaFailed`;
      this.message = "Create schema by Dao createSchema failed.";
    }
  },

  SetProfileFailed: class extends SubjecttermmanMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}sys/setProfileFailed`;
      this.message = "Set profile failed.";
    }
  }
};

module.exports = {
  Init
};
