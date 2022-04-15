import React from "react";
import Loader from "../components/app/loader/loader";

function withSuspense<T>(Component: React.ComponentType<T>) {
    return (props: T) => {
        return (
            <React.Suspense fallback={<Loader isLoading={true} />}>
                <Component {...props} />
            </React.Suspense>
        )
    }
}

export default withSuspense