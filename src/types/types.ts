export type PhotosType = {
    large: string | null 
    small: string | null
}

export type profileType = {
    userId: number | null
    aboutMe: string | null
    fullName: string | null
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | null
    contacts: ContactsType | null
    photos: PhotosType | null
}

export type ContactsType = {
    facebook: string | undefined,
    github: string | undefined,
    instagram: string | undefined,
    mainLink: string | undefined,
    twitter: string | undefined,
    vk: string | undefined,
    website: string | undefined,
    youtube: string | undefined,
}

export type usersType = {
    name: string,
    id: number,
    photos: PhotosType,
    status: string | null,
    followed: boolean
}

export type PostType = {
    id: number,
    text: string
}

export type MassageType = {
    massages: string,
}

export type FriendsType = {
    name: string,
    age: number,
    city: string,
    sex: string,
}

export type newNews = {
    id: string,
    text: string,
}

export type DialogsType = {
    id: number,
    name: string
}

export type validatorsType = (value: string) => string | undefined