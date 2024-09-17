"use strict";
/**
 *  import работает только если в package.json "type": "module"
 * если же "type": "commonjs", то нужно использовать require
 *
 * @TODO: почитать раздел "Модули" https://learn.javascript.ru/modules
 * > CommonJS – модульная система, созданная для сервера Node.js
 * > https://learn.javascript.ru/import-export
 */
//import { describe, before, it } from "mocha";
import assert from "assert";
// import chai from "chai";
import sinon from "sinon";

console.log("sinon.spy", sinon.spy);

const validText = "valid-test-text";

function getValidText() {
  return validText;
}

function displayValidText() {
  console.log(validText);
}

describe("getValidText", () => {
  it("должна вернуть правильное сообщение", () => {
    const actual = getValidText();
    assert.equal(actual, validText);
  });
});

describe("displayValidText", () => {
  it("должна вывести правильное сообщение", () => {
    const consoleSpy = sinon.spy(console, "log");
    // Вызываем функцию, которую хотим протестировать
    displayValidText();
    // Проверяем, что console.log был вызван с ожидаемым аргументом
    const actual = consoleSpy.calledWith(validText);
    // Восстанавливаем оригинальный console.log
    consoleSpy.restore();
    assert(actual, true, "Тест не пройден");
  });
  it("тест не должен пройти т.к. передаем мусор", () => {
    const consoleSpy = sinon.spy(console, "log");
    // Вызываем функцию, которую хотим протестировать
    displayValidText();

    // Проверяем, что console.log был вызван с ожидаемым аргументом
    const actual = consoleSpy.calledWith("some-invalid-text");
    // Восстанавливаем оригинальный console.log
    consoleSpy.restore();
    assert(actual, true, "Тест не пройден");
  });
});
