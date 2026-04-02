export interface CategoriesContract {
  id: unknown;
  company_id: unknown;
  is_synced: unknown;
  is_deleted: unknown;
  created_at: unknown;
  last_updated_at: unknown;
  name: unknown;
  description: unknown;
  type: unknown;
  is_custom: unknown;
}

export interface GodownsContract {
  id: unknown;
  company_id: unknown;
  is_synced: unknown;
  is_deleted: unknown;
  created_at: unknown;
  last_updated_at: unknown;
  name: unknown;
  address: unknown;
  type: unknown;
  phone: unknown;
  email: unknown;
  gstin: unknown;
  pincode: unknown;
  is_main_godown: unknown;
}

export interface ItemBatchesContract {
  id: unknown;
  company_id: unknown;
  is_synced: unknown;
  is_deleted: unknown;
  created_at: unknown;
  last_updated_at: unknown;
  item_id: unknown;
  batch_number: unknown;
  expiry_date: unknown;
  mfg_date: unknown;
  purchase_price: unknown;
  selling_price: unknown;
  mrp: unknown;
  current_stock: unknown;
  model_no: unknown;
  size: unknown;
}

export interface StockLedgerContract {
  id: unknown;
  company_id: unknown;
  is_synced: unknown;
  is_deleted: unknown;
  created_at: unknown;
  last_updated_at: unknown;
  item_id: unknown;
  batch_id: unknown;
  godown_id: unknown;
  qty_in: unknown;
  qty_out: unknown;
  transaction_type: unknown;
  reference_id: unknown;
  serial_id: unknown;
}
