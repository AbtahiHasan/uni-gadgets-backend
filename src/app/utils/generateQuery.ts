/* eslint-disable @typescript-eslint/no-explicit-any */

import { IQuery } from '../interface/query';

export const generateQuery = (query: IQuery) => {
  const filter: any = {};

  if (query?.minPrice !== undefined) {
    filter.price = { $gte: parseFloat(query?.minPrice) };
  }
  if (query?.maxPrice !== undefined) {
    filter.price = { ...filter.price, $lte: parseFloat(query.maxPrice) };
  }
  if (query?.releaseDate !== undefined) {
    filter.releaseDate = { releaseDate: new Date(query?.releaseDate) };
  }
  if (query?.brand !== undefined) {
    filter.releaseDate = { brand: query?.brand };
  }
  if (query?.modelNumber !== undefined) {
    filter.releaseDate = { modelNumber: query?.modelNumber };
  }
  if (query?.category !== undefined) {
    filter.releaseDate = { category: query?.category };
  }
  if (query?.operatingSystem !== undefined) {
    filter.releaseDate = { operatingSystem: query?.operatingSystem };
  }
  if (query?.connectivity !== undefined) {
    filter.releaseDate = { connectivity: { $elemMatch: query?.connectivity } };
  }
  if (query?.powerSource !== undefined) {
    filter.releaseDate = { powerSource: query?.powerSource };
  }

  /*
   * TODO
   * Filter by Features: Introduce filters for specific features like camera resolution, storage capacity, screen size, or any other relevant specifications.
   * Additional Relevant Filter Parameters: Customize the filter options further based on the specific attributes and functionalities of electric gadgets, such as weight, dimensions, or compatibility with certain accessories.
   */

  return filter;
};
