
const fs = require('fs');
const {QRParser, getModel} = require('../src/qr-parser.js');

describe('Test QRParser', () => {
    it('should be same', () => {
        const qrParser = new QRParser();
        const sampleText = fs.readFileSync('./sample.csv', { encoding: 'utf-8' })
        const parsedModel = qrParser.parse(sampleText);
        expect(parsedModel['administrations'].length).toBe(1);
        expect(parsedModel['remarks'].length).toBe(3);
    });
});

describe('Test getModel', () => {
    it('should be 101 readable', () => {
        const model = getModel('101,1,1,,90'.split(','));
        expect(model['rp']).toBe(1);
        expect(model['dosageCategory']).toBe(1);
        expect(model['dosageName']).toBe('');
        expect(model['numPrepared']).toBe(90);
    });
    it('should be 102 readable', () => {
        const model = getModel('102,1,30,90'.split(','));
        expect(model['rp']).toBe(1);
        expect(model['numPreparedByDivision']).toBe(30);
        expect(model['totalNumPrepared']).toBe(90);
    });
    it('should be 111 readable', () => {
        const model = getModel('111,1,1,,毎食後服用,3'.split(','));
        expect(model['rp']).toBe(1);
        expect(model['administrationCodeType']).toBe(1);
        expect(model['administrationCode']).toBe('');
        expect(model['administrationName']).toBe('毎食後服用');
        expect(model['timesPerDay']).toBe(3);
    });
    it('should be 181 readable', () => {
        const model = getModel('181,1,1,2,一包化,,'.split(','));
        expect(model['rp']).toBe(1);
        expect(model['rpSub']).toBe(1);
        expect(model['administrationSubDivision']).toBe(2);
        expect(model['administrationSubInfo']).toBe('一包化');
        expect(model['subAdministrationCode']).toBe('');
        expect(model['partCode']).toBe('');
    });
    it('should be 181 readable', () => {
        const model = getModel('181,1,1,2,一包化,,'.split(','));
        expect(model['rp']).toBe(1);
        expect(model['rpSub']).toBe(1);
        expect(model['administrationSubDivision']).toBe(2);
        expect(model['administrationSubInfo']).toBe('一包化');
        expect(model['subAdministrationCode']).toBe('');
        expect(model['partCode']).toBe('');
    });
    it('should be 201 readable', () => {
        const model = getModel('201,1,1,1,4,2171022F1029,ノルバスク錠２．５ｍｇ,4,1,錠'.split(','));
        expect(model['rp']).toBe(1);
        expect(model['indexInRp']).toBe(1);
        expect(model['infomationDivision']).toBe(1);
        expect(model['medicineCodeType']).toBe(4);
        expect(model['medicineCode']).toBe('2171022F1029');
        expect(model['medicineName']).toBe('ノルバスク錠２．５ｍｇ');
        expect(model['dosage']).toBe('4');
        expect(model['titerFlag']).toBe(1);
        expect(model['unitName']).toBe('錠');
    });
    it('should be 211 readable', () => {
        const model = getModel('211,1,1,250'.split(','));
        expect(model['rp']).toBe(1);
        expect(model['indexInRp']).toBe(1);
        expect(model['unitConversionCoef']).toBe('250');
    });
    it('should be 221 readable', () => {
        const model = getModel('221,1,1,1.5,0.5,0.5,,,,,,,'.split(','));
        expect(model['rp']).toBe(1);
        expect(model['indexInRp']).toBe(1);
        expect(model['dose1']).toBe('1.5');
        expect(model['dose2']).toBe('0.5');
        expect(model['dose3']).toBe('0.5');
        expect(model['dose4']).toBe('');
        expect(model['dose5']).toBe('');
        expect(model['doseCode1']).toBe('');
        expect(model['doseCode2']).toBe('');
        expect(model['doseCode3']).toBe('');
        expect(model['doseCode4']).toBe('');
        expect(model['doseCode5']).toBe('');
    });
    it('should be 241 readable', () => {
        const model = getModel('241,1,1,1,3'.split(','));
        expect(model['rp']).toBe(1);
        expect(model['indexInRp']).toBe(1);
        expect(model['singleDose']).toBe('1');
        expect(model['timesPerDay']).toBe(3);
    });
    it('should be 281 readable', () => {
        const model = getModel('281,1,1,1,1,一包化,'.split(','));
        expect(model['rp']).toBe(1);
        expect(model['indexInRp']).toBe(1);
        expect(model['medicineSubIndex']).toBe(1);
        expect(model['medicineSubDivision']).toBe(1);
        expect(model['medicineSubInfo']).toBe('一包化');
        expect(model['SubAdministrationCode']).toBe('');
    });
});