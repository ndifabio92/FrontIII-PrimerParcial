import {FormData} from "../interfaces";
import {useFormik} from "formik";
import {validationSchemaForm as validationSchema} from "../validations/validationSchemaForm.ts";
import {Error} from "./ui/errors/Error.tsx";

interface FormProps {
    onSubmit: (data: FormData) => void;
}

const Form = ({onSubmit}: FormProps) => {
    const initialValues: FormData = {name: '', lastName: ''}

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            onSubmit(values);
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <label>
                Name
                <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.name && formik.errors.name ? (
                    <Error error={formik.errors.name}/>
                ) : null}
            </label>
            <br/>
            <label>
                LastName
                <input type="text" name="lastName" value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.lastName && formik.errors.lastName ? (
                    <Error error={formik.errors.lastName}/>
                ) : null}
            </label>
            <br/>
            <button type="submit">Mostrar</button>
        </form>
    )
}

export default Form;