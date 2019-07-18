sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("TileWorkCenterCalendar.TileWorkCenterCalendar.controller.TileWorkCenterCalendarView1", {
		onInit: function () {
			history.back();
			window.open("https://workcentercalendar-m9a44f3468.dispatcher.hana.ondemand.com", '_blank');
		}
	});
});