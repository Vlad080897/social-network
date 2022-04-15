import React from "react";

const User: React.FC<{ name: string, id: number }> = ({ name }) => {
    return (
        < div >
            {name}
        </div >
    )

}

export default User