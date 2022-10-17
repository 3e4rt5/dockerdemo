"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
const axios_1 = __importDefault(require("axios"));
axios_1.default.defaults.baseURL = 'http://127.0.0.1:5000/api';
class MainApi {
    upload(payload) {
        var _a;
        const formData = new FormData();
        formData.append('fileName', (_a = payload.file) !== null && _a !== void 0 ? _a : '');
        formData.append('platforms', payload.platforms);
        formData.append('columns', payload.columns);
        formData.append('email', payload.email);
        return axios_1.default.post(`/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }
    create(createdPayload) {
        const formData = new FormData();
        formData.append('industries', createdPayload.industries);
        formData.append('businessFocus1', createdPayload.businessFocus1);
        formData.append('businessFocus2', createdPayload.businessFocus2);
        formData.append('locations', createdPayload.locations);
        formData.append('numbersOfEmployees', createdPayload.numbersOfEmployees);
        formData.append('requiredAttributes', createdPayload.requiredAttributes);
        formData.append('listName', createdPayload.listName);
        formData.append('platforms', createdPayload.platforms);
        formData.append('columns', createdPayload.columns);
        formData.append('email', createdPayload.email);
        return axios_1.default.post(`/create`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }
    feedback(feedbackPayload) {
        const formData = new FormData();
        formData.append('feedbackType', feedbackPayload.feedbackType);
        formData.append('feedbackResponse', feedbackPayload.feedbackResponse);
        formData.append('feedbackEmail', feedbackPayload.feedbackEmail);
        return axios_1.default.post(`/feedback`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }
}
exports.Api = new MainApi();
//# sourceMappingURL=main.api.js.map