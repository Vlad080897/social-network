import { PhotosType, profileType } from "../types/types";
import { instance } from "./api";

type ResponseType<D = {}> = {
    data: D,
    fieldsErrors: Array<string>,
    messages: Array<string>,
    resultCode: number
}

type Photos = {
    photos: PhotosType
}

export const profileAPI = {
    getStatus(userId: number | null) {
        return instance.get<string>(`/profile/status/${userId}`).then((response) => response.data);
    },
    setStatus(statusText: string) {
        return instance.put
            <ResponseType>
            (`/profile/status`, { status: statusText }).then((response) => response.data)
    },
    setProfilePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append('photoFile', photoFile)
        return instance.put
            <ResponseType<Photos>>
            ('/profile/photo', formData, {
                headers: {
                    "Content-type": "multipart/form-data"
                }
            }).then((response) => response.data)
    },
    saveProfileInfo(profile: profileType) {
        return instance.put
            <ResponseType>
            ('/profile', profile).then((response) => response.data)
    }
}