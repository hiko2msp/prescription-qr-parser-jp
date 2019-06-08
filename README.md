# prescription-qr-parser-jp
処方箋のQRコードから取得されたCSVの読み取りを行う

[ＪＡＨＩＳ 院外処方箋２次元シンボル記録条件規約 Ｖｅｒ．1．5](https://www.jahis.jp/files/user/04_JAHIS%20standard/19-101_JAHIS%E9%99%A2%E5%A4%96%E5%87%A6%E6%96%B9%E7%AE%8B%EF%BC%92%E6%AC%A1%E5%85%83%E3%82%B7%E3%83%B3%E3%83%9C%E3%83%AB%E8%A8%98%E9%8C%B2%E6%9D%A1%E4%BB%B6%E8%A6%8F%E7%B4%84Ver.1.5.pdf)に対応

### 使い方

```
const {QRParser} = require('prescription-qr-parser-jp');
const parser = new QRParser()
const result = parser.parse(csvText);
```
