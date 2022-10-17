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
exports.ImportPage = void 0;
const React = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const design_system_1 = require("@servicetitan/design-system");
const upload_icon_1 = require("../components/upload-icon");
const main_context_1 = require("../context/main.context");
const constants_1 = require("../utils/constants");
const ImportPage = () => {
    return (React.createElement(main_context_1.MainContext.Consumer, null, props => {
        return (React.createElement(design_system_1.Stack, { direction: "column", alignItems: "center" },
            React.createElement(design_system_1.Headline, { size: "xlarge" }, "Let's enrich some data!"),
            React.createElement(design_system_1.BodyText, { size: "large" }, "Please upload the list you would like to enrich."),
            React.createElement(design_system_1.Card, { className: "w-33 m-y-4 ta-center" },
                React.createElement(upload_icon_1.UploadIcon, null),
                React.createElement(FileUploader, { setFlow: props.setFlow, setUploadedFile: props.setUploadedFile, file: props.uploadedFile }))));
    }));
};
exports.ImportPage = ImportPage;
const FileUploader = ({ file, setFlow, setUploadedFile }) => {
    const history = react_router_dom_1.useHistory();
    const handleSelected = React.useCallback((files) => {
        setUploadedFile(files[0]);
    }, [setUploadedFile]);
    const handleImportListClick = React.useCallback(() => {
        if (file) {
            setFlow(constants_1.Flow.ENRICH_EXISTING_LIST);
            history.push('/fields');
        }
    }, [file, history, setFlow]);
    return (React.createElement(React.Fragment, null,
        React.createElement(design_system_1.FilePicker, { accept: ".csv", onSelected: handleSelected }),
        file ? (React.createElement(design_system_1.BodyText, { className: "m-t-1" },
            React.createElement(design_system_1.Eyebrow, null, "File Name:"),
            file.name)) : null,
        React.createElement(design_system_1.Button, { primary: true, full: true, className: "m-t-4", onClick: handleImportListClick, disabled: !file }, "Import List")));
};
//# sourceMappingURL=import-page.js.map