// Copyright (c) 2020, Shahzad Naser and contributors
// For license information, please see license.txt

frappe.ui.form.on('Items Package', {
	refresh(frm) {
		console.log("Items Package")
	}
});

frappe.ui.form.on('Items', {
	item_code: function(doc,cdt,cdn){
		if(locals[cdt][cdn].item_code){
			frappe.db.get_value("Item Price",
			{
				"buying":1,
				"item_code":locals[cdt][cdn].item_code
			},
			"price_list_rate"
			).then(r => {
				console.log(r);
				if("message" in r){
					frappe.model.set_value(cdt, cdn, "rate", r.message.price_list_rate);
				}
			});
		}
	}
});