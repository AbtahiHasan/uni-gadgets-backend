import { z } from 'zod';

const createCartValidationSchema = z.object({
  body: z.object({
    product_name: z.string(),
    product_image: z.string(),
    price: z.number(),
    quantity: z.number(),
    product_quantity: z.number(),
  }),
});

const cartValidations = { createCartValidationSchema };

export default cartValidations;
