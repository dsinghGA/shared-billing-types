export interface GstCategoriesContract {
  id: unknown;
  is_synced: unknown;
  is_deleted: unknown;
  created_at: unknown;
  last_updated_at: unknown;
  name: unknown;
  description: unknown;
  is_active: unknown;
  updated_at: unknown;
}

export interface GstRatesContract {
  id: unknown;
  is_synced: unknown;
  is_deleted: unknown;
  created_at: unknown;
  last_updated_at: unknown;
  name: unknown;
  rate: unknown;
  cgst: unknown;
  sgst: unknown;
  igst: unknown;
  category_id: unknown;
  is_active: unknown;
  is_custom: unknown;
  updated_at: unknown;
}

export interface GstHsnSacContract {
  id: unknown;
  is_synced: unknown;
  is_deleted: unknown;
  created_at: unknown;
  last_updated_at: unknown;
  code: unknown;
  description: unknown;
  category_id: unknown;
  gst_rate_id: unknown;
  is_active: unknown;
  updated_at: unknown;
}
