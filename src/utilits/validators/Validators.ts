import { validatorsType } from "../../types/types";

export const requiredField: validatorsType = (value: string) => {
    if (value) return undefined;
    return 'The Field is required';
}

export const maxLength = (maxLength: number): validatorsType => {
    return (value: string) => {
        if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`
        return undefined
    }

}

export const minLength = (minLenght: number): validatorsType => {
    return (value: string) => {
        if (value && value.length < minLenght) return 'Min Length is' + minLenght + 'symbols';
        return undefined
    }
}



