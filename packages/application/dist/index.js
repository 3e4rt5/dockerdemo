"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const app_1 = require("./app");
const appContainer = document.createElement('div');
document.body.appendChild(appContainer);
react_dom_1.default.render(react_1.default.createElement(app_1.App, null), appContainer);
//# sourceMappingURL=index.js.map