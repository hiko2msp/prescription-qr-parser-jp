
const DATATYPE = {
    NUMBER: '9',
    ALPHANUM: 'X',
    STRING: 'N'
}

const recordNames = {
    '1': '医療機関レコード',
    '2': '医療機関所在地レコード',
    '3': '医療機関電話レコード',
    '4': '診療科レコード',
    '5': '医師レコード',
    '11': '患者氏名レコード',
    '12': '患者性別レコード',
    '13': '患者生年月日レコード',
    '14': '患者一部負担区分レコード',
    '21': '保険種別レコード',
    '22': '保険者番号レコード',
    '23': '記号番号レコード',
    '24': '負担・給付率レコード',
    '25': '職務上の事由レコード',
    '27': '第一公費レコード',
    '28': '第二公費レコード',
    '29': '第三公費レコード',
    '30': '特殊公費レコード',
    '31': 'レセプト種別レコード',
    '51': '処方箋交付年月日レコード',
    '52': '使用期限年月日レコード',
    '61': '麻薬施用レコード',
    '62': '残薬確認欄レコード',
    '63': '分割指示レコード',
    '81': '備考レコード',
    '82': '処方箋番号レコード',
    '101': '剤形レコード',
    '102': '分割指示調剤数量レコード',
    '111': '用法レコード',
    '181': '用法補足レコード',
    '201': '薬品レコード',
    '211': '単位変換レコード',
    '221': '不均等レコード',
    '231': '負担区分レコード',
    '241': '１回服用量レコード',
    '281': '薬品補足レコード',
}

const modelDefinition = {
    '1': [
        {name: 'medicalInstitutionCodeType', desc: '医療機関コード種別', required: true, type: DATATYPE.NUMBER},
        {name: 'medicalInstitutionCode', desc: '医療機関コード', required: true, type: DATATYPE.ALPHANUM},
        {name: 'medicalInstitutionPrefectureCode', desc: '医療機関都道府県コード', required: true, type: DATATYPE.ALPHANUM},
        {name: 'medicalInstitutionName', desc: '医療機関名称', type: DATATYPE.STRING},
    ],
    '2': [
        {name: 'medicalInstitutionZipCode', desc: '医療機関郵便番号', type: DATATYPE.ALPHANUM},
        {name: 'medicalInstitutionAddress', desc: '医療機関所在地', type: DATATYPE.STRING},
    ],
    '3': [
        {name: 'medicalInstitutionPhoneNumber', desc: '医療機関電話番号', required: true, type: DATATYPE.ALPHANUM},
        {name: 'medicalInstitutionFaxNumber', desc: 'FAX番号', type: DATATYPE.ALPHANUM},
        {name: 'medicalInstitutionOtherContactAddress', desc: 'その他連絡先', type: DATATYPE.STRING},
    ],
    '4': [
        {name: 'medicalDepartmentType', desc: '診療科コード種別', required: true, type: DATATYPE.NUMBER},
        {name: 'medicalDepartmentCode', desc: '診療科コード', type: DATATYPE.ALPHANUM},
        {name: 'medicalDepartmentName', desc: '診療科名', required: true, type: DATATYPE.STRING},
    ],
    '5': [
        {name: 'doctorCode', desc: '医師コード', type: DATATYPE.ALPHANUM},
        {name: 'doctorNameKana', desc: '医師カナ氏名', type: DATATYPE.ALPHANUM},
        {name: 'doctorName', desc: '医師漢字氏名', required: true, type: DATATYPE.STRING},
    ],
    '11': [
        {name: 'patientCode', desc: '患者コード', type: DATATYPE.ALPHANUM},
        {name: 'patientName', desc: '患者漢字氏名', required: true, type: DATATYPE.STRING},
        {name: 'patientNameKana', desc: '患者カナ氏名', required: true, type: DATATYPE.ALPHANUM},
    ],
    '12': [
        {name: 'patientSex', desc: '患者性別', required: true, type: DATATYPE.NUMBER},
    ],
    '13': [
        {name: 'patientBirthday', desc: '患者生年月日', required: true, type: DATATYPE.NUMBER},
    ],
    '14': [
        {name: 'partialChangedMonayDivision', desc: '一部負担金区分', required: true, type: DATATYPE.NUMBER},
    ],
    '21': [
        {name: 'insuranceType', desc: '保険種別', required: true, type: DATATYPE.NUMBER},
    ],
    '22': [
        {name: 'insuranceNumber', desc: '保険者番号', type: DATATYPE.ALPHANUM},
    ],
    '23': [
        {name: 'insuredSymbol', desc: '被保険者証記号', type: DATATYPE.STRING},
        {name: 'insuredNumber', desc: '被保険者証番号', type: DATATYPE.STRING},
        {name: 'insuredType', desc: '被保険者/被扶養者', required: true, type: DATATYPE.NUMBER},
    ],
    '24': [
        {name: 'patientCopayment', desc: '患者負担率', required: true, type: DATATYPE.NUMBER},
        {name: 'insuranceAllowanceRate', desc: '保険給付率', required: true, type: DATATYPE.NUMBER},
    ],
    '25': [
        {name: 'reasonOnJob', desc: '職務上の事由', required: true, type: DATATYPE.NUMBER},
    ],
    '27': [
        {name: 'publicMonayChangeNumber1', desc: '第一公費負担者番号', required: true, type: DATATYPE.NUMBER},
        {name: 'publicMonayRecipientNumber1', desc: '第一公費受給者番号', type: DATATYPE.NUMBER},
    ],
    '28': [
        {name: 'publicMonayChangeNumber2', desc: '第二公費負担者番号', required: true, type: DATATYPE.NUMBER},
        {name: 'publicMonayRecipientNumber2', desc: '第二公費受給者番号', type: DATATYPE.NUMBER},
    ],
    '29': [
        {name: 'publicMonayChangeNumber3', desc: '第三公費負担者番号', required: true, type: DATATYPE.NUMBER},
        {name: 'publicMonayRecipientNumber3', desc: '第三公費受給者番号', type: DATATYPE.NUMBER},
    ],
    '30': [
        {name: 'publicMonayChangeNumberSpecial', desc: '特殊公費負担者番号', required: true, type: DATATYPE.NUMBER},
        {name: 'publicMonayRecipientNumberSpecial', desc: '特殊公費受給者番号', type: DATATYPE.NUMBER},
    ],
    '31': [
        {name: 'receiptTypeCode', desc: 'レセプト種別コード', required: true, type: DATATYPE.NUMBER},
    ],
    '51': [
        {name: 'prescriptionDate', desc: '処方箋交付年月日', required: true, type: DATATYPE.NUMBER},
    ],
    '52': [
        {name: 'expiredDate', desc: '使用期限年月日', required: true, type: DATATYPE.NUMBER},
    ],
    '61': [
        {name: 'narcoticsUserLicenseNumber', desc: '麻薬施用者免許番号', type: DATATYPE.ALPHANUM},
        {name: 'narcoticsUsingPatientAddress', desc: '麻薬施用患者住所', required: true, type: DATATYPE.STRING},
        {name: 'narcoticsUsingPatientPhoneNumber', desc: '麻薬施用患者電話番号', required: true, type: DATATYPE.ALPHANUM},
    ],
    '62': [
        {name: 'remainingMedicineConfirmationFlag', desc: '残薬確認対応フラグ', required: true, type: DATATYPE.NUMBER},
    ],
    '63': [
        {name: 'numDivision', desc: '分割回数', required: true, type: DATATYPE.NUMBER},
        {name: 'DivisionIndex', desc: '分割回', required: true, type: DATATYPE.NUMBER},
    ],
    '81': [
        {name: 'remarkIndex', desc: '備考連番', required: true, type: DATATYPE.NUMBER},
        {name: 'remarkType', desc: '備考種別', type: DATATYPE.NUMBER},
        {name: 'remark', desc: '備考', required: true, type: DATATYPE.STRING},
    ],
    '82': [
        {name: 'prescriptionNumberType', desc: '処方箋番号種別', required: true, type: DATATYPE.NUMBER},
        {name: 'prescriptionNumber', desc: '処方箋番号', required: true, type: DATATYPE.NUMBER},
    ],
    '101': [
        {name: 'rp', desc: 'RP番号', required: true, type: DATATYPE.NUMBER},
        {name: 'dosageCategory', desc: '剤形区分', required: true, type: DATATYPE.NUMBER},
        {name: 'dosageName', desc: '剤形名称', type: DATATYPE.ALPHANUM},
        {name: 'numPrepared', desc: '調剤数量', required: true, type: DATATYPE.NUMBER},
    ],
    '102': [
        {name: 'rp', desc: 'RP番号', required: true, type: DATATYPE.NUMBER},
        {name: 'numPreparedByDivision', desc: '分割回ごとの調剤数量', required: true, type: DATATYPE.NUMBER},
        {name: 'totalNumPrepared', desc: '総調剤数量', required: true, type: DATATYPE.NUMBER},
    ],
    '111': [
        {name: 'rp', desc: 'RP番号', required: true, type: DATATYPE.NUMBER},
        {name: 'administrationCodeType', desc: '用法コード種別', required: true, type: DATATYPE.NUMBER},
        {name: 'administrationCode', desc: '用法コード', type: DATATYPE.ALPHANUM},
        {name: 'administrationName', desc: '用法名称', required: true, type: DATATYPE.STRING},
        {name: 'timesPerDay', desc: '１日回数', type: DATATYPE.NUMBER},
    ],
    '181': [
        {name: 'rp', desc: 'RP番号', required: true, type: DATATYPE.NUMBER},
        {name: 'rpSub', desc: 'RP補足連番', required: true, type: DATATYPE.NUMBER},
        {name: 'administrationSubDivision', desc: '用法補足区分', type: DATATYPE.NUMBER},
        {name: 'administrationSubInfo', desc: '用法補足情報', required: true, type: DATATYPE.STRING},
        {name: 'subAdministrationCode', desc: '補足用法コード', type: DATATYPE.ALPHANUM},
        {name: 'partCode', desc: '部位コード', type: DATATYPE.ALPHANUM},
    ],
    '201': [
        {name: 'rp', desc: 'RP番号', required: true, type: DATATYPE.NUMBER},
        {name: 'indexInRp', desc: 'RP内連番', required: true, type: DATATYPE.NUMBER},
        {name: 'infomationDivision', desc: '情報区分', type: DATATYPE.NUMBER},
        {name: 'medicineCodeType', desc: '薬品コード種別', required: true, type: DATATYPE.NUMBER},
        {name: 'medicineCode', desc: '薬品コード', type: DATATYPE.ALPHANUM},
        {name: 'medicineName', desc: '薬品名称', type: DATATYPE.STRING},
        {name: 'dosage', desc: '用量', required: true, type: DATATYPE.ALPHANUM},
        {name: 'titerFlag', desc: '力価フラグ', required: true, type: DATATYPE.NUMBER},
        {name: 'unitName', desc: '単位名', required: true, type: DATATYPE.STRING},
    ],
    '211': [
        {name: 'rp', desc: 'RP番号', required: true, type: DATATYPE.NUMBER},
        {name: 'indexInRp', desc: 'RP内連番', required: true, type: DATATYPE.NUMBER},
        {name: 'unitConversionCoef', desc: '単位変換係数', required: true, type: DATATYPE.ALPHANUM},
    ],
    '221': [
        {name: 'rp', desc: 'RP番号', required: true, type: DATATYPE.NUMBER},
        {name: 'indexInRp', desc: 'RP内連番', required: true, type: DATATYPE.NUMBER},
        {name: 'dose1', desc: '１回目服用量', required: true, type: DATATYPE.ALPHANUM},
        {name: 'dose2', desc: '２回目服用量', required: true, type: DATATYPE.ALPHANUM},
        {name: 'dose3', desc: '３回目服用量', type: DATATYPE.ALPHANUM},
        {name: 'dose4', desc: '４回目服用量', type: DATATYPE.ALPHANUM},
        {name: 'dose5', desc: '５回目服用量', type: DATATYPE.ALPHANUM},
        {name: 'doseCode1', desc: '１回目服用量コード', required: true, type: DATATYPE.ALPHANUM},
        {name: 'doseCode2', desc: '２回目服用量コード', required: true, type: DATATYPE.ALPHANUM},
        {name: 'doseCode3', desc: '３回目服用量コード', type: DATATYPE.ALPHANUM},
        {name: 'doseCode4', desc: '４回目服用量コード', type: DATATYPE.ALPHANUM},
        {name: 'doseCode5', desc: '５回目服用量コード', type: DATATYPE.ALPHANUM},
    ],
    '231': [
        {name: 'rp', desc: 'RP番号', required: true, type: DATATYPE.NUMBER},
        {name: 'indexInRp', desc: 'RP内連番', required: true, type: DATATYPE.NUMBER},
        {name: 'publicMoneyChageDivision1', desc: '第一公費負担区分', type: DATATYPE.NUMBER},
        {name: 'publicMoneyChageDivision2', desc: '第二公費負担区分', type: DATATYPE.NUMBER},
        {name: 'publicMoneyChageDivision3', desc: '第三公費負担区分', type: DATATYPE.NUMBER},
        {name: 'publicMoneyChageDivisionSpecial', desc: '特殊公費負担区分', type: DATATYPE.NUMBER},
    ],
    '241': [
        {name: 'rp', desc: 'RP番号', required: true, type: DATATYPE.NUMBER},
        {name: 'indexInRp', desc: 'RP内連番', required: true, type: DATATYPE.NUMBER},
        {name: 'singleDose', desc: '１回服用量', required: true, type: DATATYPE.ALPHANUM},
        {name: 'timesPerDay', desc: '１日服用回数', type: DATATYPE.NUMBER},
    ],
    '281': [
        {name: 'rp', desc: 'RP番号', required: true, type: DATATYPE.NUMBER},
        {name: 'indexInRp', desc: 'RP内連番', required: true, type: DATATYPE.NUMBER},
        {name: 'medicineSubIndex', desc: '薬品補足連番', required: true, type: DATATYPE.NUMBER},
        {name: 'medicineSubDivision', desc: '薬品補足区分', type: DATATYPE.NUMBER},
        {name: 'medicineSubInfo', desc: '薬品補足情報', required: true, type: DATATYPE.STRING},
        {name: 'SubAdministrationCode', desc: '補足用法コード', required: true, type: DATATYPE.ALPHANUM},
    ],
}


function getModel(row) {
    const [no, ...remains] = row;
    if (!(no in modelDefinition)) {
        return {};
    }
    const lineModel = modelDefinition[no];
    return lineModel
        .map((model, i) => {
            const value = model['type'] === '9'
                ? parseInt(remains[i])
                : remains[i];
            return {
                value,
                ...model,
            }
        })
        .reduce((acc, val) => {
            acc[val['name']] = val['value'];
            return acc;
        }, {});
}


class QRParser {
    parse(text) {
        const lines = text.split('\n');
        const [header, ...remains] = lines;
        const version = parseInt(header.replace('JAHIS', ''));

        let result = {};
        remains.forEach(line => {
            const row = line.split(',');
            const no = parseInt(row[0]);
            const model = getModel(row);
            if (no === 81) {
                if (!('remarks' in result)) {
                    result['remarks'] = [];
                }
                result['remarks'].push(model);
            } else if (no < 100) {
                result = {
                    ...model,
                    ...result,
                }
            } else if (no === 101) {
                if ('administrations' in result) {
                    result['administrations'].push({});
                } else {
                    result['administrations'] = [{}];
                }
            } else if (no === 181) {
                const rpIndex = model['rp'] - 1;
                if (!('subInfo' in result['administrations'][rpIndex])) {
                    result['administrations'][rpIndex]['subInfo'] = [];
                }
                result['administrations'][rpIndex]['subInfo'].push(model);
            } else if (100 < no && no < 200) {
                const rpIndex = model['rp'] - 1;
                result['administrations'][rpIndex] = {
                    ...model,
                    ...result['administrations'][rpIndex],
                }
            } else if (no === 201) {
                const rpIndex = model['rp'] - 1;
                if ('medicines' in result['administrations'][rpIndex]) {
                    result['administrations'][rpIndex]['medicines'].push({});
                } else {
                    result['administrations'][rpIndex]['medicines'] = [{}];
                }
            } else if (no === 281) {
                const rpIndex = model['rp'] - 1;
                const indexInRp = model['indexInRp'] - 1;
                if (!('additionalRecords' in result['administrations'][rpIndex]['medicines'][indexInRp])) {
                    result['administrations'][rpIndex]['medicines'][indexInRp]['additionalRecords'] = []
                }
                result['administrations'][rpIndex]['medicines'][indexInRp]['additionalRecords'].push(model);
            } else if (200 < no && no < 300) {
                const rpIndex = model['rp'] - 1;
                const indexInRp = model['indexInRp'] - 1;
                result['administrations'][rpIndex]['medicines'][indexInRp] = {
                    ...model,
                    ...result['administrations'][rpIndex]['medicines'][indexInRp]
                }
            }
        });

        return result;
    }
}

module.exports = {
    QRParser,
    getModel,
}
