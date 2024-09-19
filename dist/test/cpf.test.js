"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cpf_1 = __importDefault(require("../src/cpf"));
test("Deve testar um cpf valido", function () {
    const cpf = new cpf_1.default("935.411.347-80");
    expect(cpf.getValue()).toBe("935.411.347-80");
});
const invalidCpfsWithSameDigits = [
    "111.111.111-11",
    "222.222.222-22",
];
describe.each(invalidCpfsWithSameDigits)("Deve testar um cpf invalido com todos os digitos iguais", function (cpf) {
    test(`CPF ${cpf} deve ser invalido`, function () {
        expect(() => new cpf_1.default(cpf)).toThrow(new Error("CPF inválido"));
    });
});
// test("Deve testar um cpf invalido com digitos diferentes", function () {
//     const cpf = "123.456.789-99";
//     const isValid = example2.validate(cpf)
//     expect(isValid).toBeFalsy()
// });
