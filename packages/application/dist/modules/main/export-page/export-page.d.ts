import React from 'react';
import { FiltersData } from '../context/main.context';
import { Flow } from '../utils/constants';
export declare const ExportPage: React.FC;
interface WrappedExportPageProps {
    platforms?: string[];
    columns?: Set<string>;
    uploadedFile?: File | null;
    flow?: Flow;
    filtersData: FiltersData;
}
export declare const WrappedExportPage: React.FC<WrappedExportPageProps>;
export {};
//# sourceMappingURL=export-page.d.ts.map