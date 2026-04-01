/**
 * Compile-time assertion: checks that a Drizzle schema has EXACTLY
 * the same column names as the contract interface.
 *
 * Only checks keys, not value types, because PG and SQLite inherently
 * differ (e.g. PG timestamp → Date, SQLite text → string).
 */
export type AssertSameColumns<TDrizzle, TContract> =
  Exclude<keyof TDrizzle, keyof TContract> extends never
    ? Exclude<keyof TContract, keyof TDrizzle> extends never
      ? true
      : {
          error: "Drizzle schema is MISSING columns from contract";
          missing: Exclude<keyof TContract, keyof TDrizzle>;
        }
    : {
        error: "Drizzle schema has EXTRA columns not in contract";
        extra: Exclude<keyof TDrizzle, keyof TContract>;
      };

export type Expect<T extends true> = T;
