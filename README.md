<h3 align="center">lang-number-converter</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/dinonowdev/lang-number-converter.svg)](https://github.com/dinonowdev/lang-number-converter/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/dinonowdev/lang-number-converter.svg)](https://github.com/dinonowdev/lang-number-converter/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

## 📝 Table of Contents

- [About](#about)
- [Usage](#usage)

## 🧐 About <a name = "about"></a>

It only replaces the numbers in the passed string with the numbers of the selected language. 

## 🎈 Usage <a name = "usage"></a>

To use the converter lang :

```js
import { englishToPersian , persianToEnglish } from "lang-number-converter"

console.log(englishToPersian("Tom327EI"))
// output => "Tom۳۲۷EI"

console.log(persianToEnglish("۳۲۷E I50۲"))
// output => "327E I502"
```

```js
import { splitPrice } from "lang-number-converter"

console.log(splitPrice("2000000"))
// output => "2,000,000"

console.log(splitPrice("۳۲۷۳۲۲۳۲"))
// output => "32,732,232"
```

### Installing

to install, use this command :

```
npm install lang-number-converter
```
