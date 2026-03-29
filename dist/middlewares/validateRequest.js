export function validateRequest(schema, property) {
    return async (req, res, next) => {
        try {
            const value = req[property]; // "body" | "params"
            const validated = await schema.validateAsync(value, {
                abortEarly: false,
                stripUnknown: true,
            });
            req[property] = validated;
            next();
        }
        catch (error) {
            const err = error;
            if (err.details && Array.isArray(err.details)) {
                const errors = err.details.map((detail) => ({
                    field: detail.path.join("."),
                    message: detail.message,
                }));
                return res.status(400).json({
                    success: false,
                    message: "Validation error",
                    errors,
                });
            }
            next(error);
        }
    };
}
//# sourceMappingURL=validateRequest.js.map