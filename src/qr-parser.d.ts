// Type definitions for prescription-qr-parser-jp
// Project: prescription-qr-parser-jp
// Definitions by: hiko2msp

interface AdditionalRecords {
    medicineSubDivision: number;
    medicineSubInfo: string;
    SubAdministrationCode: string;
}

interface Medicine {
    additionalRecords: AdditionalRecords[];
    infomationDivision: number;
    medicineCodeType: number;
    medicineCode: string;
    medicineName: string;
    dosage: string;
    titerFlag: number;
    unitName: string;
    unitConversionCoef: string;
    dose1: string;
    dose2: string;
    dose3: string;
    dose4: string;
    dose5: string;
    doseCode1: string;
    doseCode2: string;
    doseCode3: string;
    doseCode4: string;
    doseCode5: string;
    publicMoneyChageDivision1: number;
    publicMoneyChageDivision2: number;
    publicMoneyChageDivision3: number;
    publicMoneyChageDivisionSpecial: number;
    dosage: string;
    timesPerDay: number;
}

interface AdministrationSubInfo {
    administrationSubDivision: number;
    administrationSubInfo: string;
    subAdministrationCode: string;
    partCode: string;
}

interface Administration {
    dosageCategory: number;
    dosageName: string;
    numPrepared: number;
    numPreparedByDivision: number;
    totalNumPrepared: string;
    administrationCodeType: number;
    administrationCode: string;
    administrationName: string;
    timesPerDay: number;
    subInfo: AdministrationSubInfo[];
    medicines: Medicine[];
}

interface Remark {
    remarkType: number;
    remark: string;
}

interface Prescription {
    medicalInstitutionCodeType: number;
    medicalInstitutionCode: string;
    medicalInstitutionPrefectureCode: string;
    medicalInstitutionName: string;
    medicalInstitutionZipCode: string;
    medicalInstitutionAddress: string;
    medicalInstitutionPhoneNumber: string;
    medicalInstitutionFaxNumber: string;
    medicalInstitutionOtherContactAddress: string;
    medicalDepartmentType: number;
    medicalDepartmentCode: string;
    medicalDepartmentName: string;
    doctorCode: string;
    doctorNameKana: string;
    doctorName: string;
    patientCode: string;
    patientName: string;
    patientNameKana: string;
    patientSex: number;
    patientBirthday: number;
    partialChangedMonayDivision: number;
    insuranceType: number;
    insuranceNumber: string;
    insuredSymbol: string;
    insuredNumber: string;
    insuredType: number;
    patientCopayment: number;
    insuranceAllowanceRate: number;
    reasonOnJob: number;
    publicMonayChangeNumber1: number;
    publicMonayRecipientNumber1: number;
    publicMonayChangeNumber2: number;
    publicMonayRecipientNumber2: number;
    publicMonayChangeNumber3: number;
    publicMonayRecipientNumber3: number;
    publicMonayChangeNumberSpecial: number;
    publicMonayRecipientNumberSpecial: number;
    receiptTypeCode: number;
    prescriptionDate: number;
    expiredDate: number;
    narcoticsUserLicenseNumber: string;
    narcoticsUsingPatientAddress: string;
    narcoticsUsingPatientPhoneNumber: string;
    remainingMedicineConfirmationFlag: number;
    numDivision: number;
    DivisionIndex: number;
    prescriptionNumberType: number;
    prescriptionNumber: number;
    remarks: Remark[];
    administrations: Administration[];
}

declare class QRParser {
    parse: (text: string) => Prescription;
}