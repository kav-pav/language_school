const fs = require("fs");
const { join } = require("path");
const { promisify } = require("util");
const mjml2html = require("mjml");
const format = require("string-template");

const readFile = promisify(fs.readFile);

const templateGetter = new Promise(async (resolve, reject) => {
  try {
    const template = await readFile(join(__dirname, "index.mjml"), "utf-8");
    resolve(template);
  } catch (error) {
    reject(error);
  }
});

function setDataForTemplate({ template, data }) {
  return format(template, data);
}

async function createUserTemplate(data) {
  const template = await templateGetter;

  const emailTemplate = mjml2html(setDataForTemplate({ template, data }));
  return emailTemplate.html;
}

const templateForSchool = new Promise(async (resolve, reject) => {
  try {
    const template = await readFile(
      join(__dirname, "mailToSchool.mjml"),
      "utf-8"
    );
    resolve(template);
  } catch (error) {
    reject(error);
  }
});

async function createSchoolTemplate(data) {
  const template = await templateForSchool;

  const emailTemplate = mjml2html(setDataForTemplate({ template, data }));
  return emailTemplate.html;
}

module.exports = { createUserTemplate, createSchoolTemplate };
