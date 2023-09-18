import React from "react";

const NoContentAvailable: React.FC = () => {
    return (
        <div className="col-lg-12 col-md-12 text-center">
            <img src="assets/images/404.svg" className="img-fluid" alt=""/>
            <p className="text-muted para-desc mx-auto">No content available</p>
        </div>)
}

export default NoContentAvailable