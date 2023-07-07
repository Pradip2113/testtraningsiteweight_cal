// // Copyright (c) 2023, Abhishek Chougule and contributors
// // For license information, please see license.txt

// frappe.ui.form.on('Weight Bridge', {
// 	onload: function (frm) {
// 		frm.call({
// 			method:'get_bridge_info',
// 			doc: frm.doc,
// 		});
// 	}
// })
frappe.ui.form.on('Weight Bridge', {
	onload: function (frm) {
		frm.call({
			method:'get_bridge_info',
			doc: frm.doc,
		});  
	}
})

frappe.ui.form.on('Weight Bridge', {
	get_empty_weight(frm) {
		frm.call({
			method:'get_empty_weight',
			doc: frm.doc,
		});
	    
	}
})

frappe.ui.form.on('Weight Bridge', {
	get_loaded_weight(frm) {
		frm.call({
			method:'get_loaded_weight',
			doc: frm.doc,
		}); 
	}
})
frappe.ui.form.on('Weight Bridge', {
	get_empty_weight(frm) {
		frm.call({
			method:'get_actual_weight',
			doc: frm.doc,
		}); 
	}
})
frappe.ui.form.on('Weight Bridge', {
	get_empty_weight(frm) {
		frm.call({
			method:'get_qty',
			doc: frm.doc,
		}); 
	}
})

frappe.ui.form.on('Weight Bridge', {
	get_loaded_weight(frm) {
		frm.call({
			method:'get_actual_weight',
			doc: frm.doc,
		});  
	}
})
frappe.ui.form.on('Weight Bridge', {
	get_loaded_weight(frm) {
		frm.call({
			method:'get_qty',
			doc: frm.doc,
		});  
	}
})


frappe.ui.form.on('Delivery Note Item', {
	item_code: function (frm,cdt,cdn) {
		frm.call({
			method:'get_qty',
			doc: frm.doc,
		});
	}
})

frappe.ui.form.on('Delivery Note Item', {
	rate: function (frm) {
		frm.call({
			method:'setamt',
			doc: frm.doc,
		});
	}
})