sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	'jquery.sap.global'
], function(Controller, JSONModel, MessageToast, jQuery) {
	"use strict";

	return Controller.extend("Demo.controller.Main", {

		handleLinkPress: function() {
			MessageToast.show("Linked pressed");
		},

		press: function(evt) {
			MessageToast.show("The GenericTile is pressed.");
		},

		onBeforeRendering: function() {
			var omodel = new JSONModel();
			omodel.setData({
				searchs: ""
			});
			this.getView().setModel(new JSONModel(), "jss");
			//this.getView().getModel("jss").setProperty("/searchs","");	
		},

		onSearch: function() {
			//	MessageToast.show("Searched value is"+evt);
			var item = this.getView().getModel("jss").getProperty("/name");
			//this.getView().byId("searchID").getValue();
			//evt.getValue();
			if (item) {
				MessageToast.show("search for: " + item);
			} else {
				MessageToast.show("search else for: " + item);
			}
		},

		onInit: function(evt) {
			// set mock model
			//	var sPath = jQuery.sap.getModulePath("Demo", "/data.json");
			var oModel = new JSONModel("data.json");
			this.getView().setModel(oModel);
		},

		handleEditPress: function(evt) {
			var oTileContainer = this.getView().byId("container");
			var newValue = !oTileContainer.getEditable();
			oTileContainer.setEditable(newValue);
			evt.getSource().setText(newValue ? "Done" : "Edit");
		},

		handleBusyPress: function(evt) {
			var oTileContainer = this.getView().byId("container");
			var newValue = !oTileContainer.getBusy();
			oTileContainer.setBusy(newValue);
			evt.getSource().setText(newValue ? "Done" : "Busy state");
		},

		handleTileDelete: function(evt) {
			var tile = evt.getParameter("tile");
			evt.getSource().removeTile(tile);
		},
		handlePress: function() {
			this.dialog = sap.ui.xmlfragment("Demo.fragments.dialog", this);
			this.dialog.open();
		},

		closeDialog: function() {
			this.dialog.close();
		},
		onStatusOkClick : function(oEvent) {    	
       sap.m.MessageToast.show("OK Clicked");
    }

	});
});