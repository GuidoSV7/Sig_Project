import * as yup from 'yup';

export const createSchema = yup.object({
    title: yup.string().required(),
});
