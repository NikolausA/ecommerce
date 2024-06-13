export const validateForm = (schema, name, value) => {
  try {
    schema.validateSyncAt(name, { [name]: value });
    return undefined;
  } catch (error) {
    return error.message;
  }
};
