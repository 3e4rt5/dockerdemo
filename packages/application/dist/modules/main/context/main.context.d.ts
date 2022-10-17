import * as React from 'react';
import { Flow } from '../utils/constants';
export interface FiltersData {
    industries: string[];
    businessFocus1: string[];
    businessFocus2: string[];
    locations: string[];
    numbersOfEmployees: string[];
    requiredAttributes: string[];
    listName: string;
}
interface MainContext {
    uploadedFile: File | null;
    fields: Set<string>;
    adPlatforms: string[];
    filtersData: FiltersData;
    flow: Flow;
    setFlow(flow: Flow): void;
    setFields(fields: Set<string>): void;
    setAdPlatforms(platforms: string[]): void;
    setUploadedFile(file: File | null): void;
    setFiltersData(list: FiltersData): void;
    toggleSelectField?(): void;
}
export declare const MainContext: React.Context<MainContext | undefined>;
export {};
//# sourceMappingURL=main.context.d.ts.map