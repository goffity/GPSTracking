function ApplicationTabGroup(Window) {
	//create module instance
	var self = Ti.UI.createTabGroup();
	var displayMap = require('ui/map/map_display');

	//create app tabs
	var homeWindow = new Window(L('home'));
	var mapWindow = new displayMap(L('Map'));
	var settingWindow = new Window(L('settings'));

	var homeTab = Ti.UI.createTab({
		title : L('home'),
		icon : '/images/KS_nav_ui.png',
		window : homeWindow
	});
	homeWindow.containingTab = homeTab;
	self.addTab(homeTab);

	var mapTab = Ti.UI.createTab({
		title : L('Map'),
		icon : '/images/KS_nav_views.png',
		window : mapWindow
	});
	mapWindow.containingTab = mapTab;
	self.addTab(mapTab);

	var settingTab = Ti.UI.createTab({
		title : L('settings'),
		icon : '/images/KS_nav_views.png',
		window : settingWindow
	});
	settingWindow.containingTab = settingTab;
	self.addTab(settingTab);

	return self;
};

module.exports = ApplicationTabGroup;
