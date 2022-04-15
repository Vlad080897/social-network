import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router";
import { getCurrentUserProfile, getStatus } from "../../../redux/profilePageReducer2";
import { getIdOfCurrentUser, getIsLogged } from "../../../redux/selectors";
import Context2 from "./context2";


export const ContextContainer: React.FC = React.memo(() => {

    let { userID } = useParams<ParamsType>()
    const idOfCurrentUser = useSelector(getIdOfCurrentUser)
    
    const dispatch = useDispatch()




    useEffect(() => {
        let userId: number | null

        if (userID) {
            userId = +userID
        } else {
            userId = idOfCurrentUser
        }

        dispatch(getCurrentUserProfile(userId))
        dispatch(getStatus(userId))
    }, [userID])



    return (
        <Context2
            isOwner={!userID}
            userId={userID === undefined ? undefined : +userID}
        />

    )

})

type ParamsType = {
    userID?: string
}




// Previous realization with using Class Component and connect 



// class ContextContainer2 extends React.Component<PropsType> {
//     setNewPhoto = (photo: File): void => {
//         this.props.setNewPhoto(photo);

//     }

//     refreshProfile() {
//         let userID
//         if (this.props.match.params.userID) {
//             userID = +this.props.match.params.userID
//         } else {
//             userID = this.props.idOfCurrentUser;
//         }
//         this.props.getCurrentUserProfile(userID);
//         this.props.getStatus(userID)
//     }

//     componentDidMount() {
//         this.refreshProfile()
//     }

//     componentDidUpdate(preProps: PropsType) {
//         if (preProps.match.params.userID !== this.props.match.params.userID) {
//             this.refreshProfile()
//         }

//     }

//     shouldComponentUpdate(nextProps: PropsType) {
//         if (this.props !== nextProps) {
//             return true
//         }
//         return false
//     }
//     render() {
//         return <Context2
//             profile={this.props.profile}
//             isOwner={!this.props.match.params.userID}
//             setNewPhoto={this.setNewPhoto}
//             userId={this.props.match.params.userID === undefined ? undefined : +this.props.match.params.userID}
//         />
//     }
// }

// const mapStateToProps = (state: AppStateType) => {
//     return {
//         profile: getProfilePageInfo(state),
//         idOfCurrentUser: getIdOfCurrentUser(state)
//     }
// }

// export default compose<ComponentType>(
//     connect<mapStatePropsType, mapDispatchPropsType, ownProps, AppStateType>(mapStateToProps, { getCurrentUserProfile, getStatus, setNewPhoto }),
//     withRouter,
//     withAuthRedirect2,
// )(ContextContainer2)

// type mapStatePropsType = {
//     profile: profileType | null
//     idOfCurrentUser: number | null
// }

// type mapDispatchPropsType = {
//     getCurrentUserProfile: (userId: number | null) => void
//     getStatus: (userId: number | null) => void
//     setNewPhoto: (photo: File) => void
// }

// type ownProps = {

// }

// type PropsType = mapStatePropsType & mapDispatchPropsType & ownProps & RouteComponentProps<ParamsType>

