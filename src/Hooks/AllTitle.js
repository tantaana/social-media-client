import React, { useEffect } from 'react';

const AllTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - DocMike`;
    }, [title])
};

export default AllTitle;