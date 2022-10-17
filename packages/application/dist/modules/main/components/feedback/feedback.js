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
exports.Feedback = void 0;
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const design_system_1 = require("@servicetitan/design-system");
const Styles = __importStar(require("./feedback.module.scss"));
const constants_1 = require("../../utils/constants");
const main_api_1 = require("../../api/main.api");
var State;
(function (State) {
    State["Closed"] = "CLOSED";
    State["Opened"] = "OPENED";
    State["Report"] = "REPORT_BUG_OR_ISSUE";
    State["Share"] = "SHARE_FEEDBACK";
    State["Thanks"] = "THANKS_FOR_SHARE_OR_REPORT";
})(State || (State = {}));
var FeedBack;
(function (FeedBack) {
    FeedBack["REPORT"] = "REPORT";
    FeedBack["FEEDBACK"] = "FEEDBACK";
})(FeedBack || (FeedBack = {}));
const Feedback = () => {
    return (react_1.default.createElement(design_system_1.Stack, { direction: "column", className: classnames_1.default('position-fixed', Styles.container) },
        react_1.default.createElement(FeedbackContent, null)));
};
exports.Feedback = Feedback;
const FeedbackContent = () => {
    const [state, setState] = react_1.useState(State.Closed);
    switch (state) {
        case State.Closed:
            return react_1.default.createElement(ClosedState, { changeState: setState });
        case State.Opened:
            return react_1.default.createElement(OpenedState, { changeState: setState });
        case State.Report:
            return react_1.default.createElement(ReportState, { changeState: setState });
        case State.Share:
            return react_1.default.createElement(ShareState, { changeState: setState });
        case State.Thanks:
            return react_1.default.createElement(ThanksState, { changeState: setState });
        default:
            return null;
    }
};
const ClosedState = ({ changeState }) => {
    const handleStateChange = react_1.default.useCallback(() => {
        changeState(State.Opened);
    }, [changeState]);
    return react_1.default.createElement(design_system_1.Button, { onClick: handleStateChange, className: Styles.feedbackButton, iconName: "help" });
};
const OpenedState = ({ changeState }) => {
    const handleShareClick = react_1.default.useCallback(() => {
        changeState(State.Share);
    }, [changeState]);
    const handleReportClick = react_1.default.useCallback(() => {
        changeState(State.Report);
    }, [changeState]);
    return (react_1.default.createElement(design_system_1.Stack, { className: Styles.openedContainer, spacing: 2, direction: "column" },
        react_1.default.createElement(HeaderActions, { changeState: changeState, withBack: false }),
        react_1.default.createElement(design_system_1.Headline, { className: "m-0", size: "medium" }, "Support & Feedback"),
        react_1.default.createElement(design_system_1.Button, { target: "_blank", href: constants_1.redirectTo.helpAndTrainings }, "Help & Training"),
        react_1.default.createElement(design_system_1.Button, { onClick: handleReportClick }, "Report a Bug or Issue"),
        react_1.default.createElement(design_system_1.Button, { onClick: handleShareClick }, "Share Feedback")));
};
const ReportState = ({ changeState }) => {
    const [report, setReport] = react_1.useState('');
    const [email, setEmail] = react_1.useState('');
    const handleEmailChange = react_1.default.useCallback((_, data) => {
        setEmail(data.value);
    }, [setEmail]);
    const handleReportChange = react_1.default.useCallback((_, data) => {
        setReport(data.value);
    }, [setReport]);
    const handleSubmit = react_1.default.useCallback(() => {
        main_api_1.Api.feedback({
            feedbackEmail: email,
            feedbackResponse: report,
            feedbackType: FeedBack.REPORT,
        });
        changeState(State.Thanks);
    }, [email, report, changeState]);
    return (react_1.default.createElement(design_system_1.Stack, { className: Styles.openedContainer, spacing: 2, direction: "column" },
        react_1.default.createElement(HeaderActions, { changeState: changeState }),
        react_1.default.createElement(design_system_1.Headline, { className: "m-0", size: "medium" }, "Report a Bug or Issue"),
        react_1.default.createElement(design_system_1.Form.TextArea, { value: report, onChange: handleReportChange, className: "m-0", label: "Please describe the issue you are experiencing:" }),
        react_1.default.createElement(design_system_1.Form.Input, { value: email, onChange: handleEmailChange, className: "m-0", label: "Your email address:" }),
        react_1.default.createElement(design_system_1.Button, { disabled: !report || !email, onClick: handleSubmit }, "Submit")));
};
const ShareState = ({ changeState }) => {
    const [feedback, setFeedback] = react_1.useState('');
    const [email, setEmail] = react_1.useState('');
    const handleEmailChange = react_1.default.useCallback((_, data) => {
        setEmail(data.value);
    }, [setEmail]);
    const handleFeedbackChange = react_1.default.useCallback((_, data) => {
        setFeedback(data.value);
    }, [setFeedback]);
    const handleSubmit = react_1.default.useCallback(() => {
        main_api_1.Api.feedback({
            feedbackEmail: email,
            feedbackResponse: feedback,
            feedbackType: FeedBack.FEEDBACK,
        });
        changeState(State.Thanks);
    }, [email, feedback, changeState]);
    return (react_1.default.createElement(design_system_1.Stack, { className: Styles.openedContainer, spacing: 2, direction: "column" },
        react_1.default.createElement(HeaderActions, { changeState: changeState }),
        react_1.default.createElement(design_system_1.Headline, { className: "m-0", size: "medium" }, "Share Feedback"),
        react_1.default.createElement(design_system_1.Form.TextArea, { value: feedback, onChange: handleFeedbackChange, className: "m-0", label: "Please use this form to provide feedback or suggestions:" }),
        react_1.default.createElement(design_system_1.Form.Input, { value: email, onChange: handleEmailChange, className: "m-0", label: "Your email address:" }),
        react_1.default.createElement(design_system_1.Button, { disabled: !email || !feedback, onClick: handleSubmit }, "Submit")));
};
const ThanksState = ({ changeState }) => {
    return (react_1.default.createElement(design_system_1.Stack, { spacing: 2, className: Styles.openedContainer, direction: "column" },
        react_1.default.createElement(HeaderActions, { withBack: false, changeState: changeState }),
        react_1.default.createElement(design_system_1.Stack, { spacing: 2, alignItems: "center", justifyContent: "center", direction: "column" },
            react_1.default.createElement(design_system_1.BodyText, { className: "ta-center" }, "Thank you for your submission."),
            react_1.default.createElement(design_system_1.BodyText, { className: "ta-center" }, "Have a great day!"))));
};
const HeaderActions = ({ changeState, withBack = true }) => {
    const handleClose = react_1.default.useCallback(() => {
        changeState(State.Closed);
    }, [changeState]);
    const handleBack = react_1.default.useCallback(() => {
        changeState(State.Opened);
    }, [changeState]);
    return (react_1.default.createElement(design_system_1.Stack, { justifyContent: "space-between" },
        react_1.default.createElement(design_system_1.Button, { disabled: !withBack, xsmall: true, onClick: handleBack, iconName: withBack ? 'keyboard_arrow_left' : undefined, fill: "subtle" }, withBack ? 'Back' : ''),
        react_1.default.createElement(design_system_1.Button, { xsmall: true, onClick: handleClose, iconName: "close", fill: "subtle" }, "Close")));
};
//# sourceMappingURL=feedback.js.map