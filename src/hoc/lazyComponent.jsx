import React from "react";
import Loader from "../components/app/loader/loader";

const withSuspense = (Component) => {
    return (props) => {
        return (
            <React.Suspense fallback={<Loader isLoading={true} />}>
                <Component {...props} />
            </React.Suspense>
        )
    }
}

export default withSuspense