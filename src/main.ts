chrome.action.onClicked.addListener((tab) => {
	if (!tab.id) return;
	closeLeftTabs(tab.index);
});

const closeLeftTabs = (currentTabIndex: number) => {
	chrome.tabs.query(
		{
			currentWindow: true,
			pinned: false,
		},
		(tabs) => {
			for (const tab of tabs) {
				if (!tab.id) continue;
				if (tab.index < currentTabIndex) {
					chrome.tabs.remove(tab.id);
				}
			}
		},
	);
};
