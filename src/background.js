var browser = browser || chrome;

const generateLinks = (tab) => {
  browser.tabs.executeScript(tab.id, {
    file: 'generateLinks.js'
  });
};

const clickViews = tab => {
  browser.tabs.executeScript(tab.id, {
    file: 'clickViews.js'
  });
};

browser.contextMenus.create({
  id: 'twitter-generate-links',
  title: 'Generate Links',
  contexts: ['all']
});

browser.contextMenus.create({
  id: 'twitter-click-views',
  title: 'Click Views',
  contexts: ['all']
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case 'twitter-generate-links':
      generateLinks(tab);
      break;
    case 'twitter-click-views':
      clickViews(tab);
      break;
  }
});

browser.runtime.onMessage.addListener(request => {
  switch (request.cmd) {
      // Do anything
  }
});
