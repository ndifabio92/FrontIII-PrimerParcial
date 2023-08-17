import {FormData} from "../interfaces";
import {useFormik} from "formik";
import {validationSchemaForm as validationSchema} from "../validations/validationSchemaForm.ts";

interface FormProps {
    onSubmit: (data: FormData) => void;
}

const Form = ({onSubmit}: FormProps) => {
    const initialValues: FormData = {name: '', age: 0}

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
                    <div>{formik.errors.name}</div>
                ) : null}
            </label>
            <br/>
            <label>
                Age
                <input type="number" name="age" value={formik.values.age} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.age && formik.errors.age ? (
                    <div>{formik.errors.age}</div>
                ) : null}
            </label>
            <br/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;