import React from 'react'
import ContentLoader from 'react-content-loader'

function Loader() {
    return (
        <ContentLoader 
            speed={2}
            width={315}
            height={480}
            viewBox="0 0 315 480"
            backgroundColor="#e7e4e4"
            foregroundColor="#ecebeb">
            <rect x="10" y="10" rx="15" ry="15" width="293" height="190" /> 
            <rect x="10" y="212" rx="7" ry="7" width="293" height="71" /> 
            <rect x="10" y="295" rx="20" ry="20" width="293" height="50" /> 
            <rect x="10" y="363" rx="8" ry="8" width="75" height="27" /> 
            <rect x="180" y="353" rx="8" ry="8" width="120" height="46" />
        </ContentLoader>
    )
}

export default Loader
