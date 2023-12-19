import * as yup from 'yup';

export const createSchema = yup.object({
    idproduct: yup.number().required(),
    idcategory: yup.number().required(),
});
