import React, { useState } from 'react';
import SnippetCard from './SnippetCard';
import EditSnippetForm from './EditSnippetForm';

function SnippetsView({ showSnippetEdit, setShowSnippetEdit, snippets, editClicked, onEditSnippetSubmit, onSnippetDelete }){

    const [snippetId, setSnippetId] = useState(null)
    const selectedSnippet = snippets?.find(snippet => snippet.id === snippetId)

    const snippetCards = snippets?.map((snippet) => {
        return <SnippetCard key={snippet.id} {...snippet} editClicked={editClicked} 
        setSnippetId={setSnippetId} showSnippetEdit={showSnippetEdit} setShowSnippetEdit={setShowSnippetEdit} onSnippetDelete={onSnippetDelete}/>
    })

    return(
        <>
        {showSnippetEdit &&
        <EditSnippetForm snippet={selectedSnippet} onEditSnippetSubmit={onEditSnippetSubmit}/>
        }
            <div className="flex flex-row flex-wrap justify-start mx-5 gap-5">
                {snippetCards}
            </div>
        </>
    )
}

export default SnippetsView;