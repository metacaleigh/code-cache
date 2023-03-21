import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import LinkCard from './LinkCard';
import EditLinkForm from './EditLinkForm';

function LinksView({ showLinkEdit, setShowLinkEdit, links, editClicked, onLinkDelete, onEditLinkSubmit, starFilterOn }){

    const starredLinks = links?.filter((link) => {
        if (link.is_starred === true) {
            return link
        } else {
            return null
        }
    })

    // console.log(starredLinks)

    const [linkId, setLinkId] = useState(null)
    const selectedLink = links?.find(link => link.id === linkId)

    const linkCards = links?.map((link) => {
        return (
            <LinkCard key={link.id} setLinkId={setLinkId} showLinkEdit={showLinkEdit} setShowLinkEdit={setShowLinkEdit} {...link} editClicked={editClicked} onLinkDelete={onLinkDelete}/>
        )
    })

    const starredLinkCards = starredLinks?.map((link) => {
        return (
            <LinkCard key={link.id} setLinkId={setLinkId} showLinkEdit={showLinkEdit} setShowLinkEdit={setShowLinkEdit} {...link} editClicked={editClicked} onLinkDelete={onLinkDelete}/>
        )
    })

    return(
        <>
            { showLinkEdit && 
                <EditLinkForm onEditLinkSubmit={onEditLinkSubmit} link={selectedLink}/>
            }
            <div className="flex flex-row flex-wrap justify-start ml-3 gap-3">
                {starFilterOn === true ? starredLinkCards : linkCards}
            </div>
        </>
    )
}

export default LinksView;