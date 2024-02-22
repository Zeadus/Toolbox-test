class ValidationError extends Error {
  constructor(errors) {
    super(errors);
    this.status = 412;
    this.message = "Invalid Input Data";
    this.error = errors;
  }
}

const validateRequest = async (schema, data) => {
  // Receives Zod Schema
  try {
    schema.parse(data);
  } catch (error) {
    if (error) {
      throw new ValidationError(error.errors);
    }
  }
};

export default validateRequest;
