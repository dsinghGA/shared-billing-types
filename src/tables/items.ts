export interface ItemsContract {
  id: unknown;
  company_id: unknown;
  is_synced: unknown;
  is_deleted: unknown;
  last_updated_at: unknown;
  name: unknown;
  sku: unknown;
  barcode: unknown;
  hsn_code: unknown;
  unit_id: unknown;
  category_id: unknown;
  type: unknown;
  item_code: unknown;
  hsn_id: unknown;
  track_batch: unknown;
  track_serial: unknown;
  low_stock_limit: unknown;
}

export interface ItemPricesContract {
  id: unknown;
  item_id: unknown;
  price_type: unknown;
  price: unknown;
  min_qty: unknown;
}

export interface ItemCustomFieldsContract {
  id: unknown;
  company_id: unknown;
  name: unknown;
  field_type: unknown;
  show_in_print: unknown;
}

export interface ItemCustomFieldValuesContract {
  id: unknown;
  item_id: unknown;
  field_id: unknown;
  value_text: unknown;
  value_number: unknown;
  value_date: unknown;
}
