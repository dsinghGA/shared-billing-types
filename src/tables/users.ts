export interface RolesContract {
  id: unknown;
  is_synced: unknown;
  is_deleted: unknown;
  created_at: unknown;
  last_updated_at: unknown;
  name: unknown;
  slug: unknown;
  description: unknown;
  is_active: unknown;
}

export interface RolePermissionsContract {
  id: unknown;
  is_synced: unknown;
  is_deleted: unknown;
  created_at: unknown;
  last_updated_at: unknown;
  role_id: unknown;
  resource: unknown;
  can_view: unknown;
  can_create: unknown;
  can_edit: unknown;
  can_share: unknown;
  can_delete: unknown;
}

export interface UsersContract {
  id: unknown;
  company_id: unknown;
  is_synced: unknown;
  is_deleted: unknown;
  created_at: unknown;
  last_updated_at: unknown;
  name: unknown;
  email: unknown;
  password: unknown;
  mobile: unknown;
  role_id: unknown;
  status: unknown;
  is_verified: unknown;
  mobile_otp_enabled: unknown;
  email_otp_enabled: unknown;
}

export interface DevicesContract {
  id: unknown;
  company_id: unknown;
  is_synced: unknown;
  is_deleted: unknown;
  created_at: unknown;
  last_updated_at: unknown;
  device_unique_id: unknown;
  device_name: unknown;
  prefix: unknown;
  is_authorized: unknown;
  last_sync_at: unknown;
}
