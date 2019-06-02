(() => {
  function getName(src) {
    const splitted = src.split('/');
    return splitted[splitted.length - 1];
  }

  function createLink(src) {
    const elem = document.createElement('div');
    elem.setAttribute('class', 'my-link');
    const largeSrc = src + ':large';
    const name = getName(src);
    elem.innerHTML = `<a href="${largeSrc}">${name}</a>`;
    return elem;
  }

  function clearAll() {
    const elems = document.querySelectorAll('.my-link');
    elems.forEach(elem => {
      elem.parentNode.removeChild(elem);
    });
  }

  function generateLinks() {
    clearAll();

    const imgs = document.querySelectorAll('.AdaptiveMedia-photoContainer img');
    imgs.forEach(img => {
      const closest = img.closest('.content');
      const elem = createLink(img.src);
      closest.appendChild(elem);
    });
  }

  generateLinks();
})();
