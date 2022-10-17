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
exports.FieldsPage = void 0;
const React = __importStar(require("react"));
const design_system_1 = require("@servicetitan/design-system");
const constants_1 = require("../utils/constants");
const main_context_1 = require("../context/main.context");
const react_router_dom_1 = require("react-router-dom");
const FieldsPage = () => {
    return (React.createElement(design_system_1.Stack, { direction: "column", alignItems: "center" },
        React.createElement(design_system_1.Headline, { size: "xlarge" }, "Let's enrich some data!"),
        React.createElement(design_system_1.BodyText, { size: "large" }, "Please select ad platform(s) and/or custom fields to include in your list."),
        React.createElement(main_context_1.MainContext.Consumer, null, props => (React.createElement(FieldsList, { setSelectedPlatforms: props.setAdPlatforms, selectedPlatforms: props.adPlatforms, selection: props.fields, setSelection: props.setFields })))));
};
exports.FieldsPage = FieldsPage;
const FieldsList = ({ selection, selectedPlatforms, setSelectedPlatforms, setSelection, }) => {
    const history = react_router_dom_1.useHistory();
    const handleSwitchToggle = React.useCallback((value, checked) => {
        const newSelection = new Set(selection);
        if (checked) {
            newSelection.add(value);
        }
        else {
            newSelection.delete(value);
        }
        setSelection(newSelection);
    }, [setSelection, selection]);
    const handlePlatformsChange = React.useCallback((platforms) => {
        const platformValues = platforms.map((platform) => platform.value);
        setSelectedPlatforms(platformValues);
    }, [setSelectedPlatforms]);
    const handleCreateClick = React.useCallback(() => {
        history.push('/export');
    }, [history]);
    return (React.createElement(React.Fragment, null,
        React.createElement(design_system_1.Card, { className: "w-33 m-y-4" },
            React.createElement(design_system_1.Headline, { className: "m-y-2" }, "Formatting Options"),
            React.createElement(design_system_1.AnvilSelect, { multiple: true, onChange: handlePlatformsChange, options: constants_1.fields.platforms, trigger: { placeholder: 'Options' }, closeOnClickOutside: true, autoFlipVertically: false }),
            selectedPlatforms.includes('Custom') ? (React.createElement(React.Fragment, null,
                React.createElement(design_system_1.Headline, { className: "m-y-2" }, "Company Attributes"),
                constants_1.fields.companyAttributes.map(fieldName => (React.createElement(design_system_1.Card, { thin: true, sharp: true, className: "m-b-2", key: fieldName },
                    React.createElement(design_system_1.Stack, { alignItems: "center" },
                        React.createElement(design_system_1.Stack.Item, { fill: true },
                            React.createElement(design_system_1.BodyText, { size: "small" }, fieldName)),
                        React.createElement(design_system_1.ToggleSwitch, { checked: selection.has(fieldName), name: fieldName, value: fieldName, onChange: handleSwitchToggle }))))),
                React.createElement(design_system_1.Headline, { className: "m-y-2" }, "Contact Attributes"),
                constants_1.fields.contactAttributes.map(fieldName => (React.createElement(design_system_1.Card, { thin: true, sharp: true, className: "m-b-2", key: fieldName },
                    React.createElement(design_system_1.Stack, { alignItems: "center" },
                        React.createElement(design_system_1.Stack.Item, { fill: true },
                            React.createElement(design_system_1.BodyText, { size: "small" }, fieldName)),
                        React.createElement(design_system_1.ToggleSwitch, { checked: selection.has(fieldName), name: fieldName, value: fieldName, onChange: handleSwitchToggle }))))),
                React.createElement(design_system_1.Headline, { className: "m-y-2" }, "Enrichment Attributes"),
                constants_1.fields.enrichmentAttributes.map(fieldName => (React.createElement(design_system_1.Card, { thin: true, sharp: true, className: "m-b-2", key: fieldName },
                    React.createElement(design_system_1.Stack, { alignItems: "center" },
                        React.createElement(design_system_1.Stack.Item, { fill: true },
                            React.createElement(design_system_1.BodyText, { size: "small" }, fieldName)),
                        React.createElement(design_system_1.ToggleSwitch, { checked: selection.has(fieldName), name: fieldName, value: fieldName, onChange: handleSwitchToggle }))))))) : null),
        React.createElement(design_system_1.Button, { disabled: !selectedPlatforms.length && !selection.size, className: "m-t-4", primary: true, onClick: handleCreateClick }, "Create List")));
};
//# sourceMappingURL=fields-page.js.map