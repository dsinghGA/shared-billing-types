export interface InvoicesContract {
  id: unknown;
  company_id: unknown;
  is_synced: unknown;
  is_deleted: unknown;
  created_at: unknown;
  last_updated_at: unknown;
  invoice_number: unknown;
  party_id: unknown;
  date: unknown;
  device_id: unknown;
  sale_type: unknown;
  invoice_prefix: unknown;
  subtotal: unknown;
  balance_due: unknown;
  is_fully_paid: unknown;
  total_taxable: unknown;
  total_cgst: unknown;
  total_sgst: unknown;
  total_igst: unknown;
  total_amount: unknown;
  discount: unknown;
  round_off: unknown;
  payment_status: unknown;
  payment_mode: unknown;
  transaction_type_id: unknown;
  transaction_tax_percent: unknown;
}

export interface InvoiceItemsContract {
  id: unknown;
  company_id: unknown;
  is_synced: unknown;
  is_deleted: unknown;
  created_at: unknown;
  last_updated_at: unknown;
  invoice_id: unknown;
  item_id: unknown;
  batch_id: unknown;
  quantity: unknown;
  unit_price: unknown;
  cgst_rate: unknown;
  cgst_amount: unknown;
  sgst_rate: unknown;
  sgst_amount: unknown;
  igst_rate: unknown;
  igst_amount: unknown;
  total: unknown;
  free_qty: unknown;
  discount_percent: unknown;
  discount_amount: unknown;
  final_taxable_value: unknown;
}

export interface InvoiceAdditionalChargesContract {
  id: unknown;
  company_id: unknown;
  is_synced: unknown;
  is_deleted: unknown;
  created_at: unknown;
  last_updated_at: unknown;
  invoice_id: unknown;
  name: unknown;
  amount: unknown;
  tax_rate: unknown;
  tax_amount: unknown;
  enable_tax: unknown;
}

export interface InvoicePaymentsContract {
  id: unknown;
  company_id: unknown;
  is_synced: unknown;
  is_deleted: unknown;
  created_at: unknown;
  last_updated_at: unknown;
  invoice_id: unknown;
  amount: unknown;
  mode: unknown;
  received_at: unknown;
}

export interface InvoicePrefixesContract {
  id: unknown;
  company_id: unknown;
  is_synced: unknown;
  is_deleted: unknown;
  created_at: unknown;
  last_updated_at: unknown;
  type: unknown;
  prefix: unknown;
  current_number: unknown;
}
