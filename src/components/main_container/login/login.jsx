import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../../Controls/controls'
import { maxLength, minLength, requiredField } from '../../../utilits/validators/Validators'
import { connect } from 'react-redux'
import { loginThunk } from '../../../redux/authReducer'
import { compose } from 'redux'
import { withAuthRedirectToProfile } from '../../../hoc/redirectComponent'

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginThunk(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    return (
        <LoginReduxedForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    )
}

const maxLoginLenght = maxLength(30)
const minLoginLegth = minLength(5)
const maxPasswordLenght = maxLength(10)


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Login" component={Input} type='email' name='email' validate={[requiredField, maxLoginLenght, minLoginLegth]} />
            </div>
            <div>
                <Field placeholder='Password' component={Input} type='password' name='password' validate={[requiredField, maxPasswordLenght]} />
            </div>
            <div>
                <Field component={Input} type='checkbox' name='rememberMe' />
            </div>
            <div>
                {props.captchaUrl &&
                    <div>
                        <div>Введите Капчу</div>
                        <img src={props.captchaUrl} />
                        <Field placeholder='captcha symbols' component={Input} type='text' name='captcha' validate={[requiredField]} />
                    </div>}
            </div>

            <div>
                {props.error}
            </div>
            <div>
                <button>Log in</button>
                <div>Логин : vvitkovskij4@gmail.com</div>
                <div>Пароль: fgHR78</div>
            </div>

        </form>
    )

}


const LoginReduxedForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)

const mapStateToProps = (state) => {
    return {
        captchaUrl: state.authReducer.captchaUrl
    }
}


export default compose(
    connect(mapStateToProps, { loginThunk }),
    withAuthRedirectToProfile
)(Login)
