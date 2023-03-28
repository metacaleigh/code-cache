import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LinkCard from "./LinkCard";
import EditLinkForm from "./EditLinkForm";
import NewLinkForm from "./NewLinkForm";

function LinksView({
  showLinkEdit,
  setShowLinkEdit,
  links,
  editClicked,
  onLinkDelete,
  onEditLinkSubmit,
  starFilterOn,
  tagsClicked,
  showAddLink,
  setShowAddLink,
  onResourceCreation,
  folderId,
  onLinkFormSubmit,
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
          <EditLinkForm
            onEditLinkSubmit={onEditLinkSubmit}
            link={selectedLink}
            onLinkDelete={onLinkDelete}
            linkId={linkId}
            showLinkEdit={showLinkEdit}
            setShowLinkEdit={setShowLinkEdit}
          />
        </div>
      )}
      {showAddLink && (
        <div className="flex flex-row justify-center">
          <NewLinkForm
            folderId={folderId}
            onResourceCreation={onResourceCreation}
            onLinkFormSubmit={onLinkFormSubmit}
            setShowAddLink={setShowAddLink}
            showAddLink={showAddLink}
          />
        </div>
      )}
      <div className="flex flex-row flex-wrap justify-center gap-x-3">
        {starFilterOn === true ? starredLinkCards : linkCards}
        {/* {linkCards} */}
      </div>
    </>
  );
}

export default LinksView;
