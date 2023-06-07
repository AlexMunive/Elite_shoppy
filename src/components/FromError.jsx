import React from "react";

const FromError = ({ error }) => {
    return (
        <>
            {error && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    <span className="font-medium">Oops!</span> {error.message}
                </p>
            )}
        </>
    );
};

export default FromError;
