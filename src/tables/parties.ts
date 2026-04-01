export interface PartyGroupsContract {
  id: unknown;
  company_id: unknown;
  name: unknown;
}

export interface PartiesContract {
  id: unknown;
  company_id: unknown;
  is_synced: unknown;
  is_deleted: unknown;
  last_updated_at: unknown;
  name: unknown;
  type: unknown;
  mobile: unknown;
  email: unknown;
  gstin: unknown;
  pan: unknown;
  opening_balance: unknown;
  balance_type: unknown;
  credit_limit: unknown;
  credit_period: unknown;
  party_group_id: unknown;
  opening_balance_date: unknown;
  credit_limit_enabled: unknown;
}

export interface PartyCustomFieldsContract {
  id: unknown;
  company_id: unknown;
  name: unknown;
  field_type: unknown;
  show_in_print: unknown;
}

export interface PartyCustomFieldValuesContract {
  id: unknown;
  party_id: unknown;
  field_id: unknown;
  value_text: unknown;
  value_number: unknown;
  value_date: unknown;
}

export interface PartyLedgerContract {
  id: unknown;
  company_id: unknown;
  party_id: unknown;
  entry_date: unknown;
  entry_type: unknown;
  reference_id: unknown;
  debit: unknown;
  credit: unknown;
  balance: unknown;
}
