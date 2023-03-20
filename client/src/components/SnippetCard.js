import React from 'react';

function SnippetCard({ snippet_name, description, snippet }) {
    return(
        <>
        <div className="mockup-code bg-gray-900 text-primary-content">
            <div className="text font-medium text-base-300 title-font text-center mb-5">{snippet_name}</div>
            <pre><code>{snippet}</code></pre>
        </div>
        </>
    )
}

export default SnippetCard;