import React from 'react';

const DeleteReview = ({ handleDelete, review }) => {
    return (
        <div className='w-full'>

            <label htmlFor="delete-modal" className="btn btn-error btn-xs">Delete Review</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <h3 className="text-lg font-bold">Are you sure you want to delete this item?</h3>
                    <p className="py-4">It cannot be undone !</p>
                    <div className='flex gap-2 justify-end'>
                        <button htmlFor="delete-modal" className='btn btn-error' onClick={() => handleDelete(review._id)}>Delete</button>
                        <label htmlFor="delete-modal" className="btn btn-success">Cancel</label>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DeleteReview;