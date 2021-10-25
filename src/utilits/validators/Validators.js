export const requiredField = (value) => {
    if (value) return undefined;
    return 'The Field is required';
}

export const maxLength = (maxLength) => {
    return (value) => {
        if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`
        return undefined
    }

}

export const minLength = (minLenght) => {
    return (value) => {
        if (value && value.length < minLenght) return 'Min Length is' + minLenght + 'symbols';
        return undefined
    }
}

