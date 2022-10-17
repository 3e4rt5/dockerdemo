interface MainPayload {
    platforms: string;
    columns: string;
    email: string;
}
interface UploadedPayload extends MainPayload {
    file: File;
}
interface CreatedPayload extends MainPayload {
    industries: string;
    businessFocus1: string;
    businessFocus2: string;
    locations: string;
    numbersOfEmployees: string;
    requiredAttributes: string;
    listName: string;
}
interface FeedbackPayload {
    feedbackType: string;
    feedbackResponse: string;
    feedbackEmail: string;
}
declare class MainApi {
    upload(payload: UploadedPayload): Promise<import("axios").AxiosResponse<any>>;
    create(createdPayload: CreatedPayload): Promise<import("axios").AxiosResponse<any>>;
    feedback(feedbackPayload: FeedbackPayload): Promise<import("axios").AxiosResponse<any>>;
}
export declare const Api: MainApi;
export {};
//# sourceMappingURL=main.api.d.ts.map