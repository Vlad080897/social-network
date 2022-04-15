import React from 'react'
import { Field, WrappedFieldProps } from 'redux-form';
import styles from '../Controls/controls.module.css'
import { validatorsType } from '../types/types';


export function createField<T extends string>(component: React.FC<WrappedFieldProps>, type: string,
    name: T, placeholder: string | undefined, validate: Array<validatorsType>) {
    return (
        <Field component={component} type={type} name={name} placeholder={placeholder} validate={validate} />
    )

}

const FormControl: React.FC<WrappedFieldProps> = ({ meta, ...props }) => {
    let hasError = meta.touched && meta.error;
    return (
        <div>
            <div className={hasError && styles.required_field} >
                {props.children}
            </div>
            <div>
                {hasError && <span className={styles.error_massage}>{meta.error}</span>}
            </div>
        </div>
    )
}


export const Textarea: React.FC<WrappedFieldProps> = ({ input, meta, ...props }) => {

    let hasError = meta.touched && meta.error;

    return (
        <div>
            <div className={hasError && styles.required_field} >
                <textarea {...input} {...meta} {...props} className={styles.my_post} />
            </div>
            <div>
                {hasError && <span className={styles.error_massage}>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, ...restProps } = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export default Textarea