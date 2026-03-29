import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";
/**
 * validateRequest(schema, property)

 * Validates req[property] against the given Joi schema.
 * @param {import('joi').ObjectSchema} schema - Joi schema to validate against
 * @param {"body"|"query"|"params"} property - property of req to validate

 * On success: assigns validated value to req[property] and calls next()
 * On failure: returns 400 with { success, message, errors } format
 */
type Property = "body" | "query" | "params";
export declare function validateRequest(schema: ObjectSchema, property: Property): (req: Request, res: Response, next: NextFunction) => Promise<void | Response>;
export {};
//# sourceMappingURL=validateRequest.d.ts.map