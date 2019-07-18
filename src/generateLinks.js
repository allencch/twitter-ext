(() => {
  function getName(src) {
    const splitted = src.split('/');
    return splitted[splitted.length - 1];
  }

  function createLink(src) {
    const elem = document.createElement('div');
    elem.setAttribute('class', 'my-link');
    const largeSrc = src.replace(/name=[^&]+/, 'name=large');
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

    const imgs = document.querySelectorAll('.css-1dbjc4n.r-19i43ro .css-1dbjc4n.r-1adg3ll img');
    imgs.forEach(img => {
      const closest = img.closest('.css-1dbjc4n.r-1iusvr4.r-46vdb2.r-5f2r5o.r-bcqeeo');
      const elem = createLink(img.src);
      closest.appendChild(elem);
    });
  }

  generateLinks();
})();
