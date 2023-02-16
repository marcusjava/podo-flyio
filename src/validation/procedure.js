const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = (data) => {
	let errors = {};

	data.service = !isEmpty(data.service) ? data.service : '';
	data.name = !isEmpty(data.name) ? data.name : '';

	if (Validator.isEmpty(data.service)) {
		errors = { path: 'service', message: 'Informe o serviço' };
	}

	if (Validator.isEmpty(data.name)) {
		errors = { path: 'name', message: 'Informe o nome do procedimento' };
	}

	return {
		errors,
		isValid: isEmpty(errors),
	};
};
