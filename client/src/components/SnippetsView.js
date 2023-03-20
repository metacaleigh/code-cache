import React from 'react';
import SnippetCard from './SnippetCard';

function SnippetsView({ snippets }){

    const snippetCards = snippets?.map((snippet) => {
        return <SnippetCard key={snippet.id} {...snippet} />
    })

    return(
        <>
            <div className="flex flex-row flex-wrap justify-around">
                {snippetCards}
            </div>
        </>
    )
}

export default SnippetsView;