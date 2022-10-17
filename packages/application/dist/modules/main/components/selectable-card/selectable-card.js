"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectableCard = void 0;
const React = __importStar(require("react"));
const design_system_1 = require("@servicetitan/design-system");
const Styles = __importStar(require("./selectable-card.module.scss"));
const classnames_1 = __importDefault(require("classnames"));
const SelectableCard = ({ children, className, onClick, isActive }) => {
    return (React.createElement(design_system_1.Card, { onClick: onClick, active: isActive, className: className, padding: "thin" },
        React.createElement(design_system_1.Stack, { className: Styles.selectableCard, direction: "column", alignItems: "center", justifyContent: "space-around" },
            isActive && (React.createElement(design_system_1.Icon, { name: "check_circle", size: 22, className: classnames_1.default('position-absolute', 'c-blue-400', Styles.activeIcon) })),
            children)));
};
exports.SelectableCard = SelectableCard;
//# sourceMappingURL=selectable-card.js.map