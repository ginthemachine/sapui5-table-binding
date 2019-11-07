sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/ColumnListItem",
	"sap/m/StandardListItem",
	"sap/m/ObjectIdentifier",
	"sap/m/Text",
	"sap/m/Image"
], function (Controller, ColumnListItem, StandardListItem, ObjectIdentifier, Text, Image) {
	"use strict";

	return Controller.extend("com.test.tablebinding.controller.Home", {
		onInit: function () {

		},

		albumListFactory: function (sId, oContext) {
			var oUIControl;

			// Decide based on the data which fragment to show
			if (oContext.getProperty("status") === "active") {
				var oItem = new ColumnListItem({
					highlight: "Success",
					cells: [
						new ObjectIdentifier({
							title: {
								path: "albums>id"
							}
						}),
						new Text({
							text: {
								path: "albums>title"
							}
						}),
						new Image({
							src: {
								path: "albums>thumbnailUrl"
							}
						})
					]
				});

				oUIControl = oItem;
			} else {
				var oItem2 = new ColumnListItem({
					highlight: "Error",
					cells: [
						new Image({
							src: {
								path: "albums>thumbnailUrl"
							}
						}),
						new ObjectIdentifier({
							title: {
								path: "albums>id"
							}
						}),
						new Text({
							text: {
								path: "albums>title"
							}
						})
					]
				});

				oUIControl = oItem2;
			}

			return oUIControl;
		}
	});
});