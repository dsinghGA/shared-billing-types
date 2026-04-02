export interface CashBankAccountsContract {
  id: unknown;
  company_id: unknown;
  is_synced: unknown;
  is_deleted: unknown;
  created_at: unknown;
  last_updated_at: unknown;
  name: unknown;
  type: unknown;
  balance: unknown;
  item_id: unknown;
  in_hand_quantity: unknown;
  opening_balance: unknown;
  opening_balance_date: unknown;
  account_number: unknown;
  ifsc_code: unknown;
  bank_name: unknown;
  account_holder_name: unknown;
  upi_id: unknown;
  print_upi_qr: unknown;
  print_bank_details: unknown;
  accept_payments_online: unknown;
}

export interface CashBankTransactionsContract {
  id: unknown;
  company_id: unknown;
  is_synced: unknown;
  is_deleted: unknown;
  created_at: unknown;
  last_updated_at: unknown;
  account_id: unknown;
  amount: unknown;
  type: unknown;
  category: unknown;
  reference_id: unknown;
  date: unknown;
  to_account_id: unknown;
  transaction_type: unknown;
  description: unknown;
  image: unknown;
}
