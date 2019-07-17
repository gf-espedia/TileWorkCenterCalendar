/*global QUnit*/

sap.ui.define([
	"TileWorkCenterCalendar/TileWorkCenterCalendar/controller/TileWorkCenterCalendarView1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("TileWorkCenterCalendarView1 Controller");

	QUnit.test("I should test the TileWorkCenterCalendarView1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});