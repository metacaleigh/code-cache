import React from 'react';
import { useParams } from 'react-router-dom';
import LinkCard from './LinkCard';

function LinksView({ links, editClicked, onLinkDelete }){

    const linkCards = links?.map((link) => {
        return (
            <LinkCard key={link.id} {...link} editClicked={editClicked} onLinkDelete={onLinkDelete}/>
        )
    })

    return(
        <>
            <div className="flex flex-row flex-wrap justify-around">
                {linkCards}
            </div>
        </>
    )
}

export default LinksView;