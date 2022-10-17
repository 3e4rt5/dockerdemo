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
exports.FiltersPageConsumer = exports.FiltersPage = void 0;
const react_router_dom_1 = require("react-router-dom");
const react_1 = __importStar(require("react"));
const design_system_1 = require("@servicetitan/design-system");
const selectable_card_1 = require("../components/selectable-card/selectable-card");
const constants_1 = require("../utils/constants");
const Styles = __importStar(require("./filters-page.module.scss"));
const main_context_1 = require("../context/main.context");
const FiltersPage = () => {
    return (react_1.default.createElement(main_context_1.MainContext.Consumer, null, props => (react_1.default.createElement(exports.FiltersPageConsumer, { setFlow: props.setFlow, setFiltersData: props.setFiltersData }))));
};
exports.FiltersPage = FiltersPage;
const FiltersPageConsumer = ({ setFlow, setFiltersData }) => {
    const [activeIndustries, setActiveIndustries] = react_1.useState(new Set());
    const [activeBusinessFocus1, setActiveBusinessFocus1] = react_1.useState(new Set());
    const [activeBusinessFocus2, setActiveBusinessFocus2] = react_1.useState(new Set());
    const [activeLocations, setActiveLocations] = react_1.useState(new Set());
    const [activeNumberOfEmployees, setActiveNumberOfEmployees] = react_1.useState(new Set());
    const [activeRequiredAttributes, setActiveRequiredAttributes] = react_1.useState(new Set());
    const [otherLocations, setOtherLocations] = react_1.useState('');
    const [otherIndustries, setOtherIndustries] = react_1.useState('');
    const [listName, setListName] = react_1.useState('');
    const [readyForSave, setReadyForSave] = react_1.useState(false);
    const history = react_router_dom_1.useHistory();
    const handleSave = react_1.default.useCallback(() => {
        setFiltersData({
            industries: [...activeIndustries],
            businessFocus1: [...activeBusinessFocus1],
            businessFocus2: [...activeBusinessFocus2],
            locations: [...activeLocations],
            numbersOfEmployees: [...activeNumberOfEmployees],
            requiredAttributes: [...activeRequiredAttributes],
            listName,
        });
        history.push('/fields');
    }, [
        history,
        activeIndustries,
        activeBusinessFocus1,
        activeBusinessFocus2,
        activeLocations,
        activeNumberOfEmployees,
        activeRequiredAttributes,
        listName,
        setFiltersData,
    ]);
    react_1.default.useEffect(() => {
        if (readyForSave) {
            handleSave();
        }
    }, [readyForSave, handleSave]);
    const isDisabledSaveButton = !activeLocations.size || !activeIndustries.size || !listName.length;
    const prepareToSave = react_1.default.useCallback(() => {
        setFlow(constants_1.Flow.CREATE_NEW_LIST);
        if (activeIndustries.has(constants_1.filters.industries[11])) {
            const updatedActiveIndustries = new Set(activeIndustries);
            updatedActiveIndustries.delete(constants_1.filters.industries[11]);
            const otherIndustriesArr = otherIndustries.split(',');
            otherIndustriesArr.forEach(industry => updatedActiveIndustries.add(industry));
            setActiveIndustries(updatedActiveIndustries);
        }
        if (activeLocations.has(constants_1.filters.locations[2])) {
            const updatedActiveLocations = new Set(activeLocations);
            updatedActiveLocations.delete(constants_1.filters.locations[2]);
            const otherLocationsArr = otherLocations.split(',');
            otherLocationsArr.forEach(location => updatedActiveLocations.add(location));
            setActiveLocations(updatedActiveLocations);
        }
        setReadyForSave(true);
    }, [activeIndustries, activeLocations, otherLocations, otherIndustries, setFlow]);
    const handleCardClick = (cardName, activeCards, setActiveCards) => () => {
        const updatedActiveIndustries = new Set(activeCards);
        if (updatedActiveIndustries.has(cardName)) {
            updatedActiveIndustries.delete(cardName);
        }
        else {
            updatedActiveIndustries.add(cardName);
        }
        setActiveCards(updatedActiveIndustries);
    };
    const handleOtherLocationsInputChange = (_, data) => {
        setOtherLocations(data.value.trim());
    };
    const handleOtherIndustriesInputChange = (_, data) => {
        setOtherIndustries(data.value);
    };
    const handleListNameChange = (_, data) => {
        setListName(data.value.trim());
    };
    return (react_1.default.createElement("div", { className: "ta-center" },
        react_1.default.createElement(design_system_1.Headline, { size: "xlarge" }, "Let's enrich some data!"),
        react_1.default.createElement(design_system_1.BodyText, { size: "large" }, "Would you like to generate a new list or enrich an existing list?"),
        react_1.default.createElement(design_system_1.FlowCard.Step, { title: "Industries", className: "m-t-4", content: react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(design_system_1.BodyText, { className: `${Styles.requiredTitle} fs-italic` }, "Required"),
                react_1.default.createElement(design_system_1.Stack, { className: "w-100", wrap: "wrap", justifyContent: "flex-start" }, constants_1.filters.industries.map(industry => {
                    return (react_1.default.createElement(react_1.default.Fragment, { key: industry },
                        react_1.default.createElement(selectable_card_1.SelectableCard, { onClick: handleCardClick(industry, activeIndustries, setActiveIndustries), isActive: activeIndustries.has(industry), className: "m-r-4 m-b-4" },
                            react_1.default.createElement(design_system_1.Avatar, { size: "l", name: industry }),
                            react_1.default.createElement(design_system_1.BodyText, { className: "ta-center" }, industry)),
                        industry === constants_1.filters.industries[11] &&
                            activeIndustries.has(industry) && (react_1.default.createElement(design_system_1.Stack, { direction: "column" },
                            react_1.default.createElement(design_system_1.Label, { className: "m-b-1" }, "Enter keywords, separated by a comma:"),
                            react_1.default.createElement(design_system_1.Input, { value: otherIndustries, onChange: handleOtherIndustriesInputChange, placeholder: "e.g. Carpet clean, rug clean" })))));
                }))), saved: activeIndustries.size > 0 }),
        react_1.default.createElement(design_system_1.FlowCard.Step, { title: "Business Focus 1", className: "m-t-4", content: react_1.default.createElement(design_system_1.Stack, { className: "w-100", wrap: "wrap", justifyContent: "flex-start" }, constants_1.filters.businessFocus1.map(focus1 => {
                return (react_1.default.createElement(selectable_card_1.SelectableCard, { onClick: handleCardClick(focus1, activeBusinessFocus1, setActiveBusinessFocus1), isActive: activeBusinessFocus1.has(focus1), key: focus1, className: "m-r-4 m-b-4" },
                    react_1.default.createElement(design_system_1.Avatar, { size: "l", name: focus1 }),
                    react_1.default.createElement(design_system_1.BodyText, { className: "ta-center" }, focus1)));
            })), saved: activeBusinessFocus1.size > 0 }),
        react_1.default.createElement(design_system_1.FlowCard.Step, { title: "Business Focus 2", className: "m-t-4", content: react_1.default.createElement(design_system_1.Stack, { className: "w-100", wrap: "wrap", justifyContent: "flex-start" }, constants_1.filters.businessFocus2.map(focus2 => {
                return (react_1.default.createElement(selectable_card_1.SelectableCard, { onClick: handleCardClick(focus2, activeBusinessFocus2, setActiveBusinessFocus2), isActive: activeBusinessFocus2.has(focus2), key: focus2, className: "m-r-4 m-b-4" },
                    react_1.default.createElement(design_system_1.Avatar, { size: "l", name: focus2 }),
                    react_1.default.createElement(design_system_1.BodyText, { className: "ta-center" }, focus2)));
            })), saved: activeBusinessFocus2.size > 0 }),
        react_1.default.createElement(design_system_1.FlowCard.Step, { title: "Location", className: "m-t-4", content: react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(design_system_1.BodyText, { className: `${Styles.requiredTitle} fs-italic` }, "Required"),
                react_1.default.createElement(design_system_1.Stack, { className: "w-100", wrap: "wrap", justifyContent: "flex-start" }, constants_1.filters.locations.map(location => {
                    return (react_1.default.createElement(react_1.default.Fragment, { key: location },
                        react_1.default.createElement(selectable_card_1.SelectableCard, { onClick: handleCardClick(location, activeLocations, setActiveLocations), isActive: activeLocations.has(location), className: "m-r-4 m-b-4" },
                            react_1.default.createElement(design_system_1.Avatar, { size: "l", name: location }),
                            react_1.default.createElement(design_system_1.BodyText, { className: "ta-center" }, location)),
                        location === constants_1.filters.locations[2] &&
                            activeLocations.has(location) && (react_1.default.createElement(design_system_1.Stack, { direction: "column" },
                            react_1.default.createElement(design_system_1.Label, { className: "m-b-1" }, "Enter state abbreviations, separated by a comma:"),
                            react_1.default.createElement(design_system_1.Input, { value: otherLocations, onChange: handleOtherLocationsInputChange, placeholder: "CA, OR, WA" })))));
                }))), saved: activeLocations.size > 0 }),
        react_1.default.createElement(design_system_1.FlowCard.Step, { title: "Number Of Employees", className: "m-t-4", content: react_1.default.createElement(design_system_1.Stack, { className: "w-100", wrap: "wrap", justifyContent: "flex-start" }, constants_1.filters.numbersOfEmployees.map(numberOfEmployees => {
                return (react_1.default.createElement(selectable_card_1.SelectableCard, { onClick: handleCardClick(numberOfEmployees, activeNumberOfEmployees, setActiveNumberOfEmployees), isActive: activeNumberOfEmployees.has(numberOfEmployees), key: numberOfEmployees, className: "m-r-4 m-b-4" },
                    react_1.default.createElement(design_system_1.Avatar, { size: "l", name: numberOfEmployees }),
                    react_1.default.createElement(design_system_1.BodyText, { className: "ta-center" }, numberOfEmployees)));
            })), saved: activeNumberOfEmployees.size > 0 }),
        react_1.default.createElement(design_system_1.FlowCard.Step, { title: "Required Attributes", className: "m-t-4", content: react_1.default.createElement(design_system_1.Stack, { className: "w-100", wrap: "wrap", justifyContent: "flex-start" }, constants_1.filters.requiredAttributes.map(requiredAttribute => {
                return (react_1.default.createElement(selectable_card_1.SelectableCard, { onClick: handleCardClick(requiredAttribute, activeRequiredAttributes, setActiveRequiredAttributes), isActive: activeRequiredAttributes.has(requiredAttribute), key: requiredAttribute, className: "m-r-4 m-b-4" },
                    react_1.default.createElement(design_system_1.Avatar, { size: "l", name: requiredAttribute }),
                    react_1.default.createElement(design_system_1.BodyText, { className: "ta-center" }, requiredAttribute)));
            })), saved: activeRequiredAttributes.size > 0 }),
        react_1.default.createElement(design_system_1.FlowCard.Step, { title: "Please enter a name for this list (no spaces)", className: "m-t-4", content: react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(design_system_1.BodyText, { className: `${Styles.requiredTitle} fs-italic` }, "Required"),
                react_1.default.createElement(design_system_1.Input, { value: listName, onChange: handleListNameChange, placeholder: "Test-list-010221" })), saved: listName.length > 0 }),
        react_1.default.createElement(design_system_1.Button, { disabled: isDisabledSaveButton, onClick: prepareToSave, className: "m-t-4", primary: true }, "Save")));
};
exports.FiltersPageConsumer = FiltersPageConsumer;
//# sourceMappingURL=filters-page.js.map