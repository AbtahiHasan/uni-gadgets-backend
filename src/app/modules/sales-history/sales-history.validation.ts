import { z } from 'zod';

const createSaleValidationSchema = z.object({
  body: z.object({
    cartIds: z.string().array(),
    productIds: z.string().array(),
    phoneNumber: z.string(),
    buyerName: z.string(),
    buyDate: z.string(),
  }),
});

const SalesHistoryValidations = { createSaleValidationSchema };

export default SalesHistoryValidations;
