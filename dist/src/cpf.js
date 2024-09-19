"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CPF {
    constructor(value) {
        this.value = value;
        this.FACTOR_DIGIT_1 = 10;
        this.FACTOR_DIGIT_2 = 11;
        if (!this.validate(value))
            throw new Error("CPF inválido");
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    validate(cpf) {
        if (!cpf)
            return false;
        cpf = this.cleanCpf(cpf);
        if (this.isInvalidLength(cpf))
            return false;
        if (this.hasAllDigitsEqual(cpf))
            return false;
        const digit1 = this.calculateCheckDigit(cpf, this.FACTOR_DIGIT_1);
        const digit2 = this.calculateCheckDigit(cpf + digit1, this.FACTOR_DIGIT_2);
        const checkDigit = this.extractCheckDigit(cpf);
        const calculatedDigit = `${digit1}${digit2}`;
        return checkDigit === calculatedDigit;
    }
    cleanCpf(cpf) {
        return cpf.replace(/[\.\-]/g, "");
    }
    isInvalidLength(cpf) {
        return cpf.length !== 11;
    }
    hasAllDigitsEqual(cpf) {
        const [firstDigit] = cpf;
        return [...cpf].every(digit => digit === firstDigit);
    }
    calculateCheckDigit(cpf, factor) {
        let total = 0;
        for (const digit of cpf) {
            if (factor > 1)
                total += parseInt(digit) * factor--;
        }
        const rest = total % 11;
        return rest < 2 ? 0 : 11 - rest;
    }
    extractCheckDigit(cpf) {
        return cpf.slice(-2);
    }
}
exports.default = CPF;
