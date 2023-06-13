function onEmptyLinksClick(evt) {
  evt.preventDefault();
};

const undoDefaultActions = () => {
  const emptyLinks = document.querySelectorAll('a[href="#"]');

  if (emptyLinks) {
    emptyLinks.forEach(link => link.addEventListener('click', onEmptyLinksClick));
  }
}

export { undoDefaultActions };
