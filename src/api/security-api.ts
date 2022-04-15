import { instance } from "./api"

type ResponseType = {
    url: string
}

export const securityApi = {
    getCaptcha() {
        return instance.get
            <ResponseType>
            ('security/get-captcha-url').then(response => response)
    }
}
