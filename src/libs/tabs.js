const storageKey = `tabs`;

export const tabs = {
  getCurrent: chrome.tabs.getCurrent,
  create: chrome.tabs.create,
  query (opt = {}) {
    return new Promise((resolve) => {
      chrome.tabs.query(opt, function (results) {
        resolve(results);
      })
    })
  },
  getAll () {
    return this.query({});
  },
  getCurWindow () {
    return this.query({currentWindow: true})
  }
};