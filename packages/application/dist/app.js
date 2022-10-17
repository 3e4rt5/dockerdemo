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
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const design_system_1 = require("@servicetitan/design-system");
require("./app.css");
const header_1 = require("./modules/main/components/header/header");
const intro_page_1 = require("./modules/main/intro-page/intro-page");
const filters_page_1 = require("./modules/main/filters-page/filters-page");
const fields_page_1 = require("./modules/main/fields-page/fields-page");
const export_page_1 = require("./modules/main/export-page/export-page");
const import_page_1 = require("./modules/main/upload-page/import-page");
const main_context_1 = require("./modules/main/context/main.context");
const constants_1 = require("./modules/main/utils/constants");
const feedback_1 = require("./modules/main/components/feedback/feedback");
const App = () => {
    const [uploadedFile, setUploadedFile] = react_1.useState(null);
    const [adPlatforms, setAdPlatforms] = react_1.useState([]);
    const [fields, setFields] = react_1.useState(new Set());
    const [flow, setFlow] = react_1.useState(constants_1.Flow.CREATE_NEW_LIST);
    const [filtersData, setFiltersData] = react_1.useState({
        industries: [],
        businessFocus1: [],
        businessFocus2: [],
        locations: [],
        numbersOfEmployees: [],
        requiredAttributes: [],
        listName: '',
    });
    const handleFileUpload = react_1.useCallback((file) => setUploadedFile(file), []);
    return (react_1.default.createElement(react_1.default.StrictMode, null,
        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(main_context_1.MainContext.Provider, { value: {
                    uploadedFile,
                    adPlatforms,
                    filtersData,
                    fields,
                    flow,
                    setFlow,
                    setFiltersData,
                    setFields,
                    setAdPlatforms,
                    setUploadedFile: handleFileUpload,
                } },
                react_1.default.createElement(design_system_1.Frame, { header: react_1.default.createElement(header_1.Header, null) },
                    react_1.default.createElement(design_system_1.Page, { align: "center", maxWidth: "default" },
                        react_1.default.createElement(react_router_dom_1.Switch, null,
                            react_1.default.createElement(react_router_dom_1.Route, { path: "/", exact: true, component: intro_page_1.IntroPage }),
                            react_1.default.createElement(react_router_dom_1.Route, { path: "/import", component: import_page_1.ImportPage }),
                            react_1.default.createElement(react_router_dom_1.Route, { path: "/filters", component: filters_page_1.FiltersPage }),
                            react_1.default.createElement(react_router_dom_1.Route, { path: "/fields", component: fields_page_1.FieldsPage }),
                            react_1.default.createElement(react_router_dom_1.Route, { path: "/export", component: export_page_1.ExportPage }),
                            react_1.default.createElement(react_router_dom_1.Route, { component: intro_page_1.IntroPage }))),
                    react_1.default.createElement(feedback_1.Feedback, null))))));
};
exports.App = App;
//# sourceMappingURL=app.js.map