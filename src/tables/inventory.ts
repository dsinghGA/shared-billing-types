export interface CategoriesContract {
  id: unknown;
  company_id: unknown;
  is_synced: unknown;
  is_deleted: unknown;
  last_updated_at: unknown;
  name: unknown;
  description: unknown;
}

export interface GodownsContract {
  id: unknown;
  company_id: unknown;
  is_synced: unknown;
  is_deleted: unknown;
  last_updated_at: unknown;
  name: unknown;
  address: unknown;
}

export interface ItemBatchesContract {
  id: unknown;
  company_id: unknown;
  is_synced: unknown;
  is_deleted: unknown;
  last_updated_at: unknown;
  item_id: unknown;
  batch_number: unknown;
  expiry_date: unknown;
  mfg_date: unknown;
  purchase_price: unknown;
  selling_price: unknown;
  mrp: unknown;
  current_stock: unknown;
}

export interface StockLedgerContract {
  id: unknown;
  company_id: unknown;
  is_synced: unknown;
  is_deleted: unknown;
  last_updated_at: unknown;
  item_id: unknown;
  batch_id: unknown;
  godown_id: unknown;
  qty_in: unknown;
  qty_out: unknown;
  transaction_type: unknown;
  reference_id: unknown;
}
