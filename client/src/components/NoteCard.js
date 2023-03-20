import React from 'react';

function NoteCard({ note_name, note }) {
    return(
        <>
        <div className="card w-96 bg-base-200 shadow-xl">
        {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
        <div className="card-body">
            <h2 className="card-title">
            {note_name}
            <div className="badge badge-warning">Note</div>
            </h2>
            <p>{note}</p>
            <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div> 
            <div className="badge badge-outline">Products</div>
            </div>
        </div>
        </div>
        </>
    )
}

export default NoteCard;