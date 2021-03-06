const sum = (a, b) => {
    return a + b;
};

const mult = (a, b) => {
    return a * b;
};

const parcel = (x, y) => {
	return (x / y).toFixed(2);
}

export {sum, mult, parcel}; 

const formatCurrency = (value, params, locale) => {
    params = params || {};
    params.style = 'currency';
    params.valueInCents = 'true';
    return formatNumber(value, params, locale);
};  