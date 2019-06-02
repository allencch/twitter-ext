var browser = browser || chrome;

const generateLinks = (tab) => {
  browser.tabs.executeScript(tab.id, {
    file: 'generateLinks.js'
  });
};

browser.contextMenus.create({
  id: 'twitter-generate-links',
  title: 'Generate Links',
  contexts: ['all']
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case 'twitter-generate-links':
      generateLinks(tab);
      break;
  }
});

browser.runtime.onMessage.addListener(request => {
  switch (request.cmd) {
      // Do anything
  }
});
