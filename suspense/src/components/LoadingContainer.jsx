import React from 'react'
import PuffLoader from "react-spinners/PuffLoader";

const LoadingContainer = () => {
    return (
        <div style=
            {{ 
                width:"100vw", 
                height:"100vh", 
                display:"flex", 
                flexFlow:"row", 
                justifyContent:"center", 
                alignItems:"center",
            }}>
            <PuffLoader />
        </div>
    )
}

export default LoadingContainer
