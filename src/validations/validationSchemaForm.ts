import * as Yup from "yup";

export const validationSchemaForm = Yup.object({
    name: Yup.string().required("Name is required"),
    age: Yup.number().required("Age is required").positive().integer(),
});
