
const validate = (schema, request) => {
    const result = schema.validate(request);
    if (result.error) {
        throw result.error;
    } else {
        return null;
    }
}

module.exports = { validate };