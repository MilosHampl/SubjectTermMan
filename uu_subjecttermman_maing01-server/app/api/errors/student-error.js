"use strict";

const SubjecttermmanMainUseCaseError = require("./subjecttermman-main-use-case-error.js");
const STUDENT_ERROR_PREFIX = `${SubjecttermmanMainUseCaseError.ERROR_PREFIX}student/`;

const Create = {
  UC_CODE: `${STUDENT_ERROR_PREFIX}create/`,
  
};

const Get = {
  UC_CODE: `${STUDENT_ERROR_PREFIX}get/`,
  
};

const Update = {
  UC_CODE: `${STUDENT_ERROR_PREFIX}update/`,
  
};

const Delete = {
  UC_CODE: `${STUDENT_ERROR_PREFIX}delete/`,
  
};

const List = {
  UC_CODE: `${STUDENT_ERROR_PREFIX}list/`,
  
};

module.exports = {
  List,
  Delete,
  Update,
  Get,
  Create
};
