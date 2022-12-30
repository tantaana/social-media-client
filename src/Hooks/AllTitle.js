import React, { useEffect } from 'react';

const AllTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - SocioME`;
    }, [title])
};

export default AllTitle;