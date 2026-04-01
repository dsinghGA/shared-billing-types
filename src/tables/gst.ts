export interface GstCategoriesContract {
  id: unknown;
  is_synced: unknown;
  is_deleted: unknown;
  last_updated_at: unknown;
  name: unknown;
  description: unknown;
}

export interface GstRatesContract {
  id: unknown;
  is_synced: unknown;
  is_deleted: unknown;
  last_updated_at: unknown;
  rate: unknown;
  cgst: unknown;
  sgst: unknown;
  igst: unknown;
  category_id: unknown;
}

export interface GstHsnSacContract {
  id: unknown;
  is_synced: unknown;
  is_deleted: unknown;
  last_updated_at: unknown;
  code: unknown;
  description: unknown;
  category_id: unknown;
  gst_rate_id: unknown;
}
