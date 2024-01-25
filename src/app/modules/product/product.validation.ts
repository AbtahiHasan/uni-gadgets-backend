import { z } from 'zod';

const createProductValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    price: z.string(),
    releaseDate: z.string(),
    brand: z.string(),
    modelNumber: z.string(),
    category: z.string(),
    operatingSystem: z.string().optional(),
    connectivity: z.string().array().optional(),
    powerSource: z.string().optional(),
    features: z
      .object({
        cameraResolution: z.number().optional(),
        storageCapacity: z.number().optional(),
        screenSize: z.number().optional(),
      })
      .optional(),
    weight: z.number(),

    dimensions: z.object({
      height: z.number().optional(),
      width: z.number().optional(),
      depth: z.number().optional(),
    }),
  }),
});

const productValidations = { createProductValidationSchema };

export default productValidations;
