import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LinkCard from "./LinkCard";
import EditLinkForm from "./EditLinkForm";

function LinksView({
  showLinkEdit,
  setShowLinkEdit,
  links,
  editClicked,
  onLinkDelete,
  onEditLinkSubmit,
  starFilterOn,
  tagsClicked
}) {

    // const [linkStarred, setLinkStarred] = useState(is_starred); 
    const [linkId, setLinkId] = useState(null);
    const selectedLink = links?.find((link) => link.id === linkId); 

  const starredLinks = links?.filter((link) => {
    if (link?.is_starred === true) {
      return link;
    } else {
      return null;
    }
  });


  const linkCards = links?.map((link) => {
    return (
      <LinkCard
        key={link.id}
        setLinkId={setLinkId}
        showLinkEdit={showLinkEdit}
        setShowLinkEdit={setShowLinkEdit}
        {...link}
        editClicked={editClicked}
        onLinkDelete={onLinkDelete}
        tagsClicked={tagsClicked}
      />
    );
  });

  const starredLinkCards = starredLinks?.map((link) => {
    return (
      <LinkCard
        key={link.id}
        setLinkId={setLinkId}
        showLinkEdit={showLinkEdit}
        setShowLinkEdit={setShowLinkEdit}
        {...link}
        editClicked={editClicked}
        onLinkDelete={onLinkDelete}
        tagsClicked={tagsClicked}
      />
    );
  });

  return (
    <>
      {showLinkEdit && (
        <div className="flex flex-row justify-center">
        <EditLinkForm onEditLinkSubmit={onEditLinkSubmit} link={selectedLink} />
        </div>
      )}
      <div className="flex flex-row flex-wrap justify-start ml-3 gap-3">
        {starFilterOn === true ? starredLinkCards : linkCards}
        {/* {linkCards} */}
      </div>
    </>
  );
}

export default LinksView;
