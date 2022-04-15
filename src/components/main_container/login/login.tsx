import React, { ComponentType } from 'react'
import { Field, reduxForm, InjectedFormProps } from 'redux-form'
import { Input } from '../../../Controls/controls'
import { maxLength, minLength, requiredField } from '../../../utilits/validators/Validators'
import { connect } from 'react-redux'
import { loginThunk } from '../../../redux/authReducer'
import { compose } from 'redux'
import { withAuthRedirectToProfile } from '../../../hoc/redirectComponent'
import { AppStateType } from '../../../redux/redux-store'


const maxLoginLenght = maxLength(30)
const minLoginLegth = minLength(5)
const maxPasswordLenght = maxLength(10)

type IProps = {
    captchaUrl: string | null
}

type IDispatch = {
    loginThunk: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type OwnProps = {

}

type IPropsForForm = {
    captchaUrl: string | null
}

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}


const Login: React.FC<IProps & IDispatch>  = ({ loginThunk, captchaUrl }) => {
    const onSubmit = (formData: FormDataType) => {
        debugger
        loginThunk(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    return (
        
        <LoginReduxedForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    )
}






const LoginForm: React.FC<IPropsForForm & InjectedFormProps<FormDataType, IPropsForForm>> = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder="Login" component={Input} type='email' name='email'
                    validate={[requiredField, maxLoginLenght, minLoginLegth]} />
            </div>
            <div>
                <Field placeholder='Password' component={Input} type='password' name='password'
                    validate={[requiredField, maxPasswordLenght]} />
            </div>
            <div>
                <Field component={Input} type='checkbox' name='rememberMe' />
            </div>
            <div>
                {captchaUrl &&
                    <div>
                        <div>Введите Капчу</div>
                        <img src={captchaUrl} />
                        <Field placeholder='captcha symbols' component={Input} type='text' name='captcha'
                            validate={[requiredField]} />
                    </div>}
            </div>

            <div>
                {error}
            </div>
            <div>
                <button>Log in</button>
                <div>Логин : vvitkovskij4@gmail.com</div>
                <div>Пароль: fgHR78</div>
            </div>

        </form>
    )

}

const LoginReduxedForm = reduxForm<FormDataType, IPropsForForm>({ form: 'login' })(LoginForm)





const mapStateToProps = (state: AppStateType) => {
    return {
        captchaUrl: state.authReducer.captchaUrl
    }
}


export default compose<ComponentType>(
    connect<IProps, IDispatch, OwnProps, AppStateType>(mapStateToProps, { loginThunk }),
    withAuthRedirectToProfile
)(Login)
