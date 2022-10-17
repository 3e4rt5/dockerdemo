"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redirectTo = exports.Flow = exports.filters = exports.fields = void 0;
exports.fields = {
    companyAttributes: [
        'Company Name',
        'Address',
        'City',
        'State',
        'Postal Code',
        'Country',
        'Company Phone',
        'Website',
    ],
    contactAttributes: ['First Name', 'Last Name', 'Direct Phone', 'Email', 'Title', 'LinkedIn Profile'],
    enrichmentAttributes: [
        'Organic Traffic',
        'Organic Cost',
        'Adwords Traffic',
        'Adwords Cost',
        '# Employees',
        'Estimated Revenue',
        'Technology Used',
        'Technology Categories',
        'Founded Year',
        'Facebook Page',
    ],
    platforms: [
        { text: 'Google', value: 'Google' },
        { text: 'Facebook', value: 'Facebook' },
        { text: 'Live Ramp', value: 'LiveRamp' },
        { text: 'Custom', value: 'Custom' },
    ],
};
exports.filters = {
    industries: [
        'HVAC',
        'Plumbing',
        'Electrical',
        'Garage Door',
        'Chimney',
        'Water Treatment',
        'Landscaping',
        'Irrigation',
        'Pest Control',
        'Pool & Spa',
        'Septic',
        'Other',
    ],
    businessFocus1: ['Residential', 'Commercial'],
    businessFocus2: ['Service & Replacement', 'Construction'],
    locations: ['USA', 'Canada', 'Specific State(s)'],
    numbersOfEmployees: [
        '0-4 Employees',
        '5-14 Employees',
        '15-29 Employees',
        '30-49 Employees',
        '50+ Employees',
    ],
    requiredAttributes: ['Website', 'Contact Name', 'Email'],
};
var Flow;
(function (Flow) {
    Flow[Flow["CREATE_NEW_LIST"] = 1] = "CREATE_NEW_LIST";
    Flow[Flow["ENRICH_EXISTING_LIST"] = 2] = "ENRICH_EXISTING_LIST";
})(Flow = exports.Flow || (exports.Flow = {}));
exports.redirectTo = {
    helpAndTrainings: 'https://docs.google.com/document/d/14TGrqUpLD8W0MUPYsGXxATOqT4_v1saokG2w6gwEDHs/edit',
};
//# sourceMappingURL=constants.js.map