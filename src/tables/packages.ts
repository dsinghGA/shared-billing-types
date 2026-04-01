export interface PackagesContract {
  id: unknown;
  is_synced: unknown;
  is_deleted: unknown;
  last_updated_at: unknown;
  name: unknown;
  type: unknown;
  is_paid: unknown;
  is_private: unknown;
  is_recommended: unknown;
  max_allowed_companies: unknown;
  max_allowed_firms: unknown;
  validity_months: unknown;
  generate_eway_bills: unknown;
  restore_deleted_transactions: unknown;
  currency: unknown;
  hsn_id: unknown;
  price: unknown;
  position_no: unknown;
  description: unknown;
  is_active: unknown;
  created_at: unknown;
}

export interface PackageModulesContract {
  package_id: unknown;
  module_id: unknown;
}

export interface ModulesContract {
  id: unknown;
  is_synced: unknown;
  is_deleted: unknown;
  last_updated_at: unknown;
  name: unknown;
  slug: unknown;
  parent_id: unknown;
  description: unknown;
  is_active: unknown;
  position_no: unknown;
  created_at: unknown;
}
