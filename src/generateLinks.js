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

    const imgs = document.querySelectorAll('.css-1dbjc4n.r-18u37iz.r-thb0q2 .r-psjefw .css-1dbjc4n img');

    imgs.forEach(img => {
      const closest = img.closest('.css-1dbjc4n.r-1iusvr4');
      const elem = createLink(img.src);
      closest.appendChild(elem);
    });
  }

  generateLinks();
})();
