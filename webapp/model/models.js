sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

		createTableModel: function () {
			var oData = {
				"columns": [{
					"label": "Albumd ID"
				}, {
					"label": "Album Title"
				}, {
					"label": "Cover"
				}],
				"rows": [{
					"albumId": 1,
					"id": 1,
					"title": "accusamus beatae ad facilis cum similique qui sunt",
					"thumbnailUrl": "https://via.placeholder.com/150/92c952",
					"status": "active"
				}, {
					"albumId": 1,
					"id": 2,
					"title": "reprehenderit est deserunt velit ipsam",
					"thumbnailUrl": "https://via.placeholder.com/150/771796",
					"status": "active"
				}, {
					"albumId": 1,
					"id": 3,
					"title": "officia porro iure quia iusto qui ipsa ut modi",
					"thumbnailUrl": "https://via.placeholder.com/150/24f355",
					"status": "inactive"
				}, {
					"albumId": 1,
					"id": 4,
					"title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
					"thumbnailUrl": "https://via.placeholder.com/150/d32776",
					"status": "inactive"
				}, {
					"albumId": 1,
					"id": 5,
					"title": "natus nisi omnis corporis facere molestiae rerum in",
					"thumbnailUrl": "https://via.placeholder.com/150/f66b97",
					"status": "active"
				}]
			};
			var oModel = new JSONModel(oData);
			return oModel;
		}

	};
});