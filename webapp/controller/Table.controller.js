sap.ui.controller("dynamictable.main", {
 
	onInit: function() {
 
		var oData = [{
			col0: "col0",
			col1: "col1",
			col2: "col2",
			col3: "col3"
		},
		{
			col0: "col0",
			col1: "col1",
			col2: "col2",
			col3: "col3"
		}];
		
		sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel({data: oData}), 'oTableModel');
	
	},
 
	getSelectedColIndex: function(oEvent) {
		var oSelectedColumn = oEvent.getSource().getCustomData()[0].getValue();
		sap.m.MessageToast.show("Selected Column Is " + oSelectedColumn);
	}
 
});