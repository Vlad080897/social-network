import { Field, Form, Formik } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPage, getFilter } from '../../../redux/selectors';
import { getUsers } from '../../../redux/userPageReducer2';


const UserSearchForm: React.FC = React.memo(() => {

    const filter = useSelector(getFilter)
    const dispatch = useDispatch();

    const submit = (values: userSearchFormValuesType) => {
        let choosenFriends = values.friendsType === 'null' ? null : values.friendsType === 'true' ? true : false
        dispatch(getUsers(1, values.term, choosenFriends))
    }

    return (
        <Formik
            enableReinitialize
            initialValues={{ term: filter.term, friendsType: String(filter.choosenFriends) }}
            onSubmit={submit}
        >
            {() => (
                <Form>
                    <Field type="text" name="term" placeholder="Search friends" />
                    <Field as="select" name="friendsType">
                        <option value="null">All friends</option>
                        <option value="true">My friends</option>
                        <option value="false">Not my friends</option>
                    </Field>
                    <button type="submit" >
                        Find your friends
                    </button>
                </Form>
            )}
        </Formik>
    )
})


export default UserSearchForm

type userSearchFormValuesType = {
    term: string
    friendsType: string
}