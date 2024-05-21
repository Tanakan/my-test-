"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Input = function (_a) {
    var value = _a.value, onChange = _a.onChange, placeholder = _a.placeholder;
    return (react_1.default.createElement("input", { type: "text", value: value, onChange: onChange, placeholder: placeholder, className: "my-input" }));
};
exports.default = Input;
