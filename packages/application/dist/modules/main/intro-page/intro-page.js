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
exports.IntroPage = void 0;
const React = __importStar(require("react"));
const design_system_1 = require("@servicetitan/design-system");
const intro_page_module_scss_1 = __importDefault(require("./intro-page.module.scss"));
const classnames_1 = __importDefault(require("classnames"));
const react_router_dom_1 = require("react-router-dom");
const IntroPage = () => {
    return (React.createElement(design_system_1.Stack, { alignItems: "center", justifyContent: "center" },
        React.createElement(design_system_1.Stack.Item, { className: "ta-center" },
            React.createElement(design_system_1.Headline, { size: "xlarge" }, "Let's create a new list!"),
            React.createElement(design_system_1.BodyText, { size: "large" }, "Please select filters for your new list"),
            React.createElement(design_system_1.Card, { className: "m-y-5" },
                React.createElement(react_router_dom_1.Link, { to: "/filters" },
                    React.createElement(design_system_1.Button, { full: true, primary: true }, "Create a new list")),
                React.createElement(design_system_1.BodyText, { className: classnames_1.default(intro_page_module_scss_1.default.divider, 'ta-center', 'm-y-4') }),
                React.createElement(react_router_dom_1.Link, { to: "/import" },
                    React.createElement(design_system_1.Button, { primary: true, outline: true, full: true }, "Enrich an existing list"))),
            React.createElement(design_system_1.Link, { href: "/template.csv", color: "primary" }, "Download list template"))));
};
exports.IntroPage = IntroPage;
//# sourceMappingURL=intro-page.js.map