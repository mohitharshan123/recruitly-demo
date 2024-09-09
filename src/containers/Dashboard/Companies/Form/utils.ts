import { Company } from "../../../../types";
import { FormValues } from "./constants";

/**
 * Transforms a `Company` object into a `FormValues` object.
 *
 * This function maps the properties of a `Company` object to a `FormValues` object.
 * The `FormValues` object represents the structure required by a form, ensuring that
 * only the relevant fields are included.
 *
 * @param company - The `Company` object to be transformed. It should contain the following optional properties:
 *   - `name` (string): The name of the company.
 *   - `id` (string): The unique identifier of the company.
 *   - `imageUrl` (string): The URL of the company's image.
 *   - `phone` (string): The contact phone number of the company.
 *   - `website` (string): The website URL of the company.
 *   - `ownerName` (string): The name of the company owner.
 *   - `description` (string): A brief description of the company.
 *
 * @returns A `FormValues` object that includes the mapped properties from the `Company` object.
 *          It will include the same properties as described in the `company` parameter.
 *
 */
export const transformCompanyToFormValues = (company: Company): FormValues => ({
  name: company.name,
  id: company.id,
  imageUrl: company.imageUrl,
  phone: company.phone,
  website: company.website,
  ownerName: company.ownerName,
  description: company.description,
});
