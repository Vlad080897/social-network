import React from 'react'
import styles from '../Controls/controls.module.css'

const FormControl = ({ input, meta, ...props }) => {
    let hasError = meta.touched && meta.error;
    return (
        <div>
            <div className={hasError ? styles.required_field : ''} >
                {props.children}
            </div>
            <div>
                {hasError ? <span className={styles.error_massage}>{meta.error}</span> : ''}
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, ...restProps } = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const { input, meta, ...restProps } = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export default Textarea