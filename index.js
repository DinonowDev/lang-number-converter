const englishToPersian = (input) => {
	let inputString = input.toString();
	return inputString.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);
};
const englishToArabic = (input) => {
	let inputString = input.toString();
	return inputString.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[parseInt(d)]);
};
const persianToEnglish = (input) => {
	let inputString = input.toString();
	return inputString.replace(/[۰-۹]/g, (d) =>
		"۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString()
	);
};
const arabicToEnglish = (input) => {
	let inputString = input.toString();
	return inputString.replace(/[٠-٩]/g, (d) =>
		"٠١٢٣٤٥٦٧٨٩".indexOf(d).toString()
	);
};

const splitPrice = (input) => {
	let inputNumber = Number(persianToEnglish(arabicToEnglish(input)));
	return inputNumber ? inputNumber.toLocaleString() : "Wrong number";
};

module.exports = {
	splitPrice,
	englishToPersian,
	englishToArabic,
	persianToEnglish,
	arabicToEnglish,
};
