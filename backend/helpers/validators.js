exports.isNotEmpty = string => !!string.trim();

exports.isValidEmail = email => email.includes("@") && email.includes(".");

module.exports = exports;