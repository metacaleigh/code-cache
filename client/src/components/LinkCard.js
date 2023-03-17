import React from "react";

function LinkCard({ link_name, link_url, description }) {
    return (
    <div className="card w-96 bg-neutral shadow-xl mb-8">
    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title">
        {link_name}
        <div className="badge badge-secondary">Link</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
        <div className="badge badge-outline">Fashion</div> 
        <div className="badge badge-outline">Products</div>
        </div>
    </div>
    </div>
    )
}

export default LinkCard;