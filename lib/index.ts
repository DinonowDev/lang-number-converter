const englishToPersian = (input: string | number) => {
	let inputString = input.toString();
	return inputString.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);
};
const englishToArabic = (input: string | number) => {
	let inputString = input.toString();
	return inputString.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[parseInt(d)]);
};
const persianToEnglish = (input: string | number) => {
	let inputString = input.toString();
	return inputString.replace(/[۰-۹]/g, (d) =>
		"۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString()
	);
};
const arabicToEnglish = (input: string | number) => {
	let inputString = input.toString();
	return inputString.replace(/[٠-٩]/g, (d) =>
		"٠١٢٣٤٥٦٧٨٩".indexOf(d).toString()
	);
};

const splitPrice = (input: string | number) => {
	let inputNumber = Number(persianToEnglish(arabicToEnglish(input.toString())));
	return inputNumber ? inputNumber.toLocaleString() : "Wrong number";
};

module.exports = {
	splitPrice,
	englishToPersian,
	englishToArabic,
	persianToEnglish,
	arabicToEnglish,
};
