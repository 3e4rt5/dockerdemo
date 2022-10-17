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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrappedExportPage = exports.ExportPage = void 0;
const react_1 = __importStar(require("react"));
const design_system_1 = require("@servicetitan/design-system");
const main_api_1 = require("../api/main.api");
const main_context_1 = require("../context/main.context");
const constants_1 = require("../utils/constants");
const ExportPage = () => {
    return (react_1.default.createElement(main_context_1.MainContext.Consumer, null, props => (react_1.default.createElement(exports.WrappedExportPage, { platforms: props === null || props === void 0 ? void 0 : props.adPlatforms, columns: props === null || props === void 0 ? void 0 : props.fields, uploadedFile: props === null || props === void 0 ? void 0 : props.uploadedFile, flow: props.flow, filtersData: props.filtersData }))));
};
exports.ExportPage = ExportPage;
const WrappedExportPage = ({ platforms, columns, uploadedFile, flow, filtersData, }) => {
    const [email, setEmail] = react_1.default.useState('');
    const [loading, setLoading] = react_1.default.useState(false);
    const [result, setResult] = react_1.default.useState();
    const [uploadedId, setUploadedId] = react_1.default.useState('');
    const handleUploadClick = react_1.default.useCallback((email) => () => __awaiter(void 0, void 0, void 0, function* () {
        const payloadPlatforms = JSON.stringify(platforms !== null && platforms !== void 0 ? platforms : []);
        const payloadColumns = JSON.stringify([...(columns !== null && columns !== void 0 ? columns : [])]);
        console.log(payloadColumns);
        if (uploadedFile || flow === constants_1.Flow.CREATE_NEW_LIST) {
            setLoading(true);
            try {
                setUploadedId('');
                const uploadResp = flow === constants_1.Flow.CREATE_NEW_LIST
                    ? yield main_api_1.Api.create({
                        platforms: payloadPlatforms,
                        columns: payloadColumns,
                        email: `${email}@servicetitan.com`,
                        industries: JSON.stringify(filtersData.industries),
                        locations: JSON.stringify(filtersData.locations),
                        businessFocus1: JSON.stringify(filtersData.businessFocus1),
                        businessFocus2: JSON.stringify(filtersData.businessFocus2),
                        requiredAttributes: JSON.stringify(filtersData.requiredAttributes),
                        numbersOfEmployees: JSON.stringify(filtersData.numbersOfEmployees),
                        listName: filtersData.listName,
                    })
                    : yield main_api_1.Api.upload({
                        platforms: payloadPlatforms,
                        columns: payloadColumns,
                        email: `${email}@servicetitan.com`,
                        file: uploadedFile,
                    });
                setResult(true);
                setUploadedId(uploadResp.data);
            }
            catch (e) {
                setResult(false);
            }
            finally {
                setEmail('');
                setLoading(false);
            }
        }
        else {
            setResult(false);
        }
    }), [platforms, columns, uploadedFile, setLoading, filtersData, flow]);
    const handleEmailChange = react_1.useCallback((email) => {
        if (result === false) {
            setResult(undefined);
        }
        setEmail(email.currentTarget.value);
    }, [result]);
    return (react_1.default.createElement(design_system_1.Stack, { direction: "column", alignItems: "center" },
        react_1.default.createElement(design_system_1.Headline, { size: "xlarge" }, "Let's get some data!"),
        result ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(design_system_1.BodyText, { size: "large" }, "Thank you! You will receive the list in your email when it's ready."),
            react_1.default.createElement(design_system_1.BodyText, null, `Your request ID is: ${uploadedId}. In case of problems, please contact ssridhar@servicetitan.com with this ID.`))) : (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(design_system_1.BodyText, { size: "large" }, "This list will be sent to you via email once it's ready. Please enter your email address."),
            react_1.default.createElement(design_system_1.Card, { className: "w-33 m-y-4 ta-center" },
                result === false ? (react_1.default.createElement(design_system_1.Banner, { className: "m-b-2", status: "critical", icon: true, title: "Something wrong!" })) : null,
                react_1.default.createElement(design_system_1.Stack, { className: "w-100 m-b-4", wrap: "wrap", justifyContent: "center", alignItems: "center" },
                    react_1.default.createElement(design_system_1.Stack.Item, null,
                        react_1.default.createElement(design_system_1.Input, { value: email, onChange: handleEmailChange, placeholder: "Email" })),
                    react_1.default.createElement(design_system_1.Stack.Item, { className: "p-l-1" },
                        react_1.default.createElement(design_system_1.BodyText, null, "@servicetitan.com"))),
                react_1.default.createElement(design_system_1.Button, { loading: loading, disabled: !email, primary: true, onClick: handleUploadClick(email) }, "Submit"))))));
};
exports.WrappedExportPage = WrappedExportPage;
//# sourceMappingURL=export-page.js.map