export interface CashBankAccountsContract {
  id: unknown;
  company_id: unknown;
  is_synced: unknown;
  is_deleted: unknown;
  last_updated_at: unknown;
  name: unknown;
  type: unknown;
  balance: unknown;
}

export interface CashBankTransactionsContract {
  id: unknown;
  company_id: unknown;
  is_synced: unknown;
  is_deleted: unknown;
  last_updated_at: unknown;
  account_id: unknown;
  amount: unknown;
  type: unknown;
  category: unknown;
  reference_id: unknown;
}
