
const fs = require('fs');
const {QRParser, getModel} = require('../src/qr-parser.js');

describe('Test QRParser', () => {
    it('should be same', () => {
        const qrParser = new QRParser();
        const sampleText = fs.readFileSync('./sample.csv', { encoding: 'utf-8' })
        const parsedModel = qrParser.parse(sampleText);
        expect(parsedModel['administrations'].length).toBe(1);
    });
});

describe('Test getModel', () => {
    it('should be 101 readable', () => {
        const model = getModel('101,1,1,,90'.split(','));
        expect(model['rp']['value']).toBe(1);
        expect(model['dosageCategory']['value']).toBe(1);
        expect(model['dosageName']['value']).toBe('');
        expect(model['numPrepared']['value']).toBe(90);
    });
    it('should be 102 readable', () => {
        const model = getModel('102,1,30,90'.split(','));
        expect(model['rp']['value']).toBe(1);
        expect(model['numPreparedByDivision']['value']).toBe(30);
        expect(model['totalNumPrepared']['value']).toBe(90);
    });
    it('should be 111 readable', () => {
        const model = getModel('111,1,1,,毎食後服用,3'.split(','));
        expect(model['rp']['value']).toBe(1);
        expect(model['administrationCodeType']['value']).toBe(1);
        expect(model['administrationCode']['value']).toBe('');
        expect(model['administrationName']['value']).toBe('毎食後服用');
        expect(model['timesPerDay']['value']).toBe(3);
    });
    it('should be 181 readable', () => {
        const model = getModel('181,1,1,2,一包化,,'.split(','));
        expect(model['rp']['value']).toBe(1);
        expect(model['rpSub']['value']).toBe(1);
        expect(model['administrationSubDivision']['value']).toBe(2);
        expect(model['administrationSubInfo']['value']).toBe('一包化');
        expect(model['subAdministrationCode']['value']).toBe('');
        expect(model['partCode']['value']).toBe('');
    });
    it('should be 181 readable', () => {
        const model = getModel('181,1,1,2,一包化,,'.split(','));
        expect(model['rp']['value']).toBe(1);
        expect(model['rpSub']['value']).toBe(1);
        expect(model['administrationSubDivision']['value']).toBe(2);
        expect(model['administrationSubInfo']['value']).toBe('一包化');
        expect(model['subAdministrationCode']['value']).toBe('');
        expect(model['partCode']['value']).toBe('');
    });
    it('should be 201 readable', () => {
        const model = getModel('201,1,1,1,4,2171022F1029,ノルバスク錠２．５ｍｇ,4,1,錠'.split(','));
        expect(model['rp']['value']).toBe(1);
        expect(model['indexInRp']['value']).toBe(1);
        expect(model['infomationDivision']['value']).toBe(1);
        expect(model['medicineCodeType']['value']).toBe(4);
        expect(model['medicineCode']['value']).toBe('2171022F1029');
        expect(model['medicineName']['value']).toBe('ノルバスク錠２．５ｍｇ');
        expect(model['dosage']['value']).toBe('4');
        expect(model['titerFlag']['value']).toBe(1);
        expect(model['unitName']['value']).toBe('錠');
    });
    it('should be 211 readable', () => {
        const model = getModel('211,1,1,250'.split(','));
        expect(model['rp']['value']).toBe(1);
        expect(model['indexInRp']['value']).toBe(1);
        expect(model['unitConversionCoef']['value']).toBe('250');
    });
    it('should be 221 readable', () => {
        const model = getModel('221,1,1,1.5,0.5,0.5,,,,,,,'.split(','));
        expect(model['rp']['value']).toBe(1);
        expect(model['indexInRp']['value']).toBe(1);
        expect(model['dose1']['value']).toBe('1.5');
        expect(model['dose2']['value']).toBe('0.5');
        expect(model['dose3']['value']).toBe('0.5');
        expect(model['dose4']['value']).toBe('');
        expect(model['dose5']['value']).toBe('');
        expect(model['doseCode1']['value']).toBe('');
        expect(model['doseCode2']['value']).toBe('');
        expect(model['doseCode3']['value']).toBe('');
        expect(model['doseCode4']['value']).toBe('');
        expect(model['doseCode5']['value']).toBe('');
    });
    it('should be 241 readable', () => {
        const model = getModel('241,1,1,1,3'.split(','));
        expect(model['rp']['value']).toBe(1);
        expect(model['indexInRp']['value']).toBe(1);
        expect(model['dosage']['value']).toBe('1');
        expect(model['timesPerDay']['value']).toBe(3);
    });
    it('should be 281 readable', () => {
        const model = getModel('281,1,1,1,1,一包化,'.split(','));
        expect(model['rp']['value']).toBe(1);
        expect(model['indexInRp']['value']).toBe(1);
        expect(model['medicineSubIndex']['value']).toBe(1);
        expect(model['medicineSubDivision']['value']).toBe(1);
        expect(model['medicineSubInfo']['value']).toBe('一包化');
        expect(model['SubAdministrationCode']['value']).toBe('');
    });
});