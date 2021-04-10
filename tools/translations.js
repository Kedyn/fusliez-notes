/*
  The following will check for missing or extra keys on the translation files.
*/

const fs = require("fs");
const path = require("path");
const mainTranslation = require("../src/assets/locales/en-US/translation.json");
const translationsPath = path.resolve(__dirname, "../src/assets/locales");

// function tanken from: https://stackoverflow.com/a/47063174
const keyify = (obj, prefix = "") =>
  Object.keys(obj).reduce((res, el) => {
    if (Array.isArray(obj[el])) {
      return res;
    } else if (typeof obj[el] === "object" && obj[el] !== null) {
      return [...res, ...keyify(obj[el], prefix + el + ".")];
    }
    return [...res, prefix + el];
  }, []);

const mainTranslationKeys = keyify(mainTranslation);

fs.readdir(translationsPath, function (err, items) {
  for (const item of items) {
    const translationData = fs.readFileSync(
      path.join(translationsPath, `${item}/translation.json`)
    );
    const translationObj = JSON.parse(translationData);
    const translationKeys = keyify(translationObj);
    const missingKeys = [];

    for (const key of mainTranslationKeys) {
      if (!translationKeys.includes(key)) {
        missingKeys.push(key);
      }
    }

    if (missingKeys.length) {
      console.log(`${item} is missing or has extra items:\x1b[31m`);

      for (const key of missingKeys) {
        console.log(`\t${key}`);
      }
    } else {
      console.log(`${item} \x1b[32mis up-to-date`);
    }

    // TODO - show extra keys

    console.log("\x1b[0m\n");
  }
});
