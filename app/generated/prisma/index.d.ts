
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * ───────────────────────────────────────────
 *    ADMIN (For Dashboard Control)
 * ────────────────────────────────────────────
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Election
 * ───────────────────────────────────────────
 *    ELECTION
 * ────────────────────────────────────────────
 */
export type Election = $Result.DefaultSelection<Prisma.$ElectionPayload>
/**
 * Model Voter
 * ───────────────────────────────────────────
 *    VOTER (Single Profile)
 * ────────────────────────────────────────────
 */
export type Voter = $Result.DefaultSelection<Prisma.$VoterPayload>
/**
 * Model VoterInElection
 * ───────────────────────────────────────────
 *    VOTER <-> ELECTION Relation Table
 * ────────────────────────────────────────────
 */
export type VoterInElection = $Result.DefaultSelection<Prisma.$VoterInElectionPayload>
/**
 * Model Candidate
 * ───────────────────────────────────────────
 *    CANDIDATE
 * ────────────────────────────────────────────
 */
export type Candidate = $Result.DefaultSelection<Prisma.$CandidatePayload>
/**
 * Model Vote
 * ───────────────────────────────────────────
 *    VOTES (Hidden until election ends)
 * ────────────────────────────────────────────
 */
export type Vote = $Result.DefaultSelection<Prisma.$VotePayload>
/**
 * Model MultiKey
 * ───────────────────────────────────────────
 *    MULTI-KEY SECURITY
 * ────────────────────────────────────────────
 */
export type MultiKey = $Result.DefaultSelection<Prisma.$MultiKeyPayload>
/**
 * Model Log
 * ───────────────────────────────────────────
 *    ACTIVITY LOGS (Dashboard)
 * ────────────────────────────────────────────
 */
export type Log = $Result.DefaultSelection<Prisma.$LogPayload>
/**
 * Model Message
 * ───────────────────────────────────────────
 *    MESSAGES (Broadcasts)
 * ────────────────────────────────────────────
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ElectionStatus: {
  NOT_STARTED: 'NOT_STARTED',
  LIVE: 'LIVE',
  COMPLETED: 'COMPLETED'
};

export type ElectionStatus = (typeof ElectionStatus)[keyof typeof ElectionStatus]


export const KeyStatus: {
  PENDING: 'PENDING',
  PROVIDED: 'PROVIDED'
};

export type KeyStatus = (typeof KeyStatus)[keyof typeof KeyStatus]

}

export type ElectionStatus = $Enums.ElectionStatus

export const ElectionStatus: typeof $Enums.ElectionStatus

export type KeyStatus = $Enums.KeyStatus

export const KeyStatus: typeof $Enums.KeyStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.election`: Exposes CRUD operations for the **Election** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Elections
    * const elections = await prisma.election.findMany()
    * ```
    */
  get election(): Prisma.ElectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voter`: Exposes CRUD operations for the **Voter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Voters
    * const voters = await prisma.voter.findMany()
    * ```
    */
  get voter(): Prisma.VoterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voterInElection`: Exposes CRUD operations for the **VoterInElection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VoterInElections
    * const voterInElections = await prisma.voterInElection.findMany()
    * ```
    */
  get voterInElection(): Prisma.VoterInElectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidate`: Exposes CRUD operations for the **Candidate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Candidates
    * const candidates = await prisma.candidate.findMany()
    * ```
    */
  get candidate(): Prisma.CandidateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vote`: Exposes CRUD operations for the **Vote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Votes
    * const votes = await prisma.vote.findMany()
    * ```
    */
  get vote(): Prisma.VoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.multiKey`: Exposes CRUD operations for the **MultiKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MultiKeys
    * const multiKeys = await prisma.multiKey.findMany()
    * ```
    */
  get multiKey(): Prisma.MultiKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.log`: Exposes CRUD operations for the **Log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.log.findMany()
    * ```
    */
  get log(): Prisma.LogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.1
   * Query Engine version: f09f2815f091dbba658cdcd2264306d88bb5bda6
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Admin: 'Admin',
    Election: 'Election',
    Voter: 'Voter',
    VoterInElection: 'VoterInElection',
    Candidate: 'Candidate',
    Vote: 'Vote',
    MultiKey: 'MultiKey',
    Log: 'Log',
    Message: 'Message'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "election" | "voter" | "voterInElection" | "candidate" | "vote" | "multiKey" | "log" | "message"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Election: {
        payload: Prisma.$ElectionPayload<ExtArgs>
        fields: Prisma.ElectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ElectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ElectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>
          }
          findFirst: {
            args: Prisma.ElectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ElectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>
          }
          findMany: {
            args: Prisma.ElectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>[]
          }
          create: {
            args: Prisma.ElectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>
          }
          createMany: {
            args: Prisma.ElectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ElectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>[]
          }
          delete: {
            args: Prisma.ElectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>
          }
          update: {
            args: Prisma.ElectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>
          }
          deleteMany: {
            args: Prisma.ElectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ElectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ElectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>[]
          }
          upsert: {
            args: Prisma.ElectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>
          }
          aggregate: {
            args: Prisma.ElectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateElection>
          }
          groupBy: {
            args: Prisma.ElectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ElectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ElectionCountArgs<ExtArgs>
            result: $Utils.Optional<ElectionCountAggregateOutputType> | number
          }
        }
      }
      Voter: {
        payload: Prisma.$VoterPayload<ExtArgs>
        fields: Prisma.VoterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterPayload>
          }
          findFirst: {
            args: Prisma.VoterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterPayload>
          }
          findMany: {
            args: Prisma.VoterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterPayload>[]
          }
          create: {
            args: Prisma.VoterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterPayload>
          }
          createMany: {
            args: Prisma.VoterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterPayload>[]
          }
          delete: {
            args: Prisma.VoterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterPayload>
          }
          update: {
            args: Prisma.VoterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterPayload>
          }
          deleteMany: {
            args: Prisma.VoterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterPayload>[]
          }
          upsert: {
            args: Prisma.VoterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterPayload>
          }
          aggregate: {
            args: Prisma.VoterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoter>
          }
          groupBy: {
            args: Prisma.VoterGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoterGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoterCountArgs<ExtArgs>
            result: $Utils.Optional<VoterCountAggregateOutputType> | number
          }
        }
      }
      VoterInElection: {
        payload: Prisma.$VoterInElectionPayload<ExtArgs>
        fields: Prisma.VoterInElectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoterInElectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterInElectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoterInElectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterInElectionPayload>
          }
          findFirst: {
            args: Prisma.VoterInElectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterInElectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoterInElectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterInElectionPayload>
          }
          findMany: {
            args: Prisma.VoterInElectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterInElectionPayload>[]
          }
          create: {
            args: Prisma.VoterInElectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterInElectionPayload>
          }
          createMany: {
            args: Prisma.VoterInElectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoterInElectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterInElectionPayload>[]
          }
          delete: {
            args: Prisma.VoterInElectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterInElectionPayload>
          }
          update: {
            args: Prisma.VoterInElectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterInElectionPayload>
          }
          deleteMany: {
            args: Prisma.VoterInElectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoterInElectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoterInElectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterInElectionPayload>[]
          }
          upsert: {
            args: Prisma.VoterInElectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterInElectionPayload>
          }
          aggregate: {
            args: Prisma.VoterInElectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoterInElection>
          }
          groupBy: {
            args: Prisma.VoterInElectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoterInElectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoterInElectionCountArgs<ExtArgs>
            result: $Utils.Optional<VoterInElectionCountAggregateOutputType> | number
          }
        }
      }
      Candidate: {
        payload: Prisma.$CandidatePayload<ExtArgs>
        fields: Prisma.CandidateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          findFirst: {
            args: Prisma.CandidateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          findMany: {
            args: Prisma.CandidateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>[]
          }
          create: {
            args: Prisma.CandidateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          createMany: {
            args: Prisma.CandidateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CandidateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>[]
          }
          delete: {
            args: Prisma.CandidateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          update: {
            args: Prisma.CandidateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          deleteMany: {
            args: Prisma.CandidateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CandidateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>[]
          }
          upsert: {
            args: Prisma.CandidateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          aggregate: {
            args: Prisma.CandidateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidate>
          }
          groupBy: {
            args: Prisma.CandidateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidateCountArgs<ExtArgs>
            result: $Utils.Optional<CandidateCountAggregateOutputType> | number
          }
        }
      }
      Vote: {
        payload: Prisma.$VotePayload<ExtArgs>
        fields: Prisma.VoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findFirst: {
            args: Prisma.VoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findMany: {
            args: Prisma.VoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          create: {
            args: Prisma.VoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          createMany: {
            args: Prisma.VoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          delete: {
            args: Prisma.VoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          update: {
            args: Prisma.VoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          deleteMany: {
            args: Prisma.VoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          upsert: {
            args: Prisma.VoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          aggregate: {
            args: Prisma.VoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVote>
          }
          groupBy: {
            args: Prisma.VoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoteCountArgs<ExtArgs>
            result: $Utils.Optional<VoteCountAggregateOutputType> | number
          }
        }
      }
      MultiKey: {
        payload: Prisma.$MultiKeyPayload<ExtArgs>
        fields: Prisma.MultiKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MultiKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MultiKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MultiKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MultiKeyPayload>
          }
          findFirst: {
            args: Prisma.MultiKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MultiKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MultiKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MultiKeyPayload>
          }
          findMany: {
            args: Prisma.MultiKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MultiKeyPayload>[]
          }
          create: {
            args: Prisma.MultiKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MultiKeyPayload>
          }
          createMany: {
            args: Prisma.MultiKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MultiKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MultiKeyPayload>[]
          }
          delete: {
            args: Prisma.MultiKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MultiKeyPayload>
          }
          update: {
            args: Prisma.MultiKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MultiKeyPayload>
          }
          deleteMany: {
            args: Prisma.MultiKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MultiKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MultiKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MultiKeyPayload>[]
          }
          upsert: {
            args: Prisma.MultiKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MultiKeyPayload>
          }
          aggregate: {
            args: Prisma.MultiKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMultiKey>
          }
          groupBy: {
            args: Prisma.MultiKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<MultiKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.MultiKeyCountArgs<ExtArgs>
            result: $Utils.Optional<MultiKeyCountAggregateOutputType> | number
          }
        }
      }
      Log: {
        payload: Prisma.$LogPayload<ExtArgs>
        fields: Prisma.LogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findFirst: {
            args: Prisma.LogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findMany: {
            args: Prisma.LogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          create: {
            args: Prisma.LogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          createMany: {
            args: Prisma.LogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          delete: {
            args: Prisma.LogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          update: {
            args: Prisma.LogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          deleteMany: {
            args: Prisma.LogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          upsert: {
            args: Prisma.LogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          aggregate: {
            args: Prisma.LogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLog>
          }
          groupBy: {
            args: Prisma.LogGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogCountArgs<ExtArgs>
            result: $Utils.Optional<LogCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit
    election?: ElectionOmit
    voter?: VoterOmit
    voterInElection?: VoterInElectionOmit
    candidate?: CandidateOmit
    vote?: VoteOmit
    multiKey?: MultiKeyOmit
    log?: LogOmit
    message?: MessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    logs: number
    multiKeys: number
    messages: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | AdminCountOutputTypeCountLogsArgs
    multiKeys?: boolean | AdminCountOutputTypeCountMultiKeysArgs
    messages?: boolean | AdminCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountMultiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MultiKeyWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type ElectionCountOutputType
   */

  export type ElectionCountOutputType = {
    candidates: number
    voters: number
    multiKeys: number
    votes: number
    logs: number
  }

  export type ElectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidates?: boolean | ElectionCountOutputTypeCountCandidatesArgs
    voters?: boolean | ElectionCountOutputTypeCountVotersArgs
    multiKeys?: boolean | ElectionCountOutputTypeCountMultiKeysArgs
    votes?: boolean | ElectionCountOutputTypeCountVotesArgs
    logs?: boolean | ElectionCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * ElectionCountOutputType without action
   */
  export type ElectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionCountOutputType
     */
    select?: ElectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ElectionCountOutputType without action
   */
  export type ElectionCountOutputTypeCountCandidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateWhereInput
  }

  /**
   * ElectionCountOutputType without action
   */
  export type ElectionCountOutputTypeCountVotersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoterInElectionWhereInput
  }

  /**
   * ElectionCountOutputType without action
   */
  export type ElectionCountOutputTypeCountMultiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MultiKeyWhereInput
  }

  /**
   * ElectionCountOutputType without action
   */
  export type ElectionCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }

  /**
   * ElectionCountOutputType without action
   */
  export type ElectionCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
  }


  /**
   * Count Type VoterCountOutputType
   */

  export type VoterCountOutputType = {
    elections: number
    votes: number
  }

  export type VoterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    elections?: boolean | VoterCountOutputTypeCountElectionsArgs
    votes?: boolean | VoterCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * VoterCountOutputType without action
   */
  export type VoterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoterCountOutputType
     */
    select?: VoterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VoterCountOutputType without action
   */
  export type VoterCountOutputTypeCountElectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoterInElectionWhereInput
  }

  /**
   * VoterCountOutputType without action
   */
  export type VoterCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }


  /**
   * Count Type CandidateCountOutputType
   */

  export type CandidateCountOutputType = {
    votes: number
  }

  export type CandidateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | CandidateCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * CandidateCountOutputType without action
   */
  export type CandidateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateCountOutputType
     */
    select?: CandidateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CandidateCountOutputType without action
   */
  export type CandidateCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    logs?: boolean | Admin$logsArgs<ExtArgs>
    multiKeys?: boolean | Admin$multiKeysArgs<ExtArgs>
    messages?: boolean | Admin$messagesArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | Admin$logsArgs<ExtArgs>
    multiKeys?: boolean | Admin$multiKeysArgs<ExtArgs>
    messages?: boolean | Admin$messagesArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      logs: Prisma.$LogPayload<ExtArgs>[]
      multiKeys: Prisma.$MultiKeyPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    logs<T extends Admin$logsArgs<ExtArgs> = {}>(args?: Subset<T, Admin$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    multiKeys<T extends Admin$multiKeysArgs<ExtArgs> = {}>(args?: Subset<T, Admin$multiKeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MultiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends Admin$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Admin$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin.logs
   */
  export type Admin$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    where?: LogWhereInput
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    cursor?: LogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Admin.multiKeys
   */
  export type Admin$multiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiKey
     */
    select?: MultiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiKey
     */
    omit?: MultiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiKeyInclude<ExtArgs> | null
    where?: MultiKeyWhereInput
    orderBy?: MultiKeyOrderByWithRelationInput | MultiKeyOrderByWithRelationInput[]
    cursor?: MultiKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MultiKeyScalarFieldEnum | MultiKeyScalarFieldEnum[]
  }

  /**
   * Admin.messages
   */
  export type Admin$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Election
   */

  export type AggregateElection = {
    _count: ElectionCountAggregateOutputType | null
    _min: ElectionMinAggregateOutputType | null
    _max: ElectionMaxAggregateOutputType | null
  }

  export type ElectionMinAggregateOutputType = {
    id: string | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    timezone: string | null
    status: $Enums.ElectionStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ElectionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    timezone: string | null
    status: $Enums.ElectionStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ElectionCountAggregateOutputType = {
    id: number
    name: number
    startDate: number
    endDate: number
    timezone: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ElectionMinAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    timezone?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ElectionMaxAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    timezone?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ElectionCountAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    timezone?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ElectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Election to aggregate.
     */
    where?: ElectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elections to fetch.
     */
    orderBy?: ElectionOrderByWithRelationInput | ElectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ElectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Elections
    **/
    _count?: true | ElectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ElectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ElectionMaxAggregateInputType
  }

  export type GetElectionAggregateType<T extends ElectionAggregateArgs> = {
        [P in keyof T & keyof AggregateElection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateElection[P]>
      : GetScalarType<T[P], AggregateElection[P]>
  }




  export type ElectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElectionWhereInput
    orderBy?: ElectionOrderByWithAggregationInput | ElectionOrderByWithAggregationInput[]
    by: ElectionScalarFieldEnum[] | ElectionScalarFieldEnum
    having?: ElectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ElectionCountAggregateInputType | true
    _min?: ElectionMinAggregateInputType
    _max?: ElectionMaxAggregateInputType
  }

  export type ElectionGroupByOutputType = {
    id: string
    name: string
    startDate: Date | null
    endDate: Date | null
    timezone: string
    status: $Enums.ElectionStatus
    createdAt: Date
    updatedAt: Date
    _count: ElectionCountAggregateOutputType | null
    _min: ElectionMinAggregateOutputType | null
    _max: ElectionMaxAggregateOutputType | null
  }

  type GetElectionGroupByPayload<T extends ElectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ElectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ElectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ElectionGroupByOutputType[P]>
            : GetScalarType<T[P], ElectionGroupByOutputType[P]>
        }
      >
    >


  export type ElectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    timezone?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    candidates?: boolean | Election$candidatesArgs<ExtArgs>
    voters?: boolean | Election$votersArgs<ExtArgs>
    multiKeys?: boolean | Election$multiKeysArgs<ExtArgs>
    votes?: boolean | Election$votesArgs<ExtArgs>
    logs?: boolean | Election$logsArgs<ExtArgs>
    _count?: boolean | ElectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["election"]>

  export type ElectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    timezone?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["election"]>

  export type ElectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    timezone?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["election"]>

  export type ElectionSelectScalar = {
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    timezone?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ElectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "startDate" | "endDate" | "timezone" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["election"]>
  export type ElectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidates?: boolean | Election$candidatesArgs<ExtArgs>
    voters?: boolean | Election$votersArgs<ExtArgs>
    multiKeys?: boolean | Election$multiKeysArgs<ExtArgs>
    votes?: boolean | Election$votesArgs<ExtArgs>
    logs?: boolean | Election$logsArgs<ExtArgs>
    _count?: boolean | ElectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ElectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ElectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ElectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Election"
    objects: {
      candidates: Prisma.$CandidatePayload<ExtArgs>[]
      voters: Prisma.$VoterInElectionPayload<ExtArgs>[]
      multiKeys: Prisma.$MultiKeyPayload<ExtArgs>[]
      votes: Prisma.$VotePayload<ExtArgs>[]
      logs: Prisma.$LogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      startDate: Date | null
      endDate: Date | null
      timezone: string
      status: $Enums.ElectionStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["election"]>
    composites: {}
  }

  type ElectionGetPayload<S extends boolean | null | undefined | ElectionDefaultArgs> = $Result.GetResult<Prisma.$ElectionPayload, S>

  type ElectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ElectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ElectionCountAggregateInputType | true
    }

  export interface ElectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Election'], meta: { name: 'Election' } }
    /**
     * Find zero or one Election that matches the filter.
     * @param {ElectionFindUniqueArgs} args - Arguments to find a Election
     * @example
     * // Get one Election
     * const election = await prisma.election.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ElectionFindUniqueArgs>(args: SelectSubset<T, ElectionFindUniqueArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Election that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ElectionFindUniqueOrThrowArgs} args - Arguments to find a Election
     * @example
     * // Get one Election
     * const election = await prisma.election.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ElectionFindUniqueOrThrowArgs>(args: SelectSubset<T, ElectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Election that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionFindFirstArgs} args - Arguments to find a Election
     * @example
     * // Get one Election
     * const election = await prisma.election.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ElectionFindFirstArgs>(args?: SelectSubset<T, ElectionFindFirstArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Election that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionFindFirstOrThrowArgs} args - Arguments to find a Election
     * @example
     * // Get one Election
     * const election = await prisma.election.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ElectionFindFirstOrThrowArgs>(args?: SelectSubset<T, ElectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Elections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Elections
     * const elections = await prisma.election.findMany()
     * 
     * // Get first 10 Elections
     * const elections = await prisma.election.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const electionWithIdOnly = await prisma.election.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ElectionFindManyArgs>(args?: SelectSubset<T, ElectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Election.
     * @param {ElectionCreateArgs} args - Arguments to create a Election.
     * @example
     * // Create one Election
     * const Election = await prisma.election.create({
     *   data: {
     *     // ... data to create a Election
     *   }
     * })
     * 
     */
    create<T extends ElectionCreateArgs>(args: SelectSubset<T, ElectionCreateArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Elections.
     * @param {ElectionCreateManyArgs} args - Arguments to create many Elections.
     * @example
     * // Create many Elections
     * const election = await prisma.election.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ElectionCreateManyArgs>(args?: SelectSubset<T, ElectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Elections and returns the data saved in the database.
     * @param {ElectionCreateManyAndReturnArgs} args - Arguments to create many Elections.
     * @example
     * // Create many Elections
     * const election = await prisma.election.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Elections and only return the `id`
     * const electionWithIdOnly = await prisma.election.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ElectionCreateManyAndReturnArgs>(args?: SelectSubset<T, ElectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Election.
     * @param {ElectionDeleteArgs} args - Arguments to delete one Election.
     * @example
     * // Delete one Election
     * const Election = await prisma.election.delete({
     *   where: {
     *     // ... filter to delete one Election
     *   }
     * })
     * 
     */
    delete<T extends ElectionDeleteArgs>(args: SelectSubset<T, ElectionDeleteArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Election.
     * @param {ElectionUpdateArgs} args - Arguments to update one Election.
     * @example
     * // Update one Election
     * const election = await prisma.election.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ElectionUpdateArgs>(args: SelectSubset<T, ElectionUpdateArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Elections.
     * @param {ElectionDeleteManyArgs} args - Arguments to filter Elections to delete.
     * @example
     * // Delete a few Elections
     * const { count } = await prisma.election.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ElectionDeleteManyArgs>(args?: SelectSubset<T, ElectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Elections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Elections
     * const election = await prisma.election.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ElectionUpdateManyArgs>(args: SelectSubset<T, ElectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Elections and returns the data updated in the database.
     * @param {ElectionUpdateManyAndReturnArgs} args - Arguments to update many Elections.
     * @example
     * // Update many Elections
     * const election = await prisma.election.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Elections and only return the `id`
     * const electionWithIdOnly = await prisma.election.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ElectionUpdateManyAndReturnArgs>(args: SelectSubset<T, ElectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Election.
     * @param {ElectionUpsertArgs} args - Arguments to update or create a Election.
     * @example
     * // Update or create a Election
     * const election = await prisma.election.upsert({
     *   create: {
     *     // ... data to create a Election
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Election we want to update
     *   }
     * })
     */
    upsert<T extends ElectionUpsertArgs>(args: SelectSubset<T, ElectionUpsertArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Elections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionCountArgs} args - Arguments to filter Elections to count.
     * @example
     * // Count the number of Elections
     * const count = await prisma.election.count({
     *   where: {
     *     // ... the filter for the Elections we want to count
     *   }
     * })
    **/
    count<T extends ElectionCountArgs>(
      args?: Subset<T, ElectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ElectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Election.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ElectionAggregateArgs>(args: Subset<T, ElectionAggregateArgs>): Prisma.PrismaPromise<GetElectionAggregateType<T>>

    /**
     * Group by Election.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ElectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ElectionGroupByArgs['orderBy'] }
        : { orderBy?: ElectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ElectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetElectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Election model
   */
  readonly fields: ElectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Election.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ElectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidates<T extends Election$candidatesArgs<ExtArgs> = {}>(args?: Subset<T, Election$candidatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    voters<T extends Election$votersArgs<ExtArgs> = {}>(args?: Subset<T, Election$votersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoterInElectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    multiKeys<T extends Election$multiKeysArgs<ExtArgs> = {}>(args?: Subset<T, Election$multiKeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MultiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    votes<T extends Election$votesArgs<ExtArgs> = {}>(args?: Subset<T, Election$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logs<T extends Election$logsArgs<ExtArgs> = {}>(args?: Subset<T, Election$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Election model
   */
  interface ElectionFieldRefs {
    readonly id: FieldRef<"Election", 'String'>
    readonly name: FieldRef<"Election", 'String'>
    readonly startDate: FieldRef<"Election", 'DateTime'>
    readonly endDate: FieldRef<"Election", 'DateTime'>
    readonly timezone: FieldRef<"Election", 'String'>
    readonly status: FieldRef<"Election", 'ElectionStatus'>
    readonly createdAt: FieldRef<"Election", 'DateTime'>
    readonly updatedAt: FieldRef<"Election", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Election findUnique
   */
  export type ElectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * Filter, which Election to fetch.
     */
    where: ElectionWhereUniqueInput
  }

  /**
   * Election findUniqueOrThrow
   */
  export type ElectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * Filter, which Election to fetch.
     */
    where: ElectionWhereUniqueInput
  }

  /**
   * Election findFirst
   */
  export type ElectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * Filter, which Election to fetch.
     */
    where?: ElectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elections to fetch.
     */
    orderBy?: ElectionOrderByWithRelationInput | ElectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Elections.
     */
    cursor?: ElectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Elections.
     */
    distinct?: ElectionScalarFieldEnum | ElectionScalarFieldEnum[]
  }

  /**
   * Election findFirstOrThrow
   */
  export type ElectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * Filter, which Election to fetch.
     */
    where?: ElectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elections to fetch.
     */
    orderBy?: ElectionOrderByWithRelationInput | ElectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Elections.
     */
    cursor?: ElectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Elections.
     */
    distinct?: ElectionScalarFieldEnum | ElectionScalarFieldEnum[]
  }

  /**
   * Election findMany
   */
  export type ElectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * Filter, which Elections to fetch.
     */
    where?: ElectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elections to fetch.
     */
    orderBy?: ElectionOrderByWithRelationInput | ElectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Elections.
     */
    cursor?: ElectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elections.
     */
    skip?: number
    distinct?: ElectionScalarFieldEnum | ElectionScalarFieldEnum[]
  }

  /**
   * Election create
   */
  export type ElectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Election.
     */
    data: XOR<ElectionCreateInput, ElectionUncheckedCreateInput>
  }

  /**
   * Election createMany
   */
  export type ElectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Elections.
     */
    data: ElectionCreateManyInput | ElectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Election createManyAndReturn
   */
  export type ElectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * The data used to create many Elections.
     */
    data: ElectionCreateManyInput | ElectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Election update
   */
  export type ElectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Election.
     */
    data: XOR<ElectionUpdateInput, ElectionUncheckedUpdateInput>
    /**
     * Choose, which Election to update.
     */
    where: ElectionWhereUniqueInput
  }

  /**
   * Election updateMany
   */
  export type ElectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Elections.
     */
    data: XOR<ElectionUpdateManyMutationInput, ElectionUncheckedUpdateManyInput>
    /**
     * Filter which Elections to update
     */
    where?: ElectionWhereInput
    /**
     * Limit how many Elections to update.
     */
    limit?: number
  }

  /**
   * Election updateManyAndReturn
   */
  export type ElectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * The data used to update Elections.
     */
    data: XOR<ElectionUpdateManyMutationInput, ElectionUncheckedUpdateManyInput>
    /**
     * Filter which Elections to update
     */
    where?: ElectionWhereInput
    /**
     * Limit how many Elections to update.
     */
    limit?: number
  }

  /**
   * Election upsert
   */
  export type ElectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Election to update in case it exists.
     */
    where: ElectionWhereUniqueInput
    /**
     * In case the Election found by the `where` argument doesn't exist, create a new Election with this data.
     */
    create: XOR<ElectionCreateInput, ElectionUncheckedCreateInput>
    /**
     * In case the Election was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ElectionUpdateInput, ElectionUncheckedUpdateInput>
  }

  /**
   * Election delete
   */
  export type ElectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * Filter which Election to delete.
     */
    where: ElectionWhereUniqueInput
  }

  /**
   * Election deleteMany
   */
  export type ElectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Elections to delete
     */
    where?: ElectionWhereInput
    /**
     * Limit how many Elections to delete.
     */
    limit?: number
  }

  /**
   * Election.candidates
   */
  export type Election$candidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    where?: CandidateWhereInput
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    cursor?: CandidateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Election.voters
   */
  export type Election$votersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoterInElection
     */
    select?: VoterInElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoterInElection
     */
    omit?: VoterInElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInElectionInclude<ExtArgs> | null
    where?: VoterInElectionWhereInput
    orderBy?: VoterInElectionOrderByWithRelationInput | VoterInElectionOrderByWithRelationInput[]
    cursor?: VoterInElectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoterInElectionScalarFieldEnum | VoterInElectionScalarFieldEnum[]
  }

  /**
   * Election.multiKeys
   */
  export type Election$multiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiKey
     */
    select?: MultiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiKey
     */
    omit?: MultiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiKeyInclude<ExtArgs> | null
    where?: MultiKeyWhereInput
    orderBy?: MultiKeyOrderByWithRelationInput | MultiKeyOrderByWithRelationInput[]
    cursor?: MultiKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MultiKeyScalarFieldEnum | MultiKeyScalarFieldEnum[]
  }

  /**
   * Election.votes
   */
  export type Election$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Election.logs
   */
  export type Election$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    where?: LogWhereInput
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    cursor?: LogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Election without action
   */
  export type ElectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
  }


  /**
   * Model Voter
   */

  export type AggregateVoter = {
    _count: VoterCountAggregateOutputType | null
    _min: VoterMinAggregateOutputType | null
    _max: VoterMaxAggregateOutputType | null
  }

  export type VoterMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    registration: string | null
    otp: string | null
    otpExpiry: Date | null
    lastLoginAt: Date | null
    hasVoted: boolean | null
    votedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VoterMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    registration: string | null
    otp: string | null
    otpExpiry: Date | null
    lastLoginAt: Date | null
    hasVoted: boolean | null
    votedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VoterCountAggregateOutputType = {
    id: number
    name: number
    email: number
    registration: number
    otp: number
    otpExpiry: number
    lastLoginAt: number
    hasVoted: number
    votedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VoterMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    registration?: true
    otp?: true
    otpExpiry?: true
    lastLoginAt?: true
    hasVoted?: true
    votedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VoterMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    registration?: true
    otp?: true
    otpExpiry?: true
    lastLoginAt?: true
    hasVoted?: true
    votedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VoterCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    registration?: true
    otp?: true
    otpExpiry?: true
    lastLoginAt?: true
    hasVoted?: true
    votedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VoterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Voter to aggregate.
     */
    where?: VoterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Voters to fetch.
     */
    orderBy?: VoterOrderByWithRelationInput | VoterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Voters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Voters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Voters
    **/
    _count?: true | VoterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoterMaxAggregateInputType
  }

  export type GetVoterAggregateType<T extends VoterAggregateArgs> = {
        [P in keyof T & keyof AggregateVoter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoter[P]>
      : GetScalarType<T[P], AggregateVoter[P]>
  }




  export type VoterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoterWhereInput
    orderBy?: VoterOrderByWithAggregationInput | VoterOrderByWithAggregationInput[]
    by: VoterScalarFieldEnum[] | VoterScalarFieldEnum
    having?: VoterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoterCountAggregateInputType | true
    _min?: VoterMinAggregateInputType
    _max?: VoterMaxAggregateInputType
  }

  export type VoterGroupByOutputType = {
    id: string
    name: string
    email: string | null
    registration: string
    otp: string | null
    otpExpiry: Date | null
    lastLoginAt: Date | null
    hasVoted: boolean
    votedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: VoterCountAggregateOutputType | null
    _min: VoterMinAggregateOutputType | null
    _max: VoterMaxAggregateOutputType | null
  }

  type GetVoterGroupByPayload<T extends VoterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoterGroupByOutputType[P]>
            : GetScalarType<T[P], VoterGroupByOutputType[P]>
        }
      >
    >


  export type VoterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    registration?: boolean
    otp?: boolean
    otpExpiry?: boolean
    lastLoginAt?: boolean
    hasVoted?: boolean
    votedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    elections?: boolean | Voter$electionsArgs<ExtArgs>
    votes?: boolean | Voter$votesArgs<ExtArgs>
    _count?: boolean | VoterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voter"]>

  export type VoterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    registration?: boolean
    otp?: boolean
    otpExpiry?: boolean
    lastLoginAt?: boolean
    hasVoted?: boolean
    votedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["voter"]>

  export type VoterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    registration?: boolean
    otp?: boolean
    otpExpiry?: boolean
    lastLoginAt?: boolean
    hasVoted?: boolean
    votedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["voter"]>

  export type VoterSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    registration?: boolean
    otp?: boolean
    otpExpiry?: boolean
    lastLoginAt?: boolean
    hasVoted?: boolean
    votedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VoterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "registration" | "otp" | "otpExpiry" | "lastLoginAt" | "hasVoted" | "votedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["voter"]>
  export type VoterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    elections?: boolean | Voter$electionsArgs<ExtArgs>
    votes?: boolean | Voter$votesArgs<ExtArgs>
    _count?: boolean | VoterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VoterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VoterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VoterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Voter"
    objects: {
      elections: Prisma.$VoterInElectionPayload<ExtArgs>[]
      votes: Prisma.$VotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string | null
      registration: string
      otp: string | null
      otpExpiry: Date | null
      lastLoginAt: Date | null
      hasVoted: boolean
      votedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["voter"]>
    composites: {}
  }

  type VoterGetPayload<S extends boolean | null | undefined | VoterDefaultArgs> = $Result.GetResult<Prisma.$VoterPayload, S>

  type VoterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoterCountAggregateInputType | true
    }

  export interface VoterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Voter'], meta: { name: 'Voter' } }
    /**
     * Find zero or one Voter that matches the filter.
     * @param {VoterFindUniqueArgs} args - Arguments to find a Voter
     * @example
     * // Get one Voter
     * const voter = await prisma.voter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoterFindUniqueArgs>(args: SelectSubset<T, VoterFindUniqueArgs<ExtArgs>>): Prisma__VoterClient<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Voter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoterFindUniqueOrThrowArgs} args - Arguments to find a Voter
     * @example
     * // Get one Voter
     * const voter = await prisma.voter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoterFindUniqueOrThrowArgs>(args: SelectSubset<T, VoterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoterClient<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoterFindFirstArgs} args - Arguments to find a Voter
     * @example
     * // Get one Voter
     * const voter = await prisma.voter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoterFindFirstArgs>(args?: SelectSubset<T, VoterFindFirstArgs<ExtArgs>>): Prisma__VoterClient<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoterFindFirstOrThrowArgs} args - Arguments to find a Voter
     * @example
     * // Get one Voter
     * const voter = await prisma.voter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoterFindFirstOrThrowArgs>(args?: SelectSubset<T, VoterFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoterClient<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Voters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Voters
     * const voters = await prisma.voter.findMany()
     * 
     * // Get first 10 Voters
     * const voters = await prisma.voter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voterWithIdOnly = await prisma.voter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoterFindManyArgs>(args?: SelectSubset<T, VoterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Voter.
     * @param {VoterCreateArgs} args - Arguments to create a Voter.
     * @example
     * // Create one Voter
     * const Voter = await prisma.voter.create({
     *   data: {
     *     // ... data to create a Voter
     *   }
     * })
     * 
     */
    create<T extends VoterCreateArgs>(args: SelectSubset<T, VoterCreateArgs<ExtArgs>>): Prisma__VoterClient<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Voters.
     * @param {VoterCreateManyArgs} args - Arguments to create many Voters.
     * @example
     * // Create many Voters
     * const voter = await prisma.voter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoterCreateManyArgs>(args?: SelectSubset<T, VoterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Voters and returns the data saved in the database.
     * @param {VoterCreateManyAndReturnArgs} args - Arguments to create many Voters.
     * @example
     * // Create many Voters
     * const voter = await prisma.voter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Voters and only return the `id`
     * const voterWithIdOnly = await prisma.voter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoterCreateManyAndReturnArgs>(args?: SelectSubset<T, VoterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Voter.
     * @param {VoterDeleteArgs} args - Arguments to delete one Voter.
     * @example
     * // Delete one Voter
     * const Voter = await prisma.voter.delete({
     *   where: {
     *     // ... filter to delete one Voter
     *   }
     * })
     * 
     */
    delete<T extends VoterDeleteArgs>(args: SelectSubset<T, VoterDeleteArgs<ExtArgs>>): Prisma__VoterClient<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Voter.
     * @param {VoterUpdateArgs} args - Arguments to update one Voter.
     * @example
     * // Update one Voter
     * const voter = await prisma.voter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoterUpdateArgs>(args: SelectSubset<T, VoterUpdateArgs<ExtArgs>>): Prisma__VoterClient<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Voters.
     * @param {VoterDeleteManyArgs} args - Arguments to filter Voters to delete.
     * @example
     * // Delete a few Voters
     * const { count } = await prisma.voter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoterDeleteManyArgs>(args?: SelectSubset<T, VoterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Voters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Voters
     * const voter = await prisma.voter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoterUpdateManyArgs>(args: SelectSubset<T, VoterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Voters and returns the data updated in the database.
     * @param {VoterUpdateManyAndReturnArgs} args - Arguments to update many Voters.
     * @example
     * // Update many Voters
     * const voter = await prisma.voter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Voters and only return the `id`
     * const voterWithIdOnly = await prisma.voter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VoterUpdateManyAndReturnArgs>(args: SelectSubset<T, VoterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Voter.
     * @param {VoterUpsertArgs} args - Arguments to update or create a Voter.
     * @example
     * // Update or create a Voter
     * const voter = await prisma.voter.upsert({
     *   create: {
     *     // ... data to create a Voter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Voter we want to update
     *   }
     * })
     */
    upsert<T extends VoterUpsertArgs>(args: SelectSubset<T, VoterUpsertArgs<ExtArgs>>): Prisma__VoterClient<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Voters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoterCountArgs} args - Arguments to filter Voters to count.
     * @example
     * // Count the number of Voters
     * const count = await prisma.voter.count({
     *   where: {
     *     // ... the filter for the Voters we want to count
     *   }
     * })
    **/
    count<T extends VoterCountArgs>(
      args?: Subset<T, VoterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Voter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VoterAggregateArgs>(args: Subset<T, VoterAggregateArgs>): Prisma.PrismaPromise<GetVoterAggregateType<T>>

    /**
     * Group by Voter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VoterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoterGroupByArgs['orderBy'] }
        : { orderBy?: VoterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VoterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Voter model
   */
  readonly fields: VoterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Voter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    elections<T extends Voter$electionsArgs<ExtArgs> = {}>(args?: Subset<T, Voter$electionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoterInElectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    votes<T extends Voter$votesArgs<ExtArgs> = {}>(args?: Subset<T, Voter$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Voter model
   */
  interface VoterFieldRefs {
    readonly id: FieldRef<"Voter", 'String'>
    readonly name: FieldRef<"Voter", 'String'>
    readonly email: FieldRef<"Voter", 'String'>
    readonly registration: FieldRef<"Voter", 'String'>
    readonly otp: FieldRef<"Voter", 'String'>
    readonly otpExpiry: FieldRef<"Voter", 'DateTime'>
    readonly lastLoginAt: FieldRef<"Voter", 'DateTime'>
    readonly hasVoted: FieldRef<"Voter", 'Boolean'>
    readonly votedAt: FieldRef<"Voter", 'DateTime'>
    readonly createdAt: FieldRef<"Voter", 'DateTime'>
    readonly updatedAt: FieldRef<"Voter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Voter findUnique
   */
  export type VoterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInclude<ExtArgs> | null
    /**
     * Filter, which Voter to fetch.
     */
    where: VoterWhereUniqueInput
  }

  /**
   * Voter findUniqueOrThrow
   */
  export type VoterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInclude<ExtArgs> | null
    /**
     * Filter, which Voter to fetch.
     */
    where: VoterWhereUniqueInput
  }

  /**
   * Voter findFirst
   */
  export type VoterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInclude<ExtArgs> | null
    /**
     * Filter, which Voter to fetch.
     */
    where?: VoterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Voters to fetch.
     */
    orderBy?: VoterOrderByWithRelationInput | VoterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Voters.
     */
    cursor?: VoterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Voters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Voters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Voters.
     */
    distinct?: VoterScalarFieldEnum | VoterScalarFieldEnum[]
  }

  /**
   * Voter findFirstOrThrow
   */
  export type VoterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInclude<ExtArgs> | null
    /**
     * Filter, which Voter to fetch.
     */
    where?: VoterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Voters to fetch.
     */
    orderBy?: VoterOrderByWithRelationInput | VoterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Voters.
     */
    cursor?: VoterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Voters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Voters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Voters.
     */
    distinct?: VoterScalarFieldEnum | VoterScalarFieldEnum[]
  }

  /**
   * Voter findMany
   */
  export type VoterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInclude<ExtArgs> | null
    /**
     * Filter, which Voters to fetch.
     */
    where?: VoterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Voters to fetch.
     */
    orderBy?: VoterOrderByWithRelationInput | VoterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Voters.
     */
    cursor?: VoterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Voters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Voters.
     */
    skip?: number
    distinct?: VoterScalarFieldEnum | VoterScalarFieldEnum[]
  }

  /**
   * Voter create
   */
  export type VoterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInclude<ExtArgs> | null
    /**
     * The data needed to create a Voter.
     */
    data: XOR<VoterCreateInput, VoterUncheckedCreateInput>
  }

  /**
   * Voter createMany
   */
  export type VoterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Voters.
     */
    data: VoterCreateManyInput | VoterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Voter createManyAndReturn
   */
  export type VoterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * The data used to create many Voters.
     */
    data: VoterCreateManyInput | VoterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Voter update
   */
  export type VoterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInclude<ExtArgs> | null
    /**
     * The data needed to update a Voter.
     */
    data: XOR<VoterUpdateInput, VoterUncheckedUpdateInput>
    /**
     * Choose, which Voter to update.
     */
    where: VoterWhereUniqueInput
  }

  /**
   * Voter updateMany
   */
  export type VoterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Voters.
     */
    data: XOR<VoterUpdateManyMutationInput, VoterUncheckedUpdateManyInput>
    /**
     * Filter which Voters to update
     */
    where?: VoterWhereInput
    /**
     * Limit how many Voters to update.
     */
    limit?: number
  }

  /**
   * Voter updateManyAndReturn
   */
  export type VoterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * The data used to update Voters.
     */
    data: XOR<VoterUpdateManyMutationInput, VoterUncheckedUpdateManyInput>
    /**
     * Filter which Voters to update
     */
    where?: VoterWhereInput
    /**
     * Limit how many Voters to update.
     */
    limit?: number
  }

  /**
   * Voter upsert
   */
  export type VoterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInclude<ExtArgs> | null
    /**
     * The filter to search for the Voter to update in case it exists.
     */
    where: VoterWhereUniqueInput
    /**
     * In case the Voter found by the `where` argument doesn't exist, create a new Voter with this data.
     */
    create: XOR<VoterCreateInput, VoterUncheckedCreateInput>
    /**
     * In case the Voter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoterUpdateInput, VoterUncheckedUpdateInput>
  }

  /**
   * Voter delete
   */
  export type VoterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInclude<ExtArgs> | null
    /**
     * Filter which Voter to delete.
     */
    where: VoterWhereUniqueInput
  }

  /**
   * Voter deleteMany
   */
  export type VoterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Voters to delete
     */
    where?: VoterWhereInput
    /**
     * Limit how many Voters to delete.
     */
    limit?: number
  }

  /**
   * Voter.elections
   */
  export type Voter$electionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoterInElection
     */
    select?: VoterInElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoterInElection
     */
    omit?: VoterInElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInElectionInclude<ExtArgs> | null
    where?: VoterInElectionWhereInput
    orderBy?: VoterInElectionOrderByWithRelationInput | VoterInElectionOrderByWithRelationInput[]
    cursor?: VoterInElectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoterInElectionScalarFieldEnum | VoterInElectionScalarFieldEnum[]
  }

  /**
   * Voter.votes
   */
  export type Voter$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Voter without action
   */
  export type VoterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInclude<ExtArgs> | null
  }


  /**
   * Model VoterInElection
   */

  export type AggregateVoterInElection = {
    _count: VoterInElectionCountAggregateOutputType | null
    _min: VoterInElectionMinAggregateOutputType | null
    _max: VoterInElectionMaxAggregateOutputType | null
  }

  export type VoterInElectionMinAggregateOutputType = {
    id: string | null
    voterId: string | null
    electionId: string | null
    hasVoted: boolean | null
    createdAt: Date | null
  }

  export type VoterInElectionMaxAggregateOutputType = {
    id: string | null
    voterId: string | null
    electionId: string | null
    hasVoted: boolean | null
    createdAt: Date | null
  }

  export type VoterInElectionCountAggregateOutputType = {
    id: number
    voterId: number
    electionId: number
    hasVoted: number
    createdAt: number
    _all: number
  }


  export type VoterInElectionMinAggregateInputType = {
    id?: true
    voterId?: true
    electionId?: true
    hasVoted?: true
    createdAt?: true
  }

  export type VoterInElectionMaxAggregateInputType = {
    id?: true
    voterId?: true
    electionId?: true
    hasVoted?: true
    createdAt?: true
  }

  export type VoterInElectionCountAggregateInputType = {
    id?: true
    voterId?: true
    electionId?: true
    hasVoted?: true
    createdAt?: true
    _all?: true
  }

  export type VoterInElectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VoterInElection to aggregate.
     */
    where?: VoterInElectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoterInElections to fetch.
     */
    orderBy?: VoterInElectionOrderByWithRelationInput | VoterInElectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoterInElectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoterInElections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoterInElections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VoterInElections
    **/
    _count?: true | VoterInElectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoterInElectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoterInElectionMaxAggregateInputType
  }

  export type GetVoterInElectionAggregateType<T extends VoterInElectionAggregateArgs> = {
        [P in keyof T & keyof AggregateVoterInElection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoterInElection[P]>
      : GetScalarType<T[P], AggregateVoterInElection[P]>
  }




  export type VoterInElectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoterInElectionWhereInput
    orderBy?: VoterInElectionOrderByWithAggregationInput | VoterInElectionOrderByWithAggregationInput[]
    by: VoterInElectionScalarFieldEnum[] | VoterInElectionScalarFieldEnum
    having?: VoterInElectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoterInElectionCountAggregateInputType | true
    _min?: VoterInElectionMinAggregateInputType
    _max?: VoterInElectionMaxAggregateInputType
  }

  export type VoterInElectionGroupByOutputType = {
    id: string
    voterId: string
    electionId: string
    hasVoted: boolean
    createdAt: Date
    _count: VoterInElectionCountAggregateOutputType | null
    _min: VoterInElectionMinAggregateOutputType | null
    _max: VoterInElectionMaxAggregateOutputType | null
  }

  type GetVoterInElectionGroupByPayload<T extends VoterInElectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoterInElectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoterInElectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoterInElectionGroupByOutputType[P]>
            : GetScalarType<T[P], VoterInElectionGroupByOutputType[P]>
        }
      >
    >


  export type VoterInElectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    voterId?: boolean
    electionId?: boolean
    hasVoted?: boolean
    createdAt?: boolean
    voter?: boolean | VoterDefaultArgs<ExtArgs>
    election?: boolean | ElectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voterInElection"]>

  export type VoterInElectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    voterId?: boolean
    electionId?: boolean
    hasVoted?: boolean
    createdAt?: boolean
    voter?: boolean | VoterDefaultArgs<ExtArgs>
    election?: boolean | ElectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voterInElection"]>

  export type VoterInElectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    voterId?: boolean
    electionId?: boolean
    hasVoted?: boolean
    createdAt?: boolean
    voter?: boolean | VoterDefaultArgs<ExtArgs>
    election?: boolean | ElectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voterInElection"]>

  export type VoterInElectionSelectScalar = {
    id?: boolean
    voterId?: boolean
    electionId?: boolean
    hasVoted?: boolean
    createdAt?: boolean
  }

  export type VoterInElectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "voterId" | "electionId" | "hasVoted" | "createdAt", ExtArgs["result"]["voterInElection"]>
  export type VoterInElectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voter?: boolean | VoterDefaultArgs<ExtArgs>
    election?: boolean | ElectionDefaultArgs<ExtArgs>
  }
  export type VoterInElectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voter?: boolean | VoterDefaultArgs<ExtArgs>
    election?: boolean | ElectionDefaultArgs<ExtArgs>
  }
  export type VoterInElectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voter?: boolean | VoterDefaultArgs<ExtArgs>
    election?: boolean | ElectionDefaultArgs<ExtArgs>
  }

  export type $VoterInElectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VoterInElection"
    objects: {
      voter: Prisma.$VoterPayload<ExtArgs>
      election: Prisma.$ElectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      voterId: string
      electionId: string
      hasVoted: boolean
      createdAt: Date
    }, ExtArgs["result"]["voterInElection"]>
    composites: {}
  }

  type VoterInElectionGetPayload<S extends boolean | null | undefined | VoterInElectionDefaultArgs> = $Result.GetResult<Prisma.$VoterInElectionPayload, S>

  type VoterInElectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoterInElectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoterInElectionCountAggregateInputType | true
    }

  export interface VoterInElectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VoterInElection'], meta: { name: 'VoterInElection' } }
    /**
     * Find zero or one VoterInElection that matches the filter.
     * @param {VoterInElectionFindUniqueArgs} args - Arguments to find a VoterInElection
     * @example
     * // Get one VoterInElection
     * const voterInElection = await prisma.voterInElection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoterInElectionFindUniqueArgs>(args: SelectSubset<T, VoterInElectionFindUniqueArgs<ExtArgs>>): Prisma__VoterInElectionClient<$Result.GetResult<Prisma.$VoterInElectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VoterInElection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoterInElectionFindUniqueOrThrowArgs} args - Arguments to find a VoterInElection
     * @example
     * // Get one VoterInElection
     * const voterInElection = await prisma.voterInElection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoterInElectionFindUniqueOrThrowArgs>(args: SelectSubset<T, VoterInElectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoterInElectionClient<$Result.GetResult<Prisma.$VoterInElectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VoterInElection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoterInElectionFindFirstArgs} args - Arguments to find a VoterInElection
     * @example
     * // Get one VoterInElection
     * const voterInElection = await prisma.voterInElection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoterInElectionFindFirstArgs>(args?: SelectSubset<T, VoterInElectionFindFirstArgs<ExtArgs>>): Prisma__VoterInElectionClient<$Result.GetResult<Prisma.$VoterInElectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VoterInElection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoterInElectionFindFirstOrThrowArgs} args - Arguments to find a VoterInElection
     * @example
     * // Get one VoterInElection
     * const voterInElection = await prisma.voterInElection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoterInElectionFindFirstOrThrowArgs>(args?: SelectSubset<T, VoterInElectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoterInElectionClient<$Result.GetResult<Prisma.$VoterInElectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VoterInElections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoterInElectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VoterInElections
     * const voterInElections = await prisma.voterInElection.findMany()
     * 
     * // Get first 10 VoterInElections
     * const voterInElections = await prisma.voterInElection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voterInElectionWithIdOnly = await prisma.voterInElection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoterInElectionFindManyArgs>(args?: SelectSubset<T, VoterInElectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoterInElectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VoterInElection.
     * @param {VoterInElectionCreateArgs} args - Arguments to create a VoterInElection.
     * @example
     * // Create one VoterInElection
     * const VoterInElection = await prisma.voterInElection.create({
     *   data: {
     *     // ... data to create a VoterInElection
     *   }
     * })
     * 
     */
    create<T extends VoterInElectionCreateArgs>(args: SelectSubset<T, VoterInElectionCreateArgs<ExtArgs>>): Prisma__VoterInElectionClient<$Result.GetResult<Prisma.$VoterInElectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VoterInElections.
     * @param {VoterInElectionCreateManyArgs} args - Arguments to create many VoterInElections.
     * @example
     * // Create many VoterInElections
     * const voterInElection = await prisma.voterInElection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoterInElectionCreateManyArgs>(args?: SelectSubset<T, VoterInElectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VoterInElections and returns the data saved in the database.
     * @param {VoterInElectionCreateManyAndReturnArgs} args - Arguments to create many VoterInElections.
     * @example
     * // Create many VoterInElections
     * const voterInElection = await prisma.voterInElection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VoterInElections and only return the `id`
     * const voterInElectionWithIdOnly = await prisma.voterInElection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoterInElectionCreateManyAndReturnArgs>(args?: SelectSubset<T, VoterInElectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoterInElectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VoterInElection.
     * @param {VoterInElectionDeleteArgs} args - Arguments to delete one VoterInElection.
     * @example
     * // Delete one VoterInElection
     * const VoterInElection = await prisma.voterInElection.delete({
     *   where: {
     *     // ... filter to delete one VoterInElection
     *   }
     * })
     * 
     */
    delete<T extends VoterInElectionDeleteArgs>(args: SelectSubset<T, VoterInElectionDeleteArgs<ExtArgs>>): Prisma__VoterInElectionClient<$Result.GetResult<Prisma.$VoterInElectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VoterInElection.
     * @param {VoterInElectionUpdateArgs} args - Arguments to update one VoterInElection.
     * @example
     * // Update one VoterInElection
     * const voterInElection = await prisma.voterInElection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoterInElectionUpdateArgs>(args: SelectSubset<T, VoterInElectionUpdateArgs<ExtArgs>>): Prisma__VoterInElectionClient<$Result.GetResult<Prisma.$VoterInElectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VoterInElections.
     * @param {VoterInElectionDeleteManyArgs} args - Arguments to filter VoterInElections to delete.
     * @example
     * // Delete a few VoterInElections
     * const { count } = await prisma.voterInElection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoterInElectionDeleteManyArgs>(args?: SelectSubset<T, VoterInElectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VoterInElections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoterInElectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VoterInElections
     * const voterInElection = await prisma.voterInElection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoterInElectionUpdateManyArgs>(args: SelectSubset<T, VoterInElectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VoterInElections and returns the data updated in the database.
     * @param {VoterInElectionUpdateManyAndReturnArgs} args - Arguments to update many VoterInElections.
     * @example
     * // Update many VoterInElections
     * const voterInElection = await prisma.voterInElection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VoterInElections and only return the `id`
     * const voterInElectionWithIdOnly = await prisma.voterInElection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VoterInElectionUpdateManyAndReturnArgs>(args: SelectSubset<T, VoterInElectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoterInElectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VoterInElection.
     * @param {VoterInElectionUpsertArgs} args - Arguments to update or create a VoterInElection.
     * @example
     * // Update or create a VoterInElection
     * const voterInElection = await prisma.voterInElection.upsert({
     *   create: {
     *     // ... data to create a VoterInElection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VoterInElection we want to update
     *   }
     * })
     */
    upsert<T extends VoterInElectionUpsertArgs>(args: SelectSubset<T, VoterInElectionUpsertArgs<ExtArgs>>): Prisma__VoterInElectionClient<$Result.GetResult<Prisma.$VoterInElectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VoterInElections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoterInElectionCountArgs} args - Arguments to filter VoterInElections to count.
     * @example
     * // Count the number of VoterInElections
     * const count = await prisma.voterInElection.count({
     *   where: {
     *     // ... the filter for the VoterInElections we want to count
     *   }
     * })
    **/
    count<T extends VoterInElectionCountArgs>(
      args?: Subset<T, VoterInElectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoterInElectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VoterInElection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoterInElectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VoterInElectionAggregateArgs>(args: Subset<T, VoterInElectionAggregateArgs>): Prisma.PrismaPromise<GetVoterInElectionAggregateType<T>>

    /**
     * Group by VoterInElection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoterInElectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VoterInElectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoterInElectionGroupByArgs['orderBy'] }
        : { orderBy?: VoterInElectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VoterInElectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoterInElectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VoterInElection model
   */
  readonly fields: VoterInElectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VoterInElection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoterInElectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    voter<T extends VoterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VoterDefaultArgs<ExtArgs>>): Prisma__VoterClient<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    election<T extends ElectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ElectionDefaultArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VoterInElection model
   */
  interface VoterInElectionFieldRefs {
    readonly id: FieldRef<"VoterInElection", 'String'>
    readonly voterId: FieldRef<"VoterInElection", 'String'>
    readonly electionId: FieldRef<"VoterInElection", 'String'>
    readonly hasVoted: FieldRef<"VoterInElection", 'Boolean'>
    readonly createdAt: FieldRef<"VoterInElection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VoterInElection findUnique
   */
  export type VoterInElectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoterInElection
     */
    select?: VoterInElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoterInElection
     */
    omit?: VoterInElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInElectionInclude<ExtArgs> | null
    /**
     * Filter, which VoterInElection to fetch.
     */
    where: VoterInElectionWhereUniqueInput
  }

  /**
   * VoterInElection findUniqueOrThrow
   */
  export type VoterInElectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoterInElection
     */
    select?: VoterInElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoterInElection
     */
    omit?: VoterInElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInElectionInclude<ExtArgs> | null
    /**
     * Filter, which VoterInElection to fetch.
     */
    where: VoterInElectionWhereUniqueInput
  }

  /**
   * VoterInElection findFirst
   */
  export type VoterInElectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoterInElection
     */
    select?: VoterInElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoterInElection
     */
    omit?: VoterInElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInElectionInclude<ExtArgs> | null
    /**
     * Filter, which VoterInElection to fetch.
     */
    where?: VoterInElectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoterInElections to fetch.
     */
    orderBy?: VoterInElectionOrderByWithRelationInput | VoterInElectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VoterInElections.
     */
    cursor?: VoterInElectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoterInElections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoterInElections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VoterInElections.
     */
    distinct?: VoterInElectionScalarFieldEnum | VoterInElectionScalarFieldEnum[]
  }

  /**
   * VoterInElection findFirstOrThrow
   */
  export type VoterInElectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoterInElection
     */
    select?: VoterInElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoterInElection
     */
    omit?: VoterInElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInElectionInclude<ExtArgs> | null
    /**
     * Filter, which VoterInElection to fetch.
     */
    where?: VoterInElectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoterInElections to fetch.
     */
    orderBy?: VoterInElectionOrderByWithRelationInput | VoterInElectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VoterInElections.
     */
    cursor?: VoterInElectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoterInElections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoterInElections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VoterInElections.
     */
    distinct?: VoterInElectionScalarFieldEnum | VoterInElectionScalarFieldEnum[]
  }

  /**
   * VoterInElection findMany
   */
  export type VoterInElectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoterInElection
     */
    select?: VoterInElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoterInElection
     */
    omit?: VoterInElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInElectionInclude<ExtArgs> | null
    /**
     * Filter, which VoterInElections to fetch.
     */
    where?: VoterInElectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoterInElections to fetch.
     */
    orderBy?: VoterInElectionOrderByWithRelationInput | VoterInElectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VoterInElections.
     */
    cursor?: VoterInElectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoterInElections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoterInElections.
     */
    skip?: number
    distinct?: VoterInElectionScalarFieldEnum | VoterInElectionScalarFieldEnum[]
  }

  /**
   * VoterInElection create
   */
  export type VoterInElectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoterInElection
     */
    select?: VoterInElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoterInElection
     */
    omit?: VoterInElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInElectionInclude<ExtArgs> | null
    /**
     * The data needed to create a VoterInElection.
     */
    data: XOR<VoterInElectionCreateInput, VoterInElectionUncheckedCreateInput>
  }

  /**
   * VoterInElection createMany
   */
  export type VoterInElectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VoterInElections.
     */
    data: VoterInElectionCreateManyInput | VoterInElectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VoterInElection createManyAndReturn
   */
  export type VoterInElectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoterInElection
     */
    select?: VoterInElectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VoterInElection
     */
    omit?: VoterInElectionOmit<ExtArgs> | null
    /**
     * The data used to create many VoterInElections.
     */
    data: VoterInElectionCreateManyInput | VoterInElectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInElectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VoterInElection update
   */
  export type VoterInElectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoterInElection
     */
    select?: VoterInElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoterInElection
     */
    omit?: VoterInElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInElectionInclude<ExtArgs> | null
    /**
     * The data needed to update a VoterInElection.
     */
    data: XOR<VoterInElectionUpdateInput, VoterInElectionUncheckedUpdateInput>
    /**
     * Choose, which VoterInElection to update.
     */
    where: VoterInElectionWhereUniqueInput
  }

  /**
   * VoterInElection updateMany
   */
  export type VoterInElectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VoterInElections.
     */
    data: XOR<VoterInElectionUpdateManyMutationInput, VoterInElectionUncheckedUpdateManyInput>
    /**
     * Filter which VoterInElections to update
     */
    where?: VoterInElectionWhereInput
    /**
     * Limit how many VoterInElections to update.
     */
    limit?: number
  }

  /**
   * VoterInElection updateManyAndReturn
   */
  export type VoterInElectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoterInElection
     */
    select?: VoterInElectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VoterInElection
     */
    omit?: VoterInElectionOmit<ExtArgs> | null
    /**
     * The data used to update VoterInElections.
     */
    data: XOR<VoterInElectionUpdateManyMutationInput, VoterInElectionUncheckedUpdateManyInput>
    /**
     * Filter which VoterInElections to update
     */
    where?: VoterInElectionWhereInput
    /**
     * Limit how many VoterInElections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInElectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VoterInElection upsert
   */
  export type VoterInElectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoterInElection
     */
    select?: VoterInElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoterInElection
     */
    omit?: VoterInElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInElectionInclude<ExtArgs> | null
    /**
     * The filter to search for the VoterInElection to update in case it exists.
     */
    where: VoterInElectionWhereUniqueInput
    /**
     * In case the VoterInElection found by the `where` argument doesn't exist, create a new VoterInElection with this data.
     */
    create: XOR<VoterInElectionCreateInput, VoterInElectionUncheckedCreateInput>
    /**
     * In case the VoterInElection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoterInElectionUpdateInput, VoterInElectionUncheckedUpdateInput>
  }

  /**
   * VoterInElection delete
   */
  export type VoterInElectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoterInElection
     */
    select?: VoterInElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoterInElection
     */
    omit?: VoterInElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInElectionInclude<ExtArgs> | null
    /**
     * Filter which VoterInElection to delete.
     */
    where: VoterInElectionWhereUniqueInput
  }

  /**
   * VoterInElection deleteMany
   */
  export type VoterInElectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VoterInElections to delete
     */
    where?: VoterInElectionWhereInput
    /**
     * Limit how many VoterInElections to delete.
     */
    limit?: number
  }

  /**
   * VoterInElection without action
   */
  export type VoterInElectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoterInElection
     */
    select?: VoterInElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoterInElection
     */
    omit?: VoterInElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInElectionInclude<ExtArgs> | null
  }


  /**
   * Model Candidate
   */

  export type AggregateCandidate = {
    _count: CandidateCountAggregateOutputType | null
    _min: CandidateMinAggregateOutputType | null
    _max: CandidateMaxAggregateOutputType | null
  }

  export type CandidateMinAggregateOutputType = {
    id: string | null
    name: string | null
    party: string | null
    electionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CandidateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    party: string | null
    electionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CandidateCountAggregateOutputType = {
    id: number
    name: number
    party: number
    electionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CandidateMinAggregateInputType = {
    id?: true
    name?: true
    party?: true
    electionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CandidateMaxAggregateInputType = {
    id?: true
    name?: true
    party?: true
    electionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CandidateCountAggregateInputType = {
    id?: true
    name?: true
    party?: true
    electionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CandidateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidate to aggregate.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Candidates
    **/
    _count?: true | CandidateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidateMaxAggregateInputType
  }

  export type GetCandidateAggregateType<T extends CandidateAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidate[P]>
      : GetScalarType<T[P], AggregateCandidate[P]>
  }




  export type CandidateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateWhereInput
    orderBy?: CandidateOrderByWithAggregationInput | CandidateOrderByWithAggregationInput[]
    by: CandidateScalarFieldEnum[] | CandidateScalarFieldEnum
    having?: CandidateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidateCountAggregateInputType | true
    _min?: CandidateMinAggregateInputType
    _max?: CandidateMaxAggregateInputType
  }

  export type CandidateGroupByOutputType = {
    id: string
    name: string
    party: string | null
    electionId: string
    createdAt: Date
    updatedAt: Date
    _count: CandidateCountAggregateOutputType | null
    _min: CandidateMinAggregateOutputType | null
    _max: CandidateMaxAggregateOutputType | null
  }

  type GetCandidateGroupByPayload<T extends CandidateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidateGroupByOutputType[P]>
            : GetScalarType<T[P], CandidateGroupByOutputType[P]>
        }
      >
    >


  export type CandidateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    party?: boolean
    electionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    votes?: boolean | Candidate$votesArgs<ExtArgs>
    _count?: boolean | CandidateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidate"]>

  export type CandidateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    party?: boolean
    electionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    election?: boolean | ElectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidate"]>

  export type CandidateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    party?: boolean
    electionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    election?: boolean | ElectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidate"]>

  export type CandidateSelectScalar = {
    id?: boolean
    name?: boolean
    party?: boolean
    electionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CandidateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "party" | "electionId" | "createdAt" | "updatedAt", ExtArgs["result"]["candidate"]>
  export type CandidateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    votes?: boolean | Candidate$votesArgs<ExtArgs>
    _count?: boolean | CandidateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CandidateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election?: boolean | ElectionDefaultArgs<ExtArgs>
  }
  export type CandidateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election?: boolean | ElectionDefaultArgs<ExtArgs>
  }

  export type $CandidatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Candidate"
    objects: {
      election: Prisma.$ElectionPayload<ExtArgs>
      votes: Prisma.$VotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      party: string | null
      electionId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["candidate"]>
    composites: {}
  }

  type CandidateGetPayload<S extends boolean | null | undefined | CandidateDefaultArgs> = $Result.GetResult<Prisma.$CandidatePayload, S>

  type CandidateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidateCountAggregateInputType | true
    }

  export interface CandidateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Candidate'], meta: { name: 'Candidate' } }
    /**
     * Find zero or one Candidate that matches the filter.
     * @param {CandidateFindUniqueArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidateFindUniqueArgs>(args: SelectSubset<T, CandidateFindUniqueArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Candidate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidateFindUniqueOrThrowArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidateFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindFirstArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidateFindFirstArgs>(args?: SelectSubset<T, CandidateFindFirstArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindFirstOrThrowArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidateFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Candidates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Candidates
     * const candidates = await prisma.candidate.findMany()
     * 
     * // Get first 10 Candidates
     * const candidates = await prisma.candidate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const candidateWithIdOnly = await prisma.candidate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CandidateFindManyArgs>(args?: SelectSubset<T, CandidateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Candidate.
     * @param {CandidateCreateArgs} args - Arguments to create a Candidate.
     * @example
     * // Create one Candidate
     * const Candidate = await prisma.candidate.create({
     *   data: {
     *     // ... data to create a Candidate
     *   }
     * })
     * 
     */
    create<T extends CandidateCreateArgs>(args: SelectSubset<T, CandidateCreateArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Candidates.
     * @param {CandidateCreateManyArgs} args - Arguments to create many Candidates.
     * @example
     * // Create many Candidates
     * const candidate = await prisma.candidate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidateCreateManyArgs>(args?: SelectSubset<T, CandidateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Candidates and returns the data saved in the database.
     * @param {CandidateCreateManyAndReturnArgs} args - Arguments to create many Candidates.
     * @example
     * // Create many Candidates
     * const candidate = await prisma.candidate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Candidates and only return the `id`
     * const candidateWithIdOnly = await prisma.candidate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CandidateCreateManyAndReturnArgs>(args?: SelectSubset<T, CandidateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Candidate.
     * @param {CandidateDeleteArgs} args - Arguments to delete one Candidate.
     * @example
     * // Delete one Candidate
     * const Candidate = await prisma.candidate.delete({
     *   where: {
     *     // ... filter to delete one Candidate
     *   }
     * })
     * 
     */
    delete<T extends CandidateDeleteArgs>(args: SelectSubset<T, CandidateDeleteArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Candidate.
     * @param {CandidateUpdateArgs} args - Arguments to update one Candidate.
     * @example
     * // Update one Candidate
     * const candidate = await prisma.candidate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidateUpdateArgs>(args: SelectSubset<T, CandidateUpdateArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Candidates.
     * @param {CandidateDeleteManyArgs} args - Arguments to filter Candidates to delete.
     * @example
     * // Delete a few Candidates
     * const { count } = await prisma.candidate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidateDeleteManyArgs>(args?: SelectSubset<T, CandidateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Candidates
     * const candidate = await prisma.candidate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidateUpdateManyArgs>(args: SelectSubset<T, CandidateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidates and returns the data updated in the database.
     * @param {CandidateUpdateManyAndReturnArgs} args - Arguments to update many Candidates.
     * @example
     * // Update many Candidates
     * const candidate = await prisma.candidate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Candidates and only return the `id`
     * const candidateWithIdOnly = await prisma.candidate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CandidateUpdateManyAndReturnArgs>(args: SelectSubset<T, CandidateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Candidate.
     * @param {CandidateUpsertArgs} args - Arguments to update or create a Candidate.
     * @example
     * // Update or create a Candidate
     * const candidate = await prisma.candidate.upsert({
     *   create: {
     *     // ... data to create a Candidate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Candidate we want to update
     *   }
     * })
     */
    upsert<T extends CandidateUpsertArgs>(args: SelectSubset<T, CandidateUpsertArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateCountArgs} args - Arguments to filter Candidates to count.
     * @example
     * // Count the number of Candidates
     * const count = await prisma.candidate.count({
     *   where: {
     *     // ... the filter for the Candidates we want to count
     *   }
     * })
    **/
    count<T extends CandidateCountArgs>(
      args?: Subset<T, CandidateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Candidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CandidateAggregateArgs>(args: Subset<T, CandidateAggregateArgs>): Prisma.PrismaPromise<GetCandidateAggregateType<T>>

    /**
     * Group by Candidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CandidateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidateGroupByArgs['orderBy'] }
        : { orderBy?: CandidateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CandidateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Candidate model
   */
  readonly fields: CandidateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Candidate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    election<T extends ElectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ElectionDefaultArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    votes<T extends Candidate$votesArgs<ExtArgs> = {}>(args?: Subset<T, Candidate$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Candidate model
   */
  interface CandidateFieldRefs {
    readonly id: FieldRef<"Candidate", 'String'>
    readonly name: FieldRef<"Candidate", 'String'>
    readonly party: FieldRef<"Candidate", 'String'>
    readonly electionId: FieldRef<"Candidate", 'String'>
    readonly createdAt: FieldRef<"Candidate", 'DateTime'>
    readonly updatedAt: FieldRef<"Candidate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Candidate findUnique
   */
  export type CandidateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate findUniqueOrThrow
   */
  export type CandidateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate findFirst
   */
  export type CandidateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidates.
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidates.
     */
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate findFirstOrThrow
   */
  export type CandidateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidates.
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidates.
     */
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate findMany
   */
  export type CandidateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidates to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Candidates.
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate create
   */
  export type CandidateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * The data needed to create a Candidate.
     */
    data: XOR<CandidateCreateInput, CandidateUncheckedCreateInput>
  }

  /**
   * Candidate createMany
   */
  export type CandidateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Candidates.
     */
    data: CandidateCreateManyInput | CandidateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Candidate createManyAndReturn
   */
  export type CandidateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * The data used to create many Candidates.
     */
    data: CandidateCreateManyInput | CandidateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Candidate update
   */
  export type CandidateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * The data needed to update a Candidate.
     */
    data: XOR<CandidateUpdateInput, CandidateUncheckedUpdateInput>
    /**
     * Choose, which Candidate to update.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate updateMany
   */
  export type CandidateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Candidates.
     */
    data: XOR<CandidateUpdateManyMutationInput, CandidateUncheckedUpdateManyInput>
    /**
     * Filter which Candidates to update
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to update.
     */
    limit?: number
  }

  /**
   * Candidate updateManyAndReturn
   */
  export type CandidateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * The data used to update Candidates.
     */
    data: XOR<CandidateUpdateManyMutationInput, CandidateUncheckedUpdateManyInput>
    /**
     * Filter which Candidates to update
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Candidate upsert
   */
  export type CandidateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * The filter to search for the Candidate to update in case it exists.
     */
    where: CandidateWhereUniqueInput
    /**
     * In case the Candidate found by the `where` argument doesn't exist, create a new Candidate with this data.
     */
    create: XOR<CandidateCreateInput, CandidateUncheckedCreateInput>
    /**
     * In case the Candidate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidateUpdateInput, CandidateUncheckedUpdateInput>
  }

  /**
   * Candidate delete
   */
  export type CandidateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter which Candidate to delete.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate deleteMany
   */
  export type CandidateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidates to delete
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to delete.
     */
    limit?: number
  }

  /**
   * Candidate.votes
   */
  export type Candidate$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Candidate without action
   */
  export type CandidateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
  }


  /**
   * Model Vote
   */

  export type AggregateVote = {
    _count: VoteCountAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  export type VoteMinAggregateOutputType = {
    id: string | null
    voterId: string | null
    candidateId: string | null
    electionId: string | null
    createdAt: Date | null
  }

  export type VoteMaxAggregateOutputType = {
    id: string | null
    voterId: string | null
    candidateId: string | null
    electionId: string | null
    createdAt: Date | null
  }

  export type VoteCountAggregateOutputType = {
    id: number
    voterId: number
    candidateId: number
    electionId: number
    createdAt: number
    _all: number
  }


  export type VoteMinAggregateInputType = {
    id?: true
    voterId?: true
    candidateId?: true
    electionId?: true
    createdAt?: true
  }

  export type VoteMaxAggregateInputType = {
    id?: true
    voterId?: true
    candidateId?: true
    electionId?: true
    createdAt?: true
  }

  export type VoteCountAggregateInputType = {
    id?: true
    voterId?: true
    candidateId?: true
    electionId?: true
    createdAt?: true
    _all?: true
  }

  export type VoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vote to aggregate.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Votes
    **/
    _count?: true | VoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoteMaxAggregateInputType
  }

  export type GetVoteAggregateType<T extends VoteAggregateArgs> = {
        [P in keyof T & keyof AggregateVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVote[P]>
      : GetScalarType<T[P], AggregateVote[P]>
  }




  export type VoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithAggregationInput | VoteOrderByWithAggregationInput[]
    by: VoteScalarFieldEnum[] | VoteScalarFieldEnum
    having?: VoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoteCountAggregateInputType | true
    _min?: VoteMinAggregateInputType
    _max?: VoteMaxAggregateInputType
  }

  export type VoteGroupByOutputType = {
    id: string
    voterId: string
    candidateId: string
    electionId: string
    createdAt: Date
    _count: VoteCountAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  type GetVoteGroupByPayload<T extends VoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoteGroupByOutputType[P]>
            : GetScalarType<T[P], VoteGroupByOutputType[P]>
        }
      >
    >


  export type VoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    voterId?: boolean
    candidateId?: boolean
    electionId?: boolean
    createdAt?: boolean
    voter?: boolean | VoterDefaultArgs<ExtArgs>
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
    election?: boolean | ElectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    voterId?: boolean
    candidateId?: boolean
    electionId?: boolean
    createdAt?: boolean
    voter?: boolean | VoterDefaultArgs<ExtArgs>
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
    election?: boolean | ElectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    voterId?: boolean
    candidateId?: boolean
    electionId?: boolean
    createdAt?: boolean
    voter?: boolean | VoterDefaultArgs<ExtArgs>
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
    election?: boolean | ElectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectScalar = {
    id?: boolean
    voterId?: boolean
    candidateId?: boolean
    electionId?: boolean
    createdAt?: boolean
  }

  export type VoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "voterId" | "candidateId" | "electionId" | "createdAt", ExtArgs["result"]["vote"]>
  export type VoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voter?: boolean | VoterDefaultArgs<ExtArgs>
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
    election?: boolean | ElectionDefaultArgs<ExtArgs>
  }
  export type VoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voter?: boolean | VoterDefaultArgs<ExtArgs>
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
    election?: boolean | ElectionDefaultArgs<ExtArgs>
  }
  export type VoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voter?: boolean | VoterDefaultArgs<ExtArgs>
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
    election?: boolean | ElectionDefaultArgs<ExtArgs>
  }

  export type $VotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vote"
    objects: {
      voter: Prisma.$VoterPayload<ExtArgs>
      candidate: Prisma.$CandidatePayload<ExtArgs>
      election: Prisma.$ElectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      voterId: string
      candidateId: string
      electionId: string
      createdAt: Date
    }, ExtArgs["result"]["vote"]>
    composites: {}
  }

  type VoteGetPayload<S extends boolean | null | undefined | VoteDefaultArgs> = $Result.GetResult<Prisma.$VotePayload, S>

  type VoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoteCountAggregateInputType | true
    }

  export interface VoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vote'], meta: { name: 'Vote' } }
    /**
     * Find zero or one Vote that matches the filter.
     * @param {VoteFindUniqueArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoteFindUniqueArgs>(args: SelectSubset<T, VoteFindUniqueArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoteFindUniqueOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoteFindUniqueOrThrowArgs>(args: SelectSubset<T, VoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoteFindFirstArgs>(args?: SelectSubset<T, VoteFindFirstArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoteFindFirstOrThrowArgs>(args?: SelectSubset<T, VoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Votes
     * const votes = await prisma.vote.findMany()
     * 
     * // Get first 10 Votes
     * const votes = await prisma.vote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voteWithIdOnly = await prisma.vote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoteFindManyArgs>(args?: SelectSubset<T, VoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vote.
     * @param {VoteCreateArgs} args - Arguments to create a Vote.
     * @example
     * // Create one Vote
     * const Vote = await prisma.vote.create({
     *   data: {
     *     // ... data to create a Vote
     *   }
     * })
     * 
     */
    create<T extends VoteCreateArgs>(args: SelectSubset<T, VoteCreateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Votes.
     * @param {VoteCreateManyArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoteCreateManyArgs>(args?: SelectSubset<T, VoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Votes and returns the data saved in the database.
     * @param {VoteCreateManyAndReturnArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Votes and only return the `id`
     * const voteWithIdOnly = await prisma.vote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoteCreateManyAndReturnArgs>(args?: SelectSubset<T, VoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vote.
     * @param {VoteDeleteArgs} args - Arguments to delete one Vote.
     * @example
     * // Delete one Vote
     * const Vote = await prisma.vote.delete({
     *   where: {
     *     // ... filter to delete one Vote
     *   }
     * })
     * 
     */
    delete<T extends VoteDeleteArgs>(args: SelectSubset<T, VoteDeleteArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vote.
     * @param {VoteUpdateArgs} args - Arguments to update one Vote.
     * @example
     * // Update one Vote
     * const vote = await prisma.vote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoteUpdateArgs>(args: SelectSubset<T, VoteUpdateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Votes.
     * @param {VoteDeleteManyArgs} args - Arguments to filter Votes to delete.
     * @example
     * // Delete a few Votes
     * const { count } = await prisma.vote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoteDeleteManyArgs>(args?: SelectSubset<T, VoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoteUpdateManyArgs>(args: SelectSubset<T, VoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes and returns the data updated in the database.
     * @param {VoteUpdateManyAndReturnArgs} args - Arguments to update many Votes.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Votes and only return the `id`
     * const voteWithIdOnly = await prisma.vote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VoteUpdateManyAndReturnArgs>(args: SelectSubset<T, VoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vote.
     * @param {VoteUpsertArgs} args - Arguments to update or create a Vote.
     * @example
     * // Update or create a Vote
     * const vote = await prisma.vote.upsert({
     *   create: {
     *     // ... data to create a Vote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vote we want to update
     *   }
     * })
     */
    upsert<T extends VoteUpsertArgs>(args: SelectSubset<T, VoteUpsertArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteCountArgs} args - Arguments to filter Votes to count.
     * @example
     * // Count the number of Votes
     * const count = await prisma.vote.count({
     *   where: {
     *     // ... the filter for the Votes we want to count
     *   }
     * })
    **/
    count<T extends VoteCountArgs>(
      args?: Subset<T, VoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VoteAggregateArgs>(args: Subset<T, VoteAggregateArgs>): Prisma.PrismaPromise<GetVoteAggregateType<T>>

    /**
     * Group by Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoteGroupByArgs['orderBy'] }
        : { orderBy?: VoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vote model
   */
  readonly fields: VoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    voter<T extends VoterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VoterDefaultArgs<ExtArgs>>): Prisma__VoterClient<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    candidate<T extends CandidateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidateDefaultArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    election<T extends ElectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ElectionDefaultArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vote model
   */
  interface VoteFieldRefs {
    readonly id: FieldRef<"Vote", 'String'>
    readonly voterId: FieldRef<"Vote", 'String'>
    readonly candidateId: FieldRef<"Vote", 'String'>
    readonly electionId: FieldRef<"Vote", 'String'>
    readonly createdAt: FieldRef<"Vote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vote findUnique
   */
  export type VoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findUniqueOrThrow
   */
  export type VoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findFirst
   */
  export type VoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findFirstOrThrow
   */
  export type VoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findMany
   */
  export type VoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Votes to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote create
   */
  export type VoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Vote.
     */
    data: XOR<VoteCreateInput, VoteUncheckedCreateInput>
  }

  /**
   * Vote createMany
   */
  export type VoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Votes.
     */
    data: VoteCreateManyInput | VoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vote createManyAndReturn
   */
  export type VoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * The data used to create many Votes.
     */
    data: VoteCreateManyInput | VoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vote update
   */
  export type VoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Vote.
     */
    data: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
    /**
     * Choose, which Vote to update.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote updateMany
   */
  export type VoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Votes.
     */
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyInput>
    /**
     * Filter which Votes to update
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to update.
     */
    limit?: number
  }

  /**
   * Vote updateManyAndReturn
   */
  export type VoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * The data used to update Votes.
     */
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyInput>
    /**
     * Filter which Votes to update
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vote upsert
   */
  export type VoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Vote to update in case it exists.
     */
    where: VoteWhereUniqueInput
    /**
     * In case the Vote found by the `where` argument doesn't exist, create a new Vote with this data.
     */
    create: XOR<VoteCreateInput, VoteUncheckedCreateInput>
    /**
     * In case the Vote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
  }

  /**
   * Vote delete
   */
  export type VoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter which Vote to delete.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote deleteMany
   */
  export type VoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Votes to delete
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to delete.
     */
    limit?: number
  }

  /**
   * Vote without action
   */
  export type VoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
  }


  /**
   * Model MultiKey
   */

  export type AggregateMultiKey = {
    _count: MultiKeyCountAggregateOutputType | null
    _min: MultiKeyMinAggregateOutputType | null
    _max: MultiKeyMaxAggregateOutputType | null
  }

  export type MultiKeyMinAggregateOutputType = {
    id: string | null
    electionId: string | null
    adminId: string | null
    keyValue: string | null
    status: $Enums.KeyStatus | null
    createdAt: Date | null
  }

  export type MultiKeyMaxAggregateOutputType = {
    id: string | null
    electionId: string | null
    adminId: string | null
    keyValue: string | null
    status: $Enums.KeyStatus | null
    createdAt: Date | null
  }

  export type MultiKeyCountAggregateOutputType = {
    id: number
    electionId: number
    adminId: number
    keyValue: number
    status: number
    createdAt: number
    _all: number
  }


  export type MultiKeyMinAggregateInputType = {
    id?: true
    electionId?: true
    adminId?: true
    keyValue?: true
    status?: true
    createdAt?: true
  }

  export type MultiKeyMaxAggregateInputType = {
    id?: true
    electionId?: true
    adminId?: true
    keyValue?: true
    status?: true
    createdAt?: true
  }

  export type MultiKeyCountAggregateInputType = {
    id?: true
    electionId?: true
    adminId?: true
    keyValue?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type MultiKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MultiKey to aggregate.
     */
    where?: MultiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MultiKeys to fetch.
     */
    orderBy?: MultiKeyOrderByWithRelationInput | MultiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MultiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MultiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MultiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MultiKeys
    **/
    _count?: true | MultiKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MultiKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MultiKeyMaxAggregateInputType
  }

  export type GetMultiKeyAggregateType<T extends MultiKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateMultiKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMultiKey[P]>
      : GetScalarType<T[P], AggregateMultiKey[P]>
  }




  export type MultiKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MultiKeyWhereInput
    orderBy?: MultiKeyOrderByWithAggregationInput | MultiKeyOrderByWithAggregationInput[]
    by: MultiKeyScalarFieldEnum[] | MultiKeyScalarFieldEnum
    having?: MultiKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MultiKeyCountAggregateInputType | true
    _min?: MultiKeyMinAggregateInputType
    _max?: MultiKeyMaxAggregateInputType
  }

  export type MultiKeyGroupByOutputType = {
    id: string
    electionId: string
    adminId: string | null
    keyValue: string
    status: $Enums.KeyStatus
    createdAt: Date
    _count: MultiKeyCountAggregateOutputType | null
    _min: MultiKeyMinAggregateOutputType | null
    _max: MultiKeyMaxAggregateOutputType | null
  }

  type GetMultiKeyGroupByPayload<T extends MultiKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MultiKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MultiKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MultiKeyGroupByOutputType[P]>
            : GetScalarType<T[P], MultiKeyGroupByOutputType[P]>
        }
      >
    >


  export type MultiKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    electionId?: boolean
    adminId?: boolean
    keyValue?: boolean
    status?: boolean
    createdAt?: boolean
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    admin?: boolean | MultiKey$adminArgs<ExtArgs>
  }, ExtArgs["result"]["multiKey"]>

  export type MultiKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    electionId?: boolean
    adminId?: boolean
    keyValue?: boolean
    status?: boolean
    createdAt?: boolean
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    admin?: boolean | MultiKey$adminArgs<ExtArgs>
  }, ExtArgs["result"]["multiKey"]>

  export type MultiKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    electionId?: boolean
    adminId?: boolean
    keyValue?: boolean
    status?: boolean
    createdAt?: boolean
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    admin?: boolean | MultiKey$adminArgs<ExtArgs>
  }, ExtArgs["result"]["multiKey"]>

  export type MultiKeySelectScalar = {
    id?: boolean
    electionId?: boolean
    adminId?: boolean
    keyValue?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type MultiKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "electionId" | "adminId" | "keyValue" | "status" | "createdAt", ExtArgs["result"]["multiKey"]>
  export type MultiKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    admin?: boolean | MultiKey$adminArgs<ExtArgs>
  }
  export type MultiKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    admin?: boolean | MultiKey$adminArgs<ExtArgs>
  }
  export type MultiKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    admin?: boolean | MultiKey$adminArgs<ExtArgs>
  }

  export type $MultiKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MultiKey"
    objects: {
      election: Prisma.$ElectionPayload<ExtArgs>
      admin: Prisma.$AdminPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      electionId: string
      adminId: string | null
      keyValue: string
      status: $Enums.KeyStatus
      createdAt: Date
    }, ExtArgs["result"]["multiKey"]>
    composites: {}
  }

  type MultiKeyGetPayload<S extends boolean | null | undefined | MultiKeyDefaultArgs> = $Result.GetResult<Prisma.$MultiKeyPayload, S>

  type MultiKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MultiKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MultiKeyCountAggregateInputType | true
    }

  export interface MultiKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MultiKey'], meta: { name: 'MultiKey' } }
    /**
     * Find zero or one MultiKey that matches the filter.
     * @param {MultiKeyFindUniqueArgs} args - Arguments to find a MultiKey
     * @example
     * // Get one MultiKey
     * const multiKey = await prisma.multiKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MultiKeyFindUniqueArgs>(args: SelectSubset<T, MultiKeyFindUniqueArgs<ExtArgs>>): Prisma__MultiKeyClient<$Result.GetResult<Prisma.$MultiKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MultiKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MultiKeyFindUniqueOrThrowArgs} args - Arguments to find a MultiKey
     * @example
     * // Get one MultiKey
     * const multiKey = await prisma.multiKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MultiKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, MultiKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MultiKeyClient<$Result.GetResult<Prisma.$MultiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MultiKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultiKeyFindFirstArgs} args - Arguments to find a MultiKey
     * @example
     * // Get one MultiKey
     * const multiKey = await prisma.multiKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MultiKeyFindFirstArgs>(args?: SelectSubset<T, MultiKeyFindFirstArgs<ExtArgs>>): Prisma__MultiKeyClient<$Result.GetResult<Prisma.$MultiKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MultiKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultiKeyFindFirstOrThrowArgs} args - Arguments to find a MultiKey
     * @example
     * // Get one MultiKey
     * const multiKey = await prisma.multiKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MultiKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, MultiKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__MultiKeyClient<$Result.GetResult<Prisma.$MultiKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MultiKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultiKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MultiKeys
     * const multiKeys = await prisma.multiKey.findMany()
     * 
     * // Get first 10 MultiKeys
     * const multiKeys = await prisma.multiKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const multiKeyWithIdOnly = await prisma.multiKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MultiKeyFindManyArgs>(args?: SelectSubset<T, MultiKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MultiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MultiKey.
     * @param {MultiKeyCreateArgs} args - Arguments to create a MultiKey.
     * @example
     * // Create one MultiKey
     * const MultiKey = await prisma.multiKey.create({
     *   data: {
     *     // ... data to create a MultiKey
     *   }
     * })
     * 
     */
    create<T extends MultiKeyCreateArgs>(args: SelectSubset<T, MultiKeyCreateArgs<ExtArgs>>): Prisma__MultiKeyClient<$Result.GetResult<Prisma.$MultiKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MultiKeys.
     * @param {MultiKeyCreateManyArgs} args - Arguments to create many MultiKeys.
     * @example
     * // Create many MultiKeys
     * const multiKey = await prisma.multiKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MultiKeyCreateManyArgs>(args?: SelectSubset<T, MultiKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MultiKeys and returns the data saved in the database.
     * @param {MultiKeyCreateManyAndReturnArgs} args - Arguments to create many MultiKeys.
     * @example
     * // Create many MultiKeys
     * const multiKey = await prisma.multiKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MultiKeys and only return the `id`
     * const multiKeyWithIdOnly = await prisma.multiKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MultiKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, MultiKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MultiKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MultiKey.
     * @param {MultiKeyDeleteArgs} args - Arguments to delete one MultiKey.
     * @example
     * // Delete one MultiKey
     * const MultiKey = await prisma.multiKey.delete({
     *   where: {
     *     // ... filter to delete one MultiKey
     *   }
     * })
     * 
     */
    delete<T extends MultiKeyDeleteArgs>(args: SelectSubset<T, MultiKeyDeleteArgs<ExtArgs>>): Prisma__MultiKeyClient<$Result.GetResult<Prisma.$MultiKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MultiKey.
     * @param {MultiKeyUpdateArgs} args - Arguments to update one MultiKey.
     * @example
     * // Update one MultiKey
     * const multiKey = await prisma.multiKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MultiKeyUpdateArgs>(args: SelectSubset<T, MultiKeyUpdateArgs<ExtArgs>>): Prisma__MultiKeyClient<$Result.GetResult<Prisma.$MultiKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MultiKeys.
     * @param {MultiKeyDeleteManyArgs} args - Arguments to filter MultiKeys to delete.
     * @example
     * // Delete a few MultiKeys
     * const { count } = await prisma.multiKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MultiKeyDeleteManyArgs>(args?: SelectSubset<T, MultiKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MultiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultiKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MultiKeys
     * const multiKey = await prisma.multiKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MultiKeyUpdateManyArgs>(args: SelectSubset<T, MultiKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MultiKeys and returns the data updated in the database.
     * @param {MultiKeyUpdateManyAndReturnArgs} args - Arguments to update many MultiKeys.
     * @example
     * // Update many MultiKeys
     * const multiKey = await prisma.multiKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MultiKeys and only return the `id`
     * const multiKeyWithIdOnly = await prisma.multiKey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MultiKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, MultiKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MultiKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MultiKey.
     * @param {MultiKeyUpsertArgs} args - Arguments to update or create a MultiKey.
     * @example
     * // Update or create a MultiKey
     * const multiKey = await prisma.multiKey.upsert({
     *   create: {
     *     // ... data to create a MultiKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MultiKey we want to update
     *   }
     * })
     */
    upsert<T extends MultiKeyUpsertArgs>(args: SelectSubset<T, MultiKeyUpsertArgs<ExtArgs>>): Prisma__MultiKeyClient<$Result.GetResult<Prisma.$MultiKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MultiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultiKeyCountArgs} args - Arguments to filter MultiKeys to count.
     * @example
     * // Count the number of MultiKeys
     * const count = await prisma.multiKey.count({
     *   where: {
     *     // ... the filter for the MultiKeys we want to count
     *   }
     * })
    **/
    count<T extends MultiKeyCountArgs>(
      args?: Subset<T, MultiKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MultiKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MultiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultiKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MultiKeyAggregateArgs>(args: Subset<T, MultiKeyAggregateArgs>): Prisma.PrismaPromise<GetMultiKeyAggregateType<T>>

    /**
     * Group by MultiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultiKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MultiKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MultiKeyGroupByArgs['orderBy'] }
        : { orderBy?: MultiKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MultiKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMultiKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MultiKey model
   */
  readonly fields: MultiKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MultiKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MultiKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    election<T extends ElectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ElectionDefaultArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    admin<T extends MultiKey$adminArgs<ExtArgs> = {}>(args?: Subset<T, MultiKey$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MultiKey model
   */
  interface MultiKeyFieldRefs {
    readonly id: FieldRef<"MultiKey", 'String'>
    readonly electionId: FieldRef<"MultiKey", 'String'>
    readonly adminId: FieldRef<"MultiKey", 'String'>
    readonly keyValue: FieldRef<"MultiKey", 'String'>
    readonly status: FieldRef<"MultiKey", 'KeyStatus'>
    readonly createdAt: FieldRef<"MultiKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MultiKey findUnique
   */
  export type MultiKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiKey
     */
    select?: MultiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiKey
     */
    omit?: MultiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiKeyInclude<ExtArgs> | null
    /**
     * Filter, which MultiKey to fetch.
     */
    where: MultiKeyWhereUniqueInput
  }

  /**
   * MultiKey findUniqueOrThrow
   */
  export type MultiKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiKey
     */
    select?: MultiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiKey
     */
    omit?: MultiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiKeyInclude<ExtArgs> | null
    /**
     * Filter, which MultiKey to fetch.
     */
    where: MultiKeyWhereUniqueInput
  }

  /**
   * MultiKey findFirst
   */
  export type MultiKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiKey
     */
    select?: MultiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiKey
     */
    omit?: MultiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiKeyInclude<ExtArgs> | null
    /**
     * Filter, which MultiKey to fetch.
     */
    where?: MultiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MultiKeys to fetch.
     */
    orderBy?: MultiKeyOrderByWithRelationInput | MultiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MultiKeys.
     */
    cursor?: MultiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MultiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MultiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MultiKeys.
     */
    distinct?: MultiKeyScalarFieldEnum | MultiKeyScalarFieldEnum[]
  }

  /**
   * MultiKey findFirstOrThrow
   */
  export type MultiKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiKey
     */
    select?: MultiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiKey
     */
    omit?: MultiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiKeyInclude<ExtArgs> | null
    /**
     * Filter, which MultiKey to fetch.
     */
    where?: MultiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MultiKeys to fetch.
     */
    orderBy?: MultiKeyOrderByWithRelationInput | MultiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MultiKeys.
     */
    cursor?: MultiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MultiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MultiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MultiKeys.
     */
    distinct?: MultiKeyScalarFieldEnum | MultiKeyScalarFieldEnum[]
  }

  /**
   * MultiKey findMany
   */
  export type MultiKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiKey
     */
    select?: MultiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiKey
     */
    omit?: MultiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiKeyInclude<ExtArgs> | null
    /**
     * Filter, which MultiKeys to fetch.
     */
    where?: MultiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MultiKeys to fetch.
     */
    orderBy?: MultiKeyOrderByWithRelationInput | MultiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MultiKeys.
     */
    cursor?: MultiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MultiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MultiKeys.
     */
    skip?: number
    distinct?: MultiKeyScalarFieldEnum | MultiKeyScalarFieldEnum[]
  }

  /**
   * MultiKey create
   */
  export type MultiKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiKey
     */
    select?: MultiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiKey
     */
    omit?: MultiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a MultiKey.
     */
    data: XOR<MultiKeyCreateInput, MultiKeyUncheckedCreateInput>
  }

  /**
   * MultiKey createMany
   */
  export type MultiKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MultiKeys.
     */
    data: MultiKeyCreateManyInput | MultiKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MultiKey createManyAndReturn
   */
  export type MultiKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiKey
     */
    select?: MultiKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MultiKey
     */
    omit?: MultiKeyOmit<ExtArgs> | null
    /**
     * The data used to create many MultiKeys.
     */
    data: MultiKeyCreateManyInput | MultiKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MultiKey update
   */
  export type MultiKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiKey
     */
    select?: MultiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiKey
     */
    omit?: MultiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a MultiKey.
     */
    data: XOR<MultiKeyUpdateInput, MultiKeyUncheckedUpdateInput>
    /**
     * Choose, which MultiKey to update.
     */
    where: MultiKeyWhereUniqueInput
  }

  /**
   * MultiKey updateMany
   */
  export type MultiKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MultiKeys.
     */
    data: XOR<MultiKeyUpdateManyMutationInput, MultiKeyUncheckedUpdateManyInput>
    /**
     * Filter which MultiKeys to update
     */
    where?: MultiKeyWhereInput
    /**
     * Limit how many MultiKeys to update.
     */
    limit?: number
  }

  /**
   * MultiKey updateManyAndReturn
   */
  export type MultiKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiKey
     */
    select?: MultiKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MultiKey
     */
    omit?: MultiKeyOmit<ExtArgs> | null
    /**
     * The data used to update MultiKeys.
     */
    data: XOR<MultiKeyUpdateManyMutationInput, MultiKeyUncheckedUpdateManyInput>
    /**
     * Filter which MultiKeys to update
     */
    where?: MultiKeyWhereInput
    /**
     * Limit how many MultiKeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiKeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MultiKey upsert
   */
  export type MultiKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiKey
     */
    select?: MultiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiKey
     */
    omit?: MultiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the MultiKey to update in case it exists.
     */
    where: MultiKeyWhereUniqueInput
    /**
     * In case the MultiKey found by the `where` argument doesn't exist, create a new MultiKey with this data.
     */
    create: XOR<MultiKeyCreateInput, MultiKeyUncheckedCreateInput>
    /**
     * In case the MultiKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MultiKeyUpdateInput, MultiKeyUncheckedUpdateInput>
  }

  /**
   * MultiKey delete
   */
  export type MultiKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiKey
     */
    select?: MultiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiKey
     */
    omit?: MultiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiKeyInclude<ExtArgs> | null
    /**
     * Filter which MultiKey to delete.
     */
    where: MultiKeyWhereUniqueInput
  }

  /**
   * MultiKey deleteMany
   */
  export type MultiKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MultiKeys to delete
     */
    where?: MultiKeyWhereInput
    /**
     * Limit how many MultiKeys to delete.
     */
    limit?: number
  }

  /**
   * MultiKey.admin
   */
  export type MultiKey$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * MultiKey without action
   */
  export type MultiKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiKey
     */
    select?: MultiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiKey
     */
    omit?: MultiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiKeyInclude<ExtArgs> | null
  }


  /**
   * Model Log
   */

  export type AggregateLog = {
    _count: LogCountAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  export type LogMinAggregateOutputType = {
    id: string | null
    action: string | null
    adminId: string | null
    electionId: string | null
    createdAt: Date | null
  }

  export type LogMaxAggregateOutputType = {
    id: string | null
    action: string | null
    adminId: string | null
    electionId: string | null
    createdAt: Date | null
  }

  export type LogCountAggregateOutputType = {
    id: number
    action: number
    adminId: number
    electionId: number
    createdAt: number
    _all: number
  }


  export type LogMinAggregateInputType = {
    id?: true
    action?: true
    adminId?: true
    electionId?: true
    createdAt?: true
  }

  export type LogMaxAggregateInputType = {
    id?: true
    action?: true
    adminId?: true
    electionId?: true
    createdAt?: true
  }

  export type LogCountAggregateInputType = {
    id?: true
    action?: true
    adminId?: true
    electionId?: true
    createdAt?: true
    _all?: true
  }

  export type LogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Log to aggregate.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logs
    **/
    _count?: true | LogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogMaxAggregateInputType
  }

  export type GetLogAggregateType<T extends LogAggregateArgs> = {
        [P in keyof T & keyof AggregateLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog[P]>
      : GetScalarType<T[P], AggregateLog[P]>
  }




  export type LogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
    orderBy?: LogOrderByWithAggregationInput | LogOrderByWithAggregationInput[]
    by: LogScalarFieldEnum[] | LogScalarFieldEnum
    having?: LogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogCountAggregateInputType | true
    _min?: LogMinAggregateInputType
    _max?: LogMaxAggregateInputType
  }

  export type LogGroupByOutputType = {
    id: string
    action: string
    adminId: string | null
    electionId: string | null
    createdAt: Date
    _count: LogCountAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  type GetLogGroupByPayload<T extends LogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogGroupByOutputType[P]>
            : GetScalarType<T[P], LogGroupByOutputType[P]>
        }
      >
    >


  export type LogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    adminId?: boolean
    electionId?: boolean
    createdAt?: boolean
    admin?: boolean | Log$adminArgs<ExtArgs>
    election?: boolean | Log$electionArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type LogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    adminId?: boolean
    electionId?: boolean
    createdAt?: boolean
    admin?: boolean | Log$adminArgs<ExtArgs>
    election?: boolean | Log$electionArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type LogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    adminId?: boolean
    electionId?: boolean
    createdAt?: boolean
    admin?: boolean | Log$adminArgs<ExtArgs>
    election?: boolean | Log$electionArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type LogSelectScalar = {
    id?: boolean
    action?: boolean
    adminId?: boolean
    electionId?: boolean
    createdAt?: boolean
  }

  export type LogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "adminId" | "electionId" | "createdAt", ExtArgs["result"]["log"]>
  export type LogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | Log$adminArgs<ExtArgs>
    election?: boolean | Log$electionArgs<ExtArgs>
  }
  export type LogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | Log$adminArgs<ExtArgs>
    election?: boolean | Log$electionArgs<ExtArgs>
  }
  export type LogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | Log$adminArgs<ExtArgs>
    election?: boolean | Log$electionArgs<ExtArgs>
  }

  export type $LogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Log"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs> | null
      election: Prisma.$ElectionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      action: string
      adminId: string | null
      electionId: string | null
      createdAt: Date
    }, ExtArgs["result"]["log"]>
    composites: {}
  }

  type LogGetPayload<S extends boolean | null | undefined | LogDefaultArgs> = $Result.GetResult<Prisma.$LogPayload, S>

  type LogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogCountAggregateInputType | true
    }

  export interface LogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Log'], meta: { name: 'Log' } }
    /**
     * Find zero or one Log that matches the filter.
     * @param {LogFindUniqueArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogFindUniqueArgs>(args: SelectSubset<T, LogFindUniqueArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogFindUniqueOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogFindUniqueOrThrowArgs>(args: SelectSubset<T, LogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogFindFirstArgs>(args?: SelectSubset<T, LogFindFirstArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogFindFirstOrThrowArgs>(args?: SelectSubset<T, LogFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.log.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logWithIdOnly = await prisma.log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogFindManyArgs>(args?: SelectSubset<T, LogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Log.
     * @param {LogCreateArgs} args - Arguments to create a Log.
     * @example
     * // Create one Log
     * const Log = await prisma.log.create({
     *   data: {
     *     // ... data to create a Log
     *   }
     * })
     * 
     */
    create<T extends LogCreateArgs>(args: SelectSubset<T, LogCreateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logs.
     * @param {LogCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogCreateManyArgs>(args?: SelectSubset<T, LogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Logs and returns the data saved in the database.
     * @param {LogCreateManyAndReturnArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Logs and only return the `id`
     * const logWithIdOnly = await prisma.log.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogCreateManyAndReturnArgs>(args?: SelectSubset<T, LogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Log.
     * @param {LogDeleteArgs} args - Arguments to delete one Log.
     * @example
     * // Delete one Log
     * const Log = await prisma.log.delete({
     *   where: {
     *     // ... filter to delete one Log
     *   }
     * })
     * 
     */
    delete<T extends LogDeleteArgs>(args: SelectSubset<T, LogDeleteArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Log.
     * @param {LogUpdateArgs} args - Arguments to update one Log.
     * @example
     * // Update one Log
     * const log = await prisma.log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogUpdateArgs>(args: SelectSubset<T, LogUpdateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logs.
     * @param {LogDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogDeleteManyArgs>(args?: SelectSubset<T, LogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogUpdateManyArgs>(args: SelectSubset<T, LogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs and returns the data updated in the database.
     * @param {LogUpdateManyAndReturnArgs} args - Arguments to update many Logs.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Logs and only return the `id`
     * const logWithIdOnly = await prisma.log.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LogUpdateManyAndReturnArgs>(args: SelectSubset<T, LogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Log.
     * @param {LogUpsertArgs} args - Arguments to update or create a Log.
     * @example
     * // Update or create a Log
     * const log = await prisma.log.upsert({
     *   create: {
     *     // ... data to create a Log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log we want to update
     *   }
     * })
     */
    upsert<T extends LogUpsertArgs>(args: SelectSubset<T, LogUpsertArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.log.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends LogCountArgs>(
      args?: Subset<T, LogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogAggregateArgs>(args: Subset<T, LogAggregateArgs>): Prisma.PrismaPromise<GetLogAggregateType<T>>

    /**
     * Group by Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogGroupByArgs['orderBy'] }
        : { orderBy?: LogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Log model
   */
  readonly fields: LogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends Log$adminArgs<ExtArgs> = {}>(args?: Subset<T, Log$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    election<T extends Log$electionArgs<ExtArgs> = {}>(args?: Subset<T, Log$electionArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Log model
   */
  interface LogFieldRefs {
    readonly id: FieldRef<"Log", 'String'>
    readonly action: FieldRef<"Log", 'String'>
    readonly adminId: FieldRef<"Log", 'String'>
    readonly electionId: FieldRef<"Log", 'String'>
    readonly createdAt: FieldRef<"Log", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Log findUnique
   */
  export type LogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findUniqueOrThrow
   */
  export type LogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findFirst
   */
  export type LogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findFirstOrThrow
   */
  export type LogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findMany
   */
  export type LogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Logs to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log create
   */
  export type LogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The data needed to create a Log.
     */
    data: XOR<LogCreateInput, LogUncheckedCreateInput>
  }

  /**
   * Log createMany
   */
  export type LogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Log createManyAndReturn
   */
  export type LogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Log update
   */
  export type LogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The data needed to update a Log.
     */
    data: XOR<LogUpdateInput, LogUncheckedUpdateInput>
    /**
     * Choose, which Log to update.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log updateMany
   */
  export type LogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
  }

  /**
   * Log updateManyAndReturn
   */
  export type LogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Log upsert
   */
  export type LogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The filter to search for the Log to update in case it exists.
     */
    where: LogWhereUniqueInput
    /**
     * In case the Log found by the `where` argument doesn't exist, create a new Log with this data.
     */
    create: XOR<LogCreateInput, LogUncheckedCreateInput>
    /**
     * In case the Log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogUpdateInput, LogUncheckedUpdateInput>
  }

  /**
   * Log delete
   */
  export type LogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter which Log to delete.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log deleteMany
   */
  export type LogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logs to delete
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to delete.
     */
    limit?: number
  }

  /**
   * Log.admin
   */
  export type Log$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * Log.election
   */
  export type Log$electionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    where?: ElectionWhereInput
  }

  /**
   * Log without action
   */
  export type LogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    sentAt: Date | null
    adminId: string | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    sentAt: Date | null
    adminId: string | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    sentAt: number
    adminId: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    sentAt?: true
    adminId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    sentAt?: true
    adminId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    sentAt?: true
    adminId?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    content: string
    sentAt: Date
    adminId: string | null
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    sentAt?: boolean
    adminId?: boolean
    admin?: boolean | Message$adminArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    sentAt?: boolean
    adminId?: boolean
    admin?: boolean | Message$adminArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    sentAt?: boolean
    adminId?: boolean
    admin?: boolean | Message$adminArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    sentAt?: boolean
    adminId?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "sentAt" | "adminId", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | Message$adminArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | Message$adminArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | Message$adminArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      sentAt: Date
      adminId: string | null
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends Message$adminArgs<ExtArgs> = {}>(args?: Subset<T, Message$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly sentAt: FieldRef<"Message", 'DateTime'>
    readonly adminId: FieldRef<"Message", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message.admin
   */
  export type Message$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const ElectionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    startDate: 'startDate',
    endDate: 'endDate',
    timezone: 'timezone',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ElectionScalarFieldEnum = (typeof ElectionScalarFieldEnum)[keyof typeof ElectionScalarFieldEnum]


  export const VoterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    registration: 'registration',
    otp: 'otp',
    otpExpiry: 'otpExpiry',
    lastLoginAt: 'lastLoginAt',
    hasVoted: 'hasVoted',
    votedAt: 'votedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VoterScalarFieldEnum = (typeof VoterScalarFieldEnum)[keyof typeof VoterScalarFieldEnum]


  export const VoterInElectionScalarFieldEnum: {
    id: 'id',
    voterId: 'voterId',
    electionId: 'electionId',
    hasVoted: 'hasVoted',
    createdAt: 'createdAt'
  };

  export type VoterInElectionScalarFieldEnum = (typeof VoterInElectionScalarFieldEnum)[keyof typeof VoterInElectionScalarFieldEnum]


  export const CandidateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    party: 'party',
    electionId: 'electionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CandidateScalarFieldEnum = (typeof CandidateScalarFieldEnum)[keyof typeof CandidateScalarFieldEnum]


  export const VoteScalarFieldEnum: {
    id: 'id',
    voterId: 'voterId',
    candidateId: 'candidateId',
    electionId: 'electionId',
    createdAt: 'createdAt'
  };

  export type VoteScalarFieldEnum = (typeof VoteScalarFieldEnum)[keyof typeof VoteScalarFieldEnum]


  export const MultiKeyScalarFieldEnum: {
    id: 'id',
    electionId: 'electionId',
    adminId: 'adminId',
    keyValue: 'keyValue',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type MultiKeyScalarFieldEnum = (typeof MultiKeyScalarFieldEnum)[keyof typeof MultiKeyScalarFieldEnum]


  export const LogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    adminId: 'adminId',
    electionId: 'electionId',
    createdAt: 'createdAt'
  };

  export type LogScalarFieldEnum = (typeof LogScalarFieldEnum)[keyof typeof LogScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    sentAt: 'sentAt',
    adminId: 'adminId'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ElectionStatus'
   */
  export type EnumElectionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ElectionStatus'>
    


  /**
   * Reference to a field of type 'ElectionStatus[]'
   */
  export type ListEnumElectionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ElectionStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'KeyStatus'
   */
  export type EnumKeyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KeyStatus'>
    


  /**
   * Reference to a field of type 'KeyStatus[]'
   */
  export type ListEnumKeyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KeyStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    name?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    logs?: LogListRelationFilter
    multiKeys?: MultiKeyListRelationFilter
    messages?: MessageListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    logs?: LogOrderByRelationAggregateInput
    multiKeys?: MultiKeyOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    name?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    logs?: LogListRelationFilter
    multiKeys?: MultiKeyListRelationFilter
    messages?: MessageListRelationFilter
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    name?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type ElectionWhereInput = {
    AND?: ElectionWhereInput | ElectionWhereInput[]
    OR?: ElectionWhereInput[]
    NOT?: ElectionWhereInput | ElectionWhereInput[]
    id?: StringFilter<"Election"> | string
    name?: StringFilter<"Election"> | string
    startDate?: DateTimeNullableFilter<"Election"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Election"> | Date | string | null
    timezone?: StringFilter<"Election"> | string
    status?: EnumElectionStatusFilter<"Election"> | $Enums.ElectionStatus
    createdAt?: DateTimeFilter<"Election"> | Date | string
    updatedAt?: DateTimeFilter<"Election"> | Date | string
    candidates?: CandidateListRelationFilter
    voters?: VoterInElectionListRelationFilter
    multiKeys?: MultiKeyListRelationFilter
    votes?: VoteListRelationFilter
    logs?: LogListRelationFilter
  }

  export type ElectionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    timezone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    candidates?: CandidateOrderByRelationAggregateInput
    voters?: VoterInElectionOrderByRelationAggregateInput
    multiKeys?: MultiKeyOrderByRelationAggregateInput
    votes?: VoteOrderByRelationAggregateInput
    logs?: LogOrderByRelationAggregateInput
  }

  export type ElectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ElectionWhereInput | ElectionWhereInput[]
    OR?: ElectionWhereInput[]
    NOT?: ElectionWhereInput | ElectionWhereInput[]
    name?: StringFilter<"Election"> | string
    startDate?: DateTimeNullableFilter<"Election"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Election"> | Date | string | null
    timezone?: StringFilter<"Election"> | string
    status?: EnumElectionStatusFilter<"Election"> | $Enums.ElectionStatus
    createdAt?: DateTimeFilter<"Election"> | Date | string
    updatedAt?: DateTimeFilter<"Election"> | Date | string
    candidates?: CandidateListRelationFilter
    voters?: VoterInElectionListRelationFilter
    multiKeys?: MultiKeyListRelationFilter
    votes?: VoteListRelationFilter
    logs?: LogListRelationFilter
  }, "id">

  export type ElectionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    timezone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ElectionCountOrderByAggregateInput
    _max?: ElectionMaxOrderByAggregateInput
    _min?: ElectionMinOrderByAggregateInput
  }

  export type ElectionScalarWhereWithAggregatesInput = {
    AND?: ElectionScalarWhereWithAggregatesInput | ElectionScalarWhereWithAggregatesInput[]
    OR?: ElectionScalarWhereWithAggregatesInput[]
    NOT?: ElectionScalarWhereWithAggregatesInput | ElectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Election"> | string
    name?: StringWithAggregatesFilter<"Election"> | string
    startDate?: DateTimeNullableWithAggregatesFilter<"Election"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Election"> | Date | string | null
    timezone?: StringWithAggregatesFilter<"Election"> | string
    status?: EnumElectionStatusWithAggregatesFilter<"Election"> | $Enums.ElectionStatus
    createdAt?: DateTimeWithAggregatesFilter<"Election"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Election"> | Date | string
  }

  export type VoterWhereInput = {
    AND?: VoterWhereInput | VoterWhereInput[]
    OR?: VoterWhereInput[]
    NOT?: VoterWhereInput | VoterWhereInput[]
    id?: StringFilter<"Voter"> | string
    name?: StringFilter<"Voter"> | string
    email?: StringNullableFilter<"Voter"> | string | null
    registration?: StringFilter<"Voter"> | string
    otp?: StringNullableFilter<"Voter"> | string | null
    otpExpiry?: DateTimeNullableFilter<"Voter"> | Date | string | null
    lastLoginAt?: DateTimeNullableFilter<"Voter"> | Date | string | null
    hasVoted?: BoolFilter<"Voter"> | boolean
    votedAt?: DateTimeNullableFilter<"Voter"> | Date | string | null
    createdAt?: DateTimeFilter<"Voter"> | Date | string
    updatedAt?: DateTimeFilter<"Voter"> | Date | string
    elections?: VoterInElectionListRelationFilter
    votes?: VoteListRelationFilter
  }

  export type VoterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    registration?: SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiry?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    hasVoted?: SortOrder
    votedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    elections?: VoterInElectionOrderByRelationAggregateInput
    votes?: VoteOrderByRelationAggregateInput
  }

  export type VoterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    registration?: string
    AND?: VoterWhereInput | VoterWhereInput[]
    OR?: VoterWhereInput[]
    NOT?: VoterWhereInput | VoterWhereInput[]
    name?: StringFilter<"Voter"> | string
    otp?: StringNullableFilter<"Voter"> | string | null
    otpExpiry?: DateTimeNullableFilter<"Voter"> | Date | string | null
    lastLoginAt?: DateTimeNullableFilter<"Voter"> | Date | string | null
    hasVoted?: BoolFilter<"Voter"> | boolean
    votedAt?: DateTimeNullableFilter<"Voter"> | Date | string | null
    createdAt?: DateTimeFilter<"Voter"> | Date | string
    updatedAt?: DateTimeFilter<"Voter"> | Date | string
    elections?: VoterInElectionListRelationFilter
    votes?: VoteListRelationFilter
  }, "id" | "email" | "registration">

  export type VoterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    registration?: SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiry?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    hasVoted?: SortOrder
    votedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VoterCountOrderByAggregateInput
    _max?: VoterMaxOrderByAggregateInput
    _min?: VoterMinOrderByAggregateInput
  }

  export type VoterScalarWhereWithAggregatesInput = {
    AND?: VoterScalarWhereWithAggregatesInput | VoterScalarWhereWithAggregatesInput[]
    OR?: VoterScalarWhereWithAggregatesInput[]
    NOT?: VoterScalarWhereWithAggregatesInput | VoterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Voter"> | string
    name?: StringWithAggregatesFilter<"Voter"> | string
    email?: StringNullableWithAggregatesFilter<"Voter"> | string | null
    registration?: StringWithAggregatesFilter<"Voter"> | string
    otp?: StringNullableWithAggregatesFilter<"Voter"> | string | null
    otpExpiry?: DateTimeNullableWithAggregatesFilter<"Voter"> | Date | string | null
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"Voter"> | Date | string | null
    hasVoted?: BoolWithAggregatesFilter<"Voter"> | boolean
    votedAt?: DateTimeNullableWithAggregatesFilter<"Voter"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Voter"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Voter"> | Date | string
  }

  export type VoterInElectionWhereInput = {
    AND?: VoterInElectionWhereInput | VoterInElectionWhereInput[]
    OR?: VoterInElectionWhereInput[]
    NOT?: VoterInElectionWhereInput | VoterInElectionWhereInput[]
    id?: StringFilter<"VoterInElection"> | string
    voterId?: StringFilter<"VoterInElection"> | string
    electionId?: StringFilter<"VoterInElection"> | string
    hasVoted?: BoolFilter<"VoterInElection"> | boolean
    createdAt?: DateTimeFilter<"VoterInElection"> | Date | string
    voter?: XOR<VoterScalarRelationFilter, VoterWhereInput>
    election?: XOR<ElectionScalarRelationFilter, ElectionWhereInput>
  }

  export type VoterInElectionOrderByWithRelationInput = {
    id?: SortOrder
    voterId?: SortOrder
    electionId?: SortOrder
    hasVoted?: SortOrder
    createdAt?: SortOrder
    voter?: VoterOrderByWithRelationInput
    election?: ElectionOrderByWithRelationInput
  }

  export type VoterInElectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    voterId_electionId?: VoterInElectionVoterIdElectionIdCompoundUniqueInput
    AND?: VoterInElectionWhereInput | VoterInElectionWhereInput[]
    OR?: VoterInElectionWhereInput[]
    NOT?: VoterInElectionWhereInput | VoterInElectionWhereInput[]
    voterId?: StringFilter<"VoterInElection"> | string
    electionId?: StringFilter<"VoterInElection"> | string
    hasVoted?: BoolFilter<"VoterInElection"> | boolean
    createdAt?: DateTimeFilter<"VoterInElection"> | Date | string
    voter?: XOR<VoterScalarRelationFilter, VoterWhereInput>
    election?: XOR<ElectionScalarRelationFilter, ElectionWhereInput>
  }, "id" | "voterId_electionId">

  export type VoterInElectionOrderByWithAggregationInput = {
    id?: SortOrder
    voterId?: SortOrder
    electionId?: SortOrder
    hasVoted?: SortOrder
    createdAt?: SortOrder
    _count?: VoterInElectionCountOrderByAggregateInput
    _max?: VoterInElectionMaxOrderByAggregateInput
    _min?: VoterInElectionMinOrderByAggregateInput
  }

  export type VoterInElectionScalarWhereWithAggregatesInput = {
    AND?: VoterInElectionScalarWhereWithAggregatesInput | VoterInElectionScalarWhereWithAggregatesInput[]
    OR?: VoterInElectionScalarWhereWithAggregatesInput[]
    NOT?: VoterInElectionScalarWhereWithAggregatesInput | VoterInElectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VoterInElection"> | string
    voterId?: StringWithAggregatesFilter<"VoterInElection"> | string
    electionId?: StringWithAggregatesFilter<"VoterInElection"> | string
    hasVoted?: BoolWithAggregatesFilter<"VoterInElection"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"VoterInElection"> | Date | string
  }

  export type CandidateWhereInput = {
    AND?: CandidateWhereInput | CandidateWhereInput[]
    OR?: CandidateWhereInput[]
    NOT?: CandidateWhereInput | CandidateWhereInput[]
    id?: StringFilter<"Candidate"> | string
    name?: StringFilter<"Candidate"> | string
    party?: StringNullableFilter<"Candidate"> | string | null
    electionId?: StringFilter<"Candidate"> | string
    createdAt?: DateTimeFilter<"Candidate"> | Date | string
    updatedAt?: DateTimeFilter<"Candidate"> | Date | string
    election?: XOR<ElectionScalarRelationFilter, ElectionWhereInput>
    votes?: VoteListRelationFilter
  }

  export type CandidateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    party?: SortOrderInput | SortOrder
    electionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    election?: ElectionOrderByWithRelationInput
    votes?: VoteOrderByRelationAggregateInput
  }

  export type CandidateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CandidateWhereInput | CandidateWhereInput[]
    OR?: CandidateWhereInput[]
    NOT?: CandidateWhereInput | CandidateWhereInput[]
    name?: StringFilter<"Candidate"> | string
    party?: StringNullableFilter<"Candidate"> | string | null
    electionId?: StringFilter<"Candidate"> | string
    createdAt?: DateTimeFilter<"Candidate"> | Date | string
    updatedAt?: DateTimeFilter<"Candidate"> | Date | string
    election?: XOR<ElectionScalarRelationFilter, ElectionWhereInput>
    votes?: VoteListRelationFilter
  }, "id">

  export type CandidateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    party?: SortOrderInput | SortOrder
    electionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CandidateCountOrderByAggregateInput
    _max?: CandidateMaxOrderByAggregateInput
    _min?: CandidateMinOrderByAggregateInput
  }

  export type CandidateScalarWhereWithAggregatesInput = {
    AND?: CandidateScalarWhereWithAggregatesInput | CandidateScalarWhereWithAggregatesInput[]
    OR?: CandidateScalarWhereWithAggregatesInput[]
    NOT?: CandidateScalarWhereWithAggregatesInput | CandidateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Candidate"> | string
    name?: StringWithAggregatesFilter<"Candidate"> | string
    party?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
    electionId?: StringWithAggregatesFilter<"Candidate"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Candidate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Candidate"> | Date | string
  }

  export type VoteWhereInput = {
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    id?: StringFilter<"Vote"> | string
    voterId?: StringFilter<"Vote"> | string
    candidateId?: StringFilter<"Vote"> | string
    electionId?: StringFilter<"Vote"> | string
    createdAt?: DateTimeFilter<"Vote"> | Date | string
    voter?: XOR<VoterScalarRelationFilter, VoterWhereInput>
    candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
    election?: XOR<ElectionScalarRelationFilter, ElectionWhereInput>
  }

  export type VoteOrderByWithRelationInput = {
    id?: SortOrder
    voterId?: SortOrder
    candidateId?: SortOrder
    electionId?: SortOrder
    createdAt?: SortOrder
    voter?: VoterOrderByWithRelationInput
    candidate?: CandidateOrderByWithRelationInput
    election?: ElectionOrderByWithRelationInput
  }

  export type VoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    voterId_electionId?: VoteVoterIdElectionIdCompoundUniqueInput
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    voterId?: StringFilter<"Vote"> | string
    candidateId?: StringFilter<"Vote"> | string
    electionId?: StringFilter<"Vote"> | string
    createdAt?: DateTimeFilter<"Vote"> | Date | string
    voter?: XOR<VoterScalarRelationFilter, VoterWhereInput>
    candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
    election?: XOR<ElectionScalarRelationFilter, ElectionWhereInput>
  }, "id" | "voterId_electionId">

  export type VoteOrderByWithAggregationInput = {
    id?: SortOrder
    voterId?: SortOrder
    candidateId?: SortOrder
    electionId?: SortOrder
    createdAt?: SortOrder
    _count?: VoteCountOrderByAggregateInput
    _max?: VoteMaxOrderByAggregateInput
    _min?: VoteMinOrderByAggregateInput
  }

  export type VoteScalarWhereWithAggregatesInput = {
    AND?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    OR?: VoteScalarWhereWithAggregatesInput[]
    NOT?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vote"> | string
    voterId?: StringWithAggregatesFilter<"Vote"> | string
    candidateId?: StringWithAggregatesFilter<"Vote"> | string
    electionId?: StringWithAggregatesFilter<"Vote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Vote"> | Date | string
  }

  export type MultiKeyWhereInput = {
    AND?: MultiKeyWhereInput | MultiKeyWhereInput[]
    OR?: MultiKeyWhereInput[]
    NOT?: MultiKeyWhereInput | MultiKeyWhereInput[]
    id?: StringFilter<"MultiKey"> | string
    electionId?: StringFilter<"MultiKey"> | string
    adminId?: StringNullableFilter<"MultiKey"> | string | null
    keyValue?: StringFilter<"MultiKey"> | string
    status?: EnumKeyStatusFilter<"MultiKey"> | $Enums.KeyStatus
    createdAt?: DateTimeFilter<"MultiKey"> | Date | string
    election?: XOR<ElectionScalarRelationFilter, ElectionWhereInput>
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }

  export type MultiKeyOrderByWithRelationInput = {
    id?: SortOrder
    electionId?: SortOrder
    adminId?: SortOrderInput | SortOrder
    keyValue?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    election?: ElectionOrderByWithRelationInput
    admin?: AdminOrderByWithRelationInput
  }

  export type MultiKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MultiKeyWhereInput | MultiKeyWhereInput[]
    OR?: MultiKeyWhereInput[]
    NOT?: MultiKeyWhereInput | MultiKeyWhereInput[]
    electionId?: StringFilter<"MultiKey"> | string
    adminId?: StringNullableFilter<"MultiKey"> | string | null
    keyValue?: StringFilter<"MultiKey"> | string
    status?: EnumKeyStatusFilter<"MultiKey"> | $Enums.KeyStatus
    createdAt?: DateTimeFilter<"MultiKey"> | Date | string
    election?: XOR<ElectionScalarRelationFilter, ElectionWhereInput>
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }, "id">

  export type MultiKeyOrderByWithAggregationInput = {
    id?: SortOrder
    electionId?: SortOrder
    adminId?: SortOrderInput | SortOrder
    keyValue?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: MultiKeyCountOrderByAggregateInput
    _max?: MultiKeyMaxOrderByAggregateInput
    _min?: MultiKeyMinOrderByAggregateInput
  }

  export type MultiKeyScalarWhereWithAggregatesInput = {
    AND?: MultiKeyScalarWhereWithAggregatesInput | MultiKeyScalarWhereWithAggregatesInput[]
    OR?: MultiKeyScalarWhereWithAggregatesInput[]
    NOT?: MultiKeyScalarWhereWithAggregatesInput | MultiKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MultiKey"> | string
    electionId?: StringWithAggregatesFilter<"MultiKey"> | string
    adminId?: StringNullableWithAggregatesFilter<"MultiKey"> | string | null
    keyValue?: StringWithAggregatesFilter<"MultiKey"> | string
    status?: EnumKeyStatusWithAggregatesFilter<"MultiKey"> | $Enums.KeyStatus
    createdAt?: DateTimeWithAggregatesFilter<"MultiKey"> | Date | string
  }

  export type LogWhereInput = {
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    id?: StringFilter<"Log"> | string
    action?: StringFilter<"Log"> | string
    adminId?: StringNullableFilter<"Log"> | string | null
    electionId?: StringNullableFilter<"Log"> | string | null
    createdAt?: DateTimeFilter<"Log"> | Date | string
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    election?: XOR<ElectionNullableScalarRelationFilter, ElectionWhereInput> | null
  }

  export type LogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    adminId?: SortOrderInput | SortOrder
    electionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    admin?: AdminOrderByWithRelationInput
    election?: ElectionOrderByWithRelationInput
  }

  export type LogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    action?: StringFilter<"Log"> | string
    adminId?: StringNullableFilter<"Log"> | string | null
    electionId?: StringNullableFilter<"Log"> | string | null
    createdAt?: DateTimeFilter<"Log"> | Date | string
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    election?: XOR<ElectionNullableScalarRelationFilter, ElectionWhereInput> | null
  }, "id">

  export type LogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    adminId?: SortOrderInput | SortOrder
    electionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LogCountOrderByAggregateInput
    _max?: LogMaxOrderByAggregateInput
    _min?: LogMinOrderByAggregateInput
  }

  export type LogScalarWhereWithAggregatesInput = {
    AND?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    OR?: LogScalarWhereWithAggregatesInput[]
    NOT?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Log"> | string
    action?: StringWithAggregatesFilter<"Log"> | string
    adminId?: StringNullableWithAggregatesFilter<"Log"> | string | null
    electionId?: StringNullableWithAggregatesFilter<"Log"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Log"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    sentAt?: DateTimeFilter<"Message"> | Date | string
    adminId?: StringNullableFilter<"Message"> | string | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    adminId?: SortOrderInput | SortOrder
    admin?: AdminOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    sentAt?: DateTimeFilter<"Message"> | Date | string
    adminId?: StringNullableFilter<"Message"> | string | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    adminId?: SortOrderInput | SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
    sentAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    adminId?: StringNullableWithAggregatesFilter<"Message"> | string | null
  }

  export type AdminCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: LogCreateNestedManyWithoutAdminInput
    multiKeys?: MultiKeyCreateNestedManyWithoutAdminInput
    messages?: MessageCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: LogUncheckedCreateNestedManyWithoutAdminInput
    multiKeys?: MultiKeyUncheckedCreateNestedManyWithoutAdminInput
    messages?: MessageUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: LogUpdateManyWithoutAdminNestedInput
    multiKeys?: MultiKeyUpdateManyWithoutAdminNestedInput
    messages?: MessageUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: LogUncheckedUpdateManyWithoutAdminNestedInput
    multiKeys?: MultiKeyUncheckedUpdateManyWithoutAdminNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ElectionCreateInput = {
    id?: string
    name: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    timezone?: string
    status?: $Enums.ElectionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    candidates?: CandidateCreateNestedManyWithoutElectionInput
    voters?: VoterInElectionCreateNestedManyWithoutElectionInput
    multiKeys?: MultiKeyCreateNestedManyWithoutElectionInput
    votes?: VoteCreateNestedManyWithoutElectionInput
    logs?: LogCreateNestedManyWithoutElectionInput
  }

  export type ElectionUncheckedCreateInput = {
    id?: string
    name: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    timezone?: string
    status?: $Enums.ElectionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    candidates?: CandidateUncheckedCreateNestedManyWithoutElectionInput
    voters?: VoterInElectionUncheckedCreateNestedManyWithoutElectionInput
    multiKeys?: MultiKeyUncheckedCreateNestedManyWithoutElectionInput
    votes?: VoteUncheckedCreateNestedManyWithoutElectionInput
    logs?: LogUncheckedCreateNestedManyWithoutElectionInput
  }

  export type ElectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumElectionStatusFieldUpdateOperationsInput | $Enums.ElectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidates?: CandidateUpdateManyWithoutElectionNestedInput
    voters?: VoterInElectionUpdateManyWithoutElectionNestedInput
    multiKeys?: MultiKeyUpdateManyWithoutElectionNestedInput
    votes?: VoteUpdateManyWithoutElectionNestedInput
    logs?: LogUpdateManyWithoutElectionNestedInput
  }

  export type ElectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumElectionStatusFieldUpdateOperationsInput | $Enums.ElectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidates?: CandidateUncheckedUpdateManyWithoutElectionNestedInput
    voters?: VoterInElectionUncheckedUpdateManyWithoutElectionNestedInput
    multiKeys?: MultiKeyUncheckedUpdateManyWithoutElectionNestedInput
    votes?: VoteUncheckedUpdateManyWithoutElectionNestedInput
    logs?: LogUncheckedUpdateManyWithoutElectionNestedInput
  }

  export type ElectionCreateManyInput = {
    id?: string
    name: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    timezone?: string
    status?: $Enums.ElectionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ElectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumElectionStatusFieldUpdateOperationsInput | $Enums.ElectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ElectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumElectionStatusFieldUpdateOperationsInput | $Enums.ElectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoterCreateInput = {
    id?: string
    name: string
    email?: string | null
    registration: string
    otp?: string | null
    otpExpiry?: Date | string | null
    lastLoginAt?: Date | string | null
    hasVoted?: boolean
    votedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    elections?: VoterInElectionCreateNestedManyWithoutVoterInput
    votes?: VoteCreateNestedManyWithoutVoterInput
  }

  export type VoterUncheckedCreateInput = {
    id?: string
    name: string
    email?: string | null
    registration: string
    otp?: string | null
    otpExpiry?: Date | string | null
    lastLoginAt?: Date | string | null
    hasVoted?: boolean
    votedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    elections?: VoterInElectionUncheckedCreateNestedManyWithoutVoterInput
    votes?: VoteUncheckedCreateNestedManyWithoutVoterInput
  }

  export type VoterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    registration?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hasVoted?: BoolFieldUpdateOperationsInput | boolean
    votedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    elections?: VoterInElectionUpdateManyWithoutVoterNestedInput
    votes?: VoteUpdateManyWithoutVoterNestedInput
  }

  export type VoterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    registration?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hasVoted?: BoolFieldUpdateOperationsInput | boolean
    votedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    elections?: VoterInElectionUncheckedUpdateManyWithoutVoterNestedInput
    votes?: VoteUncheckedUpdateManyWithoutVoterNestedInput
  }

  export type VoterCreateManyInput = {
    id?: string
    name: string
    email?: string | null
    registration: string
    otp?: string | null
    otpExpiry?: Date | string | null
    lastLoginAt?: Date | string | null
    hasVoted?: boolean
    votedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VoterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    registration?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hasVoted?: BoolFieldUpdateOperationsInput | boolean
    votedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    registration?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hasVoted?: BoolFieldUpdateOperationsInput | boolean
    votedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoterInElectionCreateInput = {
    id?: string
    hasVoted?: boolean
    createdAt?: Date | string
    voter: VoterCreateNestedOneWithoutElectionsInput
    election: ElectionCreateNestedOneWithoutVotersInput
  }

  export type VoterInElectionUncheckedCreateInput = {
    id?: string
    voterId: string
    electionId: string
    hasVoted?: boolean
    createdAt?: Date | string
  }

  export type VoterInElectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hasVoted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voter?: VoterUpdateOneRequiredWithoutElectionsNestedInput
    election?: ElectionUpdateOneRequiredWithoutVotersNestedInput
  }

  export type VoterInElectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    hasVoted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoterInElectionCreateManyInput = {
    id?: string
    voterId: string
    electionId: string
    hasVoted?: boolean
    createdAt?: Date | string
  }

  export type VoterInElectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hasVoted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoterInElectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    hasVoted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateCreateInput = {
    id?: string
    name: string
    party?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    election: ElectionCreateNestedOneWithoutCandidatesInput
    votes?: VoteCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUncheckedCreateInput = {
    id?: string
    name: string
    party?: string | null
    electionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: VoteUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    party?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    election?: ElectionUpdateOneRequiredWithoutCandidatesNestedInput
    votes?: VoteUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    party?: NullableStringFieldUpdateOperationsInput | string | null
    electionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateCreateManyInput = {
    id?: string
    name: string
    party?: string | null
    electionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CandidateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    party?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    party?: NullableStringFieldUpdateOperationsInput | string | null
    electionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteCreateInput = {
    id?: string
    createdAt?: Date | string
    voter: VoterCreateNestedOneWithoutVotesInput
    candidate: CandidateCreateNestedOneWithoutVotesInput
    election: ElectionCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateInput = {
    id?: string
    voterId: string
    candidateId: string
    electionId: string
    createdAt?: Date | string
  }

  export type VoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voter?: VoterUpdateOneRequiredWithoutVotesNestedInput
    candidate?: CandidateUpdateOneRequiredWithoutVotesNestedInput
    election?: ElectionUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    candidateId?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteCreateManyInput = {
    id?: string
    voterId: string
    candidateId: string
    electionId: string
    createdAt?: Date | string
  }

  export type VoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    candidateId?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MultiKeyCreateInput = {
    id?: string
    keyValue: string
    status?: $Enums.KeyStatus
    createdAt?: Date | string
    election: ElectionCreateNestedOneWithoutMultiKeysInput
    admin?: AdminCreateNestedOneWithoutMultiKeysInput
  }

  export type MultiKeyUncheckedCreateInput = {
    id?: string
    electionId: string
    adminId?: string | null
    keyValue: string
    status?: $Enums.KeyStatus
    createdAt?: Date | string
  }

  export type MultiKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyValue?: StringFieldUpdateOperationsInput | string
    status?: EnumKeyStatusFieldUpdateOperationsInput | $Enums.KeyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    election?: ElectionUpdateOneRequiredWithoutMultiKeysNestedInput
    admin?: AdminUpdateOneWithoutMultiKeysNestedInput
  }

  export type MultiKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    keyValue?: StringFieldUpdateOperationsInput | string
    status?: EnumKeyStatusFieldUpdateOperationsInput | $Enums.KeyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MultiKeyCreateManyInput = {
    id?: string
    electionId: string
    adminId?: string | null
    keyValue: string
    status?: $Enums.KeyStatus
    createdAt?: Date | string
  }

  export type MultiKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyValue?: StringFieldUpdateOperationsInput | string
    status?: EnumKeyStatusFieldUpdateOperationsInput | $Enums.KeyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MultiKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    keyValue?: StringFieldUpdateOperationsInput | string
    status?: EnumKeyStatusFieldUpdateOperationsInput | $Enums.KeyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogCreateInput = {
    id?: string
    action: string
    createdAt?: Date | string
    admin?: AdminCreateNestedOneWithoutLogsInput
    election?: ElectionCreateNestedOneWithoutLogsInput
  }

  export type LogUncheckedCreateInput = {
    id?: string
    action: string
    adminId?: string | null
    electionId?: string | null
    createdAt?: Date | string
  }

  export type LogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneWithoutLogsNestedInput
    election?: ElectionUpdateOneWithoutLogsNestedInput
  }

  export type LogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    electionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogCreateManyInput = {
    id?: string
    action: string
    adminId?: string | null
    electionId?: string | null
    createdAt?: Date | string
  }

  export type LogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    electionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    content: string
    sentAt?: Date | string
    admin?: AdminCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    content: string
    sentAt?: Date | string
    adminId?: string | null
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageCreateManyInput = {
    id?: string
    content: string
    sentAt?: Date | string
    adminId?: string | null
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LogListRelationFilter = {
    every?: LogWhereInput
    some?: LogWhereInput
    none?: LogWhereInput
  }

  export type MultiKeyListRelationFilter = {
    every?: MultiKeyWhereInput
    some?: MultiKeyWhereInput
    none?: MultiKeyWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type LogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MultiKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumElectionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ElectionStatus | EnumElectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ElectionStatus[] | ListEnumElectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ElectionStatus[] | ListEnumElectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumElectionStatusFilter<$PrismaModel> | $Enums.ElectionStatus
  }

  export type CandidateListRelationFilter = {
    every?: CandidateWhereInput
    some?: CandidateWhereInput
    none?: CandidateWhereInput
  }

  export type VoterInElectionListRelationFilter = {
    every?: VoterInElectionWhereInput
    some?: VoterInElectionWhereInput
    none?: VoterInElectionWhereInput
  }

  export type VoteListRelationFilter = {
    every?: VoteWhereInput
    some?: VoteWhereInput
    none?: VoteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CandidateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VoterInElectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ElectionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    timezone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ElectionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    timezone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ElectionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    timezone?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumElectionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ElectionStatus | EnumElectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ElectionStatus[] | ListEnumElectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ElectionStatus[] | ListEnumElectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumElectionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ElectionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumElectionStatusFilter<$PrismaModel>
    _max?: NestedEnumElectionStatusFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type VoterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    registration?: SortOrder
    otp?: SortOrder
    otpExpiry?: SortOrder
    lastLoginAt?: SortOrder
    hasVoted?: SortOrder
    votedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VoterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    registration?: SortOrder
    otp?: SortOrder
    otpExpiry?: SortOrder
    lastLoginAt?: SortOrder
    hasVoted?: SortOrder
    votedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VoterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    registration?: SortOrder
    otp?: SortOrder
    otpExpiry?: SortOrder
    lastLoginAt?: SortOrder
    hasVoted?: SortOrder
    votedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type VoterScalarRelationFilter = {
    is?: VoterWhereInput
    isNot?: VoterWhereInput
  }

  export type ElectionScalarRelationFilter = {
    is?: ElectionWhereInput
    isNot?: ElectionWhereInput
  }

  export type VoterInElectionVoterIdElectionIdCompoundUniqueInput = {
    voterId: string
    electionId: string
  }

  export type VoterInElectionCountOrderByAggregateInput = {
    id?: SortOrder
    voterId?: SortOrder
    electionId?: SortOrder
    hasVoted?: SortOrder
    createdAt?: SortOrder
  }

  export type VoterInElectionMaxOrderByAggregateInput = {
    id?: SortOrder
    voterId?: SortOrder
    electionId?: SortOrder
    hasVoted?: SortOrder
    createdAt?: SortOrder
  }

  export type VoterInElectionMinOrderByAggregateInput = {
    id?: SortOrder
    voterId?: SortOrder
    electionId?: SortOrder
    hasVoted?: SortOrder
    createdAt?: SortOrder
  }

  export type CandidateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    party?: SortOrder
    electionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CandidateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    party?: SortOrder
    electionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CandidateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    party?: SortOrder
    electionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CandidateScalarRelationFilter = {
    is?: CandidateWhereInput
    isNot?: CandidateWhereInput
  }

  export type VoteVoterIdElectionIdCompoundUniqueInput = {
    voterId: string
    electionId: string
  }

  export type VoteCountOrderByAggregateInput = {
    id?: SortOrder
    voterId?: SortOrder
    candidateId?: SortOrder
    electionId?: SortOrder
    createdAt?: SortOrder
  }

  export type VoteMaxOrderByAggregateInput = {
    id?: SortOrder
    voterId?: SortOrder
    candidateId?: SortOrder
    electionId?: SortOrder
    createdAt?: SortOrder
  }

  export type VoteMinOrderByAggregateInput = {
    id?: SortOrder
    voterId?: SortOrder
    candidateId?: SortOrder
    electionId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumKeyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.KeyStatus | EnumKeyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KeyStatus[] | ListEnumKeyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KeyStatus[] | ListEnumKeyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKeyStatusFilter<$PrismaModel> | $Enums.KeyStatus
  }

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type MultiKeyCountOrderByAggregateInput = {
    id?: SortOrder
    electionId?: SortOrder
    adminId?: SortOrder
    keyValue?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type MultiKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    electionId?: SortOrder
    adminId?: SortOrder
    keyValue?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type MultiKeyMinOrderByAggregateInput = {
    id?: SortOrder
    electionId?: SortOrder
    adminId?: SortOrder
    keyValue?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumKeyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KeyStatus | EnumKeyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KeyStatus[] | ListEnumKeyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KeyStatus[] | ListEnumKeyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKeyStatusWithAggregatesFilter<$PrismaModel> | $Enums.KeyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKeyStatusFilter<$PrismaModel>
    _max?: NestedEnumKeyStatusFilter<$PrismaModel>
  }

  export type ElectionNullableScalarRelationFilter = {
    is?: ElectionWhereInput | null
    isNot?: ElectionWhereInput | null
  }

  export type LogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    adminId?: SortOrder
    electionId?: SortOrder
    createdAt?: SortOrder
  }

  export type LogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    adminId?: SortOrder
    electionId?: SortOrder
    createdAt?: SortOrder
  }

  export type LogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    adminId?: SortOrder
    electionId?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    adminId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    adminId?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    adminId?: SortOrder
  }

  export type LogCreateNestedManyWithoutAdminInput = {
    create?: XOR<LogCreateWithoutAdminInput, LogUncheckedCreateWithoutAdminInput> | LogCreateWithoutAdminInput[] | LogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: LogCreateOrConnectWithoutAdminInput | LogCreateOrConnectWithoutAdminInput[]
    createMany?: LogCreateManyAdminInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type MultiKeyCreateNestedManyWithoutAdminInput = {
    create?: XOR<MultiKeyCreateWithoutAdminInput, MultiKeyUncheckedCreateWithoutAdminInput> | MultiKeyCreateWithoutAdminInput[] | MultiKeyUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: MultiKeyCreateOrConnectWithoutAdminInput | MultiKeyCreateOrConnectWithoutAdminInput[]
    createMany?: MultiKeyCreateManyAdminInputEnvelope
    connect?: MultiKeyWhereUniqueInput | MultiKeyWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutAdminInput = {
    create?: XOR<MessageCreateWithoutAdminInput, MessageUncheckedCreateWithoutAdminInput> | MessageCreateWithoutAdminInput[] | MessageUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutAdminInput | MessageCreateOrConnectWithoutAdminInput[]
    createMany?: MessageCreateManyAdminInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type LogUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<LogCreateWithoutAdminInput, LogUncheckedCreateWithoutAdminInput> | LogCreateWithoutAdminInput[] | LogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: LogCreateOrConnectWithoutAdminInput | LogCreateOrConnectWithoutAdminInput[]
    createMany?: LogCreateManyAdminInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type MultiKeyUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<MultiKeyCreateWithoutAdminInput, MultiKeyUncheckedCreateWithoutAdminInput> | MultiKeyCreateWithoutAdminInput[] | MultiKeyUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: MultiKeyCreateOrConnectWithoutAdminInput | MultiKeyCreateOrConnectWithoutAdminInput[]
    createMany?: MultiKeyCreateManyAdminInputEnvelope
    connect?: MultiKeyWhereUniqueInput | MultiKeyWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<MessageCreateWithoutAdminInput, MessageUncheckedCreateWithoutAdminInput> | MessageCreateWithoutAdminInput[] | MessageUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutAdminInput | MessageCreateOrConnectWithoutAdminInput[]
    createMany?: MessageCreateManyAdminInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LogUpdateManyWithoutAdminNestedInput = {
    create?: XOR<LogCreateWithoutAdminInput, LogUncheckedCreateWithoutAdminInput> | LogCreateWithoutAdminInput[] | LogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: LogCreateOrConnectWithoutAdminInput | LogCreateOrConnectWithoutAdminInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutAdminInput | LogUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: LogCreateManyAdminInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutAdminInput | LogUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: LogUpdateManyWithWhereWithoutAdminInput | LogUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type MultiKeyUpdateManyWithoutAdminNestedInput = {
    create?: XOR<MultiKeyCreateWithoutAdminInput, MultiKeyUncheckedCreateWithoutAdminInput> | MultiKeyCreateWithoutAdminInput[] | MultiKeyUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: MultiKeyCreateOrConnectWithoutAdminInput | MultiKeyCreateOrConnectWithoutAdminInput[]
    upsert?: MultiKeyUpsertWithWhereUniqueWithoutAdminInput | MultiKeyUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: MultiKeyCreateManyAdminInputEnvelope
    set?: MultiKeyWhereUniqueInput | MultiKeyWhereUniqueInput[]
    disconnect?: MultiKeyWhereUniqueInput | MultiKeyWhereUniqueInput[]
    delete?: MultiKeyWhereUniqueInput | MultiKeyWhereUniqueInput[]
    connect?: MultiKeyWhereUniqueInput | MultiKeyWhereUniqueInput[]
    update?: MultiKeyUpdateWithWhereUniqueWithoutAdminInput | MultiKeyUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: MultiKeyUpdateManyWithWhereWithoutAdminInput | MultiKeyUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: MultiKeyScalarWhereInput | MultiKeyScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutAdminNestedInput = {
    create?: XOR<MessageCreateWithoutAdminInput, MessageUncheckedCreateWithoutAdminInput> | MessageCreateWithoutAdminInput[] | MessageUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutAdminInput | MessageCreateOrConnectWithoutAdminInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutAdminInput | MessageUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: MessageCreateManyAdminInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutAdminInput | MessageUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutAdminInput | MessageUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type LogUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<LogCreateWithoutAdminInput, LogUncheckedCreateWithoutAdminInput> | LogCreateWithoutAdminInput[] | LogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: LogCreateOrConnectWithoutAdminInput | LogCreateOrConnectWithoutAdminInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutAdminInput | LogUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: LogCreateManyAdminInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutAdminInput | LogUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: LogUpdateManyWithWhereWithoutAdminInput | LogUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type MultiKeyUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<MultiKeyCreateWithoutAdminInput, MultiKeyUncheckedCreateWithoutAdminInput> | MultiKeyCreateWithoutAdminInput[] | MultiKeyUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: MultiKeyCreateOrConnectWithoutAdminInput | MultiKeyCreateOrConnectWithoutAdminInput[]
    upsert?: MultiKeyUpsertWithWhereUniqueWithoutAdminInput | MultiKeyUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: MultiKeyCreateManyAdminInputEnvelope
    set?: MultiKeyWhereUniqueInput | MultiKeyWhereUniqueInput[]
    disconnect?: MultiKeyWhereUniqueInput | MultiKeyWhereUniqueInput[]
    delete?: MultiKeyWhereUniqueInput | MultiKeyWhereUniqueInput[]
    connect?: MultiKeyWhereUniqueInput | MultiKeyWhereUniqueInput[]
    update?: MultiKeyUpdateWithWhereUniqueWithoutAdminInput | MultiKeyUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: MultiKeyUpdateManyWithWhereWithoutAdminInput | MultiKeyUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: MultiKeyScalarWhereInput | MultiKeyScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<MessageCreateWithoutAdminInput, MessageUncheckedCreateWithoutAdminInput> | MessageCreateWithoutAdminInput[] | MessageUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutAdminInput | MessageCreateOrConnectWithoutAdminInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutAdminInput | MessageUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: MessageCreateManyAdminInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutAdminInput | MessageUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutAdminInput | MessageUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type CandidateCreateNestedManyWithoutElectionInput = {
    create?: XOR<CandidateCreateWithoutElectionInput, CandidateUncheckedCreateWithoutElectionInput> | CandidateCreateWithoutElectionInput[] | CandidateUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutElectionInput | CandidateCreateOrConnectWithoutElectionInput[]
    createMany?: CandidateCreateManyElectionInputEnvelope
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
  }

  export type VoterInElectionCreateNestedManyWithoutElectionInput = {
    create?: XOR<VoterInElectionCreateWithoutElectionInput, VoterInElectionUncheckedCreateWithoutElectionInput> | VoterInElectionCreateWithoutElectionInput[] | VoterInElectionUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: VoterInElectionCreateOrConnectWithoutElectionInput | VoterInElectionCreateOrConnectWithoutElectionInput[]
    createMany?: VoterInElectionCreateManyElectionInputEnvelope
    connect?: VoterInElectionWhereUniqueInput | VoterInElectionWhereUniqueInput[]
  }

  export type MultiKeyCreateNestedManyWithoutElectionInput = {
    create?: XOR<MultiKeyCreateWithoutElectionInput, MultiKeyUncheckedCreateWithoutElectionInput> | MultiKeyCreateWithoutElectionInput[] | MultiKeyUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: MultiKeyCreateOrConnectWithoutElectionInput | MultiKeyCreateOrConnectWithoutElectionInput[]
    createMany?: MultiKeyCreateManyElectionInputEnvelope
    connect?: MultiKeyWhereUniqueInput | MultiKeyWhereUniqueInput[]
  }

  export type VoteCreateNestedManyWithoutElectionInput = {
    create?: XOR<VoteCreateWithoutElectionInput, VoteUncheckedCreateWithoutElectionInput> | VoteCreateWithoutElectionInput[] | VoteUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutElectionInput | VoteCreateOrConnectWithoutElectionInput[]
    createMany?: VoteCreateManyElectionInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type LogCreateNestedManyWithoutElectionInput = {
    create?: XOR<LogCreateWithoutElectionInput, LogUncheckedCreateWithoutElectionInput> | LogCreateWithoutElectionInput[] | LogUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: LogCreateOrConnectWithoutElectionInput | LogCreateOrConnectWithoutElectionInput[]
    createMany?: LogCreateManyElectionInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type CandidateUncheckedCreateNestedManyWithoutElectionInput = {
    create?: XOR<CandidateCreateWithoutElectionInput, CandidateUncheckedCreateWithoutElectionInput> | CandidateCreateWithoutElectionInput[] | CandidateUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutElectionInput | CandidateCreateOrConnectWithoutElectionInput[]
    createMany?: CandidateCreateManyElectionInputEnvelope
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
  }

  export type VoterInElectionUncheckedCreateNestedManyWithoutElectionInput = {
    create?: XOR<VoterInElectionCreateWithoutElectionInput, VoterInElectionUncheckedCreateWithoutElectionInput> | VoterInElectionCreateWithoutElectionInput[] | VoterInElectionUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: VoterInElectionCreateOrConnectWithoutElectionInput | VoterInElectionCreateOrConnectWithoutElectionInput[]
    createMany?: VoterInElectionCreateManyElectionInputEnvelope
    connect?: VoterInElectionWhereUniqueInput | VoterInElectionWhereUniqueInput[]
  }

  export type MultiKeyUncheckedCreateNestedManyWithoutElectionInput = {
    create?: XOR<MultiKeyCreateWithoutElectionInput, MultiKeyUncheckedCreateWithoutElectionInput> | MultiKeyCreateWithoutElectionInput[] | MultiKeyUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: MultiKeyCreateOrConnectWithoutElectionInput | MultiKeyCreateOrConnectWithoutElectionInput[]
    createMany?: MultiKeyCreateManyElectionInputEnvelope
    connect?: MultiKeyWhereUniqueInput | MultiKeyWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutElectionInput = {
    create?: XOR<VoteCreateWithoutElectionInput, VoteUncheckedCreateWithoutElectionInput> | VoteCreateWithoutElectionInput[] | VoteUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutElectionInput | VoteCreateOrConnectWithoutElectionInput[]
    createMany?: VoteCreateManyElectionInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type LogUncheckedCreateNestedManyWithoutElectionInput = {
    create?: XOR<LogCreateWithoutElectionInput, LogUncheckedCreateWithoutElectionInput> | LogCreateWithoutElectionInput[] | LogUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: LogCreateOrConnectWithoutElectionInput | LogCreateOrConnectWithoutElectionInput[]
    createMany?: LogCreateManyElectionInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumElectionStatusFieldUpdateOperationsInput = {
    set?: $Enums.ElectionStatus
  }

  export type CandidateUpdateManyWithoutElectionNestedInput = {
    create?: XOR<CandidateCreateWithoutElectionInput, CandidateUncheckedCreateWithoutElectionInput> | CandidateCreateWithoutElectionInput[] | CandidateUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutElectionInput | CandidateCreateOrConnectWithoutElectionInput[]
    upsert?: CandidateUpsertWithWhereUniqueWithoutElectionInput | CandidateUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: CandidateCreateManyElectionInputEnvelope
    set?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    disconnect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    delete?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    update?: CandidateUpdateWithWhereUniqueWithoutElectionInput | CandidateUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: CandidateUpdateManyWithWhereWithoutElectionInput | CandidateUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
  }

  export type VoterInElectionUpdateManyWithoutElectionNestedInput = {
    create?: XOR<VoterInElectionCreateWithoutElectionInput, VoterInElectionUncheckedCreateWithoutElectionInput> | VoterInElectionCreateWithoutElectionInput[] | VoterInElectionUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: VoterInElectionCreateOrConnectWithoutElectionInput | VoterInElectionCreateOrConnectWithoutElectionInput[]
    upsert?: VoterInElectionUpsertWithWhereUniqueWithoutElectionInput | VoterInElectionUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: VoterInElectionCreateManyElectionInputEnvelope
    set?: VoterInElectionWhereUniqueInput | VoterInElectionWhereUniqueInput[]
    disconnect?: VoterInElectionWhereUniqueInput | VoterInElectionWhereUniqueInput[]
    delete?: VoterInElectionWhereUniqueInput | VoterInElectionWhereUniqueInput[]
    connect?: VoterInElectionWhereUniqueInput | VoterInElectionWhereUniqueInput[]
    update?: VoterInElectionUpdateWithWhereUniqueWithoutElectionInput | VoterInElectionUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: VoterInElectionUpdateManyWithWhereWithoutElectionInput | VoterInElectionUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: VoterInElectionScalarWhereInput | VoterInElectionScalarWhereInput[]
  }

  export type MultiKeyUpdateManyWithoutElectionNestedInput = {
    create?: XOR<MultiKeyCreateWithoutElectionInput, MultiKeyUncheckedCreateWithoutElectionInput> | MultiKeyCreateWithoutElectionInput[] | MultiKeyUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: MultiKeyCreateOrConnectWithoutElectionInput | MultiKeyCreateOrConnectWithoutElectionInput[]
    upsert?: MultiKeyUpsertWithWhereUniqueWithoutElectionInput | MultiKeyUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: MultiKeyCreateManyElectionInputEnvelope
    set?: MultiKeyWhereUniqueInput | MultiKeyWhereUniqueInput[]
    disconnect?: MultiKeyWhereUniqueInput | MultiKeyWhereUniqueInput[]
    delete?: MultiKeyWhereUniqueInput | MultiKeyWhereUniqueInput[]
    connect?: MultiKeyWhereUniqueInput | MultiKeyWhereUniqueInput[]
    update?: MultiKeyUpdateWithWhereUniqueWithoutElectionInput | MultiKeyUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: MultiKeyUpdateManyWithWhereWithoutElectionInput | MultiKeyUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: MultiKeyScalarWhereInput | MultiKeyScalarWhereInput[]
  }

  export type VoteUpdateManyWithoutElectionNestedInput = {
    create?: XOR<VoteCreateWithoutElectionInput, VoteUncheckedCreateWithoutElectionInput> | VoteCreateWithoutElectionInput[] | VoteUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutElectionInput | VoteCreateOrConnectWithoutElectionInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutElectionInput | VoteUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: VoteCreateManyElectionInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutElectionInput | VoteUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutElectionInput | VoteUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type LogUpdateManyWithoutElectionNestedInput = {
    create?: XOR<LogCreateWithoutElectionInput, LogUncheckedCreateWithoutElectionInput> | LogCreateWithoutElectionInput[] | LogUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: LogCreateOrConnectWithoutElectionInput | LogCreateOrConnectWithoutElectionInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutElectionInput | LogUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: LogCreateManyElectionInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutElectionInput | LogUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: LogUpdateManyWithWhereWithoutElectionInput | LogUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type CandidateUncheckedUpdateManyWithoutElectionNestedInput = {
    create?: XOR<CandidateCreateWithoutElectionInput, CandidateUncheckedCreateWithoutElectionInput> | CandidateCreateWithoutElectionInput[] | CandidateUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutElectionInput | CandidateCreateOrConnectWithoutElectionInput[]
    upsert?: CandidateUpsertWithWhereUniqueWithoutElectionInput | CandidateUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: CandidateCreateManyElectionInputEnvelope
    set?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    disconnect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    delete?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    update?: CandidateUpdateWithWhereUniqueWithoutElectionInput | CandidateUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: CandidateUpdateManyWithWhereWithoutElectionInput | CandidateUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
  }

  export type VoterInElectionUncheckedUpdateManyWithoutElectionNestedInput = {
    create?: XOR<VoterInElectionCreateWithoutElectionInput, VoterInElectionUncheckedCreateWithoutElectionInput> | VoterInElectionCreateWithoutElectionInput[] | VoterInElectionUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: VoterInElectionCreateOrConnectWithoutElectionInput | VoterInElectionCreateOrConnectWithoutElectionInput[]
    upsert?: VoterInElectionUpsertWithWhereUniqueWithoutElectionInput | VoterInElectionUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: VoterInElectionCreateManyElectionInputEnvelope
    set?: VoterInElectionWhereUniqueInput | VoterInElectionWhereUniqueInput[]
    disconnect?: VoterInElectionWhereUniqueInput | VoterInElectionWhereUniqueInput[]
    delete?: VoterInElectionWhereUniqueInput | VoterInElectionWhereUniqueInput[]
    connect?: VoterInElectionWhereUniqueInput | VoterInElectionWhereUniqueInput[]
    update?: VoterInElectionUpdateWithWhereUniqueWithoutElectionInput | VoterInElectionUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: VoterInElectionUpdateManyWithWhereWithoutElectionInput | VoterInElectionUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: VoterInElectionScalarWhereInput | VoterInElectionScalarWhereInput[]
  }

  export type MultiKeyUncheckedUpdateManyWithoutElectionNestedInput = {
    create?: XOR<MultiKeyCreateWithoutElectionInput, MultiKeyUncheckedCreateWithoutElectionInput> | MultiKeyCreateWithoutElectionInput[] | MultiKeyUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: MultiKeyCreateOrConnectWithoutElectionInput | MultiKeyCreateOrConnectWithoutElectionInput[]
    upsert?: MultiKeyUpsertWithWhereUniqueWithoutElectionInput | MultiKeyUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: MultiKeyCreateManyElectionInputEnvelope
    set?: MultiKeyWhereUniqueInput | MultiKeyWhereUniqueInput[]
    disconnect?: MultiKeyWhereUniqueInput | MultiKeyWhereUniqueInput[]
    delete?: MultiKeyWhereUniqueInput | MultiKeyWhereUniqueInput[]
    connect?: MultiKeyWhereUniqueInput | MultiKeyWhereUniqueInput[]
    update?: MultiKeyUpdateWithWhereUniqueWithoutElectionInput | MultiKeyUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: MultiKeyUpdateManyWithWhereWithoutElectionInput | MultiKeyUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: MultiKeyScalarWhereInput | MultiKeyScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutElectionNestedInput = {
    create?: XOR<VoteCreateWithoutElectionInput, VoteUncheckedCreateWithoutElectionInput> | VoteCreateWithoutElectionInput[] | VoteUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutElectionInput | VoteCreateOrConnectWithoutElectionInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutElectionInput | VoteUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: VoteCreateManyElectionInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutElectionInput | VoteUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutElectionInput | VoteUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type LogUncheckedUpdateManyWithoutElectionNestedInput = {
    create?: XOR<LogCreateWithoutElectionInput, LogUncheckedCreateWithoutElectionInput> | LogCreateWithoutElectionInput[] | LogUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: LogCreateOrConnectWithoutElectionInput | LogCreateOrConnectWithoutElectionInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutElectionInput | LogUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: LogCreateManyElectionInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutElectionInput | LogUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: LogUpdateManyWithWhereWithoutElectionInput | LogUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type VoterInElectionCreateNestedManyWithoutVoterInput = {
    create?: XOR<VoterInElectionCreateWithoutVoterInput, VoterInElectionUncheckedCreateWithoutVoterInput> | VoterInElectionCreateWithoutVoterInput[] | VoterInElectionUncheckedCreateWithoutVoterInput[]
    connectOrCreate?: VoterInElectionCreateOrConnectWithoutVoterInput | VoterInElectionCreateOrConnectWithoutVoterInput[]
    createMany?: VoterInElectionCreateManyVoterInputEnvelope
    connect?: VoterInElectionWhereUniqueInput | VoterInElectionWhereUniqueInput[]
  }

  export type VoteCreateNestedManyWithoutVoterInput = {
    create?: XOR<VoteCreateWithoutVoterInput, VoteUncheckedCreateWithoutVoterInput> | VoteCreateWithoutVoterInput[] | VoteUncheckedCreateWithoutVoterInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutVoterInput | VoteCreateOrConnectWithoutVoterInput[]
    createMany?: VoteCreateManyVoterInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type VoterInElectionUncheckedCreateNestedManyWithoutVoterInput = {
    create?: XOR<VoterInElectionCreateWithoutVoterInput, VoterInElectionUncheckedCreateWithoutVoterInput> | VoterInElectionCreateWithoutVoterInput[] | VoterInElectionUncheckedCreateWithoutVoterInput[]
    connectOrCreate?: VoterInElectionCreateOrConnectWithoutVoterInput | VoterInElectionCreateOrConnectWithoutVoterInput[]
    createMany?: VoterInElectionCreateManyVoterInputEnvelope
    connect?: VoterInElectionWhereUniqueInput | VoterInElectionWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutVoterInput = {
    create?: XOR<VoteCreateWithoutVoterInput, VoteUncheckedCreateWithoutVoterInput> | VoteCreateWithoutVoterInput[] | VoteUncheckedCreateWithoutVoterInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutVoterInput | VoteCreateOrConnectWithoutVoterInput[]
    createMany?: VoteCreateManyVoterInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type VoterInElectionUpdateManyWithoutVoterNestedInput = {
    create?: XOR<VoterInElectionCreateWithoutVoterInput, VoterInElectionUncheckedCreateWithoutVoterInput> | VoterInElectionCreateWithoutVoterInput[] | VoterInElectionUncheckedCreateWithoutVoterInput[]
    connectOrCreate?: VoterInElectionCreateOrConnectWithoutVoterInput | VoterInElectionCreateOrConnectWithoutVoterInput[]
    upsert?: VoterInElectionUpsertWithWhereUniqueWithoutVoterInput | VoterInElectionUpsertWithWhereUniqueWithoutVoterInput[]
    createMany?: VoterInElectionCreateManyVoterInputEnvelope
    set?: VoterInElectionWhereUniqueInput | VoterInElectionWhereUniqueInput[]
    disconnect?: VoterInElectionWhereUniqueInput | VoterInElectionWhereUniqueInput[]
    delete?: VoterInElectionWhereUniqueInput | VoterInElectionWhereUniqueInput[]
    connect?: VoterInElectionWhereUniqueInput | VoterInElectionWhereUniqueInput[]
    update?: VoterInElectionUpdateWithWhereUniqueWithoutVoterInput | VoterInElectionUpdateWithWhereUniqueWithoutVoterInput[]
    updateMany?: VoterInElectionUpdateManyWithWhereWithoutVoterInput | VoterInElectionUpdateManyWithWhereWithoutVoterInput[]
    deleteMany?: VoterInElectionScalarWhereInput | VoterInElectionScalarWhereInput[]
  }

  export type VoteUpdateManyWithoutVoterNestedInput = {
    create?: XOR<VoteCreateWithoutVoterInput, VoteUncheckedCreateWithoutVoterInput> | VoteCreateWithoutVoterInput[] | VoteUncheckedCreateWithoutVoterInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutVoterInput | VoteCreateOrConnectWithoutVoterInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutVoterInput | VoteUpsertWithWhereUniqueWithoutVoterInput[]
    createMany?: VoteCreateManyVoterInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutVoterInput | VoteUpdateWithWhereUniqueWithoutVoterInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutVoterInput | VoteUpdateManyWithWhereWithoutVoterInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type VoterInElectionUncheckedUpdateManyWithoutVoterNestedInput = {
    create?: XOR<VoterInElectionCreateWithoutVoterInput, VoterInElectionUncheckedCreateWithoutVoterInput> | VoterInElectionCreateWithoutVoterInput[] | VoterInElectionUncheckedCreateWithoutVoterInput[]
    connectOrCreate?: VoterInElectionCreateOrConnectWithoutVoterInput | VoterInElectionCreateOrConnectWithoutVoterInput[]
    upsert?: VoterInElectionUpsertWithWhereUniqueWithoutVoterInput | VoterInElectionUpsertWithWhereUniqueWithoutVoterInput[]
    createMany?: VoterInElectionCreateManyVoterInputEnvelope
    set?: VoterInElectionWhereUniqueInput | VoterInElectionWhereUniqueInput[]
    disconnect?: VoterInElectionWhereUniqueInput | VoterInElectionWhereUniqueInput[]
    delete?: VoterInElectionWhereUniqueInput | VoterInElectionWhereUniqueInput[]
    connect?: VoterInElectionWhereUniqueInput | VoterInElectionWhereUniqueInput[]
    update?: VoterInElectionUpdateWithWhereUniqueWithoutVoterInput | VoterInElectionUpdateWithWhereUniqueWithoutVoterInput[]
    updateMany?: VoterInElectionUpdateManyWithWhereWithoutVoterInput | VoterInElectionUpdateManyWithWhereWithoutVoterInput[]
    deleteMany?: VoterInElectionScalarWhereInput | VoterInElectionScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutVoterNestedInput = {
    create?: XOR<VoteCreateWithoutVoterInput, VoteUncheckedCreateWithoutVoterInput> | VoteCreateWithoutVoterInput[] | VoteUncheckedCreateWithoutVoterInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutVoterInput | VoteCreateOrConnectWithoutVoterInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutVoterInput | VoteUpsertWithWhereUniqueWithoutVoterInput[]
    createMany?: VoteCreateManyVoterInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutVoterInput | VoteUpdateWithWhereUniqueWithoutVoterInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutVoterInput | VoteUpdateManyWithWhereWithoutVoterInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type VoterCreateNestedOneWithoutElectionsInput = {
    create?: XOR<VoterCreateWithoutElectionsInput, VoterUncheckedCreateWithoutElectionsInput>
    connectOrCreate?: VoterCreateOrConnectWithoutElectionsInput
    connect?: VoterWhereUniqueInput
  }

  export type ElectionCreateNestedOneWithoutVotersInput = {
    create?: XOR<ElectionCreateWithoutVotersInput, ElectionUncheckedCreateWithoutVotersInput>
    connectOrCreate?: ElectionCreateOrConnectWithoutVotersInput
    connect?: ElectionWhereUniqueInput
  }

  export type VoterUpdateOneRequiredWithoutElectionsNestedInput = {
    create?: XOR<VoterCreateWithoutElectionsInput, VoterUncheckedCreateWithoutElectionsInput>
    connectOrCreate?: VoterCreateOrConnectWithoutElectionsInput
    upsert?: VoterUpsertWithoutElectionsInput
    connect?: VoterWhereUniqueInput
    update?: XOR<XOR<VoterUpdateToOneWithWhereWithoutElectionsInput, VoterUpdateWithoutElectionsInput>, VoterUncheckedUpdateWithoutElectionsInput>
  }

  export type ElectionUpdateOneRequiredWithoutVotersNestedInput = {
    create?: XOR<ElectionCreateWithoutVotersInput, ElectionUncheckedCreateWithoutVotersInput>
    connectOrCreate?: ElectionCreateOrConnectWithoutVotersInput
    upsert?: ElectionUpsertWithoutVotersInput
    connect?: ElectionWhereUniqueInput
    update?: XOR<XOR<ElectionUpdateToOneWithWhereWithoutVotersInput, ElectionUpdateWithoutVotersInput>, ElectionUncheckedUpdateWithoutVotersInput>
  }

  export type ElectionCreateNestedOneWithoutCandidatesInput = {
    create?: XOR<ElectionCreateWithoutCandidatesInput, ElectionUncheckedCreateWithoutCandidatesInput>
    connectOrCreate?: ElectionCreateOrConnectWithoutCandidatesInput
    connect?: ElectionWhereUniqueInput
  }

  export type VoteCreateNestedManyWithoutCandidateInput = {
    create?: XOR<VoteCreateWithoutCandidateInput, VoteUncheckedCreateWithoutCandidateInput> | VoteCreateWithoutCandidateInput[] | VoteUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutCandidateInput | VoteCreateOrConnectWithoutCandidateInput[]
    createMany?: VoteCreateManyCandidateInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutCandidateInput = {
    create?: XOR<VoteCreateWithoutCandidateInput, VoteUncheckedCreateWithoutCandidateInput> | VoteCreateWithoutCandidateInput[] | VoteUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutCandidateInput | VoteCreateOrConnectWithoutCandidateInput[]
    createMany?: VoteCreateManyCandidateInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type ElectionUpdateOneRequiredWithoutCandidatesNestedInput = {
    create?: XOR<ElectionCreateWithoutCandidatesInput, ElectionUncheckedCreateWithoutCandidatesInput>
    connectOrCreate?: ElectionCreateOrConnectWithoutCandidatesInput
    upsert?: ElectionUpsertWithoutCandidatesInput
    connect?: ElectionWhereUniqueInput
    update?: XOR<XOR<ElectionUpdateToOneWithWhereWithoutCandidatesInput, ElectionUpdateWithoutCandidatesInput>, ElectionUncheckedUpdateWithoutCandidatesInput>
  }

  export type VoteUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<VoteCreateWithoutCandidateInput, VoteUncheckedCreateWithoutCandidateInput> | VoteCreateWithoutCandidateInput[] | VoteUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutCandidateInput | VoteCreateOrConnectWithoutCandidateInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutCandidateInput | VoteUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: VoteCreateManyCandidateInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutCandidateInput | VoteUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutCandidateInput | VoteUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<VoteCreateWithoutCandidateInput, VoteUncheckedCreateWithoutCandidateInput> | VoteCreateWithoutCandidateInput[] | VoteUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutCandidateInput | VoteCreateOrConnectWithoutCandidateInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutCandidateInput | VoteUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: VoteCreateManyCandidateInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutCandidateInput | VoteUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutCandidateInput | VoteUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type VoterCreateNestedOneWithoutVotesInput = {
    create?: XOR<VoterCreateWithoutVotesInput, VoterUncheckedCreateWithoutVotesInput>
    connectOrCreate?: VoterCreateOrConnectWithoutVotesInput
    connect?: VoterWhereUniqueInput
  }

  export type CandidateCreateNestedOneWithoutVotesInput = {
    create?: XOR<CandidateCreateWithoutVotesInput, CandidateUncheckedCreateWithoutVotesInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutVotesInput
    connect?: CandidateWhereUniqueInput
  }

  export type ElectionCreateNestedOneWithoutVotesInput = {
    create?: XOR<ElectionCreateWithoutVotesInput, ElectionUncheckedCreateWithoutVotesInput>
    connectOrCreate?: ElectionCreateOrConnectWithoutVotesInput
    connect?: ElectionWhereUniqueInput
  }

  export type VoterUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<VoterCreateWithoutVotesInput, VoterUncheckedCreateWithoutVotesInput>
    connectOrCreate?: VoterCreateOrConnectWithoutVotesInput
    upsert?: VoterUpsertWithoutVotesInput
    connect?: VoterWhereUniqueInput
    update?: XOR<XOR<VoterUpdateToOneWithWhereWithoutVotesInput, VoterUpdateWithoutVotesInput>, VoterUncheckedUpdateWithoutVotesInput>
  }

  export type CandidateUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<CandidateCreateWithoutVotesInput, CandidateUncheckedCreateWithoutVotesInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutVotesInput
    upsert?: CandidateUpsertWithoutVotesInput
    connect?: CandidateWhereUniqueInput
    update?: XOR<XOR<CandidateUpdateToOneWithWhereWithoutVotesInput, CandidateUpdateWithoutVotesInput>, CandidateUncheckedUpdateWithoutVotesInput>
  }

  export type ElectionUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<ElectionCreateWithoutVotesInput, ElectionUncheckedCreateWithoutVotesInput>
    connectOrCreate?: ElectionCreateOrConnectWithoutVotesInput
    upsert?: ElectionUpsertWithoutVotesInput
    connect?: ElectionWhereUniqueInput
    update?: XOR<XOR<ElectionUpdateToOneWithWhereWithoutVotesInput, ElectionUpdateWithoutVotesInput>, ElectionUncheckedUpdateWithoutVotesInput>
  }

  export type ElectionCreateNestedOneWithoutMultiKeysInput = {
    create?: XOR<ElectionCreateWithoutMultiKeysInput, ElectionUncheckedCreateWithoutMultiKeysInput>
    connectOrCreate?: ElectionCreateOrConnectWithoutMultiKeysInput
    connect?: ElectionWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutMultiKeysInput = {
    create?: XOR<AdminCreateWithoutMultiKeysInput, AdminUncheckedCreateWithoutMultiKeysInput>
    connectOrCreate?: AdminCreateOrConnectWithoutMultiKeysInput
    connect?: AdminWhereUniqueInput
  }

  export type EnumKeyStatusFieldUpdateOperationsInput = {
    set?: $Enums.KeyStatus
  }

  export type ElectionUpdateOneRequiredWithoutMultiKeysNestedInput = {
    create?: XOR<ElectionCreateWithoutMultiKeysInput, ElectionUncheckedCreateWithoutMultiKeysInput>
    connectOrCreate?: ElectionCreateOrConnectWithoutMultiKeysInput
    upsert?: ElectionUpsertWithoutMultiKeysInput
    connect?: ElectionWhereUniqueInput
    update?: XOR<XOR<ElectionUpdateToOneWithWhereWithoutMultiKeysInput, ElectionUpdateWithoutMultiKeysInput>, ElectionUncheckedUpdateWithoutMultiKeysInput>
  }

  export type AdminUpdateOneWithoutMultiKeysNestedInput = {
    create?: XOR<AdminCreateWithoutMultiKeysInput, AdminUncheckedCreateWithoutMultiKeysInput>
    connectOrCreate?: AdminCreateOrConnectWithoutMultiKeysInput
    upsert?: AdminUpsertWithoutMultiKeysInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutMultiKeysInput, AdminUpdateWithoutMultiKeysInput>, AdminUncheckedUpdateWithoutMultiKeysInput>
  }

  export type AdminCreateNestedOneWithoutLogsInput = {
    create?: XOR<AdminCreateWithoutLogsInput, AdminUncheckedCreateWithoutLogsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutLogsInput
    connect?: AdminWhereUniqueInput
  }

  export type ElectionCreateNestedOneWithoutLogsInput = {
    create?: XOR<ElectionCreateWithoutLogsInput, ElectionUncheckedCreateWithoutLogsInput>
    connectOrCreate?: ElectionCreateOrConnectWithoutLogsInput
    connect?: ElectionWhereUniqueInput
  }

  export type AdminUpdateOneWithoutLogsNestedInput = {
    create?: XOR<AdminCreateWithoutLogsInput, AdminUncheckedCreateWithoutLogsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutLogsInput
    upsert?: AdminUpsertWithoutLogsInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutLogsInput, AdminUpdateWithoutLogsInput>, AdminUncheckedUpdateWithoutLogsInput>
  }

  export type ElectionUpdateOneWithoutLogsNestedInput = {
    create?: XOR<ElectionCreateWithoutLogsInput, ElectionUncheckedCreateWithoutLogsInput>
    connectOrCreate?: ElectionCreateOrConnectWithoutLogsInput
    upsert?: ElectionUpsertWithoutLogsInput
    disconnect?: ElectionWhereInput | boolean
    delete?: ElectionWhereInput | boolean
    connect?: ElectionWhereUniqueInput
    update?: XOR<XOR<ElectionUpdateToOneWithWhereWithoutLogsInput, ElectionUpdateWithoutLogsInput>, ElectionUncheckedUpdateWithoutLogsInput>
  }

  export type AdminCreateNestedOneWithoutMessagesInput = {
    create?: XOR<AdminCreateWithoutMessagesInput, AdminUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutMessagesInput
    connect?: AdminWhereUniqueInput
  }

  export type AdminUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<AdminCreateWithoutMessagesInput, AdminUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutMessagesInput
    upsert?: AdminUpsertWithoutMessagesInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutMessagesInput, AdminUpdateWithoutMessagesInput>, AdminUncheckedUpdateWithoutMessagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumElectionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ElectionStatus | EnumElectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ElectionStatus[] | ListEnumElectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ElectionStatus[] | ListEnumElectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumElectionStatusFilter<$PrismaModel> | $Enums.ElectionStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumElectionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ElectionStatus | EnumElectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ElectionStatus[] | ListEnumElectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ElectionStatus[] | ListEnumElectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumElectionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ElectionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumElectionStatusFilter<$PrismaModel>
    _max?: NestedEnumElectionStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumKeyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.KeyStatus | EnumKeyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KeyStatus[] | ListEnumKeyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KeyStatus[] | ListEnumKeyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKeyStatusFilter<$PrismaModel> | $Enums.KeyStatus
  }

  export type NestedEnumKeyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KeyStatus | EnumKeyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KeyStatus[] | ListEnumKeyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KeyStatus[] | ListEnumKeyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKeyStatusWithAggregatesFilter<$PrismaModel> | $Enums.KeyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKeyStatusFilter<$PrismaModel>
    _max?: NestedEnumKeyStatusFilter<$PrismaModel>
  }

  export type LogCreateWithoutAdminInput = {
    id?: string
    action: string
    createdAt?: Date | string
    election?: ElectionCreateNestedOneWithoutLogsInput
  }

  export type LogUncheckedCreateWithoutAdminInput = {
    id?: string
    action: string
    electionId?: string | null
    createdAt?: Date | string
  }

  export type LogCreateOrConnectWithoutAdminInput = {
    where: LogWhereUniqueInput
    create: XOR<LogCreateWithoutAdminInput, LogUncheckedCreateWithoutAdminInput>
  }

  export type LogCreateManyAdminInputEnvelope = {
    data: LogCreateManyAdminInput | LogCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type MultiKeyCreateWithoutAdminInput = {
    id?: string
    keyValue: string
    status?: $Enums.KeyStatus
    createdAt?: Date | string
    election: ElectionCreateNestedOneWithoutMultiKeysInput
  }

  export type MultiKeyUncheckedCreateWithoutAdminInput = {
    id?: string
    electionId: string
    keyValue: string
    status?: $Enums.KeyStatus
    createdAt?: Date | string
  }

  export type MultiKeyCreateOrConnectWithoutAdminInput = {
    where: MultiKeyWhereUniqueInput
    create: XOR<MultiKeyCreateWithoutAdminInput, MultiKeyUncheckedCreateWithoutAdminInput>
  }

  export type MultiKeyCreateManyAdminInputEnvelope = {
    data: MultiKeyCreateManyAdminInput | MultiKeyCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutAdminInput = {
    id?: string
    content: string
    sentAt?: Date | string
  }

  export type MessageUncheckedCreateWithoutAdminInput = {
    id?: string
    content: string
    sentAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutAdminInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutAdminInput, MessageUncheckedCreateWithoutAdminInput>
  }

  export type MessageCreateManyAdminInputEnvelope = {
    data: MessageCreateManyAdminInput | MessageCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type LogUpsertWithWhereUniqueWithoutAdminInput = {
    where: LogWhereUniqueInput
    update: XOR<LogUpdateWithoutAdminInput, LogUncheckedUpdateWithoutAdminInput>
    create: XOR<LogCreateWithoutAdminInput, LogUncheckedCreateWithoutAdminInput>
  }

  export type LogUpdateWithWhereUniqueWithoutAdminInput = {
    where: LogWhereUniqueInput
    data: XOR<LogUpdateWithoutAdminInput, LogUncheckedUpdateWithoutAdminInput>
  }

  export type LogUpdateManyWithWhereWithoutAdminInput = {
    where: LogScalarWhereInput
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyWithoutAdminInput>
  }

  export type LogScalarWhereInput = {
    AND?: LogScalarWhereInput | LogScalarWhereInput[]
    OR?: LogScalarWhereInput[]
    NOT?: LogScalarWhereInput | LogScalarWhereInput[]
    id?: StringFilter<"Log"> | string
    action?: StringFilter<"Log"> | string
    adminId?: StringNullableFilter<"Log"> | string | null
    electionId?: StringNullableFilter<"Log"> | string | null
    createdAt?: DateTimeFilter<"Log"> | Date | string
  }

  export type MultiKeyUpsertWithWhereUniqueWithoutAdminInput = {
    where: MultiKeyWhereUniqueInput
    update: XOR<MultiKeyUpdateWithoutAdminInput, MultiKeyUncheckedUpdateWithoutAdminInput>
    create: XOR<MultiKeyCreateWithoutAdminInput, MultiKeyUncheckedCreateWithoutAdminInput>
  }

  export type MultiKeyUpdateWithWhereUniqueWithoutAdminInput = {
    where: MultiKeyWhereUniqueInput
    data: XOR<MultiKeyUpdateWithoutAdminInput, MultiKeyUncheckedUpdateWithoutAdminInput>
  }

  export type MultiKeyUpdateManyWithWhereWithoutAdminInput = {
    where: MultiKeyScalarWhereInput
    data: XOR<MultiKeyUpdateManyMutationInput, MultiKeyUncheckedUpdateManyWithoutAdminInput>
  }

  export type MultiKeyScalarWhereInput = {
    AND?: MultiKeyScalarWhereInput | MultiKeyScalarWhereInput[]
    OR?: MultiKeyScalarWhereInput[]
    NOT?: MultiKeyScalarWhereInput | MultiKeyScalarWhereInput[]
    id?: StringFilter<"MultiKey"> | string
    electionId?: StringFilter<"MultiKey"> | string
    adminId?: StringNullableFilter<"MultiKey"> | string | null
    keyValue?: StringFilter<"MultiKey"> | string
    status?: EnumKeyStatusFilter<"MultiKey"> | $Enums.KeyStatus
    createdAt?: DateTimeFilter<"MultiKey"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutAdminInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutAdminInput, MessageUncheckedUpdateWithoutAdminInput>
    create: XOR<MessageCreateWithoutAdminInput, MessageUncheckedCreateWithoutAdminInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutAdminInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutAdminInput, MessageUncheckedUpdateWithoutAdminInput>
  }

  export type MessageUpdateManyWithWhereWithoutAdminInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutAdminInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    sentAt?: DateTimeFilter<"Message"> | Date | string
    adminId?: StringNullableFilter<"Message"> | string | null
  }

  export type CandidateCreateWithoutElectionInput = {
    id?: string
    name: string
    party?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: VoteCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUncheckedCreateWithoutElectionInput = {
    id?: string
    name: string
    party?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: VoteUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidateCreateOrConnectWithoutElectionInput = {
    where: CandidateWhereUniqueInput
    create: XOR<CandidateCreateWithoutElectionInput, CandidateUncheckedCreateWithoutElectionInput>
  }

  export type CandidateCreateManyElectionInputEnvelope = {
    data: CandidateCreateManyElectionInput | CandidateCreateManyElectionInput[]
    skipDuplicates?: boolean
  }

  export type VoterInElectionCreateWithoutElectionInput = {
    id?: string
    hasVoted?: boolean
    createdAt?: Date | string
    voter: VoterCreateNestedOneWithoutElectionsInput
  }

  export type VoterInElectionUncheckedCreateWithoutElectionInput = {
    id?: string
    voterId: string
    hasVoted?: boolean
    createdAt?: Date | string
  }

  export type VoterInElectionCreateOrConnectWithoutElectionInput = {
    where: VoterInElectionWhereUniqueInput
    create: XOR<VoterInElectionCreateWithoutElectionInput, VoterInElectionUncheckedCreateWithoutElectionInput>
  }

  export type VoterInElectionCreateManyElectionInputEnvelope = {
    data: VoterInElectionCreateManyElectionInput | VoterInElectionCreateManyElectionInput[]
    skipDuplicates?: boolean
  }

  export type MultiKeyCreateWithoutElectionInput = {
    id?: string
    keyValue: string
    status?: $Enums.KeyStatus
    createdAt?: Date | string
    admin?: AdminCreateNestedOneWithoutMultiKeysInput
  }

  export type MultiKeyUncheckedCreateWithoutElectionInput = {
    id?: string
    adminId?: string | null
    keyValue: string
    status?: $Enums.KeyStatus
    createdAt?: Date | string
  }

  export type MultiKeyCreateOrConnectWithoutElectionInput = {
    where: MultiKeyWhereUniqueInput
    create: XOR<MultiKeyCreateWithoutElectionInput, MultiKeyUncheckedCreateWithoutElectionInput>
  }

  export type MultiKeyCreateManyElectionInputEnvelope = {
    data: MultiKeyCreateManyElectionInput | MultiKeyCreateManyElectionInput[]
    skipDuplicates?: boolean
  }

  export type VoteCreateWithoutElectionInput = {
    id?: string
    createdAt?: Date | string
    voter: VoterCreateNestedOneWithoutVotesInput
    candidate: CandidateCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutElectionInput = {
    id?: string
    voterId: string
    candidateId: string
    createdAt?: Date | string
  }

  export type VoteCreateOrConnectWithoutElectionInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutElectionInput, VoteUncheckedCreateWithoutElectionInput>
  }

  export type VoteCreateManyElectionInputEnvelope = {
    data: VoteCreateManyElectionInput | VoteCreateManyElectionInput[]
    skipDuplicates?: boolean
  }

  export type LogCreateWithoutElectionInput = {
    id?: string
    action: string
    createdAt?: Date | string
    admin?: AdminCreateNestedOneWithoutLogsInput
  }

  export type LogUncheckedCreateWithoutElectionInput = {
    id?: string
    action: string
    adminId?: string | null
    createdAt?: Date | string
  }

  export type LogCreateOrConnectWithoutElectionInput = {
    where: LogWhereUniqueInput
    create: XOR<LogCreateWithoutElectionInput, LogUncheckedCreateWithoutElectionInput>
  }

  export type LogCreateManyElectionInputEnvelope = {
    data: LogCreateManyElectionInput | LogCreateManyElectionInput[]
    skipDuplicates?: boolean
  }

  export type CandidateUpsertWithWhereUniqueWithoutElectionInput = {
    where: CandidateWhereUniqueInput
    update: XOR<CandidateUpdateWithoutElectionInput, CandidateUncheckedUpdateWithoutElectionInput>
    create: XOR<CandidateCreateWithoutElectionInput, CandidateUncheckedCreateWithoutElectionInput>
  }

  export type CandidateUpdateWithWhereUniqueWithoutElectionInput = {
    where: CandidateWhereUniqueInput
    data: XOR<CandidateUpdateWithoutElectionInput, CandidateUncheckedUpdateWithoutElectionInput>
  }

  export type CandidateUpdateManyWithWhereWithoutElectionInput = {
    where: CandidateScalarWhereInput
    data: XOR<CandidateUpdateManyMutationInput, CandidateUncheckedUpdateManyWithoutElectionInput>
  }

  export type CandidateScalarWhereInput = {
    AND?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
    OR?: CandidateScalarWhereInput[]
    NOT?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
    id?: StringFilter<"Candidate"> | string
    name?: StringFilter<"Candidate"> | string
    party?: StringNullableFilter<"Candidate"> | string | null
    electionId?: StringFilter<"Candidate"> | string
    createdAt?: DateTimeFilter<"Candidate"> | Date | string
    updatedAt?: DateTimeFilter<"Candidate"> | Date | string
  }

  export type VoterInElectionUpsertWithWhereUniqueWithoutElectionInput = {
    where: VoterInElectionWhereUniqueInput
    update: XOR<VoterInElectionUpdateWithoutElectionInput, VoterInElectionUncheckedUpdateWithoutElectionInput>
    create: XOR<VoterInElectionCreateWithoutElectionInput, VoterInElectionUncheckedCreateWithoutElectionInput>
  }

  export type VoterInElectionUpdateWithWhereUniqueWithoutElectionInput = {
    where: VoterInElectionWhereUniqueInput
    data: XOR<VoterInElectionUpdateWithoutElectionInput, VoterInElectionUncheckedUpdateWithoutElectionInput>
  }

  export type VoterInElectionUpdateManyWithWhereWithoutElectionInput = {
    where: VoterInElectionScalarWhereInput
    data: XOR<VoterInElectionUpdateManyMutationInput, VoterInElectionUncheckedUpdateManyWithoutElectionInput>
  }

  export type VoterInElectionScalarWhereInput = {
    AND?: VoterInElectionScalarWhereInput | VoterInElectionScalarWhereInput[]
    OR?: VoterInElectionScalarWhereInput[]
    NOT?: VoterInElectionScalarWhereInput | VoterInElectionScalarWhereInput[]
    id?: StringFilter<"VoterInElection"> | string
    voterId?: StringFilter<"VoterInElection"> | string
    electionId?: StringFilter<"VoterInElection"> | string
    hasVoted?: BoolFilter<"VoterInElection"> | boolean
    createdAt?: DateTimeFilter<"VoterInElection"> | Date | string
  }

  export type MultiKeyUpsertWithWhereUniqueWithoutElectionInput = {
    where: MultiKeyWhereUniqueInput
    update: XOR<MultiKeyUpdateWithoutElectionInput, MultiKeyUncheckedUpdateWithoutElectionInput>
    create: XOR<MultiKeyCreateWithoutElectionInput, MultiKeyUncheckedCreateWithoutElectionInput>
  }

  export type MultiKeyUpdateWithWhereUniqueWithoutElectionInput = {
    where: MultiKeyWhereUniqueInput
    data: XOR<MultiKeyUpdateWithoutElectionInput, MultiKeyUncheckedUpdateWithoutElectionInput>
  }

  export type MultiKeyUpdateManyWithWhereWithoutElectionInput = {
    where: MultiKeyScalarWhereInput
    data: XOR<MultiKeyUpdateManyMutationInput, MultiKeyUncheckedUpdateManyWithoutElectionInput>
  }

  export type VoteUpsertWithWhereUniqueWithoutElectionInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutElectionInput, VoteUncheckedUpdateWithoutElectionInput>
    create: XOR<VoteCreateWithoutElectionInput, VoteUncheckedCreateWithoutElectionInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutElectionInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutElectionInput, VoteUncheckedUpdateWithoutElectionInput>
  }

  export type VoteUpdateManyWithWhereWithoutElectionInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutElectionInput>
  }

  export type VoteScalarWhereInput = {
    AND?: VoteScalarWhereInput | VoteScalarWhereInput[]
    OR?: VoteScalarWhereInput[]
    NOT?: VoteScalarWhereInput | VoteScalarWhereInput[]
    id?: StringFilter<"Vote"> | string
    voterId?: StringFilter<"Vote"> | string
    candidateId?: StringFilter<"Vote"> | string
    electionId?: StringFilter<"Vote"> | string
    createdAt?: DateTimeFilter<"Vote"> | Date | string
  }

  export type LogUpsertWithWhereUniqueWithoutElectionInput = {
    where: LogWhereUniqueInput
    update: XOR<LogUpdateWithoutElectionInput, LogUncheckedUpdateWithoutElectionInput>
    create: XOR<LogCreateWithoutElectionInput, LogUncheckedCreateWithoutElectionInput>
  }

  export type LogUpdateWithWhereUniqueWithoutElectionInput = {
    where: LogWhereUniqueInput
    data: XOR<LogUpdateWithoutElectionInput, LogUncheckedUpdateWithoutElectionInput>
  }

  export type LogUpdateManyWithWhereWithoutElectionInput = {
    where: LogScalarWhereInput
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyWithoutElectionInput>
  }

  export type VoterInElectionCreateWithoutVoterInput = {
    id?: string
    hasVoted?: boolean
    createdAt?: Date | string
    election: ElectionCreateNestedOneWithoutVotersInput
  }

  export type VoterInElectionUncheckedCreateWithoutVoterInput = {
    id?: string
    electionId: string
    hasVoted?: boolean
    createdAt?: Date | string
  }

  export type VoterInElectionCreateOrConnectWithoutVoterInput = {
    where: VoterInElectionWhereUniqueInput
    create: XOR<VoterInElectionCreateWithoutVoterInput, VoterInElectionUncheckedCreateWithoutVoterInput>
  }

  export type VoterInElectionCreateManyVoterInputEnvelope = {
    data: VoterInElectionCreateManyVoterInput | VoterInElectionCreateManyVoterInput[]
    skipDuplicates?: boolean
  }

  export type VoteCreateWithoutVoterInput = {
    id?: string
    createdAt?: Date | string
    candidate: CandidateCreateNestedOneWithoutVotesInput
    election: ElectionCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutVoterInput = {
    id?: string
    candidateId: string
    electionId: string
    createdAt?: Date | string
  }

  export type VoteCreateOrConnectWithoutVoterInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutVoterInput, VoteUncheckedCreateWithoutVoterInput>
  }

  export type VoteCreateManyVoterInputEnvelope = {
    data: VoteCreateManyVoterInput | VoteCreateManyVoterInput[]
    skipDuplicates?: boolean
  }

  export type VoterInElectionUpsertWithWhereUniqueWithoutVoterInput = {
    where: VoterInElectionWhereUniqueInput
    update: XOR<VoterInElectionUpdateWithoutVoterInput, VoterInElectionUncheckedUpdateWithoutVoterInput>
    create: XOR<VoterInElectionCreateWithoutVoterInput, VoterInElectionUncheckedCreateWithoutVoterInput>
  }

  export type VoterInElectionUpdateWithWhereUniqueWithoutVoterInput = {
    where: VoterInElectionWhereUniqueInput
    data: XOR<VoterInElectionUpdateWithoutVoterInput, VoterInElectionUncheckedUpdateWithoutVoterInput>
  }

  export type VoterInElectionUpdateManyWithWhereWithoutVoterInput = {
    where: VoterInElectionScalarWhereInput
    data: XOR<VoterInElectionUpdateManyMutationInput, VoterInElectionUncheckedUpdateManyWithoutVoterInput>
  }

  export type VoteUpsertWithWhereUniqueWithoutVoterInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutVoterInput, VoteUncheckedUpdateWithoutVoterInput>
    create: XOR<VoteCreateWithoutVoterInput, VoteUncheckedCreateWithoutVoterInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutVoterInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutVoterInput, VoteUncheckedUpdateWithoutVoterInput>
  }

  export type VoteUpdateManyWithWhereWithoutVoterInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutVoterInput>
  }

  export type VoterCreateWithoutElectionsInput = {
    id?: string
    name: string
    email?: string | null
    registration: string
    otp?: string | null
    otpExpiry?: Date | string | null
    lastLoginAt?: Date | string | null
    hasVoted?: boolean
    votedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: VoteCreateNestedManyWithoutVoterInput
  }

  export type VoterUncheckedCreateWithoutElectionsInput = {
    id?: string
    name: string
    email?: string | null
    registration: string
    otp?: string | null
    otpExpiry?: Date | string | null
    lastLoginAt?: Date | string | null
    hasVoted?: boolean
    votedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: VoteUncheckedCreateNestedManyWithoutVoterInput
  }

  export type VoterCreateOrConnectWithoutElectionsInput = {
    where: VoterWhereUniqueInput
    create: XOR<VoterCreateWithoutElectionsInput, VoterUncheckedCreateWithoutElectionsInput>
  }

  export type ElectionCreateWithoutVotersInput = {
    id?: string
    name: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    timezone?: string
    status?: $Enums.ElectionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    candidates?: CandidateCreateNestedManyWithoutElectionInput
    multiKeys?: MultiKeyCreateNestedManyWithoutElectionInput
    votes?: VoteCreateNestedManyWithoutElectionInput
    logs?: LogCreateNestedManyWithoutElectionInput
  }

  export type ElectionUncheckedCreateWithoutVotersInput = {
    id?: string
    name: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    timezone?: string
    status?: $Enums.ElectionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    candidates?: CandidateUncheckedCreateNestedManyWithoutElectionInput
    multiKeys?: MultiKeyUncheckedCreateNestedManyWithoutElectionInput
    votes?: VoteUncheckedCreateNestedManyWithoutElectionInput
    logs?: LogUncheckedCreateNestedManyWithoutElectionInput
  }

  export type ElectionCreateOrConnectWithoutVotersInput = {
    where: ElectionWhereUniqueInput
    create: XOR<ElectionCreateWithoutVotersInput, ElectionUncheckedCreateWithoutVotersInput>
  }

  export type VoterUpsertWithoutElectionsInput = {
    update: XOR<VoterUpdateWithoutElectionsInput, VoterUncheckedUpdateWithoutElectionsInput>
    create: XOR<VoterCreateWithoutElectionsInput, VoterUncheckedCreateWithoutElectionsInput>
    where?: VoterWhereInput
  }

  export type VoterUpdateToOneWithWhereWithoutElectionsInput = {
    where?: VoterWhereInput
    data: XOR<VoterUpdateWithoutElectionsInput, VoterUncheckedUpdateWithoutElectionsInput>
  }

  export type VoterUpdateWithoutElectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    registration?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hasVoted?: BoolFieldUpdateOperationsInput | boolean
    votedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUpdateManyWithoutVoterNestedInput
  }

  export type VoterUncheckedUpdateWithoutElectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    registration?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hasVoted?: BoolFieldUpdateOperationsInput | boolean
    votedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUncheckedUpdateManyWithoutVoterNestedInput
  }

  export type ElectionUpsertWithoutVotersInput = {
    update: XOR<ElectionUpdateWithoutVotersInput, ElectionUncheckedUpdateWithoutVotersInput>
    create: XOR<ElectionCreateWithoutVotersInput, ElectionUncheckedCreateWithoutVotersInput>
    where?: ElectionWhereInput
  }

  export type ElectionUpdateToOneWithWhereWithoutVotersInput = {
    where?: ElectionWhereInput
    data: XOR<ElectionUpdateWithoutVotersInput, ElectionUncheckedUpdateWithoutVotersInput>
  }

  export type ElectionUpdateWithoutVotersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumElectionStatusFieldUpdateOperationsInput | $Enums.ElectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidates?: CandidateUpdateManyWithoutElectionNestedInput
    multiKeys?: MultiKeyUpdateManyWithoutElectionNestedInput
    votes?: VoteUpdateManyWithoutElectionNestedInput
    logs?: LogUpdateManyWithoutElectionNestedInput
  }

  export type ElectionUncheckedUpdateWithoutVotersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumElectionStatusFieldUpdateOperationsInput | $Enums.ElectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidates?: CandidateUncheckedUpdateManyWithoutElectionNestedInput
    multiKeys?: MultiKeyUncheckedUpdateManyWithoutElectionNestedInput
    votes?: VoteUncheckedUpdateManyWithoutElectionNestedInput
    logs?: LogUncheckedUpdateManyWithoutElectionNestedInput
  }

  export type ElectionCreateWithoutCandidatesInput = {
    id?: string
    name: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    timezone?: string
    status?: $Enums.ElectionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    voters?: VoterInElectionCreateNestedManyWithoutElectionInput
    multiKeys?: MultiKeyCreateNestedManyWithoutElectionInput
    votes?: VoteCreateNestedManyWithoutElectionInput
    logs?: LogCreateNestedManyWithoutElectionInput
  }

  export type ElectionUncheckedCreateWithoutCandidatesInput = {
    id?: string
    name: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    timezone?: string
    status?: $Enums.ElectionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    voters?: VoterInElectionUncheckedCreateNestedManyWithoutElectionInput
    multiKeys?: MultiKeyUncheckedCreateNestedManyWithoutElectionInput
    votes?: VoteUncheckedCreateNestedManyWithoutElectionInput
    logs?: LogUncheckedCreateNestedManyWithoutElectionInput
  }

  export type ElectionCreateOrConnectWithoutCandidatesInput = {
    where: ElectionWhereUniqueInput
    create: XOR<ElectionCreateWithoutCandidatesInput, ElectionUncheckedCreateWithoutCandidatesInput>
  }

  export type VoteCreateWithoutCandidateInput = {
    id?: string
    createdAt?: Date | string
    voter: VoterCreateNestedOneWithoutVotesInput
    election: ElectionCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutCandidateInput = {
    id?: string
    voterId: string
    electionId: string
    createdAt?: Date | string
  }

  export type VoteCreateOrConnectWithoutCandidateInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutCandidateInput, VoteUncheckedCreateWithoutCandidateInput>
  }

  export type VoteCreateManyCandidateInputEnvelope = {
    data: VoteCreateManyCandidateInput | VoteCreateManyCandidateInput[]
    skipDuplicates?: boolean
  }

  export type ElectionUpsertWithoutCandidatesInput = {
    update: XOR<ElectionUpdateWithoutCandidatesInput, ElectionUncheckedUpdateWithoutCandidatesInput>
    create: XOR<ElectionCreateWithoutCandidatesInput, ElectionUncheckedCreateWithoutCandidatesInput>
    where?: ElectionWhereInput
  }

  export type ElectionUpdateToOneWithWhereWithoutCandidatesInput = {
    where?: ElectionWhereInput
    data: XOR<ElectionUpdateWithoutCandidatesInput, ElectionUncheckedUpdateWithoutCandidatesInput>
  }

  export type ElectionUpdateWithoutCandidatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumElectionStatusFieldUpdateOperationsInput | $Enums.ElectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voters?: VoterInElectionUpdateManyWithoutElectionNestedInput
    multiKeys?: MultiKeyUpdateManyWithoutElectionNestedInput
    votes?: VoteUpdateManyWithoutElectionNestedInput
    logs?: LogUpdateManyWithoutElectionNestedInput
  }

  export type ElectionUncheckedUpdateWithoutCandidatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumElectionStatusFieldUpdateOperationsInput | $Enums.ElectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voters?: VoterInElectionUncheckedUpdateManyWithoutElectionNestedInput
    multiKeys?: MultiKeyUncheckedUpdateManyWithoutElectionNestedInput
    votes?: VoteUncheckedUpdateManyWithoutElectionNestedInput
    logs?: LogUncheckedUpdateManyWithoutElectionNestedInput
  }

  export type VoteUpsertWithWhereUniqueWithoutCandidateInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutCandidateInput, VoteUncheckedUpdateWithoutCandidateInput>
    create: XOR<VoteCreateWithoutCandidateInput, VoteUncheckedCreateWithoutCandidateInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutCandidateInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutCandidateInput, VoteUncheckedUpdateWithoutCandidateInput>
  }

  export type VoteUpdateManyWithWhereWithoutCandidateInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutCandidateInput>
  }

  export type VoterCreateWithoutVotesInput = {
    id?: string
    name: string
    email?: string | null
    registration: string
    otp?: string | null
    otpExpiry?: Date | string | null
    lastLoginAt?: Date | string | null
    hasVoted?: boolean
    votedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    elections?: VoterInElectionCreateNestedManyWithoutVoterInput
  }

  export type VoterUncheckedCreateWithoutVotesInput = {
    id?: string
    name: string
    email?: string | null
    registration: string
    otp?: string | null
    otpExpiry?: Date | string | null
    lastLoginAt?: Date | string | null
    hasVoted?: boolean
    votedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    elections?: VoterInElectionUncheckedCreateNestedManyWithoutVoterInput
  }

  export type VoterCreateOrConnectWithoutVotesInput = {
    where: VoterWhereUniqueInput
    create: XOR<VoterCreateWithoutVotesInput, VoterUncheckedCreateWithoutVotesInput>
  }

  export type CandidateCreateWithoutVotesInput = {
    id?: string
    name: string
    party?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    election: ElectionCreateNestedOneWithoutCandidatesInput
  }

  export type CandidateUncheckedCreateWithoutVotesInput = {
    id?: string
    name: string
    party?: string | null
    electionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CandidateCreateOrConnectWithoutVotesInput = {
    where: CandidateWhereUniqueInput
    create: XOR<CandidateCreateWithoutVotesInput, CandidateUncheckedCreateWithoutVotesInput>
  }

  export type ElectionCreateWithoutVotesInput = {
    id?: string
    name: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    timezone?: string
    status?: $Enums.ElectionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    candidates?: CandidateCreateNestedManyWithoutElectionInput
    voters?: VoterInElectionCreateNestedManyWithoutElectionInput
    multiKeys?: MultiKeyCreateNestedManyWithoutElectionInput
    logs?: LogCreateNestedManyWithoutElectionInput
  }

  export type ElectionUncheckedCreateWithoutVotesInput = {
    id?: string
    name: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    timezone?: string
    status?: $Enums.ElectionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    candidates?: CandidateUncheckedCreateNestedManyWithoutElectionInput
    voters?: VoterInElectionUncheckedCreateNestedManyWithoutElectionInput
    multiKeys?: MultiKeyUncheckedCreateNestedManyWithoutElectionInput
    logs?: LogUncheckedCreateNestedManyWithoutElectionInput
  }

  export type ElectionCreateOrConnectWithoutVotesInput = {
    where: ElectionWhereUniqueInput
    create: XOR<ElectionCreateWithoutVotesInput, ElectionUncheckedCreateWithoutVotesInput>
  }

  export type VoterUpsertWithoutVotesInput = {
    update: XOR<VoterUpdateWithoutVotesInput, VoterUncheckedUpdateWithoutVotesInput>
    create: XOR<VoterCreateWithoutVotesInput, VoterUncheckedCreateWithoutVotesInput>
    where?: VoterWhereInput
  }

  export type VoterUpdateToOneWithWhereWithoutVotesInput = {
    where?: VoterWhereInput
    data: XOR<VoterUpdateWithoutVotesInput, VoterUncheckedUpdateWithoutVotesInput>
  }

  export type VoterUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    registration?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hasVoted?: BoolFieldUpdateOperationsInput | boolean
    votedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    elections?: VoterInElectionUpdateManyWithoutVoterNestedInput
  }

  export type VoterUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    registration?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hasVoted?: BoolFieldUpdateOperationsInput | boolean
    votedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    elections?: VoterInElectionUncheckedUpdateManyWithoutVoterNestedInput
  }

  export type CandidateUpsertWithoutVotesInput = {
    update: XOR<CandidateUpdateWithoutVotesInput, CandidateUncheckedUpdateWithoutVotesInput>
    create: XOR<CandidateCreateWithoutVotesInput, CandidateUncheckedCreateWithoutVotesInput>
    where?: CandidateWhereInput
  }

  export type CandidateUpdateToOneWithWhereWithoutVotesInput = {
    where?: CandidateWhereInput
    data: XOR<CandidateUpdateWithoutVotesInput, CandidateUncheckedUpdateWithoutVotesInput>
  }

  export type CandidateUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    party?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    election?: ElectionUpdateOneRequiredWithoutCandidatesNestedInput
  }

  export type CandidateUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    party?: NullableStringFieldUpdateOperationsInput | string | null
    electionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ElectionUpsertWithoutVotesInput = {
    update: XOR<ElectionUpdateWithoutVotesInput, ElectionUncheckedUpdateWithoutVotesInput>
    create: XOR<ElectionCreateWithoutVotesInput, ElectionUncheckedCreateWithoutVotesInput>
    where?: ElectionWhereInput
  }

  export type ElectionUpdateToOneWithWhereWithoutVotesInput = {
    where?: ElectionWhereInput
    data: XOR<ElectionUpdateWithoutVotesInput, ElectionUncheckedUpdateWithoutVotesInput>
  }

  export type ElectionUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumElectionStatusFieldUpdateOperationsInput | $Enums.ElectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidates?: CandidateUpdateManyWithoutElectionNestedInput
    voters?: VoterInElectionUpdateManyWithoutElectionNestedInput
    multiKeys?: MultiKeyUpdateManyWithoutElectionNestedInput
    logs?: LogUpdateManyWithoutElectionNestedInput
  }

  export type ElectionUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumElectionStatusFieldUpdateOperationsInput | $Enums.ElectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidates?: CandidateUncheckedUpdateManyWithoutElectionNestedInput
    voters?: VoterInElectionUncheckedUpdateManyWithoutElectionNestedInput
    multiKeys?: MultiKeyUncheckedUpdateManyWithoutElectionNestedInput
    logs?: LogUncheckedUpdateManyWithoutElectionNestedInput
  }

  export type ElectionCreateWithoutMultiKeysInput = {
    id?: string
    name: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    timezone?: string
    status?: $Enums.ElectionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    candidates?: CandidateCreateNestedManyWithoutElectionInput
    voters?: VoterInElectionCreateNestedManyWithoutElectionInput
    votes?: VoteCreateNestedManyWithoutElectionInput
    logs?: LogCreateNestedManyWithoutElectionInput
  }

  export type ElectionUncheckedCreateWithoutMultiKeysInput = {
    id?: string
    name: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    timezone?: string
    status?: $Enums.ElectionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    candidates?: CandidateUncheckedCreateNestedManyWithoutElectionInput
    voters?: VoterInElectionUncheckedCreateNestedManyWithoutElectionInput
    votes?: VoteUncheckedCreateNestedManyWithoutElectionInput
    logs?: LogUncheckedCreateNestedManyWithoutElectionInput
  }

  export type ElectionCreateOrConnectWithoutMultiKeysInput = {
    where: ElectionWhereUniqueInput
    create: XOR<ElectionCreateWithoutMultiKeysInput, ElectionUncheckedCreateWithoutMultiKeysInput>
  }

  export type AdminCreateWithoutMultiKeysInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: LogCreateNestedManyWithoutAdminInput
    messages?: MessageCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutMultiKeysInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: LogUncheckedCreateNestedManyWithoutAdminInput
    messages?: MessageUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutMultiKeysInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutMultiKeysInput, AdminUncheckedCreateWithoutMultiKeysInput>
  }

  export type ElectionUpsertWithoutMultiKeysInput = {
    update: XOR<ElectionUpdateWithoutMultiKeysInput, ElectionUncheckedUpdateWithoutMultiKeysInput>
    create: XOR<ElectionCreateWithoutMultiKeysInput, ElectionUncheckedCreateWithoutMultiKeysInput>
    where?: ElectionWhereInput
  }

  export type ElectionUpdateToOneWithWhereWithoutMultiKeysInput = {
    where?: ElectionWhereInput
    data: XOR<ElectionUpdateWithoutMultiKeysInput, ElectionUncheckedUpdateWithoutMultiKeysInput>
  }

  export type ElectionUpdateWithoutMultiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumElectionStatusFieldUpdateOperationsInput | $Enums.ElectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidates?: CandidateUpdateManyWithoutElectionNestedInput
    voters?: VoterInElectionUpdateManyWithoutElectionNestedInput
    votes?: VoteUpdateManyWithoutElectionNestedInput
    logs?: LogUpdateManyWithoutElectionNestedInput
  }

  export type ElectionUncheckedUpdateWithoutMultiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumElectionStatusFieldUpdateOperationsInput | $Enums.ElectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidates?: CandidateUncheckedUpdateManyWithoutElectionNestedInput
    voters?: VoterInElectionUncheckedUpdateManyWithoutElectionNestedInput
    votes?: VoteUncheckedUpdateManyWithoutElectionNestedInput
    logs?: LogUncheckedUpdateManyWithoutElectionNestedInput
  }

  export type AdminUpsertWithoutMultiKeysInput = {
    update: XOR<AdminUpdateWithoutMultiKeysInput, AdminUncheckedUpdateWithoutMultiKeysInput>
    create: XOR<AdminCreateWithoutMultiKeysInput, AdminUncheckedCreateWithoutMultiKeysInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutMultiKeysInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutMultiKeysInput, AdminUncheckedUpdateWithoutMultiKeysInput>
  }

  export type AdminUpdateWithoutMultiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: LogUpdateManyWithoutAdminNestedInput
    messages?: MessageUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutMultiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: LogUncheckedUpdateManyWithoutAdminNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateWithoutLogsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    multiKeys?: MultiKeyCreateNestedManyWithoutAdminInput
    messages?: MessageCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutLogsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    multiKeys?: MultiKeyUncheckedCreateNestedManyWithoutAdminInput
    messages?: MessageUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutLogsInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutLogsInput, AdminUncheckedCreateWithoutLogsInput>
  }

  export type ElectionCreateWithoutLogsInput = {
    id?: string
    name: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    timezone?: string
    status?: $Enums.ElectionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    candidates?: CandidateCreateNestedManyWithoutElectionInput
    voters?: VoterInElectionCreateNestedManyWithoutElectionInput
    multiKeys?: MultiKeyCreateNestedManyWithoutElectionInput
    votes?: VoteCreateNestedManyWithoutElectionInput
  }

  export type ElectionUncheckedCreateWithoutLogsInput = {
    id?: string
    name: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    timezone?: string
    status?: $Enums.ElectionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    candidates?: CandidateUncheckedCreateNestedManyWithoutElectionInput
    voters?: VoterInElectionUncheckedCreateNestedManyWithoutElectionInput
    multiKeys?: MultiKeyUncheckedCreateNestedManyWithoutElectionInput
    votes?: VoteUncheckedCreateNestedManyWithoutElectionInput
  }

  export type ElectionCreateOrConnectWithoutLogsInput = {
    where: ElectionWhereUniqueInput
    create: XOR<ElectionCreateWithoutLogsInput, ElectionUncheckedCreateWithoutLogsInput>
  }

  export type AdminUpsertWithoutLogsInput = {
    update: XOR<AdminUpdateWithoutLogsInput, AdminUncheckedUpdateWithoutLogsInput>
    create: XOR<AdminCreateWithoutLogsInput, AdminUncheckedCreateWithoutLogsInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutLogsInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutLogsInput, AdminUncheckedUpdateWithoutLogsInput>
  }

  export type AdminUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    multiKeys?: MultiKeyUpdateManyWithoutAdminNestedInput
    messages?: MessageUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    multiKeys?: MultiKeyUncheckedUpdateManyWithoutAdminNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ElectionUpsertWithoutLogsInput = {
    update: XOR<ElectionUpdateWithoutLogsInput, ElectionUncheckedUpdateWithoutLogsInput>
    create: XOR<ElectionCreateWithoutLogsInput, ElectionUncheckedCreateWithoutLogsInput>
    where?: ElectionWhereInput
  }

  export type ElectionUpdateToOneWithWhereWithoutLogsInput = {
    where?: ElectionWhereInput
    data: XOR<ElectionUpdateWithoutLogsInput, ElectionUncheckedUpdateWithoutLogsInput>
  }

  export type ElectionUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumElectionStatusFieldUpdateOperationsInput | $Enums.ElectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidates?: CandidateUpdateManyWithoutElectionNestedInput
    voters?: VoterInElectionUpdateManyWithoutElectionNestedInput
    multiKeys?: MultiKeyUpdateManyWithoutElectionNestedInput
    votes?: VoteUpdateManyWithoutElectionNestedInput
  }

  export type ElectionUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    status?: EnumElectionStatusFieldUpdateOperationsInput | $Enums.ElectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidates?: CandidateUncheckedUpdateManyWithoutElectionNestedInput
    voters?: VoterInElectionUncheckedUpdateManyWithoutElectionNestedInput
    multiKeys?: MultiKeyUncheckedUpdateManyWithoutElectionNestedInput
    votes?: VoteUncheckedUpdateManyWithoutElectionNestedInput
  }

  export type AdminCreateWithoutMessagesInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: LogCreateNestedManyWithoutAdminInput
    multiKeys?: MultiKeyCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutMessagesInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: LogUncheckedCreateNestedManyWithoutAdminInput
    multiKeys?: MultiKeyUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutMessagesInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutMessagesInput, AdminUncheckedCreateWithoutMessagesInput>
  }

  export type AdminUpsertWithoutMessagesInput = {
    update: XOR<AdminUpdateWithoutMessagesInput, AdminUncheckedUpdateWithoutMessagesInput>
    create: XOR<AdminCreateWithoutMessagesInput, AdminUncheckedCreateWithoutMessagesInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutMessagesInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutMessagesInput, AdminUncheckedUpdateWithoutMessagesInput>
  }

  export type AdminUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: LogUpdateManyWithoutAdminNestedInput
    multiKeys?: MultiKeyUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: LogUncheckedUpdateManyWithoutAdminNestedInput
    multiKeys?: MultiKeyUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type LogCreateManyAdminInput = {
    id?: string
    action: string
    electionId?: string | null
    createdAt?: Date | string
  }

  export type MultiKeyCreateManyAdminInput = {
    id?: string
    electionId: string
    keyValue: string
    status?: $Enums.KeyStatus
    createdAt?: Date | string
  }

  export type MessageCreateManyAdminInput = {
    id?: string
    content: string
    sentAt?: Date | string
  }

  export type LogUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    election?: ElectionUpdateOneWithoutLogsNestedInput
  }

  export type LogUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    electionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    electionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MultiKeyUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyValue?: StringFieldUpdateOperationsInput | string
    status?: EnumKeyStatusFieldUpdateOperationsInput | $Enums.KeyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    election?: ElectionUpdateOneRequiredWithoutMultiKeysNestedInput
  }

  export type MultiKeyUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    keyValue?: StringFieldUpdateOperationsInput | string
    status?: EnumKeyStatusFieldUpdateOperationsInput | $Enums.KeyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MultiKeyUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    keyValue?: StringFieldUpdateOperationsInput | string
    status?: EnumKeyStatusFieldUpdateOperationsInput | $Enums.KeyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateCreateManyElectionInput = {
    id?: string
    name: string
    party?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VoterInElectionCreateManyElectionInput = {
    id?: string
    voterId: string
    hasVoted?: boolean
    createdAt?: Date | string
  }

  export type MultiKeyCreateManyElectionInput = {
    id?: string
    adminId?: string | null
    keyValue: string
    status?: $Enums.KeyStatus
    createdAt?: Date | string
  }

  export type VoteCreateManyElectionInput = {
    id?: string
    voterId: string
    candidateId: string
    createdAt?: Date | string
  }

  export type LogCreateManyElectionInput = {
    id?: string
    action: string
    adminId?: string | null
    createdAt?: Date | string
  }

  export type CandidateUpdateWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    party?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    party?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateManyWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    party?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoterInElectionUpdateWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    hasVoted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voter?: VoterUpdateOneRequiredWithoutElectionsNestedInput
  }

  export type VoterInElectionUncheckedUpdateWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    hasVoted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoterInElectionUncheckedUpdateManyWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    hasVoted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MultiKeyUpdateWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyValue?: StringFieldUpdateOperationsInput | string
    status?: EnumKeyStatusFieldUpdateOperationsInput | $Enums.KeyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneWithoutMultiKeysNestedInput
  }

  export type MultiKeyUncheckedUpdateWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    keyValue?: StringFieldUpdateOperationsInput | string
    status?: EnumKeyStatusFieldUpdateOperationsInput | $Enums.KeyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MultiKeyUncheckedUpdateManyWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    keyValue?: StringFieldUpdateOperationsInput | string
    status?: EnumKeyStatusFieldUpdateOperationsInput | $Enums.KeyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUpdateWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voter?: VoterUpdateOneRequiredWithoutVotesNestedInput
    candidate?: CandidateUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    candidateId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateManyWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    candidateId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUpdateWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneWithoutLogsNestedInput
  }

  export type LogUncheckedUpdateWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateManyWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoterInElectionCreateManyVoterInput = {
    id?: string
    electionId: string
    hasVoted?: boolean
    createdAt?: Date | string
  }

  export type VoteCreateManyVoterInput = {
    id?: string
    candidateId: string
    electionId: string
    createdAt?: Date | string
  }

  export type VoterInElectionUpdateWithoutVoterInput = {
    id?: StringFieldUpdateOperationsInput | string
    hasVoted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    election?: ElectionUpdateOneRequiredWithoutVotersNestedInput
  }

  export type VoterInElectionUncheckedUpdateWithoutVoterInput = {
    id?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    hasVoted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoterInElectionUncheckedUpdateManyWithoutVoterInput = {
    id?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    hasVoted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUpdateWithoutVoterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate?: CandidateUpdateOneRequiredWithoutVotesNestedInput
    election?: ElectionUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutVoterInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidateId?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateManyWithoutVoterInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidateId?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteCreateManyCandidateInput = {
    id?: string
    voterId: string
    electionId: string
    createdAt?: Date | string
  }

  export type VoteUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voter?: VoterUpdateOneRequiredWithoutVotesNestedInput
    election?: ElectionUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateManyWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    electionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}