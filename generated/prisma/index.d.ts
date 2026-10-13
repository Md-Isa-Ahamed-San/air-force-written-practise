
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model QuizSet
 * 
 */
export type QuizSet = $Result.DefaultSelection<Prisma.$QuizSetPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model Answer
 * 
 */
export type Answer = $Result.DefaultSelection<Prisma.$AnswerPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Attempt
 * 
 */
export type Attempt = $Result.DefaultSelection<Prisma.$AttemptPayload>
/**
 * Model EnglishQuiz
 * 
 */
export type EnglishQuiz = $Result.DefaultSelection<Prisma.$EnglishQuizPayload>
/**
 * Model EnglishQuestion
 * 
 */
export type EnglishQuestion = $Result.DefaultSelection<Prisma.$EnglishQuestionPayload>
/**
 * Model EnglishSession
 * 
 */
export type EnglishSession = $Result.DefaultSelection<Prisma.$EnglishSessionPayload>
/**
 * Model EnglishAttempt
 * 
 */
export type EnglishAttempt = $Result.DefaultSelection<Prisma.$EnglishAttemptPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more QuizSets
 * const quizSets = await prisma.quizSet.findMany()
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
   * // Fetch zero or more QuizSets
   * const quizSets = await prisma.quizSet.findMany()
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
   * `prisma.quizSet`: Exposes CRUD operations for the **QuizSet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizSets
    * const quizSets = await prisma.quizSet.findMany()
    * ```
    */
  get quizSet(): Prisma.QuizSetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.answer`: Exposes CRUD operations for the **Answer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answer.findMany()
    * ```
    */
  get answer(): Prisma.AnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attempt`: Exposes CRUD operations for the **Attempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attempts
    * const attempts = await prisma.attempt.findMany()
    * ```
    */
  get attempt(): Prisma.AttemptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.englishQuiz`: Exposes CRUD operations for the **EnglishQuiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EnglishQuizs
    * const englishQuizs = await prisma.englishQuiz.findMany()
    * ```
    */
  get englishQuiz(): Prisma.EnglishQuizDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.englishQuestion`: Exposes CRUD operations for the **EnglishQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EnglishQuestions
    * const englishQuestions = await prisma.englishQuestion.findMany()
    * ```
    */
  get englishQuestion(): Prisma.EnglishQuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.englishSession`: Exposes CRUD operations for the **EnglishSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EnglishSessions
    * const englishSessions = await prisma.englishSession.findMany()
    * ```
    */
  get englishSession(): Prisma.EnglishSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.englishAttempt`: Exposes CRUD operations for the **EnglishAttempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EnglishAttempts
    * const englishAttempts = await prisma.englishAttempt.findMany()
    * ```
    */
  get englishAttempt(): Prisma.EnglishAttemptDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    QuizSet: 'QuizSet',
    Image: 'Image',
    Answer: 'Answer',
    Session: 'Session',
    Attempt: 'Attempt',
    EnglishQuiz: 'EnglishQuiz',
    EnglishQuestion: 'EnglishQuestion',
    EnglishSession: 'EnglishSession',
    EnglishAttempt: 'EnglishAttempt'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "quizSet" | "image" | "answer" | "session" | "attempt" | "englishQuiz" | "englishQuestion" | "englishSession" | "englishAttempt"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      QuizSet: {
        payload: Prisma.$QuizSetPayload<ExtArgs>
        fields: Prisma.QuizSetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizSetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizSetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSetPayload>
          }
          findFirst: {
            args: Prisma.QuizSetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizSetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSetPayload>
          }
          findMany: {
            args: Prisma.QuizSetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSetPayload>[]
          }
          create: {
            args: Prisma.QuizSetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSetPayload>
          }
          createMany: {
            args: Prisma.QuizSetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizSetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSetPayload>[]
          }
          delete: {
            args: Prisma.QuizSetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSetPayload>
          }
          update: {
            args: Prisma.QuizSetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSetPayload>
          }
          deleteMany: {
            args: Prisma.QuizSetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizSetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizSetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSetPayload>[]
          }
          upsert: {
            args: Prisma.QuizSetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSetPayload>
          }
          aggregate: {
            args: Prisma.QuizSetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizSet>
          }
          groupBy: {
            args: Prisma.QuizSetGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizSetGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizSetCountArgs<ExtArgs>
            result: $Utils.Optional<QuizSetCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      Answer: {
        payload: Prisma.$AnswerPayload<ExtArgs>
        fields: Prisma.AnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findFirst: {
            args: Prisma.AnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findMany: {
            args: Prisma.AnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          create: {
            args: Prisma.AnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          createMany: {
            args: Prisma.AnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          delete: {
            args: Prisma.AnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          update: {
            args: Prisma.AnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          deleteMany: {
            args: Prisma.AnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          upsert: {
            args: Prisma.AnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          aggregate: {
            args: Prisma.AnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswer>
          }
          groupBy: {
            args: Prisma.AnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Attempt: {
        payload: Prisma.$AttemptPayload<ExtArgs>
        fields: Prisma.AttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>
          }
          findFirst: {
            args: Prisma.AttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>
          }
          findMany: {
            args: Prisma.AttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>[]
          }
          create: {
            args: Prisma.AttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>
          }
          createMany: {
            args: Prisma.AttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttemptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>[]
          }
          delete: {
            args: Prisma.AttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>
          }
          update: {
            args: Prisma.AttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>
          }
          deleteMany: {
            args: Prisma.AttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttemptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>[]
          }
          upsert: {
            args: Prisma.AttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttemptPayload>
          }
          aggregate: {
            args: Prisma.AttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttempt>
          }
          groupBy: {
            args: Prisma.AttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttemptGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttemptCountArgs<ExtArgs>
            result: $Utils.Optional<AttemptCountAggregateOutputType> | number
          }
        }
      }
      EnglishQuiz: {
        payload: Prisma.$EnglishQuizPayload<ExtArgs>
        fields: Prisma.EnglishQuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnglishQuizFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishQuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnglishQuizFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishQuizPayload>
          }
          findFirst: {
            args: Prisma.EnglishQuizFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishQuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnglishQuizFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishQuizPayload>
          }
          findMany: {
            args: Prisma.EnglishQuizFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishQuizPayload>[]
          }
          create: {
            args: Prisma.EnglishQuizCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishQuizPayload>
          }
          createMany: {
            args: Prisma.EnglishQuizCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnglishQuizCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishQuizPayload>[]
          }
          delete: {
            args: Prisma.EnglishQuizDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishQuizPayload>
          }
          update: {
            args: Prisma.EnglishQuizUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishQuizPayload>
          }
          deleteMany: {
            args: Prisma.EnglishQuizDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnglishQuizUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnglishQuizUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishQuizPayload>[]
          }
          upsert: {
            args: Prisma.EnglishQuizUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishQuizPayload>
          }
          aggregate: {
            args: Prisma.EnglishQuizAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnglishQuiz>
          }
          groupBy: {
            args: Prisma.EnglishQuizGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnglishQuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnglishQuizCountArgs<ExtArgs>
            result: $Utils.Optional<EnglishQuizCountAggregateOutputType> | number
          }
        }
      }
      EnglishQuestion: {
        payload: Prisma.$EnglishQuestionPayload<ExtArgs>
        fields: Prisma.EnglishQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnglishQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnglishQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishQuestionPayload>
          }
          findFirst: {
            args: Prisma.EnglishQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnglishQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishQuestionPayload>
          }
          findMany: {
            args: Prisma.EnglishQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishQuestionPayload>[]
          }
          create: {
            args: Prisma.EnglishQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishQuestionPayload>
          }
          createMany: {
            args: Prisma.EnglishQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnglishQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishQuestionPayload>[]
          }
          delete: {
            args: Prisma.EnglishQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishQuestionPayload>
          }
          update: {
            args: Prisma.EnglishQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishQuestionPayload>
          }
          deleteMany: {
            args: Prisma.EnglishQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnglishQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnglishQuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishQuestionPayload>[]
          }
          upsert: {
            args: Prisma.EnglishQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishQuestionPayload>
          }
          aggregate: {
            args: Prisma.EnglishQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnglishQuestion>
          }
          groupBy: {
            args: Prisma.EnglishQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnglishQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnglishQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<EnglishQuestionCountAggregateOutputType> | number
          }
        }
      }
      EnglishSession: {
        payload: Prisma.$EnglishSessionPayload<ExtArgs>
        fields: Prisma.EnglishSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnglishSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnglishSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishSessionPayload>
          }
          findFirst: {
            args: Prisma.EnglishSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnglishSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishSessionPayload>
          }
          findMany: {
            args: Prisma.EnglishSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishSessionPayload>[]
          }
          create: {
            args: Prisma.EnglishSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishSessionPayload>
          }
          createMany: {
            args: Prisma.EnglishSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnglishSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishSessionPayload>[]
          }
          delete: {
            args: Prisma.EnglishSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishSessionPayload>
          }
          update: {
            args: Prisma.EnglishSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishSessionPayload>
          }
          deleteMany: {
            args: Prisma.EnglishSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnglishSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnglishSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishSessionPayload>[]
          }
          upsert: {
            args: Prisma.EnglishSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishSessionPayload>
          }
          aggregate: {
            args: Prisma.EnglishSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnglishSession>
          }
          groupBy: {
            args: Prisma.EnglishSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnglishSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnglishSessionCountArgs<ExtArgs>
            result: $Utils.Optional<EnglishSessionCountAggregateOutputType> | number
          }
        }
      }
      EnglishAttempt: {
        payload: Prisma.$EnglishAttemptPayload<ExtArgs>
        fields: Prisma.EnglishAttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnglishAttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishAttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnglishAttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishAttemptPayload>
          }
          findFirst: {
            args: Prisma.EnglishAttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishAttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnglishAttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishAttemptPayload>
          }
          findMany: {
            args: Prisma.EnglishAttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishAttemptPayload>[]
          }
          create: {
            args: Prisma.EnglishAttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishAttemptPayload>
          }
          createMany: {
            args: Prisma.EnglishAttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnglishAttemptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishAttemptPayload>[]
          }
          delete: {
            args: Prisma.EnglishAttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishAttemptPayload>
          }
          update: {
            args: Prisma.EnglishAttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishAttemptPayload>
          }
          deleteMany: {
            args: Prisma.EnglishAttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnglishAttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnglishAttemptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishAttemptPayload>[]
          }
          upsert: {
            args: Prisma.EnglishAttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishAttemptPayload>
          }
          aggregate: {
            args: Prisma.EnglishAttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnglishAttempt>
          }
          groupBy: {
            args: Prisma.EnglishAttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnglishAttemptGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnglishAttemptCountArgs<ExtArgs>
            result: $Utils.Optional<EnglishAttemptCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    quizSet?: QuizSetOmit
    image?: ImageOmit
    answer?: AnswerOmit
    session?: SessionOmit
    attempt?: AttemptOmit
    englishQuiz?: EnglishQuizOmit
    englishQuestion?: EnglishQuestionOmit
    englishSession?: EnglishSessionOmit
    englishAttempt?: EnglishAttemptOmit
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
   * Count Type QuizSetCountOutputType
   */

  export type QuizSetCountOutputType = {
    images: number
    answers: number
    sessions: number
  }

  export type QuizSetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | QuizSetCountOutputTypeCountImagesArgs
    answers?: boolean | QuizSetCountOutputTypeCountAnswersArgs
    sessions?: boolean | QuizSetCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * QuizSetCountOutputType without action
   */
  export type QuizSetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSetCountOutputType
     */
    select?: QuizSetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizSetCountOutputType without action
   */
  export type QuizSetCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }

  /**
   * QuizSetCountOutputType without action
   */
  export type QuizSetCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }

  /**
   * QuizSetCountOutputType without action
   */
  export type QuizSetCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type AnswerCountOutputType
   */

  export type AnswerCountOutputType = {
    attempts: number
  }

  export type AnswerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempts?: boolean | AnswerCountOutputTypeCountAttemptsArgs
  }

  // Custom InputTypes
  /**
   * AnswerCountOutputType without action
   */
  export type AnswerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerCountOutputType
     */
    select?: AnswerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnswerCountOutputType without action
   */
  export type AnswerCountOutputTypeCountAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttemptWhereInput
  }


  /**
   * Count Type SessionCountOutputType
   */

  export type SessionCountOutputType = {
    attempts: number
  }

  export type SessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempts?: boolean | SessionCountOutputTypeCountAttemptsArgs
  }

  // Custom InputTypes
  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCountOutputType
     */
    select?: SessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttemptWhereInput
  }


  /**
   * Count Type EnglishQuizCountOutputType
   */

  export type EnglishQuizCountOutputType = {
    questions: number
    sessions: number
  }

  export type EnglishQuizCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | EnglishQuizCountOutputTypeCountQuestionsArgs
    sessions?: boolean | EnglishQuizCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * EnglishQuizCountOutputType without action
   */
  export type EnglishQuizCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishQuizCountOutputType
     */
    select?: EnglishQuizCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EnglishQuizCountOutputType without action
   */
  export type EnglishQuizCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnglishQuestionWhereInput
  }

  /**
   * EnglishQuizCountOutputType without action
   */
  export type EnglishQuizCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnglishSessionWhereInput
  }


  /**
   * Count Type EnglishQuestionCountOutputType
   */

  export type EnglishQuestionCountOutputType = {
    attempts: number
  }

  export type EnglishQuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempts?: boolean | EnglishQuestionCountOutputTypeCountAttemptsArgs
  }

  // Custom InputTypes
  /**
   * EnglishQuestionCountOutputType without action
   */
  export type EnglishQuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishQuestionCountOutputType
     */
    select?: EnglishQuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EnglishQuestionCountOutputType without action
   */
  export type EnglishQuestionCountOutputTypeCountAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnglishAttemptWhereInput
  }


  /**
   * Count Type EnglishSessionCountOutputType
   */

  export type EnglishSessionCountOutputType = {
    attempts: number
  }

  export type EnglishSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempts?: boolean | EnglishSessionCountOutputTypeCountAttemptsArgs
  }

  // Custom InputTypes
  /**
   * EnglishSessionCountOutputType without action
   */
  export type EnglishSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishSessionCountOutputType
     */
    select?: EnglishSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EnglishSessionCountOutputType without action
   */
  export type EnglishSessionCountOutputTypeCountAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnglishAttemptWhereInput
  }


  /**
   * Models
   */

  /**
   * Model QuizSet
   */

  export type AggregateQuizSet = {
    _count: QuizSetCountAggregateOutputType | null
    _min: QuizSetMinAggregateOutputType | null
    _max: QuizSetMaxAggregateOutputType | null
  }

  export type QuizSetMinAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizSetMaxAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizSetCountAggregateOutputType = {
    id: number
    title: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuizSetMinAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizSetMaxAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizSetCountAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuizSetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizSet to aggregate.
     */
    where?: QuizSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizSets to fetch.
     */
    orderBy?: QuizSetOrderByWithRelationInput | QuizSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizSets
    **/
    _count?: true | QuizSetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizSetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizSetMaxAggregateInputType
  }

  export type GetQuizSetAggregateType<T extends QuizSetAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizSet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizSet[P]>
      : GetScalarType<T[P], AggregateQuizSet[P]>
  }




  export type QuizSetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizSetWhereInput
    orderBy?: QuizSetOrderByWithAggregationInput | QuizSetOrderByWithAggregationInput[]
    by: QuizSetScalarFieldEnum[] | QuizSetScalarFieldEnum
    having?: QuizSetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizSetCountAggregateInputType | true
    _min?: QuizSetMinAggregateInputType
    _max?: QuizSetMaxAggregateInputType
  }

  export type QuizSetGroupByOutputType = {
    id: string
    title: string
    createdAt: Date
    updatedAt: Date
    _count: QuizSetCountAggregateOutputType | null
    _min: QuizSetMinAggregateOutputType | null
    _max: QuizSetMaxAggregateOutputType | null
  }

  type GetQuizSetGroupByPayload<T extends QuizSetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizSetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizSetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizSetGroupByOutputType[P]>
            : GetScalarType<T[P], QuizSetGroupByOutputType[P]>
        }
      >
    >


  export type QuizSetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean | QuizSet$imagesArgs<ExtArgs>
    answers?: boolean | QuizSet$answersArgs<ExtArgs>
    sessions?: boolean | QuizSet$sessionsArgs<ExtArgs>
    _count?: boolean | QuizSetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizSet"]>

  export type QuizSetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["quizSet"]>

  export type QuizSetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["quizSet"]>

  export type QuizSetSelectScalar = {
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuizSetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "createdAt" | "updatedAt", ExtArgs["result"]["quizSet"]>
  export type QuizSetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | QuizSet$imagesArgs<ExtArgs>
    answers?: boolean | QuizSet$answersArgs<ExtArgs>
    sessions?: boolean | QuizSet$sessionsArgs<ExtArgs>
    _count?: boolean | QuizSetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizSetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type QuizSetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $QuizSetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizSet"
    objects: {
      images: Prisma.$ImagePayload<ExtArgs>[]
      answers: Prisma.$AnswerPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["quizSet"]>
    composites: {}
  }

  type QuizSetGetPayload<S extends boolean | null | undefined | QuizSetDefaultArgs> = $Result.GetResult<Prisma.$QuizSetPayload, S>

  type QuizSetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizSetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizSetCountAggregateInputType | true
    }

  export interface QuizSetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizSet'], meta: { name: 'QuizSet' } }
    /**
     * Find zero or one QuizSet that matches the filter.
     * @param {QuizSetFindUniqueArgs} args - Arguments to find a QuizSet
     * @example
     * // Get one QuizSet
     * const quizSet = await prisma.quizSet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizSetFindUniqueArgs>(args: SelectSubset<T, QuizSetFindUniqueArgs<ExtArgs>>): Prisma__QuizSetClient<$Result.GetResult<Prisma.$QuizSetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizSet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizSetFindUniqueOrThrowArgs} args - Arguments to find a QuizSet
     * @example
     * // Get one QuizSet
     * const quizSet = await prisma.quizSet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizSetFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizSetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizSetClient<$Result.GetResult<Prisma.$QuizSetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizSet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSetFindFirstArgs} args - Arguments to find a QuizSet
     * @example
     * // Get one QuizSet
     * const quizSet = await prisma.quizSet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizSetFindFirstArgs>(args?: SelectSubset<T, QuizSetFindFirstArgs<ExtArgs>>): Prisma__QuizSetClient<$Result.GetResult<Prisma.$QuizSetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizSet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSetFindFirstOrThrowArgs} args - Arguments to find a QuizSet
     * @example
     * // Get one QuizSet
     * const quizSet = await prisma.quizSet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizSetFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizSetFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizSetClient<$Result.GetResult<Prisma.$QuizSetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizSets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizSets
     * const quizSets = await prisma.quizSet.findMany()
     * 
     * // Get first 10 QuizSets
     * const quizSets = await prisma.quizSet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizSetWithIdOnly = await prisma.quizSet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizSetFindManyArgs>(args?: SelectSubset<T, QuizSetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizSetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizSet.
     * @param {QuizSetCreateArgs} args - Arguments to create a QuizSet.
     * @example
     * // Create one QuizSet
     * const QuizSet = await prisma.quizSet.create({
     *   data: {
     *     // ... data to create a QuizSet
     *   }
     * })
     * 
     */
    create<T extends QuizSetCreateArgs>(args: SelectSubset<T, QuizSetCreateArgs<ExtArgs>>): Prisma__QuizSetClient<$Result.GetResult<Prisma.$QuizSetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizSets.
     * @param {QuizSetCreateManyArgs} args - Arguments to create many QuizSets.
     * @example
     * // Create many QuizSets
     * const quizSet = await prisma.quizSet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizSetCreateManyArgs>(args?: SelectSubset<T, QuizSetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizSets and returns the data saved in the database.
     * @param {QuizSetCreateManyAndReturnArgs} args - Arguments to create many QuizSets.
     * @example
     * // Create many QuizSets
     * const quizSet = await prisma.quizSet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizSets and only return the `id`
     * const quizSetWithIdOnly = await prisma.quizSet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizSetCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizSetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizSetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizSet.
     * @param {QuizSetDeleteArgs} args - Arguments to delete one QuizSet.
     * @example
     * // Delete one QuizSet
     * const QuizSet = await prisma.quizSet.delete({
     *   where: {
     *     // ... filter to delete one QuizSet
     *   }
     * })
     * 
     */
    delete<T extends QuizSetDeleteArgs>(args: SelectSubset<T, QuizSetDeleteArgs<ExtArgs>>): Prisma__QuizSetClient<$Result.GetResult<Prisma.$QuizSetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizSet.
     * @param {QuizSetUpdateArgs} args - Arguments to update one QuizSet.
     * @example
     * // Update one QuizSet
     * const quizSet = await prisma.quizSet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizSetUpdateArgs>(args: SelectSubset<T, QuizSetUpdateArgs<ExtArgs>>): Prisma__QuizSetClient<$Result.GetResult<Prisma.$QuizSetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizSets.
     * @param {QuizSetDeleteManyArgs} args - Arguments to filter QuizSets to delete.
     * @example
     * // Delete a few QuizSets
     * const { count } = await prisma.quizSet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizSetDeleteManyArgs>(args?: SelectSubset<T, QuizSetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizSets
     * const quizSet = await prisma.quizSet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizSetUpdateManyArgs>(args: SelectSubset<T, QuizSetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizSets and returns the data updated in the database.
     * @param {QuizSetUpdateManyAndReturnArgs} args - Arguments to update many QuizSets.
     * @example
     * // Update many QuizSets
     * const quizSet = await prisma.quizSet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizSets and only return the `id`
     * const quizSetWithIdOnly = await prisma.quizSet.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuizSetUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizSetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizSetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizSet.
     * @param {QuizSetUpsertArgs} args - Arguments to update or create a QuizSet.
     * @example
     * // Update or create a QuizSet
     * const quizSet = await prisma.quizSet.upsert({
     *   create: {
     *     // ... data to create a QuizSet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizSet we want to update
     *   }
     * })
     */
    upsert<T extends QuizSetUpsertArgs>(args: SelectSubset<T, QuizSetUpsertArgs<ExtArgs>>): Prisma__QuizSetClient<$Result.GetResult<Prisma.$QuizSetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSetCountArgs} args - Arguments to filter QuizSets to count.
     * @example
     * // Count the number of QuizSets
     * const count = await prisma.quizSet.count({
     *   where: {
     *     // ... the filter for the QuizSets we want to count
     *   }
     * })
    **/
    count<T extends QuizSetCountArgs>(
      args?: Subset<T, QuizSetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizSetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizSetAggregateArgs>(args: Subset<T, QuizSetAggregateArgs>): Prisma.PrismaPromise<GetQuizSetAggregateType<T>>

    /**
     * Group by QuizSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSetGroupByArgs} args - Group by arguments.
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
      T extends QuizSetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizSetGroupByArgs['orderBy'] }
        : { orderBy?: QuizSetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizSetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizSetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizSet model
   */
  readonly fields: QuizSetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizSet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizSetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends QuizSet$imagesArgs<ExtArgs> = {}>(args?: Subset<T, QuizSet$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    answers<T extends QuizSet$answersArgs<ExtArgs> = {}>(args?: Subset<T, QuizSet$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends QuizSet$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, QuizSet$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the QuizSet model
   */
  interface QuizSetFieldRefs {
    readonly id: FieldRef<"QuizSet", 'String'>
    readonly title: FieldRef<"QuizSet", 'String'>
    readonly createdAt: FieldRef<"QuizSet", 'DateTime'>
    readonly updatedAt: FieldRef<"QuizSet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuizSet findUnique
   */
  export type QuizSetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSet
     */
    select?: QuizSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSet
     */
    omit?: QuizSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSetInclude<ExtArgs> | null
    /**
     * Filter, which QuizSet to fetch.
     */
    where: QuizSetWhereUniqueInput
  }

  /**
   * QuizSet findUniqueOrThrow
   */
  export type QuizSetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSet
     */
    select?: QuizSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSet
     */
    omit?: QuizSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSetInclude<ExtArgs> | null
    /**
     * Filter, which QuizSet to fetch.
     */
    where: QuizSetWhereUniqueInput
  }

  /**
   * QuizSet findFirst
   */
  export type QuizSetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSet
     */
    select?: QuizSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSet
     */
    omit?: QuizSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSetInclude<ExtArgs> | null
    /**
     * Filter, which QuizSet to fetch.
     */
    where?: QuizSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizSets to fetch.
     */
    orderBy?: QuizSetOrderByWithRelationInput | QuizSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizSets.
     */
    cursor?: QuizSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizSets.
     */
    distinct?: QuizSetScalarFieldEnum | QuizSetScalarFieldEnum[]
  }

  /**
   * QuizSet findFirstOrThrow
   */
  export type QuizSetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSet
     */
    select?: QuizSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSet
     */
    omit?: QuizSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSetInclude<ExtArgs> | null
    /**
     * Filter, which QuizSet to fetch.
     */
    where?: QuizSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizSets to fetch.
     */
    orderBy?: QuizSetOrderByWithRelationInput | QuizSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizSets.
     */
    cursor?: QuizSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizSets.
     */
    distinct?: QuizSetScalarFieldEnum | QuizSetScalarFieldEnum[]
  }

  /**
   * QuizSet findMany
   */
  export type QuizSetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSet
     */
    select?: QuizSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSet
     */
    omit?: QuizSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSetInclude<ExtArgs> | null
    /**
     * Filter, which QuizSets to fetch.
     */
    where?: QuizSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizSets to fetch.
     */
    orderBy?: QuizSetOrderByWithRelationInput | QuizSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizSets.
     */
    cursor?: QuizSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizSets.
     */
    skip?: number
    distinct?: QuizSetScalarFieldEnum | QuizSetScalarFieldEnum[]
  }

  /**
   * QuizSet create
   */
  export type QuizSetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSet
     */
    select?: QuizSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSet
     */
    omit?: QuizSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSetInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizSet.
     */
    data: XOR<QuizSetCreateInput, QuizSetUncheckedCreateInput>
  }

  /**
   * QuizSet createMany
   */
  export type QuizSetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizSets.
     */
    data: QuizSetCreateManyInput | QuizSetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizSet createManyAndReturn
   */
  export type QuizSetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSet
     */
    select?: QuizSetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSet
     */
    omit?: QuizSetOmit<ExtArgs> | null
    /**
     * The data used to create many QuizSets.
     */
    data: QuizSetCreateManyInput | QuizSetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizSet update
   */
  export type QuizSetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSet
     */
    select?: QuizSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSet
     */
    omit?: QuizSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSetInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizSet.
     */
    data: XOR<QuizSetUpdateInput, QuizSetUncheckedUpdateInput>
    /**
     * Choose, which QuizSet to update.
     */
    where: QuizSetWhereUniqueInput
  }

  /**
   * QuizSet updateMany
   */
  export type QuizSetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizSets.
     */
    data: XOR<QuizSetUpdateManyMutationInput, QuizSetUncheckedUpdateManyInput>
    /**
     * Filter which QuizSets to update
     */
    where?: QuizSetWhereInput
    /**
     * Limit how many QuizSets to update.
     */
    limit?: number
  }

  /**
   * QuizSet updateManyAndReturn
   */
  export type QuizSetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSet
     */
    select?: QuizSetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSet
     */
    omit?: QuizSetOmit<ExtArgs> | null
    /**
     * The data used to update QuizSets.
     */
    data: XOR<QuizSetUpdateManyMutationInput, QuizSetUncheckedUpdateManyInput>
    /**
     * Filter which QuizSets to update
     */
    where?: QuizSetWhereInput
    /**
     * Limit how many QuizSets to update.
     */
    limit?: number
  }

  /**
   * QuizSet upsert
   */
  export type QuizSetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSet
     */
    select?: QuizSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSet
     */
    omit?: QuizSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSetInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizSet to update in case it exists.
     */
    where: QuizSetWhereUniqueInput
    /**
     * In case the QuizSet found by the `where` argument doesn't exist, create a new QuizSet with this data.
     */
    create: XOR<QuizSetCreateInput, QuizSetUncheckedCreateInput>
    /**
     * In case the QuizSet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizSetUpdateInput, QuizSetUncheckedUpdateInput>
  }

  /**
   * QuizSet delete
   */
  export type QuizSetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSet
     */
    select?: QuizSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSet
     */
    omit?: QuizSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSetInclude<ExtArgs> | null
    /**
     * Filter which QuizSet to delete.
     */
    where: QuizSetWhereUniqueInput
  }

  /**
   * QuizSet deleteMany
   */
  export type QuizSetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizSets to delete
     */
    where?: QuizSetWhereInput
    /**
     * Limit how many QuizSets to delete.
     */
    limit?: number
  }

  /**
   * QuizSet.images
   */
  export type QuizSet$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * QuizSet.answers
   */
  export type QuizSet$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * QuizSet.sessions
   */
  export type QuizSet$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * QuizSet without action
   */
  export type QuizSetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSet
     */
    select?: QuizSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSet
     */
    omit?: QuizSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSetInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    order: number | null
  }

  export type ImageSumAggregateOutputType = {
    order: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: string | null
    url: string | null
    publicId: string | null
    order: number | null
    quizSetId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageMaxAggregateOutputType = {
    id: string | null
    url: string | null
    publicId: string | null
    order: number | null
    quizSetId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    url: number
    publicId: number
    order: number
    quizSetId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    order?: true
  }

  export type ImageSumAggregateInputType = {
    order?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    url?: true
    publicId?: true
    order?: true
    quizSetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    url?: true
    publicId?: true
    order?: true
    quizSetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    url?: true
    publicId?: true
    order?: true
    quizSetId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: string
    url: string
    publicId: string | null
    order: number
    quizSetId: string
    createdAt: Date
    updatedAt: Date
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    publicId?: boolean
    order?: boolean
    quizSetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quizSet?: boolean | QuizSetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    publicId?: boolean
    order?: boolean
    quizSetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quizSet?: boolean | QuizSetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    publicId?: boolean
    order?: boolean
    quizSetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quizSet?: boolean | QuizSetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    url?: boolean
    publicId?: boolean
    order?: boolean
    quizSetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "publicId" | "order" | "quizSetId" | "createdAt" | "updatedAt", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizSet?: boolean | QuizSetDefaultArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizSet?: boolean | QuizSetDefaultArgs<ExtArgs>
  }
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizSet?: boolean | QuizSetDefaultArgs<ExtArgs>
  }

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      quizSet: Prisma.$QuizSetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      publicId: string | null
      order: number
      quizSetId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quizSet<T extends QuizSetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizSetDefaultArgs<ExtArgs>>): Prisma__QuizSetClient<$Result.GetResult<Prisma.$QuizSetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'String'>
    readonly url: FieldRef<"Image", 'String'>
    readonly publicId: FieldRef<"Image", 'String'>
    readonly order: FieldRef<"Image", 'Int'>
    readonly quizSetId: FieldRef<"Image", 'String'>
    readonly createdAt: FieldRef<"Image", 'DateTime'>
    readonly updatedAt: FieldRef<"Image", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model Answer
   */

  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  export type AnswerAvgAggregateOutputType = {
    qNumber: number | null
  }

  export type AnswerSumAggregateOutputType = {
    qNumber: number | null
  }

  export type AnswerMinAggregateOutputType = {
    id: string | null
    qNumber: number | null
    answer: string | null
    quizSetId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnswerMaxAggregateOutputType = {
    id: string | null
    qNumber: number | null
    answer: string | null
    quizSetId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnswerCountAggregateOutputType = {
    id: number
    qNumber: number
    answer: number
    quizSetId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnswerAvgAggregateInputType = {
    qNumber?: true
  }

  export type AnswerSumAggregateInputType = {
    qNumber?: true
  }

  export type AnswerMinAggregateInputType = {
    id?: true
    qNumber?: true
    answer?: true
    quizSetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnswerMaxAggregateInputType = {
    id?: true
    qNumber?: true
    answer?: true
    quizSetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnswerCountAggregateInputType = {
    id?: true
    qNumber?: true
    answer?: true
    quizSetId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answer to aggregate.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerMaxAggregateInputType
  }

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>
  }




  export type AnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithAggregationInput | AnswerOrderByWithAggregationInput[]
    by: AnswerScalarFieldEnum[] | AnswerScalarFieldEnum
    having?: AnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCountAggregateInputType | true
    _avg?: AnswerAvgAggregateInputType
    _sum?: AnswerSumAggregateInputType
    _min?: AnswerMinAggregateInputType
    _max?: AnswerMaxAggregateInputType
  }

  export type AnswerGroupByOutputType = {
    id: string
    qNumber: number
    answer: string
    quizSetId: string
    createdAt: Date
    updatedAt: Date
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>
        }
      >
    >


  export type AnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qNumber?: boolean
    answer?: boolean
    quizSetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quizSet?: boolean | QuizSetDefaultArgs<ExtArgs>
    attempts?: boolean | Answer$attemptsArgs<ExtArgs>
    _count?: boolean | AnswerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qNumber?: boolean
    answer?: boolean
    quizSetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quizSet?: boolean | QuizSetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qNumber?: boolean
    answer?: boolean
    quizSetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quizSet?: boolean | QuizSetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectScalar = {
    id?: boolean
    qNumber?: boolean
    answer?: boolean
    quizSetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "qNumber" | "answer" | "quizSetId" | "createdAt" | "updatedAt", ExtArgs["result"]["answer"]>
  export type AnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizSet?: boolean | QuizSetDefaultArgs<ExtArgs>
    attempts?: boolean | Answer$attemptsArgs<ExtArgs>
    _count?: boolean | AnswerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizSet?: boolean | QuizSetDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizSet?: boolean | QuizSetDefaultArgs<ExtArgs>
  }

  export type $AnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Answer"
    objects: {
      quizSet: Prisma.$QuizSetPayload<ExtArgs>
      attempts: Prisma.$AttemptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      qNumber: number
      answer: string
      quizSetId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["answer"]>
    composites: {}
  }

  type AnswerGetPayload<S extends boolean | null | undefined | AnswerDefaultArgs> = $Result.GetResult<Prisma.$AnswerPayload, S>

  type AnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswerCountAggregateInputType | true
    }

  export interface AnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Answer'], meta: { name: 'Answer' } }
    /**
     * Find zero or one Answer that matches the filter.
     * @param {AnswerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerFindUniqueArgs>(args: SelectSubset<T, AnswerFindUniqueArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnswerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerFindFirstArgs>(args?: SelectSubset<T, AnswerFindFirstArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerWithIdOnly = await prisma.answer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnswerFindManyArgs>(args?: SelectSubset<T, AnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answer.
     * @param {AnswerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     * 
     */
    create<T extends AnswerCreateArgs>(args: SelectSubset<T, AnswerCreateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answers.
     * @param {AnswerCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswerCreateManyArgs>(args?: SelectSubset<T, AnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {AnswerCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, AnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Answer.
     * @param {AnswerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     * 
     */
    delete<T extends AnswerDeleteArgs>(args: SelectSubset<T, AnswerDeleteArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answer.
     * @param {AnswerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswerUpdateArgs>(args: SelectSubset<T, AnswerUpdateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answers.
     * @param {AnswerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswerDeleteManyArgs>(args?: SelectSubset<T, AnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswerUpdateManyArgs>(args: SelectSubset<T, AnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers and returns the data updated in the database.
     * @param {AnswerUpdateManyAndReturnArgs} args - Arguments to update many Answers.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, AnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Answer.
     * @param {AnswerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
     */
    upsert<T extends AnswerUpsertArgs>(args: SelectSubset<T, AnswerUpsertArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswerCountArgs>(
      args?: Subset<T, AnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnswerAggregateArgs>(args: Subset<T, AnswerAggregateArgs>): Prisma.PrismaPromise<GetAnswerAggregateType<T>>

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerGroupByArgs} args - Group by arguments.
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
      T extends AnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerGroupByArgs['orderBy'] }
        : { orderBy?: AnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Answer model
   */
  readonly fields: AnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quizSet<T extends QuizSetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizSetDefaultArgs<ExtArgs>>): Prisma__QuizSetClient<$Result.GetResult<Prisma.$QuizSetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attempts<T extends Answer$attemptsArgs<ExtArgs> = {}>(args?: Subset<T, Answer$attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Answer model
   */
  interface AnswerFieldRefs {
    readonly id: FieldRef<"Answer", 'String'>
    readonly qNumber: FieldRef<"Answer", 'Int'>
    readonly answer: FieldRef<"Answer", 'String'>
    readonly quizSetId: FieldRef<"Answer", 'String'>
    readonly createdAt: FieldRef<"Answer", 'DateTime'>
    readonly updatedAt: FieldRef<"Answer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Answer findUnique
   */
  export type AnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findUniqueOrThrow
   */
  export type AnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findFirst
   */
  export type AnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findFirstOrThrow
   */
  export type AnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findMany
   */
  export type AnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer create
   */
  export type AnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a Answer.
     */
    data: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
  }

  /**
   * Answer createMany
   */
  export type AnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Answer createManyAndReturn
   */
  export type AnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer update
   */
  export type AnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a Answer.
     */
    data: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
    /**
     * Choose, which Answer to update.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer updateMany
   */
  export type AnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
  }

  /**
   * Answer updateManyAndReturn
   */
  export type AnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer upsert
   */
  export type AnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the Answer to update in case it exists.
     */
    where: AnswerWhereUniqueInput
    /**
     * In case the Answer found by the `where` argument doesn't exist, create a new Answer with this data.
     */
    create: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
    /**
     * In case the Answer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
  }

  /**
   * Answer delete
   */
  export type AnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter which Answer to delete.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer deleteMany
   */
  export type AnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to delete.
     */
    limit?: number
  }

  /**
   * Answer.attempts
   */
  export type Answer$attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    where?: AttemptWhereInput
    orderBy?: AttemptOrderByWithRelationInput | AttemptOrderByWithRelationInput[]
    cursor?: AttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttemptScalarFieldEnum | AttemptScalarFieldEnum[]
  }

  /**
   * Answer without action
   */
  export type AnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    score: number | null
    total: number | null
    timeTakenMs: number | null
  }

  export type SessionSumAggregateOutputType = {
    score: number | null
    total: number | null
    timeTakenMs: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    quizSetId: string | null
    score: number | null
    total: number | null
    timeTakenMs: number | null
    createdAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    quizSetId: string | null
    score: number | null
    total: number | null
    timeTakenMs: number | null
    createdAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    quizSetId: number
    score: number
    total: number
    timeTakenMs: number
    createdAt: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    score?: true
    total?: true
    timeTakenMs?: true
  }

  export type SessionSumAggregateInputType = {
    score?: true
    total?: true
    timeTakenMs?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    quizSetId?: true
    score?: true
    total?: true
    timeTakenMs?: true
    createdAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    quizSetId?: true
    score?: true
    total?: true
    timeTakenMs?: true
    createdAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    quizSetId?: true
    score?: true
    total?: true
    timeTakenMs?: true
    createdAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    quizSetId: string
    score: number
    total: number
    timeTakenMs: number
    createdAt: Date
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizSetId?: boolean
    score?: boolean
    total?: boolean
    timeTakenMs?: boolean
    createdAt?: boolean
    quizSet?: boolean | QuizSetDefaultArgs<ExtArgs>
    attempts?: boolean | Session$attemptsArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizSetId?: boolean
    score?: boolean
    total?: boolean
    timeTakenMs?: boolean
    createdAt?: boolean
    quizSet?: boolean | QuizSetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizSetId?: boolean
    score?: boolean
    total?: boolean
    timeTakenMs?: boolean
    createdAt?: boolean
    quizSet?: boolean | QuizSetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    quizSetId?: boolean
    score?: boolean
    total?: boolean
    timeTakenMs?: boolean
    createdAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quizSetId" | "score" | "total" | "timeTakenMs" | "createdAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizSet?: boolean | QuizSetDefaultArgs<ExtArgs>
    attempts?: boolean | Session$attemptsArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizSet?: boolean | QuizSetDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizSet?: boolean | QuizSetDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      quizSet: Prisma.$QuizSetPayload<ExtArgs>
      attempts: Prisma.$AttemptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quizSetId: string
      score: number
      total: number
      timeTakenMs: number
      createdAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quizSet<T extends QuizSetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizSetDefaultArgs<ExtArgs>>): Prisma__QuizSetClient<$Result.GetResult<Prisma.$QuizSetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attempts<T extends Session$attemptsArgs<ExtArgs> = {}>(args?: Subset<T, Session$attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly quizSetId: FieldRef<"Session", 'String'>
    readonly score: FieldRef<"Session", 'Int'>
    readonly total: FieldRef<"Session", 'Int'>
    readonly timeTakenMs: FieldRef<"Session", 'Int'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session.attempts
   */
  export type Session$attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    where?: AttemptWhereInput
    orderBy?: AttemptOrderByWithRelationInput | AttemptOrderByWithRelationInput[]
    cursor?: AttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttemptScalarFieldEnum | AttemptScalarFieldEnum[]
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Attempt
   */

  export type AggregateAttempt = {
    _count: AttemptCountAggregateOutputType | null
    _avg: AttemptAvgAggregateOutputType | null
    _sum: AttemptSumAggregateOutputType | null
    _min: AttemptMinAggregateOutputType | null
    _max: AttemptMaxAggregateOutputType | null
  }

  export type AttemptAvgAggregateOutputType = {
    qNumber: number | null
    timeTakenMs: number | null
  }

  export type AttemptSumAggregateOutputType = {
    qNumber: number | null
    timeTakenMs: number | null
  }

  export type AttemptMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    qNumber: number | null
    userAnswer: string | null
    correctAnswer: string | null
    isCorrect: boolean | null
    timeTakenMs: number | null
    answerId: string | null
    createdAt: Date | null
  }

  export type AttemptMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    qNumber: number | null
    userAnswer: string | null
    correctAnswer: string | null
    isCorrect: boolean | null
    timeTakenMs: number | null
    answerId: string | null
    createdAt: Date | null
  }

  export type AttemptCountAggregateOutputType = {
    id: number
    sessionId: number
    qNumber: number
    userAnswer: number
    correctAnswer: number
    isCorrect: number
    timeTakenMs: number
    answerId: number
    createdAt: number
    _all: number
  }


  export type AttemptAvgAggregateInputType = {
    qNumber?: true
    timeTakenMs?: true
  }

  export type AttemptSumAggregateInputType = {
    qNumber?: true
    timeTakenMs?: true
  }

  export type AttemptMinAggregateInputType = {
    id?: true
    sessionId?: true
    qNumber?: true
    userAnswer?: true
    correctAnswer?: true
    isCorrect?: true
    timeTakenMs?: true
    answerId?: true
    createdAt?: true
  }

  export type AttemptMaxAggregateInputType = {
    id?: true
    sessionId?: true
    qNumber?: true
    userAnswer?: true
    correctAnswer?: true
    isCorrect?: true
    timeTakenMs?: true
    answerId?: true
    createdAt?: true
  }

  export type AttemptCountAggregateInputType = {
    id?: true
    sessionId?: true
    qNumber?: true
    userAnswer?: true
    correctAnswer?: true
    isCorrect?: true
    timeTakenMs?: true
    answerId?: true
    createdAt?: true
    _all?: true
  }

  export type AttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attempt to aggregate.
     */
    where?: AttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attempts to fetch.
     */
    orderBy?: AttemptOrderByWithRelationInput | AttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attempts
    **/
    _count?: true | AttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttemptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttemptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttemptMaxAggregateInputType
  }

  export type GetAttemptAggregateType<T extends AttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttempt[P]>
      : GetScalarType<T[P], AggregateAttempt[P]>
  }




  export type AttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttemptWhereInput
    orderBy?: AttemptOrderByWithAggregationInput | AttemptOrderByWithAggregationInput[]
    by: AttemptScalarFieldEnum[] | AttemptScalarFieldEnum
    having?: AttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttemptCountAggregateInputType | true
    _avg?: AttemptAvgAggregateInputType
    _sum?: AttemptSumAggregateInputType
    _min?: AttemptMinAggregateInputType
    _max?: AttemptMaxAggregateInputType
  }

  export type AttemptGroupByOutputType = {
    id: string
    sessionId: string
    qNumber: number
    userAnswer: string
    correctAnswer: string
    isCorrect: boolean
    timeTakenMs: number
    answerId: string | null
    createdAt: Date
    _count: AttemptCountAggregateOutputType | null
    _avg: AttemptAvgAggregateOutputType | null
    _sum: AttemptSumAggregateOutputType | null
    _min: AttemptMinAggregateOutputType | null
    _max: AttemptMaxAggregateOutputType | null
  }

  type GetAttemptGroupByPayload<T extends AttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttemptGroupByOutputType[P]>
            : GetScalarType<T[P], AttemptGroupByOutputType[P]>
        }
      >
    >


  export type AttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    qNumber?: boolean
    userAnswer?: boolean
    correctAnswer?: boolean
    isCorrect?: boolean
    timeTakenMs?: boolean
    answerId?: boolean
    createdAt?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
    answer?: boolean | Attempt$answerArgs<ExtArgs>
  }, ExtArgs["result"]["attempt"]>

  export type AttemptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    qNumber?: boolean
    userAnswer?: boolean
    correctAnswer?: boolean
    isCorrect?: boolean
    timeTakenMs?: boolean
    answerId?: boolean
    createdAt?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
    answer?: boolean | Attempt$answerArgs<ExtArgs>
  }, ExtArgs["result"]["attempt"]>

  export type AttemptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    qNumber?: boolean
    userAnswer?: boolean
    correctAnswer?: boolean
    isCorrect?: boolean
    timeTakenMs?: boolean
    answerId?: boolean
    createdAt?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
    answer?: boolean | Attempt$answerArgs<ExtArgs>
  }, ExtArgs["result"]["attempt"]>

  export type AttemptSelectScalar = {
    id?: boolean
    sessionId?: boolean
    qNumber?: boolean
    userAnswer?: boolean
    correctAnswer?: boolean
    isCorrect?: boolean
    timeTakenMs?: boolean
    answerId?: boolean
    createdAt?: boolean
  }

  export type AttemptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "qNumber" | "userAnswer" | "correctAnswer" | "isCorrect" | "timeTakenMs" | "answerId" | "createdAt", ExtArgs["result"]["attempt"]>
  export type AttemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
    answer?: boolean | Attempt$answerArgs<ExtArgs>
  }
  export type AttemptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
    answer?: boolean | Attempt$answerArgs<ExtArgs>
  }
  export type AttemptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
    answer?: boolean | Attempt$answerArgs<ExtArgs>
  }

  export type $AttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attempt"
    objects: {
      session: Prisma.$SessionPayload<ExtArgs>
      answer: Prisma.$AnswerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      qNumber: number
      userAnswer: string
      correctAnswer: string
      isCorrect: boolean
      timeTakenMs: number
      answerId: string | null
      createdAt: Date
    }, ExtArgs["result"]["attempt"]>
    composites: {}
  }

  type AttemptGetPayload<S extends boolean | null | undefined | AttemptDefaultArgs> = $Result.GetResult<Prisma.$AttemptPayload, S>

  type AttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttemptCountAggregateInputType | true
    }

  export interface AttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attempt'], meta: { name: 'Attempt' } }
    /**
     * Find zero or one Attempt that matches the filter.
     * @param {AttemptFindUniqueArgs} args - Arguments to find a Attempt
     * @example
     * // Get one Attempt
     * const attempt = await prisma.attempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttemptFindUniqueArgs>(args: SelectSubset<T, AttemptFindUniqueArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttemptFindUniqueOrThrowArgs} args - Arguments to find a Attempt
     * @example
     * // Get one Attempt
     * const attempt = await prisma.attempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, AttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptFindFirstArgs} args - Arguments to find a Attempt
     * @example
     * // Get one Attempt
     * const attempt = await prisma.attempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttemptFindFirstArgs>(args?: SelectSubset<T, AttemptFindFirstArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptFindFirstOrThrowArgs} args - Arguments to find a Attempt
     * @example
     * // Get one Attempt
     * const attempt = await prisma.attempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, AttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attempts
     * const attempts = await prisma.attempt.findMany()
     * 
     * // Get first 10 Attempts
     * const attempts = await prisma.attempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attemptWithIdOnly = await prisma.attempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttemptFindManyArgs>(args?: SelectSubset<T, AttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attempt.
     * @param {AttemptCreateArgs} args - Arguments to create a Attempt.
     * @example
     * // Create one Attempt
     * const Attempt = await prisma.attempt.create({
     *   data: {
     *     // ... data to create a Attempt
     *   }
     * })
     * 
     */
    create<T extends AttemptCreateArgs>(args: SelectSubset<T, AttemptCreateArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attempts.
     * @param {AttemptCreateManyArgs} args - Arguments to create many Attempts.
     * @example
     * // Create many Attempts
     * const attempt = await prisma.attempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttemptCreateManyArgs>(args?: SelectSubset<T, AttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attempts and returns the data saved in the database.
     * @param {AttemptCreateManyAndReturnArgs} args - Arguments to create many Attempts.
     * @example
     * // Create many Attempts
     * const attempt = await prisma.attempt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attempts and only return the `id`
     * const attemptWithIdOnly = await prisma.attempt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttemptCreateManyAndReturnArgs>(args?: SelectSubset<T, AttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attempt.
     * @param {AttemptDeleteArgs} args - Arguments to delete one Attempt.
     * @example
     * // Delete one Attempt
     * const Attempt = await prisma.attempt.delete({
     *   where: {
     *     // ... filter to delete one Attempt
     *   }
     * })
     * 
     */
    delete<T extends AttemptDeleteArgs>(args: SelectSubset<T, AttemptDeleteArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attempt.
     * @param {AttemptUpdateArgs} args - Arguments to update one Attempt.
     * @example
     * // Update one Attempt
     * const attempt = await prisma.attempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttemptUpdateArgs>(args: SelectSubset<T, AttemptUpdateArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attempts.
     * @param {AttemptDeleteManyArgs} args - Arguments to filter Attempts to delete.
     * @example
     * // Delete a few Attempts
     * const { count } = await prisma.attempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttemptDeleteManyArgs>(args?: SelectSubset<T, AttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attempts
     * const attempt = await prisma.attempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttemptUpdateManyArgs>(args: SelectSubset<T, AttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attempts and returns the data updated in the database.
     * @param {AttemptUpdateManyAndReturnArgs} args - Arguments to update many Attempts.
     * @example
     * // Update many Attempts
     * const attempt = await prisma.attempt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attempts and only return the `id`
     * const attemptWithIdOnly = await prisma.attempt.updateManyAndReturn({
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
    updateManyAndReturn<T extends AttemptUpdateManyAndReturnArgs>(args: SelectSubset<T, AttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attempt.
     * @param {AttemptUpsertArgs} args - Arguments to update or create a Attempt.
     * @example
     * // Update or create a Attempt
     * const attempt = await prisma.attempt.upsert({
     *   create: {
     *     // ... data to create a Attempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attempt we want to update
     *   }
     * })
     */
    upsert<T extends AttemptUpsertArgs>(args: SelectSubset<T, AttemptUpsertArgs<ExtArgs>>): Prisma__AttemptClient<$Result.GetResult<Prisma.$AttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptCountArgs} args - Arguments to filter Attempts to count.
     * @example
     * // Count the number of Attempts
     * const count = await prisma.attempt.count({
     *   where: {
     *     // ... the filter for the Attempts we want to count
     *   }
     * })
    **/
    count<T extends AttemptCountArgs>(
      args?: Subset<T, AttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttemptAggregateArgs>(args: Subset<T, AttemptAggregateArgs>): Prisma.PrismaPromise<GetAttemptAggregateType<T>>

    /**
     * Group by Attempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptGroupByArgs} args - Group by arguments.
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
      T extends AttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttemptGroupByArgs['orderBy'] }
        : { orderBy?: AttemptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attempt model
   */
  readonly fields: AttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends SessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionDefaultArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answer<T extends Attempt$answerArgs<ExtArgs> = {}>(args?: Subset<T, Attempt$answerArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Attempt model
   */
  interface AttemptFieldRefs {
    readonly id: FieldRef<"Attempt", 'String'>
    readonly sessionId: FieldRef<"Attempt", 'String'>
    readonly qNumber: FieldRef<"Attempt", 'Int'>
    readonly userAnswer: FieldRef<"Attempt", 'String'>
    readonly correctAnswer: FieldRef<"Attempt", 'String'>
    readonly isCorrect: FieldRef<"Attempt", 'Boolean'>
    readonly timeTakenMs: FieldRef<"Attempt", 'Int'>
    readonly answerId: FieldRef<"Attempt", 'String'>
    readonly createdAt: FieldRef<"Attempt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attempt findUnique
   */
  export type AttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * Filter, which Attempt to fetch.
     */
    where: AttemptWhereUniqueInput
  }

  /**
   * Attempt findUniqueOrThrow
   */
  export type AttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * Filter, which Attempt to fetch.
     */
    where: AttemptWhereUniqueInput
  }

  /**
   * Attempt findFirst
   */
  export type AttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * Filter, which Attempt to fetch.
     */
    where?: AttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attempts to fetch.
     */
    orderBy?: AttemptOrderByWithRelationInput | AttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attempts.
     */
    cursor?: AttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attempts.
     */
    distinct?: AttemptScalarFieldEnum | AttemptScalarFieldEnum[]
  }

  /**
   * Attempt findFirstOrThrow
   */
  export type AttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * Filter, which Attempt to fetch.
     */
    where?: AttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attempts to fetch.
     */
    orderBy?: AttemptOrderByWithRelationInput | AttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attempts.
     */
    cursor?: AttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attempts.
     */
    distinct?: AttemptScalarFieldEnum | AttemptScalarFieldEnum[]
  }

  /**
   * Attempt findMany
   */
  export type AttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * Filter, which Attempts to fetch.
     */
    where?: AttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attempts to fetch.
     */
    orderBy?: AttemptOrderByWithRelationInput | AttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attempts.
     */
    cursor?: AttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attempts.
     */
    skip?: number
    distinct?: AttemptScalarFieldEnum | AttemptScalarFieldEnum[]
  }

  /**
   * Attempt create
   */
  export type AttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * The data needed to create a Attempt.
     */
    data: XOR<AttemptCreateInput, AttemptUncheckedCreateInput>
  }

  /**
   * Attempt createMany
   */
  export type AttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attempts.
     */
    data: AttemptCreateManyInput | AttemptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attempt createManyAndReturn
   */
  export type AttemptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * The data used to create many Attempts.
     */
    data: AttemptCreateManyInput | AttemptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attempt update
   */
  export type AttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * The data needed to update a Attempt.
     */
    data: XOR<AttemptUpdateInput, AttemptUncheckedUpdateInput>
    /**
     * Choose, which Attempt to update.
     */
    where: AttemptWhereUniqueInput
  }

  /**
   * Attempt updateMany
   */
  export type AttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attempts.
     */
    data: XOR<AttemptUpdateManyMutationInput, AttemptUncheckedUpdateManyInput>
    /**
     * Filter which Attempts to update
     */
    where?: AttemptWhereInput
    /**
     * Limit how many Attempts to update.
     */
    limit?: number
  }

  /**
   * Attempt updateManyAndReturn
   */
  export type AttemptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * The data used to update Attempts.
     */
    data: XOR<AttemptUpdateManyMutationInput, AttemptUncheckedUpdateManyInput>
    /**
     * Filter which Attempts to update
     */
    where?: AttemptWhereInput
    /**
     * Limit how many Attempts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attempt upsert
   */
  export type AttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * The filter to search for the Attempt to update in case it exists.
     */
    where: AttemptWhereUniqueInput
    /**
     * In case the Attempt found by the `where` argument doesn't exist, create a new Attempt with this data.
     */
    create: XOR<AttemptCreateInput, AttemptUncheckedCreateInput>
    /**
     * In case the Attempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttemptUpdateInput, AttemptUncheckedUpdateInput>
  }

  /**
   * Attempt delete
   */
  export type AttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
    /**
     * Filter which Attempt to delete.
     */
    where: AttemptWhereUniqueInput
  }

  /**
   * Attempt deleteMany
   */
  export type AttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attempts to delete
     */
    where?: AttemptWhereInput
    /**
     * Limit how many Attempts to delete.
     */
    limit?: number
  }

  /**
   * Attempt.answer
   */
  export type Attempt$answerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
  }

  /**
   * Attempt without action
   */
  export type AttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attempt
     */
    select?: AttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attempt
     */
    omit?: AttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttemptInclude<ExtArgs> | null
  }


  /**
   * Model EnglishQuiz
   */

  export type AggregateEnglishQuiz = {
    _count: EnglishQuizCountAggregateOutputType | null
    _min: EnglishQuizMinAggregateOutputType | null
    _max: EnglishQuizMaxAggregateOutputType | null
  }

  export type EnglishQuizMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnglishQuizMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnglishQuizCountAggregateOutputType = {
    id: number
    title: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EnglishQuizMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnglishQuizMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnglishQuizCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EnglishQuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnglishQuiz to aggregate.
     */
    where?: EnglishQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnglishQuizs to fetch.
     */
    orderBy?: EnglishQuizOrderByWithRelationInput | EnglishQuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnglishQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnglishQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnglishQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EnglishQuizs
    **/
    _count?: true | EnglishQuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnglishQuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnglishQuizMaxAggregateInputType
  }

  export type GetEnglishQuizAggregateType<T extends EnglishQuizAggregateArgs> = {
        [P in keyof T & keyof AggregateEnglishQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnglishQuiz[P]>
      : GetScalarType<T[P], AggregateEnglishQuiz[P]>
  }




  export type EnglishQuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnglishQuizWhereInput
    orderBy?: EnglishQuizOrderByWithAggregationInput | EnglishQuizOrderByWithAggregationInput[]
    by: EnglishQuizScalarFieldEnum[] | EnglishQuizScalarFieldEnum
    having?: EnglishQuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnglishQuizCountAggregateInputType | true
    _min?: EnglishQuizMinAggregateInputType
    _max?: EnglishQuizMaxAggregateInputType
  }

  export type EnglishQuizGroupByOutputType = {
    id: string
    title: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: EnglishQuizCountAggregateOutputType | null
    _min: EnglishQuizMinAggregateOutputType | null
    _max: EnglishQuizMaxAggregateOutputType | null
  }

  type GetEnglishQuizGroupByPayload<T extends EnglishQuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnglishQuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnglishQuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnglishQuizGroupByOutputType[P]>
            : GetScalarType<T[P], EnglishQuizGroupByOutputType[P]>
        }
      >
    >


  export type EnglishQuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questions?: boolean | EnglishQuiz$questionsArgs<ExtArgs>
    sessions?: boolean | EnglishQuiz$sessionsArgs<ExtArgs>
    _count?: boolean | EnglishQuizCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["englishQuiz"]>

  export type EnglishQuizSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["englishQuiz"]>

  export type EnglishQuizSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["englishQuiz"]>

  export type EnglishQuizSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EnglishQuizOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["englishQuiz"]>
  export type EnglishQuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | EnglishQuiz$questionsArgs<ExtArgs>
    sessions?: boolean | EnglishQuiz$sessionsArgs<ExtArgs>
    _count?: boolean | EnglishQuizCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EnglishQuizIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EnglishQuizIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EnglishQuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EnglishQuiz"
    objects: {
      questions: Prisma.$EnglishQuestionPayload<ExtArgs>[]
      sessions: Prisma.$EnglishSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["englishQuiz"]>
    composites: {}
  }

  type EnglishQuizGetPayload<S extends boolean | null | undefined | EnglishQuizDefaultArgs> = $Result.GetResult<Prisma.$EnglishQuizPayload, S>

  type EnglishQuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnglishQuizFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnglishQuizCountAggregateInputType | true
    }

  export interface EnglishQuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EnglishQuiz'], meta: { name: 'EnglishQuiz' } }
    /**
     * Find zero or one EnglishQuiz that matches the filter.
     * @param {EnglishQuizFindUniqueArgs} args - Arguments to find a EnglishQuiz
     * @example
     * // Get one EnglishQuiz
     * const englishQuiz = await prisma.englishQuiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnglishQuizFindUniqueArgs>(args: SelectSubset<T, EnglishQuizFindUniqueArgs<ExtArgs>>): Prisma__EnglishQuizClient<$Result.GetResult<Prisma.$EnglishQuizPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EnglishQuiz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnglishQuizFindUniqueOrThrowArgs} args - Arguments to find a EnglishQuiz
     * @example
     * // Get one EnglishQuiz
     * const englishQuiz = await prisma.englishQuiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnglishQuizFindUniqueOrThrowArgs>(args: SelectSubset<T, EnglishQuizFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnglishQuizClient<$Result.GetResult<Prisma.$EnglishQuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnglishQuiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishQuizFindFirstArgs} args - Arguments to find a EnglishQuiz
     * @example
     * // Get one EnglishQuiz
     * const englishQuiz = await prisma.englishQuiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnglishQuizFindFirstArgs>(args?: SelectSubset<T, EnglishQuizFindFirstArgs<ExtArgs>>): Prisma__EnglishQuizClient<$Result.GetResult<Prisma.$EnglishQuizPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnglishQuiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishQuizFindFirstOrThrowArgs} args - Arguments to find a EnglishQuiz
     * @example
     * // Get one EnglishQuiz
     * const englishQuiz = await prisma.englishQuiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnglishQuizFindFirstOrThrowArgs>(args?: SelectSubset<T, EnglishQuizFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnglishQuizClient<$Result.GetResult<Prisma.$EnglishQuizPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EnglishQuizs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishQuizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EnglishQuizs
     * const englishQuizs = await prisma.englishQuiz.findMany()
     * 
     * // Get first 10 EnglishQuizs
     * const englishQuizs = await prisma.englishQuiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const englishQuizWithIdOnly = await prisma.englishQuiz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnglishQuizFindManyArgs>(args?: SelectSubset<T, EnglishQuizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnglishQuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EnglishQuiz.
     * @param {EnglishQuizCreateArgs} args - Arguments to create a EnglishQuiz.
     * @example
     * // Create one EnglishQuiz
     * const EnglishQuiz = await prisma.englishQuiz.create({
     *   data: {
     *     // ... data to create a EnglishQuiz
     *   }
     * })
     * 
     */
    create<T extends EnglishQuizCreateArgs>(args: SelectSubset<T, EnglishQuizCreateArgs<ExtArgs>>): Prisma__EnglishQuizClient<$Result.GetResult<Prisma.$EnglishQuizPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EnglishQuizs.
     * @param {EnglishQuizCreateManyArgs} args - Arguments to create many EnglishQuizs.
     * @example
     * // Create many EnglishQuizs
     * const englishQuiz = await prisma.englishQuiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnglishQuizCreateManyArgs>(args?: SelectSubset<T, EnglishQuizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EnglishQuizs and returns the data saved in the database.
     * @param {EnglishQuizCreateManyAndReturnArgs} args - Arguments to create many EnglishQuizs.
     * @example
     * // Create many EnglishQuizs
     * const englishQuiz = await prisma.englishQuiz.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EnglishQuizs and only return the `id`
     * const englishQuizWithIdOnly = await prisma.englishQuiz.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnglishQuizCreateManyAndReturnArgs>(args?: SelectSubset<T, EnglishQuizCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnglishQuizPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EnglishQuiz.
     * @param {EnglishQuizDeleteArgs} args - Arguments to delete one EnglishQuiz.
     * @example
     * // Delete one EnglishQuiz
     * const EnglishQuiz = await prisma.englishQuiz.delete({
     *   where: {
     *     // ... filter to delete one EnglishQuiz
     *   }
     * })
     * 
     */
    delete<T extends EnglishQuizDeleteArgs>(args: SelectSubset<T, EnglishQuizDeleteArgs<ExtArgs>>): Prisma__EnglishQuizClient<$Result.GetResult<Prisma.$EnglishQuizPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EnglishQuiz.
     * @param {EnglishQuizUpdateArgs} args - Arguments to update one EnglishQuiz.
     * @example
     * // Update one EnglishQuiz
     * const englishQuiz = await prisma.englishQuiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnglishQuizUpdateArgs>(args: SelectSubset<T, EnglishQuizUpdateArgs<ExtArgs>>): Prisma__EnglishQuizClient<$Result.GetResult<Prisma.$EnglishQuizPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EnglishQuizs.
     * @param {EnglishQuizDeleteManyArgs} args - Arguments to filter EnglishQuizs to delete.
     * @example
     * // Delete a few EnglishQuizs
     * const { count } = await prisma.englishQuiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnglishQuizDeleteManyArgs>(args?: SelectSubset<T, EnglishQuizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnglishQuizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishQuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EnglishQuizs
     * const englishQuiz = await prisma.englishQuiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnglishQuizUpdateManyArgs>(args: SelectSubset<T, EnglishQuizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnglishQuizs and returns the data updated in the database.
     * @param {EnglishQuizUpdateManyAndReturnArgs} args - Arguments to update many EnglishQuizs.
     * @example
     * // Update many EnglishQuizs
     * const englishQuiz = await prisma.englishQuiz.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EnglishQuizs and only return the `id`
     * const englishQuizWithIdOnly = await prisma.englishQuiz.updateManyAndReturn({
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
    updateManyAndReturn<T extends EnglishQuizUpdateManyAndReturnArgs>(args: SelectSubset<T, EnglishQuizUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnglishQuizPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EnglishQuiz.
     * @param {EnglishQuizUpsertArgs} args - Arguments to update or create a EnglishQuiz.
     * @example
     * // Update or create a EnglishQuiz
     * const englishQuiz = await prisma.englishQuiz.upsert({
     *   create: {
     *     // ... data to create a EnglishQuiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EnglishQuiz we want to update
     *   }
     * })
     */
    upsert<T extends EnglishQuizUpsertArgs>(args: SelectSubset<T, EnglishQuizUpsertArgs<ExtArgs>>): Prisma__EnglishQuizClient<$Result.GetResult<Prisma.$EnglishQuizPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EnglishQuizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishQuizCountArgs} args - Arguments to filter EnglishQuizs to count.
     * @example
     * // Count the number of EnglishQuizs
     * const count = await prisma.englishQuiz.count({
     *   where: {
     *     // ... the filter for the EnglishQuizs we want to count
     *   }
     * })
    **/
    count<T extends EnglishQuizCountArgs>(
      args?: Subset<T, EnglishQuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnglishQuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EnglishQuiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishQuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnglishQuizAggregateArgs>(args: Subset<T, EnglishQuizAggregateArgs>): Prisma.PrismaPromise<GetEnglishQuizAggregateType<T>>

    /**
     * Group by EnglishQuiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishQuizGroupByArgs} args - Group by arguments.
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
      T extends EnglishQuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnglishQuizGroupByArgs['orderBy'] }
        : { orderBy?: EnglishQuizGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnglishQuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnglishQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EnglishQuiz model
   */
  readonly fields: EnglishQuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EnglishQuiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnglishQuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends EnglishQuiz$questionsArgs<ExtArgs> = {}>(args?: Subset<T, EnglishQuiz$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnglishQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends EnglishQuiz$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, EnglishQuiz$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnglishSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EnglishQuiz model
   */
  interface EnglishQuizFieldRefs {
    readonly id: FieldRef<"EnglishQuiz", 'String'>
    readonly title: FieldRef<"EnglishQuiz", 'String'>
    readonly description: FieldRef<"EnglishQuiz", 'String'>
    readonly createdAt: FieldRef<"EnglishQuiz", 'DateTime'>
    readonly updatedAt: FieldRef<"EnglishQuiz", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EnglishQuiz findUnique
   */
  export type EnglishQuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishQuiz
     */
    select?: EnglishQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishQuiz
     */
    omit?: EnglishQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishQuizInclude<ExtArgs> | null
    /**
     * Filter, which EnglishQuiz to fetch.
     */
    where: EnglishQuizWhereUniqueInput
  }

  /**
   * EnglishQuiz findUniqueOrThrow
   */
  export type EnglishQuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishQuiz
     */
    select?: EnglishQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishQuiz
     */
    omit?: EnglishQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishQuizInclude<ExtArgs> | null
    /**
     * Filter, which EnglishQuiz to fetch.
     */
    where: EnglishQuizWhereUniqueInput
  }

  /**
   * EnglishQuiz findFirst
   */
  export type EnglishQuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishQuiz
     */
    select?: EnglishQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishQuiz
     */
    omit?: EnglishQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishQuizInclude<ExtArgs> | null
    /**
     * Filter, which EnglishQuiz to fetch.
     */
    where?: EnglishQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnglishQuizs to fetch.
     */
    orderBy?: EnglishQuizOrderByWithRelationInput | EnglishQuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnglishQuizs.
     */
    cursor?: EnglishQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnglishQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnglishQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnglishQuizs.
     */
    distinct?: EnglishQuizScalarFieldEnum | EnglishQuizScalarFieldEnum[]
  }

  /**
   * EnglishQuiz findFirstOrThrow
   */
  export type EnglishQuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishQuiz
     */
    select?: EnglishQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishQuiz
     */
    omit?: EnglishQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishQuizInclude<ExtArgs> | null
    /**
     * Filter, which EnglishQuiz to fetch.
     */
    where?: EnglishQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnglishQuizs to fetch.
     */
    orderBy?: EnglishQuizOrderByWithRelationInput | EnglishQuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnglishQuizs.
     */
    cursor?: EnglishQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnglishQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnglishQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnglishQuizs.
     */
    distinct?: EnglishQuizScalarFieldEnum | EnglishQuizScalarFieldEnum[]
  }

  /**
   * EnglishQuiz findMany
   */
  export type EnglishQuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishQuiz
     */
    select?: EnglishQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishQuiz
     */
    omit?: EnglishQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishQuizInclude<ExtArgs> | null
    /**
     * Filter, which EnglishQuizs to fetch.
     */
    where?: EnglishQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnglishQuizs to fetch.
     */
    orderBy?: EnglishQuizOrderByWithRelationInput | EnglishQuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EnglishQuizs.
     */
    cursor?: EnglishQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnglishQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnglishQuizs.
     */
    skip?: number
    distinct?: EnglishQuizScalarFieldEnum | EnglishQuizScalarFieldEnum[]
  }

  /**
   * EnglishQuiz create
   */
  export type EnglishQuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishQuiz
     */
    select?: EnglishQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishQuiz
     */
    omit?: EnglishQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishQuizInclude<ExtArgs> | null
    /**
     * The data needed to create a EnglishQuiz.
     */
    data: XOR<EnglishQuizCreateInput, EnglishQuizUncheckedCreateInput>
  }

  /**
   * EnglishQuiz createMany
   */
  export type EnglishQuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EnglishQuizs.
     */
    data: EnglishQuizCreateManyInput | EnglishQuizCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EnglishQuiz createManyAndReturn
   */
  export type EnglishQuizCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishQuiz
     */
    select?: EnglishQuizSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishQuiz
     */
    omit?: EnglishQuizOmit<ExtArgs> | null
    /**
     * The data used to create many EnglishQuizs.
     */
    data: EnglishQuizCreateManyInput | EnglishQuizCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EnglishQuiz update
   */
  export type EnglishQuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishQuiz
     */
    select?: EnglishQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishQuiz
     */
    omit?: EnglishQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishQuizInclude<ExtArgs> | null
    /**
     * The data needed to update a EnglishQuiz.
     */
    data: XOR<EnglishQuizUpdateInput, EnglishQuizUncheckedUpdateInput>
    /**
     * Choose, which EnglishQuiz to update.
     */
    where: EnglishQuizWhereUniqueInput
  }

  /**
   * EnglishQuiz updateMany
   */
  export type EnglishQuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EnglishQuizs.
     */
    data: XOR<EnglishQuizUpdateManyMutationInput, EnglishQuizUncheckedUpdateManyInput>
    /**
     * Filter which EnglishQuizs to update
     */
    where?: EnglishQuizWhereInput
    /**
     * Limit how many EnglishQuizs to update.
     */
    limit?: number
  }

  /**
   * EnglishQuiz updateManyAndReturn
   */
  export type EnglishQuizUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishQuiz
     */
    select?: EnglishQuizSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishQuiz
     */
    omit?: EnglishQuizOmit<ExtArgs> | null
    /**
     * The data used to update EnglishQuizs.
     */
    data: XOR<EnglishQuizUpdateManyMutationInput, EnglishQuizUncheckedUpdateManyInput>
    /**
     * Filter which EnglishQuizs to update
     */
    where?: EnglishQuizWhereInput
    /**
     * Limit how many EnglishQuizs to update.
     */
    limit?: number
  }

  /**
   * EnglishQuiz upsert
   */
  export type EnglishQuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishQuiz
     */
    select?: EnglishQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishQuiz
     */
    omit?: EnglishQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishQuizInclude<ExtArgs> | null
    /**
     * The filter to search for the EnglishQuiz to update in case it exists.
     */
    where: EnglishQuizWhereUniqueInput
    /**
     * In case the EnglishQuiz found by the `where` argument doesn't exist, create a new EnglishQuiz with this data.
     */
    create: XOR<EnglishQuizCreateInput, EnglishQuizUncheckedCreateInput>
    /**
     * In case the EnglishQuiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnglishQuizUpdateInput, EnglishQuizUncheckedUpdateInput>
  }

  /**
   * EnglishQuiz delete
   */
  export type EnglishQuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishQuiz
     */
    select?: EnglishQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishQuiz
     */
    omit?: EnglishQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishQuizInclude<ExtArgs> | null
    /**
     * Filter which EnglishQuiz to delete.
     */
    where: EnglishQuizWhereUniqueInput
  }

  /**
   * EnglishQuiz deleteMany
   */
  export type EnglishQuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnglishQuizs to delete
     */
    where?: EnglishQuizWhereInput
    /**
     * Limit how many EnglishQuizs to delete.
     */
    limit?: number
  }

  /**
   * EnglishQuiz.questions
   */
  export type EnglishQuiz$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishQuestion
     */
    select?: EnglishQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishQuestion
     */
    omit?: EnglishQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishQuestionInclude<ExtArgs> | null
    where?: EnglishQuestionWhereInput
    orderBy?: EnglishQuestionOrderByWithRelationInput | EnglishQuestionOrderByWithRelationInput[]
    cursor?: EnglishQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnglishQuestionScalarFieldEnum | EnglishQuestionScalarFieldEnum[]
  }

  /**
   * EnglishQuiz.sessions
   */
  export type EnglishQuiz$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishSession
     */
    select?: EnglishSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishSession
     */
    omit?: EnglishSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishSessionInclude<ExtArgs> | null
    where?: EnglishSessionWhereInput
    orderBy?: EnglishSessionOrderByWithRelationInput | EnglishSessionOrderByWithRelationInput[]
    cursor?: EnglishSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnglishSessionScalarFieldEnum | EnglishSessionScalarFieldEnum[]
  }

  /**
   * EnglishQuiz without action
   */
  export type EnglishQuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishQuiz
     */
    select?: EnglishQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishQuiz
     */
    omit?: EnglishQuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishQuizInclude<ExtArgs> | null
  }


  /**
   * Model EnglishQuestion
   */

  export type AggregateEnglishQuestion = {
    _count: EnglishQuestionCountAggregateOutputType | null
    _avg: EnglishQuestionAvgAggregateOutputType | null
    _sum: EnglishQuestionSumAggregateOutputType | null
    _min: EnglishQuestionMinAggregateOutputType | null
    _max: EnglishQuestionMaxAggregateOutputType | null
  }

  export type EnglishQuestionAvgAggregateOutputType = {
    qNumber: number | null
  }

  export type EnglishQuestionSumAggregateOutputType = {
    qNumber: number | null
  }

  export type EnglishQuestionMinAggregateOutputType = {
    id: string | null
    quizId: string | null
    qNumber: number | null
    question: string | null
    correctAnswer: string | null
    explanation: string | null
    createdAt: Date | null
  }

  export type EnglishQuestionMaxAggregateOutputType = {
    id: string | null
    quizId: string | null
    qNumber: number | null
    question: string | null
    correctAnswer: string | null
    explanation: string | null
    createdAt: Date | null
  }

  export type EnglishQuestionCountAggregateOutputType = {
    id: number
    quizId: number
    qNumber: number
    question: number
    options: number
    correctAnswer: number
    explanation: number
    createdAt: number
    _all: number
  }


  export type EnglishQuestionAvgAggregateInputType = {
    qNumber?: true
  }

  export type EnglishQuestionSumAggregateInputType = {
    qNumber?: true
  }

  export type EnglishQuestionMinAggregateInputType = {
    id?: true
    quizId?: true
    qNumber?: true
    question?: true
    correctAnswer?: true
    explanation?: true
    createdAt?: true
  }

  export type EnglishQuestionMaxAggregateInputType = {
    id?: true
    quizId?: true
    qNumber?: true
    question?: true
    correctAnswer?: true
    explanation?: true
    createdAt?: true
  }

  export type EnglishQuestionCountAggregateInputType = {
    id?: true
    quizId?: true
    qNumber?: true
    question?: true
    options?: true
    correctAnswer?: true
    explanation?: true
    createdAt?: true
    _all?: true
  }

  export type EnglishQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnglishQuestion to aggregate.
     */
    where?: EnglishQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnglishQuestions to fetch.
     */
    orderBy?: EnglishQuestionOrderByWithRelationInput | EnglishQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnglishQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnglishQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnglishQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EnglishQuestions
    **/
    _count?: true | EnglishQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnglishQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnglishQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnglishQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnglishQuestionMaxAggregateInputType
  }

  export type GetEnglishQuestionAggregateType<T extends EnglishQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateEnglishQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnglishQuestion[P]>
      : GetScalarType<T[P], AggregateEnglishQuestion[P]>
  }




  export type EnglishQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnglishQuestionWhereInput
    orderBy?: EnglishQuestionOrderByWithAggregationInput | EnglishQuestionOrderByWithAggregationInput[]
    by: EnglishQuestionScalarFieldEnum[] | EnglishQuestionScalarFieldEnum
    having?: EnglishQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnglishQuestionCountAggregateInputType | true
    _avg?: EnglishQuestionAvgAggregateInputType
    _sum?: EnglishQuestionSumAggregateInputType
    _min?: EnglishQuestionMinAggregateInputType
    _max?: EnglishQuestionMaxAggregateInputType
  }

  export type EnglishQuestionGroupByOutputType = {
    id: string
    quizId: string
    qNumber: number
    question: string
    options: JsonValue
    correctAnswer: string
    explanation: string | null
    createdAt: Date
    _count: EnglishQuestionCountAggregateOutputType | null
    _avg: EnglishQuestionAvgAggregateOutputType | null
    _sum: EnglishQuestionSumAggregateOutputType | null
    _min: EnglishQuestionMinAggregateOutputType | null
    _max: EnglishQuestionMaxAggregateOutputType | null
  }

  type GetEnglishQuestionGroupByPayload<T extends EnglishQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnglishQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnglishQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnglishQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], EnglishQuestionGroupByOutputType[P]>
        }
      >
    >


  export type EnglishQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizId?: boolean
    qNumber?: boolean
    question?: boolean
    options?: boolean
    correctAnswer?: boolean
    explanation?: boolean
    createdAt?: boolean
    quiz?: boolean | EnglishQuizDefaultArgs<ExtArgs>
    attempts?: boolean | EnglishQuestion$attemptsArgs<ExtArgs>
    _count?: boolean | EnglishQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["englishQuestion"]>

  export type EnglishQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizId?: boolean
    qNumber?: boolean
    question?: boolean
    options?: boolean
    correctAnswer?: boolean
    explanation?: boolean
    createdAt?: boolean
    quiz?: boolean | EnglishQuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["englishQuestion"]>

  export type EnglishQuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizId?: boolean
    qNumber?: boolean
    question?: boolean
    options?: boolean
    correctAnswer?: boolean
    explanation?: boolean
    createdAt?: boolean
    quiz?: boolean | EnglishQuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["englishQuestion"]>

  export type EnglishQuestionSelectScalar = {
    id?: boolean
    quizId?: boolean
    qNumber?: boolean
    question?: boolean
    options?: boolean
    correctAnswer?: boolean
    explanation?: boolean
    createdAt?: boolean
  }

  export type EnglishQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quizId" | "qNumber" | "question" | "options" | "correctAnswer" | "explanation" | "createdAt", ExtArgs["result"]["englishQuestion"]>
  export type EnglishQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | EnglishQuizDefaultArgs<ExtArgs>
    attempts?: boolean | EnglishQuestion$attemptsArgs<ExtArgs>
    _count?: boolean | EnglishQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EnglishQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | EnglishQuizDefaultArgs<ExtArgs>
  }
  export type EnglishQuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | EnglishQuizDefaultArgs<ExtArgs>
  }

  export type $EnglishQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EnglishQuestion"
    objects: {
      quiz: Prisma.$EnglishQuizPayload<ExtArgs>
      attempts: Prisma.$EnglishAttemptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quizId: string
      qNumber: number
      question: string
      options: Prisma.JsonValue
      correctAnswer: string
      explanation: string | null
      createdAt: Date
    }, ExtArgs["result"]["englishQuestion"]>
    composites: {}
  }

  type EnglishQuestionGetPayload<S extends boolean | null | undefined | EnglishQuestionDefaultArgs> = $Result.GetResult<Prisma.$EnglishQuestionPayload, S>

  type EnglishQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnglishQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnglishQuestionCountAggregateInputType | true
    }

  export interface EnglishQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EnglishQuestion'], meta: { name: 'EnglishQuestion' } }
    /**
     * Find zero or one EnglishQuestion that matches the filter.
     * @param {EnglishQuestionFindUniqueArgs} args - Arguments to find a EnglishQuestion
     * @example
     * // Get one EnglishQuestion
     * const englishQuestion = await prisma.englishQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnglishQuestionFindUniqueArgs>(args: SelectSubset<T, EnglishQuestionFindUniqueArgs<ExtArgs>>): Prisma__EnglishQuestionClient<$Result.GetResult<Prisma.$EnglishQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EnglishQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnglishQuestionFindUniqueOrThrowArgs} args - Arguments to find a EnglishQuestion
     * @example
     * // Get one EnglishQuestion
     * const englishQuestion = await prisma.englishQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnglishQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, EnglishQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnglishQuestionClient<$Result.GetResult<Prisma.$EnglishQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnglishQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishQuestionFindFirstArgs} args - Arguments to find a EnglishQuestion
     * @example
     * // Get one EnglishQuestion
     * const englishQuestion = await prisma.englishQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnglishQuestionFindFirstArgs>(args?: SelectSubset<T, EnglishQuestionFindFirstArgs<ExtArgs>>): Prisma__EnglishQuestionClient<$Result.GetResult<Prisma.$EnglishQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnglishQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishQuestionFindFirstOrThrowArgs} args - Arguments to find a EnglishQuestion
     * @example
     * // Get one EnglishQuestion
     * const englishQuestion = await prisma.englishQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnglishQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, EnglishQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnglishQuestionClient<$Result.GetResult<Prisma.$EnglishQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EnglishQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EnglishQuestions
     * const englishQuestions = await prisma.englishQuestion.findMany()
     * 
     * // Get first 10 EnglishQuestions
     * const englishQuestions = await prisma.englishQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const englishQuestionWithIdOnly = await prisma.englishQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnglishQuestionFindManyArgs>(args?: SelectSubset<T, EnglishQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnglishQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EnglishQuestion.
     * @param {EnglishQuestionCreateArgs} args - Arguments to create a EnglishQuestion.
     * @example
     * // Create one EnglishQuestion
     * const EnglishQuestion = await prisma.englishQuestion.create({
     *   data: {
     *     // ... data to create a EnglishQuestion
     *   }
     * })
     * 
     */
    create<T extends EnglishQuestionCreateArgs>(args: SelectSubset<T, EnglishQuestionCreateArgs<ExtArgs>>): Prisma__EnglishQuestionClient<$Result.GetResult<Prisma.$EnglishQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EnglishQuestions.
     * @param {EnglishQuestionCreateManyArgs} args - Arguments to create many EnglishQuestions.
     * @example
     * // Create many EnglishQuestions
     * const englishQuestion = await prisma.englishQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnglishQuestionCreateManyArgs>(args?: SelectSubset<T, EnglishQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EnglishQuestions and returns the data saved in the database.
     * @param {EnglishQuestionCreateManyAndReturnArgs} args - Arguments to create many EnglishQuestions.
     * @example
     * // Create many EnglishQuestions
     * const englishQuestion = await prisma.englishQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EnglishQuestions and only return the `id`
     * const englishQuestionWithIdOnly = await prisma.englishQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnglishQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, EnglishQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnglishQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EnglishQuestion.
     * @param {EnglishQuestionDeleteArgs} args - Arguments to delete one EnglishQuestion.
     * @example
     * // Delete one EnglishQuestion
     * const EnglishQuestion = await prisma.englishQuestion.delete({
     *   where: {
     *     // ... filter to delete one EnglishQuestion
     *   }
     * })
     * 
     */
    delete<T extends EnglishQuestionDeleteArgs>(args: SelectSubset<T, EnglishQuestionDeleteArgs<ExtArgs>>): Prisma__EnglishQuestionClient<$Result.GetResult<Prisma.$EnglishQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EnglishQuestion.
     * @param {EnglishQuestionUpdateArgs} args - Arguments to update one EnglishQuestion.
     * @example
     * // Update one EnglishQuestion
     * const englishQuestion = await prisma.englishQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnglishQuestionUpdateArgs>(args: SelectSubset<T, EnglishQuestionUpdateArgs<ExtArgs>>): Prisma__EnglishQuestionClient<$Result.GetResult<Prisma.$EnglishQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EnglishQuestions.
     * @param {EnglishQuestionDeleteManyArgs} args - Arguments to filter EnglishQuestions to delete.
     * @example
     * // Delete a few EnglishQuestions
     * const { count } = await prisma.englishQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnglishQuestionDeleteManyArgs>(args?: SelectSubset<T, EnglishQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnglishQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EnglishQuestions
     * const englishQuestion = await prisma.englishQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnglishQuestionUpdateManyArgs>(args: SelectSubset<T, EnglishQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnglishQuestions and returns the data updated in the database.
     * @param {EnglishQuestionUpdateManyAndReturnArgs} args - Arguments to update many EnglishQuestions.
     * @example
     * // Update many EnglishQuestions
     * const englishQuestion = await prisma.englishQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EnglishQuestions and only return the `id`
     * const englishQuestionWithIdOnly = await prisma.englishQuestion.updateManyAndReturn({
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
    updateManyAndReturn<T extends EnglishQuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, EnglishQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnglishQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EnglishQuestion.
     * @param {EnglishQuestionUpsertArgs} args - Arguments to update or create a EnglishQuestion.
     * @example
     * // Update or create a EnglishQuestion
     * const englishQuestion = await prisma.englishQuestion.upsert({
     *   create: {
     *     // ... data to create a EnglishQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EnglishQuestion we want to update
     *   }
     * })
     */
    upsert<T extends EnglishQuestionUpsertArgs>(args: SelectSubset<T, EnglishQuestionUpsertArgs<ExtArgs>>): Prisma__EnglishQuestionClient<$Result.GetResult<Prisma.$EnglishQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EnglishQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishQuestionCountArgs} args - Arguments to filter EnglishQuestions to count.
     * @example
     * // Count the number of EnglishQuestions
     * const count = await prisma.englishQuestion.count({
     *   where: {
     *     // ... the filter for the EnglishQuestions we want to count
     *   }
     * })
    **/
    count<T extends EnglishQuestionCountArgs>(
      args?: Subset<T, EnglishQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnglishQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EnglishQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnglishQuestionAggregateArgs>(args: Subset<T, EnglishQuestionAggregateArgs>): Prisma.PrismaPromise<GetEnglishQuestionAggregateType<T>>

    /**
     * Group by EnglishQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishQuestionGroupByArgs} args - Group by arguments.
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
      T extends EnglishQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnglishQuestionGroupByArgs['orderBy'] }
        : { orderBy?: EnglishQuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnglishQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnglishQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EnglishQuestion model
   */
  readonly fields: EnglishQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EnglishQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnglishQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quiz<T extends EnglishQuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EnglishQuizDefaultArgs<ExtArgs>>): Prisma__EnglishQuizClient<$Result.GetResult<Prisma.$EnglishQuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attempts<T extends EnglishQuestion$attemptsArgs<ExtArgs> = {}>(args?: Subset<T, EnglishQuestion$attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnglishAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EnglishQuestion model
   */
  interface EnglishQuestionFieldRefs {
    readonly id: FieldRef<"EnglishQuestion", 'String'>
    readonly quizId: FieldRef<"EnglishQuestion", 'String'>
    readonly qNumber: FieldRef<"EnglishQuestion", 'Int'>
    readonly question: FieldRef<"EnglishQuestion", 'String'>
    readonly options: FieldRef<"EnglishQuestion", 'Json'>
    readonly correctAnswer: FieldRef<"EnglishQuestion", 'String'>
    readonly explanation: FieldRef<"EnglishQuestion", 'String'>
    readonly createdAt: FieldRef<"EnglishQuestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EnglishQuestion findUnique
   */
  export type EnglishQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishQuestion
     */
    select?: EnglishQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishQuestion
     */
    omit?: EnglishQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishQuestionInclude<ExtArgs> | null
    /**
     * Filter, which EnglishQuestion to fetch.
     */
    where: EnglishQuestionWhereUniqueInput
  }

  /**
   * EnglishQuestion findUniqueOrThrow
   */
  export type EnglishQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishQuestion
     */
    select?: EnglishQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishQuestion
     */
    omit?: EnglishQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishQuestionInclude<ExtArgs> | null
    /**
     * Filter, which EnglishQuestion to fetch.
     */
    where: EnglishQuestionWhereUniqueInput
  }

  /**
   * EnglishQuestion findFirst
   */
  export type EnglishQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishQuestion
     */
    select?: EnglishQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishQuestion
     */
    omit?: EnglishQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishQuestionInclude<ExtArgs> | null
    /**
     * Filter, which EnglishQuestion to fetch.
     */
    where?: EnglishQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnglishQuestions to fetch.
     */
    orderBy?: EnglishQuestionOrderByWithRelationInput | EnglishQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnglishQuestions.
     */
    cursor?: EnglishQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnglishQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnglishQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnglishQuestions.
     */
    distinct?: EnglishQuestionScalarFieldEnum | EnglishQuestionScalarFieldEnum[]
  }

  /**
   * EnglishQuestion findFirstOrThrow
   */
  export type EnglishQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishQuestion
     */
    select?: EnglishQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishQuestion
     */
    omit?: EnglishQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishQuestionInclude<ExtArgs> | null
    /**
     * Filter, which EnglishQuestion to fetch.
     */
    where?: EnglishQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnglishQuestions to fetch.
     */
    orderBy?: EnglishQuestionOrderByWithRelationInput | EnglishQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnglishQuestions.
     */
    cursor?: EnglishQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnglishQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnglishQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnglishQuestions.
     */
    distinct?: EnglishQuestionScalarFieldEnum | EnglishQuestionScalarFieldEnum[]
  }

  /**
   * EnglishQuestion findMany
   */
  export type EnglishQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishQuestion
     */
    select?: EnglishQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishQuestion
     */
    omit?: EnglishQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishQuestionInclude<ExtArgs> | null
    /**
     * Filter, which EnglishQuestions to fetch.
     */
    where?: EnglishQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnglishQuestions to fetch.
     */
    orderBy?: EnglishQuestionOrderByWithRelationInput | EnglishQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EnglishQuestions.
     */
    cursor?: EnglishQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnglishQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnglishQuestions.
     */
    skip?: number
    distinct?: EnglishQuestionScalarFieldEnum | EnglishQuestionScalarFieldEnum[]
  }

  /**
   * EnglishQuestion create
   */
  export type EnglishQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishQuestion
     */
    select?: EnglishQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishQuestion
     */
    omit?: EnglishQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a EnglishQuestion.
     */
    data: XOR<EnglishQuestionCreateInput, EnglishQuestionUncheckedCreateInput>
  }

  /**
   * EnglishQuestion createMany
   */
  export type EnglishQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EnglishQuestions.
     */
    data: EnglishQuestionCreateManyInput | EnglishQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EnglishQuestion createManyAndReturn
   */
  export type EnglishQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishQuestion
     */
    select?: EnglishQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishQuestion
     */
    omit?: EnglishQuestionOmit<ExtArgs> | null
    /**
     * The data used to create many EnglishQuestions.
     */
    data: EnglishQuestionCreateManyInput | EnglishQuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishQuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnglishQuestion update
   */
  export type EnglishQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishQuestion
     */
    select?: EnglishQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishQuestion
     */
    omit?: EnglishQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a EnglishQuestion.
     */
    data: XOR<EnglishQuestionUpdateInput, EnglishQuestionUncheckedUpdateInput>
    /**
     * Choose, which EnglishQuestion to update.
     */
    where: EnglishQuestionWhereUniqueInput
  }

  /**
   * EnglishQuestion updateMany
   */
  export type EnglishQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EnglishQuestions.
     */
    data: XOR<EnglishQuestionUpdateManyMutationInput, EnglishQuestionUncheckedUpdateManyInput>
    /**
     * Filter which EnglishQuestions to update
     */
    where?: EnglishQuestionWhereInput
    /**
     * Limit how many EnglishQuestions to update.
     */
    limit?: number
  }

  /**
   * EnglishQuestion updateManyAndReturn
   */
  export type EnglishQuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishQuestion
     */
    select?: EnglishQuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishQuestion
     */
    omit?: EnglishQuestionOmit<ExtArgs> | null
    /**
     * The data used to update EnglishQuestions.
     */
    data: XOR<EnglishQuestionUpdateManyMutationInput, EnglishQuestionUncheckedUpdateManyInput>
    /**
     * Filter which EnglishQuestions to update
     */
    where?: EnglishQuestionWhereInput
    /**
     * Limit how many EnglishQuestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishQuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnglishQuestion upsert
   */
  export type EnglishQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishQuestion
     */
    select?: EnglishQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishQuestion
     */
    omit?: EnglishQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the EnglishQuestion to update in case it exists.
     */
    where: EnglishQuestionWhereUniqueInput
    /**
     * In case the EnglishQuestion found by the `where` argument doesn't exist, create a new EnglishQuestion with this data.
     */
    create: XOR<EnglishQuestionCreateInput, EnglishQuestionUncheckedCreateInput>
    /**
     * In case the EnglishQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnglishQuestionUpdateInput, EnglishQuestionUncheckedUpdateInput>
  }

  /**
   * EnglishQuestion delete
   */
  export type EnglishQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishQuestion
     */
    select?: EnglishQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishQuestion
     */
    omit?: EnglishQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishQuestionInclude<ExtArgs> | null
    /**
     * Filter which EnglishQuestion to delete.
     */
    where: EnglishQuestionWhereUniqueInput
  }

  /**
   * EnglishQuestion deleteMany
   */
  export type EnglishQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnglishQuestions to delete
     */
    where?: EnglishQuestionWhereInput
    /**
     * Limit how many EnglishQuestions to delete.
     */
    limit?: number
  }

  /**
   * EnglishQuestion.attempts
   */
  export type EnglishQuestion$attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishAttempt
     */
    select?: EnglishAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishAttempt
     */
    omit?: EnglishAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishAttemptInclude<ExtArgs> | null
    where?: EnglishAttemptWhereInput
    orderBy?: EnglishAttemptOrderByWithRelationInput | EnglishAttemptOrderByWithRelationInput[]
    cursor?: EnglishAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnglishAttemptScalarFieldEnum | EnglishAttemptScalarFieldEnum[]
  }

  /**
   * EnglishQuestion without action
   */
  export type EnglishQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishQuestion
     */
    select?: EnglishQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishQuestion
     */
    omit?: EnglishQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishQuestionInclude<ExtArgs> | null
  }


  /**
   * Model EnglishSession
   */

  export type AggregateEnglishSession = {
    _count: EnglishSessionCountAggregateOutputType | null
    _avg: EnglishSessionAvgAggregateOutputType | null
    _sum: EnglishSessionSumAggregateOutputType | null
    _min: EnglishSessionMinAggregateOutputType | null
    _max: EnglishSessionMaxAggregateOutputType | null
  }

  export type EnglishSessionAvgAggregateOutputType = {
    score: number | null
    total: number | null
    timeTakenMs: number | null
  }

  export type EnglishSessionSumAggregateOutputType = {
    score: number | null
    total: number | null
    timeTakenMs: number | null
  }

  export type EnglishSessionMinAggregateOutputType = {
    id: string | null
    quizId: string | null
    score: number | null
    total: number | null
    timeTakenMs: number | null
    createdAt: Date | null
  }

  export type EnglishSessionMaxAggregateOutputType = {
    id: string | null
    quizId: string | null
    score: number | null
    total: number | null
    timeTakenMs: number | null
    createdAt: Date | null
  }

  export type EnglishSessionCountAggregateOutputType = {
    id: number
    quizId: number
    score: number
    total: number
    timeTakenMs: number
    createdAt: number
    _all: number
  }


  export type EnglishSessionAvgAggregateInputType = {
    score?: true
    total?: true
    timeTakenMs?: true
  }

  export type EnglishSessionSumAggregateInputType = {
    score?: true
    total?: true
    timeTakenMs?: true
  }

  export type EnglishSessionMinAggregateInputType = {
    id?: true
    quizId?: true
    score?: true
    total?: true
    timeTakenMs?: true
    createdAt?: true
  }

  export type EnglishSessionMaxAggregateInputType = {
    id?: true
    quizId?: true
    score?: true
    total?: true
    timeTakenMs?: true
    createdAt?: true
  }

  export type EnglishSessionCountAggregateInputType = {
    id?: true
    quizId?: true
    score?: true
    total?: true
    timeTakenMs?: true
    createdAt?: true
    _all?: true
  }

  export type EnglishSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnglishSession to aggregate.
     */
    where?: EnglishSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnglishSessions to fetch.
     */
    orderBy?: EnglishSessionOrderByWithRelationInput | EnglishSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnglishSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnglishSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnglishSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EnglishSessions
    **/
    _count?: true | EnglishSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnglishSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnglishSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnglishSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnglishSessionMaxAggregateInputType
  }

  export type GetEnglishSessionAggregateType<T extends EnglishSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateEnglishSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnglishSession[P]>
      : GetScalarType<T[P], AggregateEnglishSession[P]>
  }




  export type EnglishSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnglishSessionWhereInput
    orderBy?: EnglishSessionOrderByWithAggregationInput | EnglishSessionOrderByWithAggregationInput[]
    by: EnglishSessionScalarFieldEnum[] | EnglishSessionScalarFieldEnum
    having?: EnglishSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnglishSessionCountAggregateInputType | true
    _avg?: EnglishSessionAvgAggregateInputType
    _sum?: EnglishSessionSumAggregateInputType
    _min?: EnglishSessionMinAggregateInputType
    _max?: EnglishSessionMaxAggregateInputType
  }

  export type EnglishSessionGroupByOutputType = {
    id: string
    quizId: string
    score: number
    total: number
    timeTakenMs: number
    createdAt: Date
    _count: EnglishSessionCountAggregateOutputType | null
    _avg: EnglishSessionAvgAggregateOutputType | null
    _sum: EnglishSessionSumAggregateOutputType | null
    _min: EnglishSessionMinAggregateOutputType | null
    _max: EnglishSessionMaxAggregateOutputType | null
  }

  type GetEnglishSessionGroupByPayload<T extends EnglishSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnglishSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnglishSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnglishSessionGroupByOutputType[P]>
            : GetScalarType<T[P], EnglishSessionGroupByOutputType[P]>
        }
      >
    >


  export type EnglishSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizId?: boolean
    score?: boolean
    total?: boolean
    timeTakenMs?: boolean
    createdAt?: boolean
    quiz?: boolean | EnglishQuizDefaultArgs<ExtArgs>
    attempts?: boolean | EnglishSession$attemptsArgs<ExtArgs>
    _count?: boolean | EnglishSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["englishSession"]>

  export type EnglishSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizId?: boolean
    score?: boolean
    total?: boolean
    timeTakenMs?: boolean
    createdAt?: boolean
    quiz?: boolean | EnglishQuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["englishSession"]>

  export type EnglishSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizId?: boolean
    score?: boolean
    total?: boolean
    timeTakenMs?: boolean
    createdAt?: boolean
    quiz?: boolean | EnglishQuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["englishSession"]>

  export type EnglishSessionSelectScalar = {
    id?: boolean
    quizId?: boolean
    score?: boolean
    total?: boolean
    timeTakenMs?: boolean
    createdAt?: boolean
  }

  export type EnglishSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quizId" | "score" | "total" | "timeTakenMs" | "createdAt", ExtArgs["result"]["englishSession"]>
  export type EnglishSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | EnglishQuizDefaultArgs<ExtArgs>
    attempts?: boolean | EnglishSession$attemptsArgs<ExtArgs>
    _count?: boolean | EnglishSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EnglishSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | EnglishQuizDefaultArgs<ExtArgs>
  }
  export type EnglishSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | EnglishQuizDefaultArgs<ExtArgs>
  }

  export type $EnglishSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EnglishSession"
    objects: {
      quiz: Prisma.$EnglishQuizPayload<ExtArgs>
      attempts: Prisma.$EnglishAttemptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quizId: string
      score: number
      total: number
      timeTakenMs: number
      createdAt: Date
    }, ExtArgs["result"]["englishSession"]>
    composites: {}
  }

  type EnglishSessionGetPayload<S extends boolean | null | undefined | EnglishSessionDefaultArgs> = $Result.GetResult<Prisma.$EnglishSessionPayload, S>

  type EnglishSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnglishSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnglishSessionCountAggregateInputType | true
    }

  export interface EnglishSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EnglishSession'], meta: { name: 'EnglishSession' } }
    /**
     * Find zero or one EnglishSession that matches the filter.
     * @param {EnglishSessionFindUniqueArgs} args - Arguments to find a EnglishSession
     * @example
     * // Get one EnglishSession
     * const englishSession = await prisma.englishSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnglishSessionFindUniqueArgs>(args: SelectSubset<T, EnglishSessionFindUniqueArgs<ExtArgs>>): Prisma__EnglishSessionClient<$Result.GetResult<Prisma.$EnglishSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EnglishSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnglishSessionFindUniqueOrThrowArgs} args - Arguments to find a EnglishSession
     * @example
     * // Get one EnglishSession
     * const englishSession = await prisma.englishSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnglishSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, EnglishSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnglishSessionClient<$Result.GetResult<Prisma.$EnglishSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnglishSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishSessionFindFirstArgs} args - Arguments to find a EnglishSession
     * @example
     * // Get one EnglishSession
     * const englishSession = await prisma.englishSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnglishSessionFindFirstArgs>(args?: SelectSubset<T, EnglishSessionFindFirstArgs<ExtArgs>>): Prisma__EnglishSessionClient<$Result.GetResult<Prisma.$EnglishSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnglishSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishSessionFindFirstOrThrowArgs} args - Arguments to find a EnglishSession
     * @example
     * // Get one EnglishSession
     * const englishSession = await prisma.englishSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnglishSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, EnglishSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnglishSessionClient<$Result.GetResult<Prisma.$EnglishSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EnglishSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EnglishSessions
     * const englishSessions = await prisma.englishSession.findMany()
     * 
     * // Get first 10 EnglishSessions
     * const englishSessions = await prisma.englishSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const englishSessionWithIdOnly = await prisma.englishSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnglishSessionFindManyArgs>(args?: SelectSubset<T, EnglishSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnglishSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EnglishSession.
     * @param {EnglishSessionCreateArgs} args - Arguments to create a EnglishSession.
     * @example
     * // Create one EnglishSession
     * const EnglishSession = await prisma.englishSession.create({
     *   data: {
     *     // ... data to create a EnglishSession
     *   }
     * })
     * 
     */
    create<T extends EnglishSessionCreateArgs>(args: SelectSubset<T, EnglishSessionCreateArgs<ExtArgs>>): Prisma__EnglishSessionClient<$Result.GetResult<Prisma.$EnglishSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EnglishSessions.
     * @param {EnglishSessionCreateManyArgs} args - Arguments to create many EnglishSessions.
     * @example
     * // Create many EnglishSessions
     * const englishSession = await prisma.englishSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnglishSessionCreateManyArgs>(args?: SelectSubset<T, EnglishSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EnglishSessions and returns the data saved in the database.
     * @param {EnglishSessionCreateManyAndReturnArgs} args - Arguments to create many EnglishSessions.
     * @example
     * // Create many EnglishSessions
     * const englishSession = await prisma.englishSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EnglishSessions and only return the `id`
     * const englishSessionWithIdOnly = await prisma.englishSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnglishSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, EnglishSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnglishSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EnglishSession.
     * @param {EnglishSessionDeleteArgs} args - Arguments to delete one EnglishSession.
     * @example
     * // Delete one EnglishSession
     * const EnglishSession = await prisma.englishSession.delete({
     *   where: {
     *     // ... filter to delete one EnglishSession
     *   }
     * })
     * 
     */
    delete<T extends EnglishSessionDeleteArgs>(args: SelectSubset<T, EnglishSessionDeleteArgs<ExtArgs>>): Prisma__EnglishSessionClient<$Result.GetResult<Prisma.$EnglishSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EnglishSession.
     * @param {EnglishSessionUpdateArgs} args - Arguments to update one EnglishSession.
     * @example
     * // Update one EnglishSession
     * const englishSession = await prisma.englishSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnglishSessionUpdateArgs>(args: SelectSubset<T, EnglishSessionUpdateArgs<ExtArgs>>): Prisma__EnglishSessionClient<$Result.GetResult<Prisma.$EnglishSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EnglishSessions.
     * @param {EnglishSessionDeleteManyArgs} args - Arguments to filter EnglishSessions to delete.
     * @example
     * // Delete a few EnglishSessions
     * const { count } = await prisma.englishSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnglishSessionDeleteManyArgs>(args?: SelectSubset<T, EnglishSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnglishSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EnglishSessions
     * const englishSession = await prisma.englishSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnglishSessionUpdateManyArgs>(args: SelectSubset<T, EnglishSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnglishSessions and returns the data updated in the database.
     * @param {EnglishSessionUpdateManyAndReturnArgs} args - Arguments to update many EnglishSessions.
     * @example
     * // Update many EnglishSessions
     * const englishSession = await prisma.englishSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EnglishSessions and only return the `id`
     * const englishSessionWithIdOnly = await prisma.englishSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends EnglishSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, EnglishSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnglishSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EnglishSession.
     * @param {EnglishSessionUpsertArgs} args - Arguments to update or create a EnglishSession.
     * @example
     * // Update or create a EnglishSession
     * const englishSession = await prisma.englishSession.upsert({
     *   create: {
     *     // ... data to create a EnglishSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EnglishSession we want to update
     *   }
     * })
     */
    upsert<T extends EnglishSessionUpsertArgs>(args: SelectSubset<T, EnglishSessionUpsertArgs<ExtArgs>>): Prisma__EnglishSessionClient<$Result.GetResult<Prisma.$EnglishSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EnglishSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishSessionCountArgs} args - Arguments to filter EnglishSessions to count.
     * @example
     * // Count the number of EnglishSessions
     * const count = await prisma.englishSession.count({
     *   where: {
     *     // ... the filter for the EnglishSessions we want to count
     *   }
     * })
    **/
    count<T extends EnglishSessionCountArgs>(
      args?: Subset<T, EnglishSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnglishSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EnglishSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnglishSessionAggregateArgs>(args: Subset<T, EnglishSessionAggregateArgs>): Prisma.PrismaPromise<GetEnglishSessionAggregateType<T>>

    /**
     * Group by EnglishSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishSessionGroupByArgs} args - Group by arguments.
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
      T extends EnglishSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnglishSessionGroupByArgs['orderBy'] }
        : { orderBy?: EnglishSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnglishSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnglishSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EnglishSession model
   */
  readonly fields: EnglishSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EnglishSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnglishSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quiz<T extends EnglishQuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EnglishQuizDefaultArgs<ExtArgs>>): Prisma__EnglishQuizClient<$Result.GetResult<Prisma.$EnglishQuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attempts<T extends EnglishSession$attemptsArgs<ExtArgs> = {}>(args?: Subset<T, EnglishSession$attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnglishAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EnglishSession model
   */
  interface EnglishSessionFieldRefs {
    readonly id: FieldRef<"EnglishSession", 'String'>
    readonly quizId: FieldRef<"EnglishSession", 'String'>
    readonly score: FieldRef<"EnglishSession", 'Int'>
    readonly total: FieldRef<"EnglishSession", 'Int'>
    readonly timeTakenMs: FieldRef<"EnglishSession", 'Int'>
    readonly createdAt: FieldRef<"EnglishSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EnglishSession findUnique
   */
  export type EnglishSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishSession
     */
    select?: EnglishSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishSession
     */
    omit?: EnglishSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishSessionInclude<ExtArgs> | null
    /**
     * Filter, which EnglishSession to fetch.
     */
    where: EnglishSessionWhereUniqueInput
  }

  /**
   * EnglishSession findUniqueOrThrow
   */
  export type EnglishSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishSession
     */
    select?: EnglishSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishSession
     */
    omit?: EnglishSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishSessionInclude<ExtArgs> | null
    /**
     * Filter, which EnglishSession to fetch.
     */
    where: EnglishSessionWhereUniqueInput
  }

  /**
   * EnglishSession findFirst
   */
  export type EnglishSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishSession
     */
    select?: EnglishSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishSession
     */
    omit?: EnglishSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishSessionInclude<ExtArgs> | null
    /**
     * Filter, which EnglishSession to fetch.
     */
    where?: EnglishSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnglishSessions to fetch.
     */
    orderBy?: EnglishSessionOrderByWithRelationInput | EnglishSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnglishSessions.
     */
    cursor?: EnglishSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnglishSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnglishSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnglishSessions.
     */
    distinct?: EnglishSessionScalarFieldEnum | EnglishSessionScalarFieldEnum[]
  }

  /**
   * EnglishSession findFirstOrThrow
   */
  export type EnglishSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishSession
     */
    select?: EnglishSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishSession
     */
    omit?: EnglishSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishSessionInclude<ExtArgs> | null
    /**
     * Filter, which EnglishSession to fetch.
     */
    where?: EnglishSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnglishSessions to fetch.
     */
    orderBy?: EnglishSessionOrderByWithRelationInput | EnglishSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnglishSessions.
     */
    cursor?: EnglishSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnglishSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnglishSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnglishSessions.
     */
    distinct?: EnglishSessionScalarFieldEnum | EnglishSessionScalarFieldEnum[]
  }

  /**
   * EnglishSession findMany
   */
  export type EnglishSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishSession
     */
    select?: EnglishSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishSession
     */
    omit?: EnglishSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishSessionInclude<ExtArgs> | null
    /**
     * Filter, which EnglishSessions to fetch.
     */
    where?: EnglishSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnglishSessions to fetch.
     */
    orderBy?: EnglishSessionOrderByWithRelationInput | EnglishSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EnglishSessions.
     */
    cursor?: EnglishSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnglishSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnglishSessions.
     */
    skip?: number
    distinct?: EnglishSessionScalarFieldEnum | EnglishSessionScalarFieldEnum[]
  }

  /**
   * EnglishSession create
   */
  export type EnglishSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishSession
     */
    select?: EnglishSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishSession
     */
    omit?: EnglishSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a EnglishSession.
     */
    data: XOR<EnglishSessionCreateInput, EnglishSessionUncheckedCreateInput>
  }

  /**
   * EnglishSession createMany
   */
  export type EnglishSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EnglishSessions.
     */
    data: EnglishSessionCreateManyInput | EnglishSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EnglishSession createManyAndReturn
   */
  export type EnglishSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishSession
     */
    select?: EnglishSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishSession
     */
    omit?: EnglishSessionOmit<ExtArgs> | null
    /**
     * The data used to create many EnglishSessions.
     */
    data: EnglishSessionCreateManyInput | EnglishSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnglishSession update
   */
  export type EnglishSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishSession
     */
    select?: EnglishSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishSession
     */
    omit?: EnglishSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a EnglishSession.
     */
    data: XOR<EnglishSessionUpdateInput, EnglishSessionUncheckedUpdateInput>
    /**
     * Choose, which EnglishSession to update.
     */
    where: EnglishSessionWhereUniqueInput
  }

  /**
   * EnglishSession updateMany
   */
  export type EnglishSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EnglishSessions.
     */
    data: XOR<EnglishSessionUpdateManyMutationInput, EnglishSessionUncheckedUpdateManyInput>
    /**
     * Filter which EnglishSessions to update
     */
    where?: EnglishSessionWhereInput
    /**
     * Limit how many EnglishSessions to update.
     */
    limit?: number
  }

  /**
   * EnglishSession updateManyAndReturn
   */
  export type EnglishSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishSession
     */
    select?: EnglishSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishSession
     */
    omit?: EnglishSessionOmit<ExtArgs> | null
    /**
     * The data used to update EnglishSessions.
     */
    data: XOR<EnglishSessionUpdateManyMutationInput, EnglishSessionUncheckedUpdateManyInput>
    /**
     * Filter which EnglishSessions to update
     */
    where?: EnglishSessionWhereInput
    /**
     * Limit how many EnglishSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnglishSession upsert
   */
  export type EnglishSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishSession
     */
    select?: EnglishSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishSession
     */
    omit?: EnglishSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the EnglishSession to update in case it exists.
     */
    where: EnglishSessionWhereUniqueInput
    /**
     * In case the EnglishSession found by the `where` argument doesn't exist, create a new EnglishSession with this data.
     */
    create: XOR<EnglishSessionCreateInput, EnglishSessionUncheckedCreateInput>
    /**
     * In case the EnglishSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnglishSessionUpdateInput, EnglishSessionUncheckedUpdateInput>
  }

  /**
   * EnglishSession delete
   */
  export type EnglishSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishSession
     */
    select?: EnglishSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishSession
     */
    omit?: EnglishSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishSessionInclude<ExtArgs> | null
    /**
     * Filter which EnglishSession to delete.
     */
    where: EnglishSessionWhereUniqueInput
  }

  /**
   * EnglishSession deleteMany
   */
  export type EnglishSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnglishSessions to delete
     */
    where?: EnglishSessionWhereInput
    /**
     * Limit how many EnglishSessions to delete.
     */
    limit?: number
  }

  /**
   * EnglishSession.attempts
   */
  export type EnglishSession$attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishAttempt
     */
    select?: EnglishAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishAttempt
     */
    omit?: EnglishAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishAttemptInclude<ExtArgs> | null
    where?: EnglishAttemptWhereInput
    orderBy?: EnglishAttemptOrderByWithRelationInput | EnglishAttemptOrderByWithRelationInput[]
    cursor?: EnglishAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnglishAttemptScalarFieldEnum | EnglishAttemptScalarFieldEnum[]
  }

  /**
   * EnglishSession without action
   */
  export type EnglishSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishSession
     */
    select?: EnglishSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishSession
     */
    omit?: EnglishSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishSessionInclude<ExtArgs> | null
  }


  /**
   * Model EnglishAttempt
   */

  export type AggregateEnglishAttempt = {
    _count: EnglishAttemptCountAggregateOutputType | null
    _avg: EnglishAttemptAvgAggregateOutputType | null
    _sum: EnglishAttemptSumAggregateOutputType | null
    _min: EnglishAttemptMinAggregateOutputType | null
    _max: EnglishAttemptMaxAggregateOutputType | null
  }

  export type EnglishAttemptAvgAggregateOutputType = {
    qNumber: number | null
    timeTakenMs: number | null
  }

  export type EnglishAttemptSumAggregateOutputType = {
    qNumber: number | null
    timeTakenMs: number | null
  }

  export type EnglishAttemptMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    questionId: string | null
    qNumber: number | null
    userAnswer: string | null
    correctAnswer: string | null
    isCorrect: boolean | null
    timeTakenMs: number | null
    createdAt: Date | null
  }

  export type EnglishAttemptMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    questionId: string | null
    qNumber: number | null
    userAnswer: string | null
    correctAnswer: string | null
    isCorrect: boolean | null
    timeTakenMs: number | null
    createdAt: Date | null
  }

  export type EnglishAttemptCountAggregateOutputType = {
    id: number
    sessionId: number
    questionId: number
    qNumber: number
    userAnswer: number
    correctAnswer: number
    isCorrect: number
    timeTakenMs: number
    createdAt: number
    _all: number
  }


  export type EnglishAttemptAvgAggregateInputType = {
    qNumber?: true
    timeTakenMs?: true
  }

  export type EnglishAttemptSumAggregateInputType = {
    qNumber?: true
    timeTakenMs?: true
  }

  export type EnglishAttemptMinAggregateInputType = {
    id?: true
    sessionId?: true
    questionId?: true
    qNumber?: true
    userAnswer?: true
    correctAnswer?: true
    isCorrect?: true
    timeTakenMs?: true
    createdAt?: true
  }

  export type EnglishAttemptMaxAggregateInputType = {
    id?: true
    sessionId?: true
    questionId?: true
    qNumber?: true
    userAnswer?: true
    correctAnswer?: true
    isCorrect?: true
    timeTakenMs?: true
    createdAt?: true
  }

  export type EnglishAttemptCountAggregateInputType = {
    id?: true
    sessionId?: true
    questionId?: true
    qNumber?: true
    userAnswer?: true
    correctAnswer?: true
    isCorrect?: true
    timeTakenMs?: true
    createdAt?: true
    _all?: true
  }

  export type EnglishAttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnglishAttempt to aggregate.
     */
    where?: EnglishAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnglishAttempts to fetch.
     */
    orderBy?: EnglishAttemptOrderByWithRelationInput | EnglishAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnglishAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnglishAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnglishAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EnglishAttempts
    **/
    _count?: true | EnglishAttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnglishAttemptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnglishAttemptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnglishAttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnglishAttemptMaxAggregateInputType
  }

  export type GetEnglishAttemptAggregateType<T extends EnglishAttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateEnglishAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnglishAttempt[P]>
      : GetScalarType<T[P], AggregateEnglishAttempt[P]>
  }




  export type EnglishAttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnglishAttemptWhereInput
    orderBy?: EnglishAttemptOrderByWithAggregationInput | EnglishAttemptOrderByWithAggregationInput[]
    by: EnglishAttemptScalarFieldEnum[] | EnglishAttemptScalarFieldEnum
    having?: EnglishAttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnglishAttemptCountAggregateInputType | true
    _avg?: EnglishAttemptAvgAggregateInputType
    _sum?: EnglishAttemptSumAggregateInputType
    _min?: EnglishAttemptMinAggregateInputType
    _max?: EnglishAttemptMaxAggregateInputType
  }

  export type EnglishAttemptGroupByOutputType = {
    id: string
    sessionId: string
    questionId: string | null
    qNumber: number
    userAnswer: string
    correctAnswer: string
    isCorrect: boolean
    timeTakenMs: number
    createdAt: Date
    _count: EnglishAttemptCountAggregateOutputType | null
    _avg: EnglishAttemptAvgAggregateOutputType | null
    _sum: EnglishAttemptSumAggregateOutputType | null
    _min: EnglishAttemptMinAggregateOutputType | null
    _max: EnglishAttemptMaxAggregateOutputType | null
  }

  type GetEnglishAttemptGroupByPayload<T extends EnglishAttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnglishAttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnglishAttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnglishAttemptGroupByOutputType[P]>
            : GetScalarType<T[P], EnglishAttemptGroupByOutputType[P]>
        }
      >
    >


  export type EnglishAttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    questionId?: boolean
    qNumber?: boolean
    userAnswer?: boolean
    correctAnswer?: boolean
    isCorrect?: boolean
    timeTakenMs?: boolean
    createdAt?: boolean
    session?: boolean | EnglishSessionDefaultArgs<ExtArgs>
    question?: boolean | EnglishAttempt$questionArgs<ExtArgs>
  }, ExtArgs["result"]["englishAttempt"]>

  export type EnglishAttemptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    questionId?: boolean
    qNumber?: boolean
    userAnswer?: boolean
    correctAnswer?: boolean
    isCorrect?: boolean
    timeTakenMs?: boolean
    createdAt?: boolean
    session?: boolean | EnglishSessionDefaultArgs<ExtArgs>
    question?: boolean | EnglishAttempt$questionArgs<ExtArgs>
  }, ExtArgs["result"]["englishAttempt"]>

  export type EnglishAttemptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    questionId?: boolean
    qNumber?: boolean
    userAnswer?: boolean
    correctAnswer?: boolean
    isCorrect?: boolean
    timeTakenMs?: boolean
    createdAt?: boolean
    session?: boolean | EnglishSessionDefaultArgs<ExtArgs>
    question?: boolean | EnglishAttempt$questionArgs<ExtArgs>
  }, ExtArgs["result"]["englishAttempt"]>

  export type EnglishAttemptSelectScalar = {
    id?: boolean
    sessionId?: boolean
    questionId?: boolean
    qNumber?: boolean
    userAnswer?: boolean
    correctAnswer?: boolean
    isCorrect?: boolean
    timeTakenMs?: boolean
    createdAt?: boolean
  }

  export type EnglishAttemptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "questionId" | "qNumber" | "userAnswer" | "correctAnswer" | "isCorrect" | "timeTakenMs" | "createdAt", ExtArgs["result"]["englishAttempt"]>
  export type EnglishAttemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | EnglishSessionDefaultArgs<ExtArgs>
    question?: boolean | EnglishAttempt$questionArgs<ExtArgs>
  }
  export type EnglishAttemptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | EnglishSessionDefaultArgs<ExtArgs>
    question?: boolean | EnglishAttempt$questionArgs<ExtArgs>
  }
  export type EnglishAttemptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | EnglishSessionDefaultArgs<ExtArgs>
    question?: boolean | EnglishAttempt$questionArgs<ExtArgs>
  }

  export type $EnglishAttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EnglishAttempt"
    objects: {
      session: Prisma.$EnglishSessionPayload<ExtArgs>
      question: Prisma.$EnglishQuestionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      questionId: string | null
      qNumber: number
      userAnswer: string
      correctAnswer: string
      isCorrect: boolean
      timeTakenMs: number
      createdAt: Date
    }, ExtArgs["result"]["englishAttempt"]>
    composites: {}
  }

  type EnglishAttemptGetPayload<S extends boolean | null | undefined | EnglishAttemptDefaultArgs> = $Result.GetResult<Prisma.$EnglishAttemptPayload, S>

  type EnglishAttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnglishAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnglishAttemptCountAggregateInputType | true
    }

  export interface EnglishAttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EnglishAttempt'], meta: { name: 'EnglishAttempt' } }
    /**
     * Find zero or one EnglishAttempt that matches the filter.
     * @param {EnglishAttemptFindUniqueArgs} args - Arguments to find a EnglishAttempt
     * @example
     * // Get one EnglishAttempt
     * const englishAttempt = await prisma.englishAttempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnglishAttemptFindUniqueArgs>(args: SelectSubset<T, EnglishAttemptFindUniqueArgs<ExtArgs>>): Prisma__EnglishAttemptClient<$Result.GetResult<Prisma.$EnglishAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EnglishAttempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnglishAttemptFindUniqueOrThrowArgs} args - Arguments to find a EnglishAttempt
     * @example
     * // Get one EnglishAttempt
     * const englishAttempt = await prisma.englishAttempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnglishAttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, EnglishAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnglishAttemptClient<$Result.GetResult<Prisma.$EnglishAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnglishAttempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishAttemptFindFirstArgs} args - Arguments to find a EnglishAttempt
     * @example
     * // Get one EnglishAttempt
     * const englishAttempt = await prisma.englishAttempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnglishAttemptFindFirstArgs>(args?: SelectSubset<T, EnglishAttemptFindFirstArgs<ExtArgs>>): Prisma__EnglishAttemptClient<$Result.GetResult<Prisma.$EnglishAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnglishAttempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishAttemptFindFirstOrThrowArgs} args - Arguments to find a EnglishAttempt
     * @example
     * // Get one EnglishAttempt
     * const englishAttempt = await prisma.englishAttempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnglishAttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, EnglishAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnglishAttemptClient<$Result.GetResult<Prisma.$EnglishAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EnglishAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishAttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EnglishAttempts
     * const englishAttempts = await prisma.englishAttempt.findMany()
     * 
     * // Get first 10 EnglishAttempts
     * const englishAttempts = await prisma.englishAttempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const englishAttemptWithIdOnly = await prisma.englishAttempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnglishAttemptFindManyArgs>(args?: SelectSubset<T, EnglishAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnglishAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EnglishAttempt.
     * @param {EnglishAttemptCreateArgs} args - Arguments to create a EnglishAttempt.
     * @example
     * // Create one EnglishAttempt
     * const EnglishAttempt = await prisma.englishAttempt.create({
     *   data: {
     *     // ... data to create a EnglishAttempt
     *   }
     * })
     * 
     */
    create<T extends EnglishAttemptCreateArgs>(args: SelectSubset<T, EnglishAttemptCreateArgs<ExtArgs>>): Prisma__EnglishAttemptClient<$Result.GetResult<Prisma.$EnglishAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EnglishAttempts.
     * @param {EnglishAttemptCreateManyArgs} args - Arguments to create many EnglishAttempts.
     * @example
     * // Create many EnglishAttempts
     * const englishAttempt = await prisma.englishAttempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnglishAttemptCreateManyArgs>(args?: SelectSubset<T, EnglishAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EnglishAttempts and returns the data saved in the database.
     * @param {EnglishAttemptCreateManyAndReturnArgs} args - Arguments to create many EnglishAttempts.
     * @example
     * // Create many EnglishAttempts
     * const englishAttempt = await prisma.englishAttempt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EnglishAttempts and only return the `id`
     * const englishAttemptWithIdOnly = await prisma.englishAttempt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnglishAttemptCreateManyAndReturnArgs>(args?: SelectSubset<T, EnglishAttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnglishAttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EnglishAttempt.
     * @param {EnglishAttemptDeleteArgs} args - Arguments to delete one EnglishAttempt.
     * @example
     * // Delete one EnglishAttempt
     * const EnglishAttempt = await prisma.englishAttempt.delete({
     *   where: {
     *     // ... filter to delete one EnglishAttempt
     *   }
     * })
     * 
     */
    delete<T extends EnglishAttemptDeleteArgs>(args: SelectSubset<T, EnglishAttemptDeleteArgs<ExtArgs>>): Prisma__EnglishAttemptClient<$Result.GetResult<Prisma.$EnglishAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EnglishAttempt.
     * @param {EnglishAttemptUpdateArgs} args - Arguments to update one EnglishAttempt.
     * @example
     * // Update one EnglishAttempt
     * const englishAttempt = await prisma.englishAttempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnglishAttemptUpdateArgs>(args: SelectSubset<T, EnglishAttemptUpdateArgs<ExtArgs>>): Prisma__EnglishAttemptClient<$Result.GetResult<Prisma.$EnglishAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EnglishAttempts.
     * @param {EnglishAttemptDeleteManyArgs} args - Arguments to filter EnglishAttempts to delete.
     * @example
     * // Delete a few EnglishAttempts
     * const { count } = await prisma.englishAttempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnglishAttemptDeleteManyArgs>(args?: SelectSubset<T, EnglishAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnglishAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishAttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EnglishAttempts
     * const englishAttempt = await prisma.englishAttempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnglishAttemptUpdateManyArgs>(args: SelectSubset<T, EnglishAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnglishAttempts and returns the data updated in the database.
     * @param {EnglishAttemptUpdateManyAndReturnArgs} args - Arguments to update many EnglishAttempts.
     * @example
     * // Update many EnglishAttempts
     * const englishAttempt = await prisma.englishAttempt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EnglishAttempts and only return the `id`
     * const englishAttemptWithIdOnly = await prisma.englishAttempt.updateManyAndReturn({
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
    updateManyAndReturn<T extends EnglishAttemptUpdateManyAndReturnArgs>(args: SelectSubset<T, EnglishAttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnglishAttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EnglishAttempt.
     * @param {EnglishAttemptUpsertArgs} args - Arguments to update or create a EnglishAttempt.
     * @example
     * // Update or create a EnglishAttempt
     * const englishAttempt = await prisma.englishAttempt.upsert({
     *   create: {
     *     // ... data to create a EnglishAttempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EnglishAttempt we want to update
     *   }
     * })
     */
    upsert<T extends EnglishAttemptUpsertArgs>(args: SelectSubset<T, EnglishAttemptUpsertArgs<ExtArgs>>): Prisma__EnglishAttemptClient<$Result.GetResult<Prisma.$EnglishAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EnglishAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishAttemptCountArgs} args - Arguments to filter EnglishAttempts to count.
     * @example
     * // Count the number of EnglishAttempts
     * const count = await prisma.englishAttempt.count({
     *   where: {
     *     // ... the filter for the EnglishAttempts we want to count
     *   }
     * })
    **/
    count<T extends EnglishAttemptCountArgs>(
      args?: Subset<T, EnglishAttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnglishAttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EnglishAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishAttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnglishAttemptAggregateArgs>(args: Subset<T, EnglishAttemptAggregateArgs>): Prisma.PrismaPromise<GetEnglishAttemptAggregateType<T>>

    /**
     * Group by EnglishAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishAttemptGroupByArgs} args - Group by arguments.
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
      T extends EnglishAttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnglishAttemptGroupByArgs['orderBy'] }
        : { orderBy?: EnglishAttemptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnglishAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnglishAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EnglishAttempt model
   */
  readonly fields: EnglishAttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EnglishAttempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnglishAttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends EnglishSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EnglishSessionDefaultArgs<ExtArgs>>): Prisma__EnglishSessionClient<$Result.GetResult<Prisma.$EnglishSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends EnglishAttempt$questionArgs<ExtArgs> = {}>(args?: Subset<T, EnglishAttempt$questionArgs<ExtArgs>>): Prisma__EnglishQuestionClient<$Result.GetResult<Prisma.$EnglishQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EnglishAttempt model
   */
  interface EnglishAttemptFieldRefs {
    readonly id: FieldRef<"EnglishAttempt", 'String'>
    readonly sessionId: FieldRef<"EnglishAttempt", 'String'>
    readonly questionId: FieldRef<"EnglishAttempt", 'String'>
    readonly qNumber: FieldRef<"EnglishAttempt", 'Int'>
    readonly userAnswer: FieldRef<"EnglishAttempt", 'String'>
    readonly correctAnswer: FieldRef<"EnglishAttempt", 'String'>
    readonly isCorrect: FieldRef<"EnglishAttempt", 'Boolean'>
    readonly timeTakenMs: FieldRef<"EnglishAttempt", 'Int'>
    readonly createdAt: FieldRef<"EnglishAttempt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EnglishAttempt findUnique
   */
  export type EnglishAttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishAttempt
     */
    select?: EnglishAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishAttempt
     */
    omit?: EnglishAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishAttemptInclude<ExtArgs> | null
    /**
     * Filter, which EnglishAttempt to fetch.
     */
    where: EnglishAttemptWhereUniqueInput
  }

  /**
   * EnglishAttempt findUniqueOrThrow
   */
  export type EnglishAttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishAttempt
     */
    select?: EnglishAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishAttempt
     */
    omit?: EnglishAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishAttemptInclude<ExtArgs> | null
    /**
     * Filter, which EnglishAttempt to fetch.
     */
    where: EnglishAttemptWhereUniqueInput
  }

  /**
   * EnglishAttempt findFirst
   */
  export type EnglishAttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishAttempt
     */
    select?: EnglishAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishAttempt
     */
    omit?: EnglishAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishAttemptInclude<ExtArgs> | null
    /**
     * Filter, which EnglishAttempt to fetch.
     */
    where?: EnglishAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnglishAttempts to fetch.
     */
    orderBy?: EnglishAttemptOrderByWithRelationInput | EnglishAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnglishAttempts.
     */
    cursor?: EnglishAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnglishAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnglishAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnglishAttempts.
     */
    distinct?: EnglishAttemptScalarFieldEnum | EnglishAttemptScalarFieldEnum[]
  }

  /**
   * EnglishAttempt findFirstOrThrow
   */
  export type EnglishAttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishAttempt
     */
    select?: EnglishAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishAttempt
     */
    omit?: EnglishAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishAttemptInclude<ExtArgs> | null
    /**
     * Filter, which EnglishAttempt to fetch.
     */
    where?: EnglishAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnglishAttempts to fetch.
     */
    orderBy?: EnglishAttemptOrderByWithRelationInput | EnglishAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnglishAttempts.
     */
    cursor?: EnglishAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnglishAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnglishAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnglishAttempts.
     */
    distinct?: EnglishAttemptScalarFieldEnum | EnglishAttemptScalarFieldEnum[]
  }

  /**
   * EnglishAttempt findMany
   */
  export type EnglishAttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishAttempt
     */
    select?: EnglishAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishAttempt
     */
    omit?: EnglishAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishAttemptInclude<ExtArgs> | null
    /**
     * Filter, which EnglishAttempts to fetch.
     */
    where?: EnglishAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnglishAttempts to fetch.
     */
    orderBy?: EnglishAttemptOrderByWithRelationInput | EnglishAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EnglishAttempts.
     */
    cursor?: EnglishAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnglishAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnglishAttempts.
     */
    skip?: number
    distinct?: EnglishAttemptScalarFieldEnum | EnglishAttemptScalarFieldEnum[]
  }

  /**
   * EnglishAttempt create
   */
  export type EnglishAttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishAttempt
     */
    select?: EnglishAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishAttempt
     */
    omit?: EnglishAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishAttemptInclude<ExtArgs> | null
    /**
     * The data needed to create a EnglishAttempt.
     */
    data: XOR<EnglishAttemptCreateInput, EnglishAttemptUncheckedCreateInput>
  }

  /**
   * EnglishAttempt createMany
   */
  export type EnglishAttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EnglishAttempts.
     */
    data: EnglishAttemptCreateManyInput | EnglishAttemptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EnglishAttempt createManyAndReturn
   */
  export type EnglishAttemptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishAttempt
     */
    select?: EnglishAttemptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishAttempt
     */
    omit?: EnglishAttemptOmit<ExtArgs> | null
    /**
     * The data used to create many EnglishAttempts.
     */
    data: EnglishAttemptCreateManyInput | EnglishAttemptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishAttemptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnglishAttempt update
   */
  export type EnglishAttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishAttempt
     */
    select?: EnglishAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishAttempt
     */
    omit?: EnglishAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishAttemptInclude<ExtArgs> | null
    /**
     * The data needed to update a EnglishAttempt.
     */
    data: XOR<EnglishAttemptUpdateInput, EnglishAttemptUncheckedUpdateInput>
    /**
     * Choose, which EnglishAttempt to update.
     */
    where: EnglishAttemptWhereUniqueInput
  }

  /**
   * EnglishAttempt updateMany
   */
  export type EnglishAttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EnglishAttempts.
     */
    data: XOR<EnglishAttemptUpdateManyMutationInput, EnglishAttemptUncheckedUpdateManyInput>
    /**
     * Filter which EnglishAttempts to update
     */
    where?: EnglishAttemptWhereInput
    /**
     * Limit how many EnglishAttempts to update.
     */
    limit?: number
  }

  /**
   * EnglishAttempt updateManyAndReturn
   */
  export type EnglishAttemptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishAttempt
     */
    select?: EnglishAttemptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishAttempt
     */
    omit?: EnglishAttemptOmit<ExtArgs> | null
    /**
     * The data used to update EnglishAttempts.
     */
    data: XOR<EnglishAttemptUpdateManyMutationInput, EnglishAttemptUncheckedUpdateManyInput>
    /**
     * Filter which EnglishAttempts to update
     */
    where?: EnglishAttemptWhereInput
    /**
     * Limit how many EnglishAttempts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishAttemptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnglishAttempt upsert
   */
  export type EnglishAttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishAttempt
     */
    select?: EnglishAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishAttempt
     */
    omit?: EnglishAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishAttemptInclude<ExtArgs> | null
    /**
     * The filter to search for the EnglishAttempt to update in case it exists.
     */
    where: EnglishAttemptWhereUniqueInput
    /**
     * In case the EnglishAttempt found by the `where` argument doesn't exist, create a new EnglishAttempt with this data.
     */
    create: XOR<EnglishAttemptCreateInput, EnglishAttemptUncheckedCreateInput>
    /**
     * In case the EnglishAttempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnglishAttemptUpdateInput, EnglishAttemptUncheckedUpdateInput>
  }

  /**
   * EnglishAttempt delete
   */
  export type EnglishAttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishAttempt
     */
    select?: EnglishAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishAttempt
     */
    omit?: EnglishAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishAttemptInclude<ExtArgs> | null
    /**
     * Filter which EnglishAttempt to delete.
     */
    where: EnglishAttemptWhereUniqueInput
  }

  /**
   * EnglishAttempt deleteMany
   */
  export type EnglishAttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnglishAttempts to delete
     */
    where?: EnglishAttemptWhereInput
    /**
     * Limit how many EnglishAttempts to delete.
     */
    limit?: number
  }

  /**
   * EnglishAttempt.question
   */
  export type EnglishAttempt$questionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishQuestion
     */
    select?: EnglishQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishQuestion
     */
    omit?: EnglishQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishQuestionInclude<ExtArgs> | null
    where?: EnglishQuestionWhereInput
  }

  /**
   * EnglishAttempt without action
   */
  export type EnglishAttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishAttempt
     */
    select?: EnglishAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishAttempt
     */
    omit?: EnglishAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishAttemptInclude<ExtArgs> | null
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


  export const QuizSetScalarFieldEnum: {
    id: 'id',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuizSetScalarFieldEnum = (typeof QuizSetScalarFieldEnum)[keyof typeof QuizSetScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    publicId: 'publicId',
    order: 'order',
    quizSetId: 'quizSetId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const AnswerScalarFieldEnum: {
    id: 'id',
    qNumber: 'qNumber',
    answer: 'answer',
    quizSetId: 'quizSetId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    quizSetId: 'quizSetId',
    score: 'score',
    total: 'total',
    timeTakenMs: 'timeTakenMs',
    createdAt: 'createdAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AttemptScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    qNumber: 'qNumber',
    userAnswer: 'userAnswer',
    correctAnswer: 'correctAnswer',
    isCorrect: 'isCorrect',
    timeTakenMs: 'timeTakenMs',
    answerId: 'answerId',
    createdAt: 'createdAt'
  };

  export type AttemptScalarFieldEnum = (typeof AttemptScalarFieldEnum)[keyof typeof AttemptScalarFieldEnum]


  export const EnglishQuizScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EnglishQuizScalarFieldEnum = (typeof EnglishQuizScalarFieldEnum)[keyof typeof EnglishQuizScalarFieldEnum]


  export const EnglishQuestionScalarFieldEnum: {
    id: 'id',
    quizId: 'quizId',
    qNumber: 'qNumber',
    question: 'question',
    options: 'options',
    correctAnswer: 'correctAnswer',
    explanation: 'explanation',
    createdAt: 'createdAt'
  };

  export type EnglishQuestionScalarFieldEnum = (typeof EnglishQuestionScalarFieldEnum)[keyof typeof EnglishQuestionScalarFieldEnum]


  export const EnglishSessionScalarFieldEnum: {
    id: 'id',
    quizId: 'quizId',
    score: 'score',
    total: 'total',
    timeTakenMs: 'timeTakenMs',
    createdAt: 'createdAt'
  };

  export type EnglishSessionScalarFieldEnum = (typeof EnglishSessionScalarFieldEnum)[keyof typeof EnglishSessionScalarFieldEnum]


  export const EnglishAttemptScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    questionId: 'questionId',
    qNumber: 'qNumber',
    userAnswer: 'userAnswer',
    correctAnswer: 'correctAnswer',
    isCorrect: 'isCorrect',
    timeTakenMs: 'timeTakenMs',
    createdAt: 'createdAt'
  };

  export type EnglishAttemptScalarFieldEnum = (typeof EnglishAttemptScalarFieldEnum)[keyof typeof EnglishAttemptScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type QuizSetWhereInput = {
    AND?: QuizSetWhereInput | QuizSetWhereInput[]
    OR?: QuizSetWhereInput[]
    NOT?: QuizSetWhereInput | QuizSetWhereInput[]
    id?: StringFilter<"QuizSet"> | string
    title?: StringFilter<"QuizSet"> | string
    createdAt?: DateTimeFilter<"QuizSet"> | Date | string
    updatedAt?: DateTimeFilter<"QuizSet"> | Date | string
    images?: ImageListRelationFilter
    answers?: AnswerListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type QuizSetOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: ImageOrderByRelationAggregateInput
    answers?: AnswerOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type QuizSetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizSetWhereInput | QuizSetWhereInput[]
    OR?: QuizSetWhereInput[]
    NOT?: QuizSetWhereInput | QuizSetWhereInput[]
    title?: StringFilter<"QuizSet"> | string
    createdAt?: DateTimeFilter<"QuizSet"> | Date | string
    updatedAt?: DateTimeFilter<"QuizSet"> | Date | string
    images?: ImageListRelationFilter
    answers?: AnswerListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id">

  export type QuizSetOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuizSetCountOrderByAggregateInput
    _max?: QuizSetMaxOrderByAggregateInput
    _min?: QuizSetMinOrderByAggregateInput
  }

  export type QuizSetScalarWhereWithAggregatesInput = {
    AND?: QuizSetScalarWhereWithAggregatesInput | QuizSetScalarWhereWithAggregatesInput[]
    OR?: QuizSetScalarWhereWithAggregatesInput[]
    NOT?: QuizSetScalarWhereWithAggregatesInput | QuizSetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuizSet"> | string
    title?: StringWithAggregatesFilter<"QuizSet"> | string
    createdAt?: DateTimeWithAggregatesFilter<"QuizSet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QuizSet"> | Date | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    publicId?: StringNullableFilter<"Image"> | string | null
    order?: IntFilter<"Image"> | number
    quizSetId?: StringFilter<"Image"> | string
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
    quizSet?: XOR<QuizSetScalarRelationFilter, QuizSetWhereInput>
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    publicId?: SortOrderInput | SortOrder
    order?: SortOrder
    quizSetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quizSet?: QuizSetOrderByWithRelationInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    url?: StringFilter<"Image"> | string
    publicId?: StringNullableFilter<"Image"> | string | null
    order?: IntFilter<"Image"> | number
    quizSetId?: StringFilter<"Image"> | string
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
    quizSet?: XOR<QuizSetScalarRelationFilter, QuizSetWhereInput>
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    publicId?: SortOrderInput | SortOrder
    order?: SortOrder
    quizSetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Image"> | string
    url?: StringWithAggregatesFilter<"Image"> | string
    publicId?: StringNullableWithAggregatesFilter<"Image"> | string | null
    order?: IntWithAggregatesFilter<"Image"> | number
    quizSetId?: StringWithAggregatesFilter<"Image"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
  }

  export type AnswerWhereInput = {
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    id?: StringFilter<"Answer"> | string
    qNumber?: IntFilter<"Answer"> | number
    answer?: StringFilter<"Answer"> | string
    quizSetId?: StringFilter<"Answer"> | string
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
    quizSet?: XOR<QuizSetScalarRelationFilter, QuizSetWhereInput>
    attempts?: AttemptListRelationFilter
  }

  export type AnswerOrderByWithRelationInput = {
    id?: SortOrder
    qNumber?: SortOrder
    answer?: SortOrder
    quizSetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quizSet?: QuizSetOrderByWithRelationInput
    attempts?: AttemptOrderByRelationAggregateInput
  }

  export type AnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    quizSetId_qNumber?: AnswerQuizSetIdQNumberCompoundUniqueInput
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    qNumber?: IntFilter<"Answer"> | number
    answer?: StringFilter<"Answer"> | string
    quizSetId?: StringFilter<"Answer"> | string
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
    quizSet?: XOR<QuizSetScalarRelationFilter, QuizSetWhereInput>
    attempts?: AttemptListRelationFilter
  }, "id" | "quizSetId_qNumber">

  export type AnswerOrderByWithAggregationInput = {
    id?: SortOrder
    qNumber?: SortOrder
    answer?: SortOrder
    quizSetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnswerCountOrderByAggregateInput
    _avg?: AnswerAvgOrderByAggregateInput
    _max?: AnswerMaxOrderByAggregateInput
    _min?: AnswerMinOrderByAggregateInput
    _sum?: AnswerSumOrderByAggregateInput
  }

  export type AnswerScalarWhereWithAggregatesInput = {
    AND?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    OR?: AnswerScalarWhereWithAggregatesInput[]
    NOT?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Answer"> | string
    qNumber?: IntWithAggregatesFilter<"Answer"> | number
    answer?: StringWithAggregatesFilter<"Answer"> | string
    quizSetId?: StringWithAggregatesFilter<"Answer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    quizSetId?: StringFilter<"Session"> | string
    score?: IntFilter<"Session"> | number
    total?: IntFilter<"Session"> | number
    timeTakenMs?: IntFilter<"Session"> | number
    createdAt?: DateTimeFilter<"Session"> | Date | string
    quizSet?: XOR<QuizSetScalarRelationFilter, QuizSetWhereInput>
    attempts?: AttemptListRelationFilter
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    quizSetId?: SortOrder
    score?: SortOrder
    total?: SortOrder
    timeTakenMs?: SortOrder
    createdAt?: SortOrder
    quizSet?: QuizSetOrderByWithRelationInput
    attempts?: AttemptOrderByRelationAggregateInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    quizSetId?: StringFilter<"Session"> | string
    score?: IntFilter<"Session"> | number
    total?: IntFilter<"Session"> | number
    timeTakenMs?: IntFilter<"Session"> | number
    createdAt?: DateTimeFilter<"Session"> | Date | string
    quizSet?: XOR<QuizSetScalarRelationFilter, QuizSetWhereInput>
    attempts?: AttemptListRelationFilter
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    quizSetId?: SortOrder
    score?: SortOrder
    total?: SortOrder
    timeTakenMs?: SortOrder
    createdAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    quizSetId?: StringWithAggregatesFilter<"Session"> | string
    score?: IntWithAggregatesFilter<"Session"> | number
    total?: IntWithAggregatesFilter<"Session"> | number
    timeTakenMs?: IntWithAggregatesFilter<"Session"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type AttemptWhereInput = {
    AND?: AttemptWhereInput | AttemptWhereInput[]
    OR?: AttemptWhereInput[]
    NOT?: AttemptWhereInput | AttemptWhereInput[]
    id?: StringFilter<"Attempt"> | string
    sessionId?: StringFilter<"Attempt"> | string
    qNumber?: IntFilter<"Attempt"> | number
    userAnswer?: StringFilter<"Attempt"> | string
    correctAnswer?: StringFilter<"Attempt"> | string
    isCorrect?: BoolFilter<"Attempt"> | boolean
    timeTakenMs?: IntFilter<"Attempt"> | number
    answerId?: StringNullableFilter<"Attempt"> | string | null
    createdAt?: DateTimeFilter<"Attempt"> | Date | string
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
    answer?: XOR<AnswerNullableScalarRelationFilter, AnswerWhereInput> | null
  }

  export type AttemptOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    qNumber?: SortOrder
    userAnswer?: SortOrder
    correctAnswer?: SortOrder
    isCorrect?: SortOrder
    timeTakenMs?: SortOrder
    answerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    session?: SessionOrderByWithRelationInput
    answer?: AnswerOrderByWithRelationInput
  }

  export type AttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttemptWhereInput | AttemptWhereInput[]
    OR?: AttemptWhereInput[]
    NOT?: AttemptWhereInput | AttemptWhereInput[]
    sessionId?: StringFilter<"Attempt"> | string
    qNumber?: IntFilter<"Attempt"> | number
    userAnswer?: StringFilter<"Attempt"> | string
    correctAnswer?: StringFilter<"Attempt"> | string
    isCorrect?: BoolFilter<"Attempt"> | boolean
    timeTakenMs?: IntFilter<"Attempt"> | number
    answerId?: StringNullableFilter<"Attempt"> | string | null
    createdAt?: DateTimeFilter<"Attempt"> | Date | string
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
    answer?: XOR<AnswerNullableScalarRelationFilter, AnswerWhereInput> | null
  }, "id">

  export type AttemptOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    qNumber?: SortOrder
    userAnswer?: SortOrder
    correctAnswer?: SortOrder
    isCorrect?: SortOrder
    timeTakenMs?: SortOrder
    answerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AttemptCountOrderByAggregateInput
    _avg?: AttemptAvgOrderByAggregateInput
    _max?: AttemptMaxOrderByAggregateInput
    _min?: AttemptMinOrderByAggregateInput
    _sum?: AttemptSumOrderByAggregateInput
  }

  export type AttemptScalarWhereWithAggregatesInput = {
    AND?: AttemptScalarWhereWithAggregatesInput | AttemptScalarWhereWithAggregatesInput[]
    OR?: AttemptScalarWhereWithAggregatesInput[]
    NOT?: AttemptScalarWhereWithAggregatesInput | AttemptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attempt"> | string
    sessionId?: StringWithAggregatesFilter<"Attempt"> | string
    qNumber?: IntWithAggregatesFilter<"Attempt"> | number
    userAnswer?: StringWithAggregatesFilter<"Attempt"> | string
    correctAnswer?: StringWithAggregatesFilter<"Attempt"> | string
    isCorrect?: BoolWithAggregatesFilter<"Attempt"> | boolean
    timeTakenMs?: IntWithAggregatesFilter<"Attempt"> | number
    answerId?: StringNullableWithAggregatesFilter<"Attempt"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Attempt"> | Date | string
  }

  export type EnglishQuizWhereInput = {
    AND?: EnglishQuizWhereInput | EnglishQuizWhereInput[]
    OR?: EnglishQuizWhereInput[]
    NOT?: EnglishQuizWhereInput | EnglishQuizWhereInput[]
    id?: StringFilter<"EnglishQuiz"> | string
    title?: StringFilter<"EnglishQuiz"> | string
    description?: StringNullableFilter<"EnglishQuiz"> | string | null
    createdAt?: DateTimeFilter<"EnglishQuiz"> | Date | string
    updatedAt?: DateTimeFilter<"EnglishQuiz"> | Date | string
    questions?: EnglishQuestionListRelationFilter
    sessions?: EnglishSessionListRelationFilter
  }

  export type EnglishQuizOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questions?: EnglishQuestionOrderByRelationAggregateInput
    sessions?: EnglishSessionOrderByRelationAggregateInput
  }

  export type EnglishQuizWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EnglishQuizWhereInput | EnglishQuizWhereInput[]
    OR?: EnglishQuizWhereInput[]
    NOT?: EnglishQuizWhereInput | EnglishQuizWhereInput[]
    title?: StringFilter<"EnglishQuiz"> | string
    description?: StringNullableFilter<"EnglishQuiz"> | string | null
    createdAt?: DateTimeFilter<"EnglishQuiz"> | Date | string
    updatedAt?: DateTimeFilter<"EnglishQuiz"> | Date | string
    questions?: EnglishQuestionListRelationFilter
    sessions?: EnglishSessionListRelationFilter
  }, "id">

  export type EnglishQuizOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EnglishQuizCountOrderByAggregateInput
    _max?: EnglishQuizMaxOrderByAggregateInput
    _min?: EnglishQuizMinOrderByAggregateInput
  }

  export type EnglishQuizScalarWhereWithAggregatesInput = {
    AND?: EnglishQuizScalarWhereWithAggregatesInput | EnglishQuizScalarWhereWithAggregatesInput[]
    OR?: EnglishQuizScalarWhereWithAggregatesInput[]
    NOT?: EnglishQuizScalarWhereWithAggregatesInput | EnglishQuizScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EnglishQuiz"> | string
    title?: StringWithAggregatesFilter<"EnglishQuiz"> | string
    description?: StringNullableWithAggregatesFilter<"EnglishQuiz"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EnglishQuiz"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EnglishQuiz"> | Date | string
  }

  export type EnglishQuestionWhereInput = {
    AND?: EnglishQuestionWhereInput | EnglishQuestionWhereInput[]
    OR?: EnglishQuestionWhereInput[]
    NOT?: EnglishQuestionWhereInput | EnglishQuestionWhereInput[]
    id?: StringFilter<"EnglishQuestion"> | string
    quizId?: StringFilter<"EnglishQuestion"> | string
    qNumber?: IntFilter<"EnglishQuestion"> | number
    question?: StringFilter<"EnglishQuestion"> | string
    options?: JsonFilter<"EnglishQuestion">
    correctAnswer?: StringFilter<"EnglishQuestion"> | string
    explanation?: StringNullableFilter<"EnglishQuestion"> | string | null
    createdAt?: DateTimeFilter<"EnglishQuestion"> | Date | string
    quiz?: XOR<EnglishQuizScalarRelationFilter, EnglishQuizWhereInput>
    attempts?: EnglishAttemptListRelationFilter
  }

  export type EnglishQuestionOrderByWithRelationInput = {
    id?: SortOrder
    quizId?: SortOrder
    qNumber?: SortOrder
    question?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    explanation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    quiz?: EnglishQuizOrderByWithRelationInput
    attempts?: EnglishAttemptOrderByRelationAggregateInput
  }

  export type EnglishQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    quizId_qNumber?: EnglishQuestionQuizIdQNumberCompoundUniqueInput
    AND?: EnglishQuestionWhereInput | EnglishQuestionWhereInput[]
    OR?: EnglishQuestionWhereInput[]
    NOT?: EnglishQuestionWhereInput | EnglishQuestionWhereInput[]
    quizId?: StringFilter<"EnglishQuestion"> | string
    qNumber?: IntFilter<"EnglishQuestion"> | number
    question?: StringFilter<"EnglishQuestion"> | string
    options?: JsonFilter<"EnglishQuestion">
    correctAnswer?: StringFilter<"EnglishQuestion"> | string
    explanation?: StringNullableFilter<"EnglishQuestion"> | string | null
    createdAt?: DateTimeFilter<"EnglishQuestion"> | Date | string
    quiz?: XOR<EnglishQuizScalarRelationFilter, EnglishQuizWhereInput>
    attempts?: EnglishAttemptListRelationFilter
  }, "id" | "quizId_qNumber">

  export type EnglishQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    quizId?: SortOrder
    qNumber?: SortOrder
    question?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    explanation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EnglishQuestionCountOrderByAggregateInput
    _avg?: EnglishQuestionAvgOrderByAggregateInput
    _max?: EnglishQuestionMaxOrderByAggregateInput
    _min?: EnglishQuestionMinOrderByAggregateInput
    _sum?: EnglishQuestionSumOrderByAggregateInput
  }

  export type EnglishQuestionScalarWhereWithAggregatesInput = {
    AND?: EnglishQuestionScalarWhereWithAggregatesInput | EnglishQuestionScalarWhereWithAggregatesInput[]
    OR?: EnglishQuestionScalarWhereWithAggregatesInput[]
    NOT?: EnglishQuestionScalarWhereWithAggregatesInput | EnglishQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EnglishQuestion"> | string
    quizId?: StringWithAggregatesFilter<"EnglishQuestion"> | string
    qNumber?: IntWithAggregatesFilter<"EnglishQuestion"> | number
    question?: StringWithAggregatesFilter<"EnglishQuestion"> | string
    options?: JsonWithAggregatesFilter<"EnglishQuestion">
    correctAnswer?: StringWithAggregatesFilter<"EnglishQuestion"> | string
    explanation?: StringNullableWithAggregatesFilter<"EnglishQuestion"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EnglishQuestion"> | Date | string
  }

  export type EnglishSessionWhereInput = {
    AND?: EnglishSessionWhereInput | EnglishSessionWhereInput[]
    OR?: EnglishSessionWhereInput[]
    NOT?: EnglishSessionWhereInput | EnglishSessionWhereInput[]
    id?: StringFilter<"EnglishSession"> | string
    quizId?: StringFilter<"EnglishSession"> | string
    score?: IntFilter<"EnglishSession"> | number
    total?: IntFilter<"EnglishSession"> | number
    timeTakenMs?: IntFilter<"EnglishSession"> | number
    createdAt?: DateTimeFilter<"EnglishSession"> | Date | string
    quiz?: XOR<EnglishQuizScalarRelationFilter, EnglishQuizWhereInput>
    attempts?: EnglishAttemptListRelationFilter
  }

  export type EnglishSessionOrderByWithRelationInput = {
    id?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    total?: SortOrder
    timeTakenMs?: SortOrder
    createdAt?: SortOrder
    quiz?: EnglishQuizOrderByWithRelationInput
    attempts?: EnglishAttemptOrderByRelationAggregateInput
  }

  export type EnglishSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EnglishSessionWhereInput | EnglishSessionWhereInput[]
    OR?: EnglishSessionWhereInput[]
    NOT?: EnglishSessionWhereInput | EnglishSessionWhereInput[]
    quizId?: StringFilter<"EnglishSession"> | string
    score?: IntFilter<"EnglishSession"> | number
    total?: IntFilter<"EnglishSession"> | number
    timeTakenMs?: IntFilter<"EnglishSession"> | number
    createdAt?: DateTimeFilter<"EnglishSession"> | Date | string
    quiz?: XOR<EnglishQuizScalarRelationFilter, EnglishQuizWhereInput>
    attempts?: EnglishAttemptListRelationFilter
  }, "id">

  export type EnglishSessionOrderByWithAggregationInput = {
    id?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    total?: SortOrder
    timeTakenMs?: SortOrder
    createdAt?: SortOrder
    _count?: EnglishSessionCountOrderByAggregateInput
    _avg?: EnglishSessionAvgOrderByAggregateInput
    _max?: EnglishSessionMaxOrderByAggregateInput
    _min?: EnglishSessionMinOrderByAggregateInput
    _sum?: EnglishSessionSumOrderByAggregateInput
  }

  export type EnglishSessionScalarWhereWithAggregatesInput = {
    AND?: EnglishSessionScalarWhereWithAggregatesInput | EnglishSessionScalarWhereWithAggregatesInput[]
    OR?: EnglishSessionScalarWhereWithAggregatesInput[]
    NOT?: EnglishSessionScalarWhereWithAggregatesInput | EnglishSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EnglishSession"> | string
    quizId?: StringWithAggregatesFilter<"EnglishSession"> | string
    score?: IntWithAggregatesFilter<"EnglishSession"> | number
    total?: IntWithAggregatesFilter<"EnglishSession"> | number
    timeTakenMs?: IntWithAggregatesFilter<"EnglishSession"> | number
    createdAt?: DateTimeWithAggregatesFilter<"EnglishSession"> | Date | string
  }

  export type EnglishAttemptWhereInput = {
    AND?: EnglishAttemptWhereInput | EnglishAttemptWhereInput[]
    OR?: EnglishAttemptWhereInput[]
    NOT?: EnglishAttemptWhereInput | EnglishAttemptWhereInput[]
    id?: StringFilter<"EnglishAttempt"> | string
    sessionId?: StringFilter<"EnglishAttempt"> | string
    questionId?: StringNullableFilter<"EnglishAttempt"> | string | null
    qNumber?: IntFilter<"EnglishAttempt"> | number
    userAnswer?: StringFilter<"EnglishAttempt"> | string
    correctAnswer?: StringFilter<"EnglishAttempt"> | string
    isCorrect?: BoolFilter<"EnglishAttempt"> | boolean
    timeTakenMs?: IntFilter<"EnglishAttempt"> | number
    createdAt?: DateTimeFilter<"EnglishAttempt"> | Date | string
    session?: XOR<EnglishSessionScalarRelationFilter, EnglishSessionWhereInput>
    question?: XOR<EnglishQuestionNullableScalarRelationFilter, EnglishQuestionWhereInput> | null
  }

  export type EnglishAttemptOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    questionId?: SortOrderInput | SortOrder
    qNumber?: SortOrder
    userAnswer?: SortOrder
    correctAnswer?: SortOrder
    isCorrect?: SortOrder
    timeTakenMs?: SortOrder
    createdAt?: SortOrder
    session?: EnglishSessionOrderByWithRelationInput
    question?: EnglishQuestionOrderByWithRelationInput
  }

  export type EnglishAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EnglishAttemptWhereInput | EnglishAttemptWhereInput[]
    OR?: EnglishAttemptWhereInput[]
    NOT?: EnglishAttemptWhereInput | EnglishAttemptWhereInput[]
    sessionId?: StringFilter<"EnglishAttempt"> | string
    questionId?: StringNullableFilter<"EnglishAttempt"> | string | null
    qNumber?: IntFilter<"EnglishAttempt"> | number
    userAnswer?: StringFilter<"EnglishAttempt"> | string
    correctAnswer?: StringFilter<"EnglishAttempt"> | string
    isCorrect?: BoolFilter<"EnglishAttempt"> | boolean
    timeTakenMs?: IntFilter<"EnglishAttempt"> | number
    createdAt?: DateTimeFilter<"EnglishAttempt"> | Date | string
    session?: XOR<EnglishSessionScalarRelationFilter, EnglishSessionWhereInput>
    question?: XOR<EnglishQuestionNullableScalarRelationFilter, EnglishQuestionWhereInput> | null
  }, "id">

  export type EnglishAttemptOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    questionId?: SortOrderInput | SortOrder
    qNumber?: SortOrder
    userAnswer?: SortOrder
    correctAnswer?: SortOrder
    isCorrect?: SortOrder
    timeTakenMs?: SortOrder
    createdAt?: SortOrder
    _count?: EnglishAttemptCountOrderByAggregateInput
    _avg?: EnglishAttemptAvgOrderByAggregateInput
    _max?: EnglishAttemptMaxOrderByAggregateInput
    _min?: EnglishAttemptMinOrderByAggregateInput
    _sum?: EnglishAttemptSumOrderByAggregateInput
  }

  export type EnglishAttemptScalarWhereWithAggregatesInput = {
    AND?: EnglishAttemptScalarWhereWithAggregatesInput | EnglishAttemptScalarWhereWithAggregatesInput[]
    OR?: EnglishAttemptScalarWhereWithAggregatesInput[]
    NOT?: EnglishAttemptScalarWhereWithAggregatesInput | EnglishAttemptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EnglishAttempt"> | string
    sessionId?: StringWithAggregatesFilter<"EnglishAttempt"> | string
    questionId?: StringNullableWithAggregatesFilter<"EnglishAttempt"> | string | null
    qNumber?: IntWithAggregatesFilter<"EnglishAttempt"> | number
    userAnswer?: StringWithAggregatesFilter<"EnglishAttempt"> | string
    correctAnswer?: StringWithAggregatesFilter<"EnglishAttempt"> | string
    isCorrect?: BoolWithAggregatesFilter<"EnglishAttempt"> | boolean
    timeTakenMs?: IntWithAggregatesFilter<"EnglishAttempt"> | number
    createdAt?: DateTimeWithAggregatesFilter<"EnglishAttempt"> | Date | string
  }

  export type QuizSetCreateInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutQuizSetInput
    answers?: AnswerCreateNestedManyWithoutQuizSetInput
    sessions?: SessionCreateNestedManyWithoutQuizSetInput
  }

  export type QuizSetUncheckedCreateInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutQuizSetInput
    answers?: AnswerUncheckedCreateNestedManyWithoutQuizSetInput
    sessions?: SessionUncheckedCreateNestedManyWithoutQuizSetInput
  }

  export type QuizSetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutQuizSetNestedInput
    answers?: AnswerUpdateManyWithoutQuizSetNestedInput
    sessions?: SessionUpdateManyWithoutQuizSetNestedInput
  }

  export type QuizSetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutQuizSetNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutQuizSetNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutQuizSetNestedInput
  }

  export type QuizSetCreateManyInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizSetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizSetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateInput = {
    id?: string
    url: string
    publicId?: string | null
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quizSet: QuizSetCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateInput = {
    id?: string
    url: string
    publicId?: string | null
    order: number
    quizSetId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizSet?: QuizSetUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    quizSetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateManyInput = {
    id?: string
    url: string
    publicId?: string | null
    order: number
    quizSetId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    quizSetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateInput = {
    id?: string
    qNumber: number
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    quizSet: QuizSetCreateNestedOneWithoutAnswersInput
    attempts?: AttemptCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateInput = {
    id?: string
    qNumber: number
    answer: string
    quizSetId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attempts?: AttemptUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizSet?: QuizSetUpdateOneRequiredWithoutAnswersNestedInput
    attempts?: AttemptUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
    quizSetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: AttemptUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerCreateManyInput = {
    id?: string
    qNumber: number
    answer: string
    quizSetId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
    quizSetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    score: number
    total: number
    timeTakenMs: number
    createdAt?: Date | string
    quizSet: QuizSetCreateNestedOneWithoutSessionsInput
    attempts?: AttemptCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    quizSetId: string
    score: number
    total: number
    timeTakenMs: number
    createdAt?: Date | string
    attempts?: AttemptUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizSet?: QuizSetUpdateOneRequiredWithoutSessionsNestedInput
    attempts?: AttemptUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizSetId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: AttemptUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionCreateManyInput = {
    id?: string
    quizSetId: string
    score: number
    total: number
    timeTakenMs: number
    createdAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizSetId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttemptCreateInput = {
    id?: string
    qNumber: number
    userAnswer: string
    correctAnswer: string
    isCorrect: boolean
    timeTakenMs: number
    createdAt?: Date | string
    session: SessionCreateNestedOneWithoutAttemptsInput
    answer?: AnswerCreateNestedOneWithoutAttemptsInput
  }

  export type AttemptUncheckedCreateInput = {
    id?: string
    sessionId: string
    qNumber: number
    userAnswer: string
    correctAnswer: string
    isCorrect: boolean
    timeTakenMs: number
    answerId?: string | null
    createdAt?: Date | string
  }

  export type AttemptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    userAnswer?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateOneRequiredWithoutAttemptsNestedInput
    answer?: AnswerUpdateOneWithoutAttemptsNestedInput
  }

  export type AttemptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    userAnswer?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    answerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttemptCreateManyInput = {
    id?: string
    sessionId: string
    qNumber: number
    userAnswer: string
    correctAnswer: string
    isCorrect: boolean
    timeTakenMs: number
    answerId?: string | null
    createdAt?: Date | string
  }

  export type AttemptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    userAnswer?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttemptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    userAnswer?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    answerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnglishQuizCreateInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: EnglishQuestionCreateNestedManyWithoutQuizInput
    sessions?: EnglishSessionCreateNestedManyWithoutQuizInput
  }

  export type EnglishQuizUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: EnglishQuestionUncheckedCreateNestedManyWithoutQuizInput
    sessions?: EnglishSessionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type EnglishQuizUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: EnglishQuestionUpdateManyWithoutQuizNestedInput
    sessions?: EnglishSessionUpdateManyWithoutQuizNestedInput
  }

  export type EnglishQuizUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: EnglishQuestionUncheckedUpdateManyWithoutQuizNestedInput
    sessions?: EnglishSessionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type EnglishQuizCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnglishQuizUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnglishQuizUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnglishQuestionCreateInput = {
    id?: string
    qNumber: number
    question: string
    options: JsonNullValueInput | InputJsonValue
    correctAnswer: string
    explanation?: string | null
    createdAt?: Date | string
    quiz: EnglishQuizCreateNestedOneWithoutQuestionsInput
    attempts?: EnglishAttemptCreateNestedManyWithoutQuestionInput
  }

  export type EnglishQuestionUncheckedCreateInput = {
    id?: string
    quizId: string
    qNumber: number
    question: string
    options: JsonNullValueInput | InputJsonValue
    correctAnswer: string
    explanation?: string | null
    createdAt?: Date | string
    attempts?: EnglishAttemptUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type EnglishQuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: EnglishQuizUpdateOneRequiredWithoutQuestionsNestedInput
    attempts?: EnglishAttemptUpdateManyWithoutQuestionNestedInput
  }

  export type EnglishQuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: EnglishAttemptUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type EnglishQuestionCreateManyInput = {
    id?: string
    quizId: string
    qNumber: number
    question: string
    options: JsonNullValueInput | InputJsonValue
    correctAnswer: string
    explanation?: string | null
    createdAt?: Date | string
  }

  export type EnglishQuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnglishQuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnglishSessionCreateInput = {
    id?: string
    score: number
    total: number
    timeTakenMs: number
    createdAt?: Date | string
    quiz: EnglishQuizCreateNestedOneWithoutSessionsInput
    attempts?: EnglishAttemptCreateNestedManyWithoutSessionInput
  }

  export type EnglishSessionUncheckedCreateInput = {
    id?: string
    quizId: string
    score: number
    total: number
    timeTakenMs: number
    createdAt?: Date | string
    attempts?: EnglishAttemptUncheckedCreateNestedManyWithoutSessionInput
  }

  export type EnglishSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: EnglishQuizUpdateOneRequiredWithoutSessionsNestedInput
    attempts?: EnglishAttemptUpdateManyWithoutSessionNestedInput
  }

  export type EnglishSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: EnglishAttemptUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type EnglishSessionCreateManyInput = {
    id?: string
    quizId: string
    score: number
    total: number
    timeTakenMs: number
    createdAt?: Date | string
  }

  export type EnglishSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnglishSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnglishAttemptCreateInput = {
    id?: string
    qNumber: number
    userAnswer: string
    correctAnswer: string
    isCorrect: boolean
    timeTakenMs: number
    createdAt?: Date | string
    session: EnglishSessionCreateNestedOneWithoutAttemptsInput
    question?: EnglishQuestionCreateNestedOneWithoutAttemptsInput
  }

  export type EnglishAttemptUncheckedCreateInput = {
    id?: string
    sessionId: string
    questionId?: string | null
    qNumber: number
    userAnswer: string
    correctAnswer: string
    isCorrect: boolean
    timeTakenMs: number
    createdAt?: Date | string
  }

  export type EnglishAttemptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    userAnswer?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: EnglishSessionUpdateOneRequiredWithoutAttemptsNestedInput
    question?: EnglishQuestionUpdateOneWithoutAttemptsNestedInput
  }

  export type EnglishAttemptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    qNumber?: IntFieldUpdateOperationsInput | number
    userAnswer?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnglishAttemptCreateManyInput = {
    id?: string
    sessionId: string
    questionId?: string | null
    qNumber: number
    userAnswer: string
    correctAnswer: string
    isCorrect: boolean
    timeTakenMs: number
    createdAt?: Date | string
  }

  export type EnglishAttemptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    userAnswer?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnglishAttemptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    qNumber?: IntFieldUpdateOperationsInput | number
    userAnswer?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type AnswerListRelationFilter = {
    every?: AnswerWhereInput
    some?: AnswerWhereInput
    none?: AnswerWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizSetCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizSetMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizSetMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type QuizSetScalarRelationFilter = {
    is?: QuizSetWhereInput
    isNot?: QuizSetWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    order?: SortOrder
    quizSetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    order?: SortOrder
    quizSetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    order?: SortOrder
    quizSetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    order?: SortOrder
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

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type AttemptListRelationFilter = {
    every?: AttemptWhereInput
    some?: AttemptWhereInput
    none?: AttemptWhereInput
  }

  export type AttemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnswerQuizSetIdQNumberCompoundUniqueInput = {
    quizSetId: string
    qNumber: number
  }

  export type AnswerCountOrderByAggregateInput = {
    id?: SortOrder
    qNumber?: SortOrder
    answer?: SortOrder
    quizSetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnswerAvgOrderByAggregateInput = {
    qNumber?: SortOrder
  }

  export type AnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    qNumber?: SortOrder
    answer?: SortOrder
    quizSetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnswerMinOrderByAggregateInput = {
    id?: SortOrder
    qNumber?: SortOrder
    answer?: SortOrder
    quizSetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnswerSumOrderByAggregateInput = {
    qNumber?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    quizSetId?: SortOrder
    score?: SortOrder
    total?: SortOrder
    timeTakenMs?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    score?: SortOrder
    total?: SortOrder
    timeTakenMs?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    quizSetId?: SortOrder
    score?: SortOrder
    total?: SortOrder
    timeTakenMs?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    quizSetId?: SortOrder
    score?: SortOrder
    total?: SortOrder
    timeTakenMs?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    score?: SortOrder
    total?: SortOrder
    timeTakenMs?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SessionScalarRelationFilter = {
    is?: SessionWhereInput
    isNot?: SessionWhereInput
  }

  export type AnswerNullableScalarRelationFilter = {
    is?: AnswerWhereInput | null
    isNot?: AnswerWhereInput | null
  }

  export type AttemptCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    qNumber?: SortOrder
    userAnswer?: SortOrder
    correctAnswer?: SortOrder
    isCorrect?: SortOrder
    timeTakenMs?: SortOrder
    answerId?: SortOrder
    createdAt?: SortOrder
  }

  export type AttemptAvgOrderByAggregateInput = {
    qNumber?: SortOrder
    timeTakenMs?: SortOrder
  }

  export type AttemptMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    qNumber?: SortOrder
    userAnswer?: SortOrder
    correctAnswer?: SortOrder
    isCorrect?: SortOrder
    timeTakenMs?: SortOrder
    answerId?: SortOrder
    createdAt?: SortOrder
  }

  export type AttemptMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    qNumber?: SortOrder
    userAnswer?: SortOrder
    correctAnswer?: SortOrder
    isCorrect?: SortOrder
    timeTakenMs?: SortOrder
    answerId?: SortOrder
    createdAt?: SortOrder
  }

  export type AttemptSumOrderByAggregateInput = {
    qNumber?: SortOrder
    timeTakenMs?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnglishQuestionListRelationFilter = {
    every?: EnglishQuestionWhereInput
    some?: EnglishQuestionWhereInput
    none?: EnglishQuestionWhereInput
  }

  export type EnglishSessionListRelationFilter = {
    every?: EnglishSessionWhereInput
    some?: EnglishSessionWhereInput
    none?: EnglishSessionWhereInput
  }

  export type EnglishQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnglishSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnglishQuizCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnglishQuizMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnglishQuizMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnglishQuizScalarRelationFilter = {
    is?: EnglishQuizWhereInput
    isNot?: EnglishQuizWhereInput
  }

  export type EnglishAttemptListRelationFilter = {
    every?: EnglishAttemptWhereInput
    some?: EnglishAttemptWhereInput
    none?: EnglishAttemptWhereInput
  }

  export type EnglishAttemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnglishQuestionQuizIdQNumberCompoundUniqueInput = {
    quizId: string
    qNumber: number
  }

  export type EnglishQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    qNumber?: SortOrder
    question?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
  }

  export type EnglishQuestionAvgOrderByAggregateInput = {
    qNumber?: SortOrder
  }

  export type EnglishQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    qNumber?: SortOrder
    question?: SortOrder
    correctAnswer?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
  }

  export type EnglishQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    qNumber?: SortOrder
    question?: SortOrder
    correctAnswer?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
  }

  export type EnglishQuestionSumOrderByAggregateInput = {
    qNumber?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnglishSessionCountOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    total?: SortOrder
    timeTakenMs?: SortOrder
    createdAt?: SortOrder
  }

  export type EnglishSessionAvgOrderByAggregateInput = {
    score?: SortOrder
    total?: SortOrder
    timeTakenMs?: SortOrder
  }

  export type EnglishSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    total?: SortOrder
    timeTakenMs?: SortOrder
    createdAt?: SortOrder
  }

  export type EnglishSessionMinOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    total?: SortOrder
    timeTakenMs?: SortOrder
    createdAt?: SortOrder
  }

  export type EnglishSessionSumOrderByAggregateInput = {
    score?: SortOrder
    total?: SortOrder
    timeTakenMs?: SortOrder
  }

  export type EnglishSessionScalarRelationFilter = {
    is?: EnglishSessionWhereInput
    isNot?: EnglishSessionWhereInput
  }

  export type EnglishQuestionNullableScalarRelationFilter = {
    is?: EnglishQuestionWhereInput | null
    isNot?: EnglishQuestionWhereInput | null
  }

  export type EnglishAttemptCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    questionId?: SortOrder
    qNumber?: SortOrder
    userAnswer?: SortOrder
    correctAnswer?: SortOrder
    isCorrect?: SortOrder
    timeTakenMs?: SortOrder
    createdAt?: SortOrder
  }

  export type EnglishAttemptAvgOrderByAggregateInput = {
    qNumber?: SortOrder
    timeTakenMs?: SortOrder
  }

  export type EnglishAttemptMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    questionId?: SortOrder
    qNumber?: SortOrder
    userAnswer?: SortOrder
    correctAnswer?: SortOrder
    isCorrect?: SortOrder
    timeTakenMs?: SortOrder
    createdAt?: SortOrder
  }

  export type EnglishAttemptMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    questionId?: SortOrder
    qNumber?: SortOrder
    userAnswer?: SortOrder
    correctAnswer?: SortOrder
    isCorrect?: SortOrder
    timeTakenMs?: SortOrder
    createdAt?: SortOrder
  }

  export type EnglishAttemptSumOrderByAggregateInput = {
    qNumber?: SortOrder
    timeTakenMs?: SortOrder
  }

  export type ImageCreateNestedManyWithoutQuizSetInput = {
    create?: XOR<ImageCreateWithoutQuizSetInput, ImageUncheckedCreateWithoutQuizSetInput> | ImageCreateWithoutQuizSetInput[] | ImageUncheckedCreateWithoutQuizSetInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutQuizSetInput | ImageCreateOrConnectWithoutQuizSetInput[]
    createMany?: ImageCreateManyQuizSetInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type AnswerCreateNestedManyWithoutQuizSetInput = {
    create?: XOR<AnswerCreateWithoutQuizSetInput, AnswerUncheckedCreateWithoutQuizSetInput> | AnswerCreateWithoutQuizSetInput[] | AnswerUncheckedCreateWithoutQuizSetInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuizSetInput | AnswerCreateOrConnectWithoutQuizSetInput[]
    createMany?: AnswerCreateManyQuizSetInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutQuizSetInput = {
    create?: XOR<SessionCreateWithoutQuizSetInput, SessionUncheckedCreateWithoutQuizSetInput> | SessionCreateWithoutQuizSetInput[] | SessionUncheckedCreateWithoutQuizSetInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutQuizSetInput | SessionCreateOrConnectWithoutQuizSetInput[]
    createMany?: SessionCreateManyQuizSetInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutQuizSetInput = {
    create?: XOR<ImageCreateWithoutQuizSetInput, ImageUncheckedCreateWithoutQuizSetInput> | ImageCreateWithoutQuizSetInput[] | ImageUncheckedCreateWithoutQuizSetInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutQuizSetInput | ImageCreateOrConnectWithoutQuizSetInput[]
    createMany?: ImageCreateManyQuizSetInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutQuizSetInput = {
    create?: XOR<AnswerCreateWithoutQuizSetInput, AnswerUncheckedCreateWithoutQuizSetInput> | AnswerCreateWithoutQuizSetInput[] | AnswerUncheckedCreateWithoutQuizSetInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuizSetInput | AnswerCreateOrConnectWithoutQuizSetInput[]
    createMany?: AnswerCreateManyQuizSetInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutQuizSetInput = {
    create?: XOR<SessionCreateWithoutQuizSetInput, SessionUncheckedCreateWithoutQuizSetInput> | SessionCreateWithoutQuizSetInput[] | SessionUncheckedCreateWithoutQuizSetInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutQuizSetInput | SessionCreateOrConnectWithoutQuizSetInput[]
    createMany?: SessionCreateManyQuizSetInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ImageUpdateManyWithoutQuizSetNestedInput = {
    create?: XOR<ImageCreateWithoutQuizSetInput, ImageUncheckedCreateWithoutQuizSetInput> | ImageCreateWithoutQuizSetInput[] | ImageUncheckedCreateWithoutQuizSetInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutQuizSetInput | ImageCreateOrConnectWithoutQuizSetInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutQuizSetInput | ImageUpsertWithWhereUniqueWithoutQuizSetInput[]
    createMany?: ImageCreateManyQuizSetInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutQuizSetInput | ImageUpdateWithWhereUniqueWithoutQuizSetInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutQuizSetInput | ImageUpdateManyWithWhereWithoutQuizSetInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type AnswerUpdateManyWithoutQuizSetNestedInput = {
    create?: XOR<AnswerCreateWithoutQuizSetInput, AnswerUncheckedCreateWithoutQuizSetInput> | AnswerCreateWithoutQuizSetInput[] | AnswerUncheckedCreateWithoutQuizSetInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuizSetInput | AnswerCreateOrConnectWithoutQuizSetInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuizSetInput | AnswerUpsertWithWhereUniqueWithoutQuizSetInput[]
    createMany?: AnswerCreateManyQuizSetInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuizSetInput | AnswerUpdateWithWhereUniqueWithoutQuizSetInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuizSetInput | AnswerUpdateManyWithWhereWithoutQuizSetInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutQuizSetNestedInput = {
    create?: XOR<SessionCreateWithoutQuizSetInput, SessionUncheckedCreateWithoutQuizSetInput> | SessionCreateWithoutQuizSetInput[] | SessionUncheckedCreateWithoutQuizSetInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutQuizSetInput | SessionCreateOrConnectWithoutQuizSetInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutQuizSetInput | SessionUpsertWithWhereUniqueWithoutQuizSetInput[]
    createMany?: SessionCreateManyQuizSetInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutQuizSetInput | SessionUpdateWithWhereUniqueWithoutQuizSetInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutQuizSetInput | SessionUpdateManyWithWhereWithoutQuizSetInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutQuizSetNestedInput = {
    create?: XOR<ImageCreateWithoutQuizSetInput, ImageUncheckedCreateWithoutQuizSetInput> | ImageCreateWithoutQuizSetInput[] | ImageUncheckedCreateWithoutQuizSetInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutQuizSetInput | ImageCreateOrConnectWithoutQuizSetInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutQuizSetInput | ImageUpsertWithWhereUniqueWithoutQuizSetInput[]
    createMany?: ImageCreateManyQuizSetInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutQuizSetInput | ImageUpdateWithWhereUniqueWithoutQuizSetInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutQuizSetInput | ImageUpdateManyWithWhereWithoutQuizSetInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutQuizSetNestedInput = {
    create?: XOR<AnswerCreateWithoutQuizSetInput, AnswerUncheckedCreateWithoutQuizSetInput> | AnswerCreateWithoutQuizSetInput[] | AnswerUncheckedCreateWithoutQuizSetInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuizSetInput | AnswerCreateOrConnectWithoutQuizSetInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuizSetInput | AnswerUpsertWithWhereUniqueWithoutQuizSetInput[]
    createMany?: AnswerCreateManyQuizSetInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuizSetInput | AnswerUpdateWithWhereUniqueWithoutQuizSetInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuizSetInput | AnswerUpdateManyWithWhereWithoutQuizSetInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutQuizSetNestedInput = {
    create?: XOR<SessionCreateWithoutQuizSetInput, SessionUncheckedCreateWithoutQuizSetInput> | SessionCreateWithoutQuizSetInput[] | SessionUncheckedCreateWithoutQuizSetInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutQuizSetInput | SessionCreateOrConnectWithoutQuizSetInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutQuizSetInput | SessionUpsertWithWhereUniqueWithoutQuizSetInput[]
    createMany?: SessionCreateManyQuizSetInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutQuizSetInput | SessionUpdateWithWhereUniqueWithoutQuizSetInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutQuizSetInput | SessionUpdateManyWithWhereWithoutQuizSetInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type QuizSetCreateNestedOneWithoutImagesInput = {
    create?: XOR<QuizSetCreateWithoutImagesInput, QuizSetUncheckedCreateWithoutImagesInput>
    connectOrCreate?: QuizSetCreateOrConnectWithoutImagesInput
    connect?: QuizSetWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuizSetUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<QuizSetCreateWithoutImagesInput, QuizSetUncheckedCreateWithoutImagesInput>
    connectOrCreate?: QuizSetCreateOrConnectWithoutImagesInput
    upsert?: QuizSetUpsertWithoutImagesInput
    connect?: QuizSetWhereUniqueInput
    update?: XOR<XOR<QuizSetUpdateToOneWithWhereWithoutImagesInput, QuizSetUpdateWithoutImagesInput>, QuizSetUncheckedUpdateWithoutImagesInput>
  }

  export type QuizSetCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QuizSetCreateWithoutAnswersInput, QuizSetUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuizSetCreateOrConnectWithoutAnswersInput
    connect?: QuizSetWhereUniqueInput
  }

  export type AttemptCreateNestedManyWithoutAnswerInput = {
    create?: XOR<AttemptCreateWithoutAnswerInput, AttemptUncheckedCreateWithoutAnswerInput> | AttemptCreateWithoutAnswerInput[] | AttemptUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: AttemptCreateOrConnectWithoutAnswerInput | AttemptCreateOrConnectWithoutAnswerInput[]
    createMany?: AttemptCreateManyAnswerInputEnvelope
    connect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
  }

  export type AttemptUncheckedCreateNestedManyWithoutAnswerInput = {
    create?: XOR<AttemptCreateWithoutAnswerInput, AttemptUncheckedCreateWithoutAnswerInput> | AttemptCreateWithoutAnswerInput[] | AttemptUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: AttemptCreateOrConnectWithoutAnswerInput | AttemptCreateOrConnectWithoutAnswerInput[]
    createMany?: AttemptCreateManyAnswerInputEnvelope
    connect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
  }

  export type QuizSetUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QuizSetCreateWithoutAnswersInput, QuizSetUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuizSetCreateOrConnectWithoutAnswersInput
    upsert?: QuizSetUpsertWithoutAnswersInput
    connect?: QuizSetWhereUniqueInput
    update?: XOR<XOR<QuizSetUpdateToOneWithWhereWithoutAnswersInput, QuizSetUpdateWithoutAnswersInput>, QuizSetUncheckedUpdateWithoutAnswersInput>
  }

  export type AttemptUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<AttemptCreateWithoutAnswerInput, AttemptUncheckedCreateWithoutAnswerInput> | AttemptCreateWithoutAnswerInput[] | AttemptUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: AttemptCreateOrConnectWithoutAnswerInput | AttemptCreateOrConnectWithoutAnswerInput[]
    upsert?: AttemptUpsertWithWhereUniqueWithoutAnswerInput | AttemptUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: AttemptCreateManyAnswerInputEnvelope
    set?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    disconnect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    delete?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    connect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    update?: AttemptUpdateWithWhereUniqueWithoutAnswerInput | AttemptUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: AttemptUpdateManyWithWhereWithoutAnswerInput | AttemptUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: AttemptScalarWhereInput | AttemptScalarWhereInput[]
  }

  export type AttemptUncheckedUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<AttemptCreateWithoutAnswerInput, AttemptUncheckedCreateWithoutAnswerInput> | AttemptCreateWithoutAnswerInput[] | AttemptUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: AttemptCreateOrConnectWithoutAnswerInput | AttemptCreateOrConnectWithoutAnswerInput[]
    upsert?: AttemptUpsertWithWhereUniqueWithoutAnswerInput | AttemptUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: AttemptCreateManyAnswerInputEnvelope
    set?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    disconnect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    delete?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    connect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    update?: AttemptUpdateWithWhereUniqueWithoutAnswerInput | AttemptUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: AttemptUpdateManyWithWhereWithoutAnswerInput | AttemptUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: AttemptScalarWhereInput | AttemptScalarWhereInput[]
  }

  export type QuizSetCreateNestedOneWithoutSessionsInput = {
    create?: XOR<QuizSetCreateWithoutSessionsInput, QuizSetUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: QuizSetCreateOrConnectWithoutSessionsInput
    connect?: QuizSetWhereUniqueInput
  }

  export type AttemptCreateNestedManyWithoutSessionInput = {
    create?: XOR<AttemptCreateWithoutSessionInput, AttemptUncheckedCreateWithoutSessionInput> | AttemptCreateWithoutSessionInput[] | AttemptUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AttemptCreateOrConnectWithoutSessionInput | AttemptCreateOrConnectWithoutSessionInput[]
    createMany?: AttemptCreateManySessionInputEnvelope
    connect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
  }

  export type AttemptUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<AttemptCreateWithoutSessionInput, AttemptUncheckedCreateWithoutSessionInput> | AttemptCreateWithoutSessionInput[] | AttemptUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AttemptCreateOrConnectWithoutSessionInput | AttemptCreateOrConnectWithoutSessionInput[]
    createMany?: AttemptCreateManySessionInputEnvelope
    connect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
  }

  export type QuizSetUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<QuizSetCreateWithoutSessionsInput, QuizSetUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: QuizSetCreateOrConnectWithoutSessionsInput
    upsert?: QuizSetUpsertWithoutSessionsInput
    connect?: QuizSetWhereUniqueInput
    update?: XOR<XOR<QuizSetUpdateToOneWithWhereWithoutSessionsInput, QuizSetUpdateWithoutSessionsInput>, QuizSetUncheckedUpdateWithoutSessionsInput>
  }

  export type AttemptUpdateManyWithoutSessionNestedInput = {
    create?: XOR<AttemptCreateWithoutSessionInput, AttemptUncheckedCreateWithoutSessionInput> | AttemptCreateWithoutSessionInput[] | AttemptUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AttemptCreateOrConnectWithoutSessionInput | AttemptCreateOrConnectWithoutSessionInput[]
    upsert?: AttemptUpsertWithWhereUniqueWithoutSessionInput | AttemptUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: AttemptCreateManySessionInputEnvelope
    set?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    disconnect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    delete?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    connect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    update?: AttemptUpdateWithWhereUniqueWithoutSessionInput | AttemptUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: AttemptUpdateManyWithWhereWithoutSessionInput | AttemptUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: AttemptScalarWhereInput | AttemptScalarWhereInput[]
  }

  export type AttemptUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<AttemptCreateWithoutSessionInput, AttemptUncheckedCreateWithoutSessionInput> | AttemptCreateWithoutSessionInput[] | AttemptUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AttemptCreateOrConnectWithoutSessionInput | AttemptCreateOrConnectWithoutSessionInput[]
    upsert?: AttemptUpsertWithWhereUniqueWithoutSessionInput | AttemptUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: AttemptCreateManySessionInputEnvelope
    set?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    disconnect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    delete?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    connect?: AttemptWhereUniqueInput | AttemptWhereUniqueInput[]
    update?: AttemptUpdateWithWhereUniqueWithoutSessionInput | AttemptUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: AttemptUpdateManyWithWhereWithoutSessionInput | AttemptUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: AttemptScalarWhereInput | AttemptScalarWhereInput[]
  }

  export type SessionCreateNestedOneWithoutAttemptsInput = {
    create?: XOR<SessionCreateWithoutAttemptsInput, SessionUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: SessionCreateOrConnectWithoutAttemptsInput
    connect?: SessionWhereUniqueInput
  }

  export type AnswerCreateNestedOneWithoutAttemptsInput = {
    create?: XOR<AnswerCreateWithoutAttemptsInput, AnswerUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutAttemptsInput
    connect?: AnswerWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SessionUpdateOneRequiredWithoutAttemptsNestedInput = {
    create?: XOR<SessionCreateWithoutAttemptsInput, SessionUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: SessionCreateOrConnectWithoutAttemptsInput
    upsert?: SessionUpsertWithoutAttemptsInput
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutAttemptsInput, SessionUpdateWithoutAttemptsInput>, SessionUncheckedUpdateWithoutAttemptsInput>
  }

  export type AnswerUpdateOneWithoutAttemptsNestedInput = {
    create?: XOR<AnswerCreateWithoutAttemptsInput, AnswerUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutAttemptsInput
    upsert?: AnswerUpsertWithoutAttemptsInput
    disconnect?: AnswerWhereInput | boolean
    delete?: AnswerWhereInput | boolean
    connect?: AnswerWhereUniqueInput
    update?: XOR<XOR<AnswerUpdateToOneWithWhereWithoutAttemptsInput, AnswerUpdateWithoutAttemptsInput>, AnswerUncheckedUpdateWithoutAttemptsInput>
  }

  export type EnglishQuestionCreateNestedManyWithoutQuizInput = {
    create?: XOR<EnglishQuestionCreateWithoutQuizInput, EnglishQuestionUncheckedCreateWithoutQuizInput> | EnglishQuestionCreateWithoutQuizInput[] | EnglishQuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: EnglishQuestionCreateOrConnectWithoutQuizInput | EnglishQuestionCreateOrConnectWithoutQuizInput[]
    createMany?: EnglishQuestionCreateManyQuizInputEnvelope
    connect?: EnglishQuestionWhereUniqueInput | EnglishQuestionWhereUniqueInput[]
  }

  export type EnglishSessionCreateNestedManyWithoutQuizInput = {
    create?: XOR<EnglishSessionCreateWithoutQuizInput, EnglishSessionUncheckedCreateWithoutQuizInput> | EnglishSessionCreateWithoutQuizInput[] | EnglishSessionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: EnglishSessionCreateOrConnectWithoutQuizInput | EnglishSessionCreateOrConnectWithoutQuizInput[]
    createMany?: EnglishSessionCreateManyQuizInputEnvelope
    connect?: EnglishSessionWhereUniqueInput | EnglishSessionWhereUniqueInput[]
  }

  export type EnglishQuestionUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<EnglishQuestionCreateWithoutQuizInput, EnglishQuestionUncheckedCreateWithoutQuizInput> | EnglishQuestionCreateWithoutQuizInput[] | EnglishQuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: EnglishQuestionCreateOrConnectWithoutQuizInput | EnglishQuestionCreateOrConnectWithoutQuizInput[]
    createMany?: EnglishQuestionCreateManyQuizInputEnvelope
    connect?: EnglishQuestionWhereUniqueInput | EnglishQuestionWhereUniqueInput[]
  }

  export type EnglishSessionUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<EnglishSessionCreateWithoutQuizInput, EnglishSessionUncheckedCreateWithoutQuizInput> | EnglishSessionCreateWithoutQuizInput[] | EnglishSessionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: EnglishSessionCreateOrConnectWithoutQuizInput | EnglishSessionCreateOrConnectWithoutQuizInput[]
    createMany?: EnglishSessionCreateManyQuizInputEnvelope
    connect?: EnglishSessionWhereUniqueInput | EnglishSessionWhereUniqueInput[]
  }

  export type EnglishQuestionUpdateManyWithoutQuizNestedInput = {
    create?: XOR<EnglishQuestionCreateWithoutQuizInput, EnglishQuestionUncheckedCreateWithoutQuizInput> | EnglishQuestionCreateWithoutQuizInput[] | EnglishQuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: EnglishQuestionCreateOrConnectWithoutQuizInput | EnglishQuestionCreateOrConnectWithoutQuizInput[]
    upsert?: EnglishQuestionUpsertWithWhereUniqueWithoutQuizInput | EnglishQuestionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: EnglishQuestionCreateManyQuizInputEnvelope
    set?: EnglishQuestionWhereUniqueInput | EnglishQuestionWhereUniqueInput[]
    disconnect?: EnglishQuestionWhereUniqueInput | EnglishQuestionWhereUniqueInput[]
    delete?: EnglishQuestionWhereUniqueInput | EnglishQuestionWhereUniqueInput[]
    connect?: EnglishQuestionWhereUniqueInput | EnglishQuestionWhereUniqueInput[]
    update?: EnglishQuestionUpdateWithWhereUniqueWithoutQuizInput | EnglishQuestionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: EnglishQuestionUpdateManyWithWhereWithoutQuizInput | EnglishQuestionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: EnglishQuestionScalarWhereInput | EnglishQuestionScalarWhereInput[]
  }

  export type EnglishSessionUpdateManyWithoutQuizNestedInput = {
    create?: XOR<EnglishSessionCreateWithoutQuizInput, EnglishSessionUncheckedCreateWithoutQuizInput> | EnglishSessionCreateWithoutQuizInput[] | EnglishSessionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: EnglishSessionCreateOrConnectWithoutQuizInput | EnglishSessionCreateOrConnectWithoutQuizInput[]
    upsert?: EnglishSessionUpsertWithWhereUniqueWithoutQuizInput | EnglishSessionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: EnglishSessionCreateManyQuizInputEnvelope
    set?: EnglishSessionWhereUniqueInput | EnglishSessionWhereUniqueInput[]
    disconnect?: EnglishSessionWhereUniqueInput | EnglishSessionWhereUniqueInput[]
    delete?: EnglishSessionWhereUniqueInput | EnglishSessionWhereUniqueInput[]
    connect?: EnglishSessionWhereUniqueInput | EnglishSessionWhereUniqueInput[]
    update?: EnglishSessionUpdateWithWhereUniqueWithoutQuizInput | EnglishSessionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: EnglishSessionUpdateManyWithWhereWithoutQuizInput | EnglishSessionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: EnglishSessionScalarWhereInput | EnglishSessionScalarWhereInput[]
  }

  export type EnglishQuestionUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<EnglishQuestionCreateWithoutQuizInput, EnglishQuestionUncheckedCreateWithoutQuizInput> | EnglishQuestionCreateWithoutQuizInput[] | EnglishQuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: EnglishQuestionCreateOrConnectWithoutQuizInput | EnglishQuestionCreateOrConnectWithoutQuizInput[]
    upsert?: EnglishQuestionUpsertWithWhereUniqueWithoutQuizInput | EnglishQuestionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: EnglishQuestionCreateManyQuizInputEnvelope
    set?: EnglishQuestionWhereUniqueInput | EnglishQuestionWhereUniqueInput[]
    disconnect?: EnglishQuestionWhereUniqueInput | EnglishQuestionWhereUniqueInput[]
    delete?: EnglishQuestionWhereUniqueInput | EnglishQuestionWhereUniqueInput[]
    connect?: EnglishQuestionWhereUniqueInput | EnglishQuestionWhereUniqueInput[]
    update?: EnglishQuestionUpdateWithWhereUniqueWithoutQuizInput | EnglishQuestionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: EnglishQuestionUpdateManyWithWhereWithoutQuizInput | EnglishQuestionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: EnglishQuestionScalarWhereInput | EnglishQuestionScalarWhereInput[]
  }

  export type EnglishSessionUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<EnglishSessionCreateWithoutQuizInput, EnglishSessionUncheckedCreateWithoutQuizInput> | EnglishSessionCreateWithoutQuizInput[] | EnglishSessionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: EnglishSessionCreateOrConnectWithoutQuizInput | EnglishSessionCreateOrConnectWithoutQuizInput[]
    upsert?: EnglishSessionUpsertWithWhereUniqueWithoutQuizInput | EnglishSessionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: EnglishSessionCreateManyQuizInputEnvelope
    set?: EnglishSessionWhereUniqueInput | EnglishSessionWhereUniqueInput[]
    disconnect?: EnglishSessionWhereUniqueInput | EnglishSessionWhereUniqueInput[]
    delete?: EnglishSessionWhereUniqueInput | EnglishSessionWhereUniqueInput[]
    connect?: EnglishSessionWhereUniqueInput | EnglishSessionWhereUniqueInput[]
    update?: EnglishSessionUpdateWithWhereUniqueWithoutQuizInput | EnglishSessionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: EnglishSessionUpdateManyWithWhereWithoutQuizInput | EnglishSessionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: EnglishSessionScalarWhereInput | EnglishSessionScalarWhereInput[]
  }

  export type EnglishQuizCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<EnglishQuizCreateWithoutQuestionsInput, EnglishQuizUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: EnglishQuizCreateOrConnectWithoutQuestionsInput
    connect?: EnglishQuizWhereUniqueInput
  }

  export type EnglishAttemptCreateNestedManyWithoutQuestionInput = {
    create?: XOR<EnglishAttemptCreateWithoutQuestionInput, EnglishAttemptUncheckedCreateWithoutQuestionInput> | EnglishAttemptCreateWithoutQuestionInput[] | EnglishAttemptUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: EnglishAttemptCreateOrConnectWithoutQuestionInput | EnglishAttemptCreateOrConnectWithoutQuestionInput[]
    createMany?: EnglishAttemptCreateManyQuestionInputEnvelope
    connect?: EnglishAttemptWhereUniqueInput | EnglishAttemptWhereUniqueInput[]
  }

  export type EnglishAttemptUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<EnglishAttemptCreateWithoutQuestionInput, EnglishAttemptUncheckedCreateWithoutQuestionInput> | EnglishAttemptCreateWithoutQuestionInput[] | EnglishAttemptUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: EnglishAttemptCreateOrConnectWithoutQuestionInput | EnglishAttemptCreateOrConnectWithoutQuestionInput[]
    createMany?: EnglishAttemptCreateManyQuestionInputEnvelope
    connect?: EnglishAttemptWhereUniqueInput | EnglishAttemptWhereUniqueInput[]
  }

  export type EnglishQuizUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<EnglishQuizCreateWithoutQuestionsInput, EnglishQuizUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: EnglishQuizCreateOrConnectWithoutQuestionsInput
    upsert?: EnglishQuizUpsertWithoutQuestionsInput
    connect?: EnglishQuizWhereUniqueInput
    update?: XOR<XOR<EnglishQuizUpdateToOneWithWhereWithoutQuestionsInput, EnglishQuizUpdateWithoutQuestionsInput>, EnglishQuizUncheckedUpdateWithoutQuestionsInput>
  }

  export type EnglishAttemptUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<EnglishAttemptCreateWithoutQuestionInput, EnglishAttemptUncheckedCreateWithoutQuestionInput> | EnglishAttemptCreateWithoutQuestionInput[] | EnglishAttemptUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: EnglishAttemptCreateOrConnectWithoutQuestionInput | EnglishAttemptCreateOrConnectWithoutQuestionInput[]
    upsert?: EnglishAttemptUpsertWithWhereUniqueWithoutQuestionInput | EnglishAttemptUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: EnglishAttemptCreateManyQuestionInputEnvelope
    set?: EnglishAttemptWhereUniqueInput | EnglishAttemptWhereUniqueInput[]
    disconnect?: EnglishAttemptWhereUniqueInput | EnglishAttemptWhereUniqueInput[]
    delete?: EnglishAttemptWhereUniqueInput | EnglishAttemptWhereUniqueInput[]
    connect?: EnglishAttemptWhereUniqueInput | EnglishAttemptWhereUniqueInput[]
    update?: EnglishAttemptUpdateWithWhereUniqueWithoutQuestionInput | EnglishAttemptUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: EnglishAttemptUpdateManyWithWhereWithoutQuestionInput | EnglishAttemptUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: EnglishAttemptScalarWhereInput | EnglishAttemptScalarWhereInput[]
  }

  export type EnglishAttemptUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<EnglishAttemptCreateWithoutQuestionInput, EnglishAttemptUncheckedCreateWithoutQuestionInput> | EnglishAttemptCreateWithoutQuestionInput[] | EnglishAttemptUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: EnglishAttemptCreateOrConnectWithoutQuestionInput | EnglishAttemptCreateOrConnectWithoutQuestionInput[]
    upsert?: EnglishAttemptUpsertWithWhereUniqueWithoutQuestionInput | EnglishAttemptUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: EnglishAttemptCreateManyQuestionInputEnvelope
    set?: EnglishAttemptWhereUniqueInput | EnglishAttemptWhereUniqueInput[]
    disconnect?: EnglishAttemptWhereUniqueInput | EnglishAttemptWhereUniqueInput[]
    delete?: EnglishAttemptWhereUniqueInput | EnglishAttemptWhereUniqueInput[]
    connect?: EnglishAttemptWhereUniqueInput | EnglishAttemptWhereUniqueInput[]
    update?: EnglishAttemptUpdateWithWhereUniqueWithoutQuestionInput | EnglishAttemptUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: EnglishAttemptUpdateManyWithWhereWithoutQuestionInput | EnglishAttemptUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: EnglishAttemptScalarWhereInput | EnglishAttemptScalarWhereInput[]
  }

  export type EnglishQuizCreateNestedOneWithoutSessionsInput = {
    create?: XOR<EnglishQuizCreateWithoutSessionsInput, EnglishQuizUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: EnglishQuizCreateOrConnectWithoutSessionsInput
    connect?: EnglishQuizWhereUniqueInput
  }

  export type EnglishAttemptCreateNestedManyWithoutSessionInput = {
    create?: XOR<EnglishAttemptCreateWithoutSessionInput, EnglishAttemptUncheckedCreateWithoutSessionInput> | EnglishAttemptCreateWithoutSessionInput[] | EnglishAttemptUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: EnglishAttemptCreateOrConnectWithoutSessionInput | EnglishAttemptCreateOrConnectWithoutSessionInput[]
    createMany?: EnglishAttemptCreateManySessionInputEnvelope
    connect?: EnglishAttemptWhereUniqueInput | EnglishAttemptWhereUniqueInput[]
  }

  export type EnglishAttemptUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<EnglishAttemptCreateWithoutSessionInput, EnglishAttemptUncheckedCreateWithoutSessionInput> | EnglishAttemptCreateWithoutSessionInput[] | EnglishAttemptUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: EnglishAttemptCreateOrConnectWithoutSessionInput | EnglishAttemptCreateOrConnectWithoutSessionInput[]
    createMany?: EnglishAttemptCreateManySessionInputEnvelope
    connect?: EnglishAttemptWhereUniqueInput | EnglishAttemptWhereUniqueInput[]
  }

  export type EnglishQuizUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<EnglishQuizCreateWithoutSessionsInput, EnglishQuizUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: EnglishQuizCreateOrConnectWithoutSessionsInput
    upsert?: EnglishQuizUpsertWithoutSessionsInput
    connect?: EnglishQuizWhereUniqueInput
    update?: XOR<XOR<EnglishQuizUpdateToOneWithWhereWithoutSessionsInput, EnglishQuizUpdateWithoutSessionsInput>, EnglishQuizUncheckedUpdateWithoutSessionsInput>
  }

  export type EnglishAttemptUpdateManyWithoutSessionNestedInput = {
    create?: XOR<EnglishAttemptCreateWithoutSessionInput, EnglishAttemptUncheckedCreateWithoutSessionInput> | EnglishAttemptCreateWithoutSessionInput[] | EnglishAttemptUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: EnglishAttemptCreateOrConnectWithoutSessionInput | EnglishAttemptCreateOrConnectWithoutSessionInput[]
    upsert?: EnglishAttemptUpsertWithWhereUniqueWithoutSessionInput | EnglishAttemptUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: EnglishAttemptCreateManySessionInputEnvelope
    set?: EnglishAttemptWhereUniqueInput | EnglishAttemptWhereUniqueInput[]
    disconnect?: EnglishAttemptWhereUniqueInput | EnglishAttemptWhereUniqueInput[]
    delete?: EnglishAttemptWhereUniqueInput | EnglishAttemptWhereUniqueInput[]
    connect?: EnglishAttemptWhereUniqueInput | EnglishAttemptWhereUniqueInput[]
    update?: EnglishAttemptUpdateWithWhereUniqueWithoutSessionInput | EnglishAttemptUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: EnglishAttemptUpdateManyWithWhereWithoutSessionInput | EnglishAttemptUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: EnglishAttemptScalarWhereInput | EnglishAttemptScalarWhereInput[]
  }

  export type EnglishAttemptUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<EnglishAttemptCreateWithoutSessionInput, EnglishAttemptUncheckedCreateWithoutSessionInput> | EnglishAttemptCreateWithoutSessionInput[] | EnglishAttemptUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: EnglishAttemptCreateOrConnectWithoutSessionInput | EnglishAttemptCreateOrConnectWithoutSessionInput[]
    upsert?: EnglishAttemptUpsertWithWhereUniqueWithoutSessionInput | EnglishAttemptUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: EnglishAttemptCreateManySessionInputEnvelope
    set?: EnglishAttemptWhereUniqueInput | EnglishAttemptWhereUniqueInput[]
    disconnect?: EnglishAttemptWhereUniqueInput | EnglishAttemptWhereUniqueInput[]
    delete?: EnglishAttemptWhereUniqueInput | EnglishAttemptWhereUniqueInput[]
    connect?: EnglishAttemptWhereUniqueInput | EnglishAttemptWhereUniqueInput[]
    update?: EnglishAttemptUpdateWithWhereUniqueWithoutSessionInput | EnglishAttemptUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: EnglishAttemptUpdateManyWithWhereWithoutSessionInput | EnglishAttemptUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: EnglishAttemptScalarWhereInput | EnglishAttemptScalarWhereInput[]
  }

  export type EnglishSessionCreateNestedOneWithoutAttemptsInput = {
    create?: XOR<EnglishSessionCreateWithoutAttemptsInput, EnglishSessionUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: EnglishSessionCreateOrConnectWithoutAttemptsInput
    connect?: EnglishSessionWhereUniqueInput
  }

  export type EnglishQuestionCreateNestedOneWithoutAttemptsInput = {
    create?: XOR<EnglishQuestionCreateWithoutAttemptsInput, EnglishQuestionUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: EnglishQuestionCreateOrConnectWithoutAttemptsInput
    connect?: EnglishQuestionWhereUniqueInput
  }

  export type EnglishSessionUpdateOneRequiredWithoutAttemptsNestedInput = {
    create?: XOR<EnglishSessionCreateWithoutAttemptsInput, EnglishSessionUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: EnglishSessionCreateOrConnectWithoutAttemptsInput
    upsert?: EnglishSessionUpsertWithoutAttemptsInput
    connect?: EnglishSessionWhereUniqueInput
    update?: XOR<XOR<EnglishSessionUpdateToOneWithWhereWithoutAttemptsInput, EnglishSessionUpdateWithoutAttemptsInput>, EnglishSessionUncheckedUpdateWithoutAttemptsInput>
  }

  export type EnglishQuestionUpdateOneWithoutAttemptsNestedInput = {
    create?: XOR<EnglishQuestionCreateWithoutAttemptsInput, EnglishQuestionUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: EnglishQuestionCreateOrConnectWithoutAttemptsInput
    upsert?: EnglishQuestionUpsertWithoutAttemptsInput
    disconnect?: EnglishQuestionWhereInput | boolean
    delete?: EnglishQuestionWhereInput | boolean
    connect?: EnglishQuestionWhereUniqueInput
    update?: XOR<XOR<EnglishQuestionUpdateToOneWithWhereWithoutAttemptsInput, EnglishQuestionUpdateWithoutAttemptsInput>, EnglishQuestionUncheckedUpdateWithoutAttemptsInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ImageCreateWithoutQuizSetInput = {
    id?: string
    url: string
    publicId?: string | null
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUncheckedCreateWithoutQuizSetInput = {
    id?: string
    url: string
    publicId?: string | null
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageCreateOrConnectWithoutQuizSetInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutQuizSetInput, ImageUncheckedCreateWithoutQuizSetInput>
  }

  export type ImageCreateManyQuizSetInputEnvelope = {
    data: ImageCreateManyQuizSetInput | ImageCreateManyQuizSetInput[]
    skipDuplicates?: boolean
  }

  export type AnswerCreateWithoutQuizSetInput = {
    id?: string
    qNumber: number
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attempts?: AttemptCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutQuizSetInput = {
    id?: string
    qNumber: number
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attempts?: AttemptUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutQuizSetInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutQuizSetInput, AnswerUncheckedCreateWithoutQuizSetInput>
  }

  export type AnswerCreateManyQuizSetInputEnvelope = {
    data: AnswerCreateManyQuizSetInput | AnswerCreateManyQuizSetInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutQuizSetInput = {
    id?: string
    score: number
    total: number
    timeTakenMs: number
    createdAt?: Date | string
    attempts?: AttemptCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutQuizSetInput = {
    id?: string
    score: number
    total: number
    timeTakenMs: number
    createdAt?: Date | string
    attempts?: AttemptUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutQuizSetInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutQuizSetInput, SessionUncheckedCreateWithoutQuizSetInput>
  }

  export type SessionCreateManyQuizSetInputEnvelope = {
    data: SessionCreateManyQuizSetInput | SessionCreateManyQuizSetInput[]
    skipDuplicates?: boolean
  }

  export type ImageUpsertWithWhereUniqueWithoutQuizSetInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutQuizSetInput, ImageUncheckedUpdateWithoutQuizSetInput>
    create: XOR<ImageCreateWithoutQuizSetInput, ImageUncheckedCreateWithoutQuizSetInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutQuizSetInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutQuizSetInput, ImageUncheckedUpdateWithoutQuizSetInput>
  }

  export type ImageUpdateManyWithWhereWithoutQuizSetInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutQuizSetInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    id?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    publicId?: StringNullableFilter<"Image"> | string | null
    order?: IntFilter<"Image"> | number
    quizSetId?: StringFilter<"Image"> | string
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
  }

  export type AnswerUpsertWithWhereUniqueWithoutQuizSetInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutQuizSetInput, AnswerUncheckedUpdateWithoutQuizSetInput>
    create: XOR<AnswerCreateWithoutQuizSetInput, AnswerUncheckedCreateWithoutQuizSetInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutQuizSetInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutQuizSetInput, AnswerUncheckedUpdateWithoutQuizSetInput>
  }

  export type AnswerUpdateManyWithWhereWithoutQuizSetInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutQuizSetInput>
  }

  export type AnswerScalarWhereInput = {
    AND?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    OR?: AnswerScalarWhereInput[]
    NOT?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    id?: StringFilter<"Answer"> | string
    qNumber?: IntFilter<"Answer"> | number
    answer?: StringFilter<"Answer"> | string
    quizSetId?: StringFilter<"Answer"> | string
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutQuizSetInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutQuizSetInput, SessionUncheckedUpdateWithoutQuizSetInput>
    create: XOR<SessionCreateWithoutQuizSetInput, SessionUncheckedCreateWithoutQuizSetInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutQuizSetInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutQuizSetInput, SessionUncheckedUpdateWithoutQuizSetInput>
  }

  export type SessionUpdateManyWithWhereWithoutQuizSetInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutQuizSetInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    quizSetId?: StringFilter<"Session"> | string
    score?: IntFilter<"Session"> | number
    total?: IntFilter<"Session"> | number
    timeTakenMs?: IntFilter<"Session"> | number
    createdAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type QuizSetCreateWithoutImagesInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerCreateNestedManyWithoutQuizSetInput
    sessions?: SessionCreateNestedManyWithoutQuizSetInput
  }

  export type QuizSetUncheckedCreateWithoutImagesInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutQuizSetInput
    sessions?: SessionUncheckedCreateNestedManyWithoutQuizSetInput
  }

  export type QuizSetCreateOrConnectWithoutImagesInput = {
    where: QuizSetWhereUniqueInput
    create: XOR<QuizSetCreateWithoutImagesInput, QuizSetUncheckedCreateWithoutImagesInput>
  }

  export type QuizSetUpsertWithoutImagesInput = {
    update: XOR<QuizSetUpdateWithoutImagesInput, QuizSetUncheckedUpdateWithoutImagesInput>
    create: XOR<QuizSetCreateWithoutImagesInput, QuizSetUncheckedCreateWithoutImagesInput>
    where?: QuizSetWhereInput
  }

  export type QuizSetUpdateToOneWithWhereWithoutImagesInput = {
    where?: QuizSetWhereInput
    data: XOR<QuizSetUpdateWithoutImagesInput, QuizSetUncheckedUpdateWithoutImagesInput>
  }

  export type QuizSetUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUpdateManyWithoutQuizSetNestedInput
    sessions?: SessionUpdateManyWithoutQuizSetNestedInput
  }

  export type QuizSetUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutQuizSetNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutQuizSetNestedInput
  }

  export type QuizSetCreateWithoutAnswersInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutQuizSetInput
    sessions?: SessionCreateNestedManyWithoutQuizSetInput
  }

  export type QuizSetUncheckedCreateWithoutAnswersInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutQuizSetInput
    sessions?: SessionUncheckedCreateNestedManyWithoutQuizSetInput
  }

  export type QuizSetCreateOrConnectWithoutAnswersInput = {
    where: QuizSetWhereUniqueInput
    create: XOR<QuizSetCreateWithoutAnswersInput, QuizSetUncheckedCreateWithoutAnswersInput>
  }

  export type AttemptCreateWithoutAnswerInput = {
    id?: string
    qNumber: number
    userAnswer: string
    correctAnswer: string
    isCorrect: boolean
    timeTakenMs: number
    createdAt?: Date | string
    session: SessionCreateNestedOneWithoutAttemptsInput
  }

  export type AttemptUncheckedCreateWithoutAnswerInput = {
    id?: string
    sessionId: string
    qNumber: number
    userAnswer: string
    correctAnswer: string
    isCorrect: boolean
    timeTakenMs: number
    createdAt?: Date | string
  }

  export type AttemptCreateOrConnectWithoutAnswerInput = {
    where: AttemptWhereUniqueInput
    create: XOR<AttemptCreateWithoutAnswerInput, AttemptUncheckedCreateWithoutAnswerInput>
  }

  export type AttemptCreateManyAnswerInputEnvelope = {
    data: AttemptCreateManyAnswerInput | AttemptCreateManyAnswerInput[]
    skipDuplicates?: boolean
  }

  export type QuizSetUpsertWithoutAnswersInput = {
    update: XOR<QuizSetUpdateWithoutAnswersInput, QuizSetUncheckedUpdateWithoutAnswersInput>
    create: XOR<QuizSetCreateWithoutAnswersInput, QuizSetUncheckedCreateWithoutAnswersInput>
    where?: QuizSetWhereInput
  }

  export type QuizSetUpdateToOneWithWhereWithoutAnswersInput = {
    where?: QuizSetWhereInput
    data: XOR<QuizSetUpdateWithoutAnswersInput, QuizSetUncheckedUpdateWithoutAnswersInput>
  }

  export type QuizSetUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutQuizSetNestedInput
    sessions?: SessionUpdateManyWithoutQuizSetNestedInput
  }

  export type QuizSetUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutQuizSetNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutQuizSetNestedInput
  }

  export type AttemptUpsertWithWhereUniqueWithoutAnswerInput = {
    where: AttemptWhereUniqueInput
    update: XOR<AttemptUpdateWithoutAnswerInput, AttemptUncheckedUpdateWithoutAnswerInput>
    create: XOR<AttemptCreateWithoutAnswerInput, AttemptUncheckedCreateWithoutAnswerInput>
  }

  export type AttemptUpdateWithWhereUniqueWithoutAnswerInput = {
    where: AttemptWhereUniqueInput
    data: XOR<AttemptUpdateWithoutAnswerInput, AttemptUncheckedUpdateWithoutAnswerInput>
  }

  export type AttemptUpdateManyWithWhereWithoutAnswerInput = {
    where: AttemptScalarWhereInput
    data: XOR<AttemptUpdateManyMutationInput, AttemptUncheckedUpdateManyWithoutAnswerInput>
  }

  export type AttemptScalarWhereInput = {
    AND?: AttemptScalarWhereInput | AttemptScalarWhereInput[]
    OR?: AttemptScalarWhereInput[]
    NOT?: AttemptScalarWhereInput | AttemptScalarWhereInput[]
    id?: StringFilter<"Attempt"> | string
    sessionId?: StringFilter<"Attempt"> | string
    qNumber?: IntFilter<"Attempt"> | number
    userAnswer?: StringFilter<"Attempt"> | string
    correctAnswer?: StringFilter<"Attempt"> | string
    isCorrect?: BoolFilter<"Attempt"> | boolean
    timeTakenMs?: IntFilter<"Attempt"> | number
    answerId?: StringNullableFilter<"Attempt"> | string | null
    createdAt?: DateTimeFilter<"Attempt"> | Date | string
  }

  export type QuizSetCreateWithoutSessionsInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutQuizSetInput
    answers?: AnswerCreateNestedManyWithoutQuizSetInput
  }

  export type QuizSetUncheckedCreateWithoutSessionsInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutQuizSetInput
    answers?: AnswerUncheckedCreateNestedManyWithoutQuizSetInput
  }

  export type QuizSetCreateOrConnectWithoutSessionsInput = {
    where: QuizSetWhereUniqueInput
    create: XOR<QuizSetCreateWithoutSessionsInput, QuizSetUncheckedCreateWithoutSessionsInput>
  }

  export type AttemptCreateWithoutSessionInput = {
    id?: string
    qNumber: number
    userAnswer: string
    correctAnswer: string
    isCorrect: boolean
    timeTakenMs: number
    createdAt?: Date | string
    answer?: AnswerCreateNestedOneWithoutAttemptsInput
  }

  export type AttemptUncheckedCreateWithoutSessionInput = {
    id?: string
    qNumber: number
    userAnswer: string
    correctAnswer: string
    isCorrect: boolean
    timeTakenMs: number
    answerId?: string | null
    createdAt?: Date | string
  }

  export type AttemptCreateOrConnectWithoutSessionInput = {
    where: AttemptWhereUniqueInput
    create: XOR<AttemptCreateWithoutSessionInput, AttemptUncheckedCreateWithoutSessionInput>
  }

  export type AttemptCreateManySessionInputEnvelope = {
    data: AttemptCreateManySessionInput | AttemptCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type QuizSetUpsertWithoutSessionsInput = {
    update: XOR<QuizSetUpdateWithoutSessionsInput, QuizSetUncheckedUpdateWithoutSessionsInput>
    create: XOR<QuizSetCreateWithoutSessionsInput, QuizSetUncheckedCreateWithoutSessionsInput>
    where?: QuizSetWhereInput
  }

  export type QuizSetUpdateToOneWithWhereWithoutSessionsInput = {
    where?: QuizSetWhereInput
    data: XOR<QuizSetUpdateWithoutSessionsInput, QuizSetUncheckedUpdateWithoutSessionsInput>
  }

  export type QuizSetUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutQuizSetNestedInput
    answers?: AnswerUpdateManyWithoutQuizSetNestedInput
  }

  export type QuizSetUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutQuizSetNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutQuizSetNestedInput
  }

  export type AttemptUpsertWithWhereUniqueWithoutSessionInput = {
    where: AttemptWhereUniqueInput
    update: XOR<AttemptUpdateWithoutSessionInput, AttemptUncheckedUpdateWithoutSessionInput>
    create: XOR<AttemptCreateWithoutSessionInput, AttemptUncheckedCreateWithoutSessionInput>
  }

  export type AttemptUpdateWithWhereUniqueWithoutSessionInput = {
    where: AttemptWhereUniqueInput
    data: XOR<AttemptUpdateWithoutSessionInput, AttemptUncheckedUpdateWithoutSessionInput>
  }

  export type AttemptUpdateManyWithWhereWithoutSessionInput = {
    where: AttemptScalarWhereInput
    data: XOR<AttemptUpdateManyMutationInput, AttemptUncheckedUpdateManyWithoutSessionInput>
  }

  export type SessionCreateWithoutAttemptsInput = {
    id?: string
    score: number
    total: number
    timeTakenMs: number
    createdAt?: Date | string
    quizSet: QuizSetCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateWithoutAttemptsInput = {
    id?: string
    quizSetId: string
    score: number
    total: number
    timeTakenMs: number
    createdAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutAttemptsInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutAttemptsInput, SessionUncheckedCreateWithoutAttemptsInput>
  }

  export type AnswerCreateWithoutAttemptsInput = {
    id?: string
    qNumber: number
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    quizSet: QuizSetCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateWithoutAttemptsInput = {
    id?: string
    qNumber: number
    answer: string
    quizSetId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerCreateOrConnectWithoutAttemptsInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutAttemptsInput, AnswerUncheckedCreateWithoutAttemptsInput>
  }

  export type SessionUpsertWithoutAttemptsInput = {
    update: XOR<SessionUpdateWithoutAttemptsInput, SessionUncheckedUpdateWithoutAttemptsInput>
    create: XOR<SessionCreateWithoutAttemptsInput, SessionUncheckedCreateWithoutAttemptsInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutAttemptsInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutAttemptsInput, SessionUncheckedUpdateWithoutAttemptsInput>
  }

  export type SessionUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizSet?: QuizSetUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizSetId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUpsertWithoutAttemptsInput = {
    update: XOR<AnswerUpdateWithoutAttemptsInput, AnswerUncheckedUpdateWithoutAttemptsInput>
    create: XOR<AnswerCreateWithoutAttemptsInput, AnswerUncheckedCreateWithoutAttemptsInput>
    where?: AnswerWhereInput
  }

  export type AnswerUpdateToOneWithWhereWithoutAttemptsInput = {
    where?: AnswerWhereInput
    data: XOR<AnswerUpdateWithoutAttemptsInput, AnswerUncheckedUpdateWithoutAttemptsInput>
  }

  export type AnswerUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizSet?: QuizSetUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
    quizSetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnglishQuestionCreateWithoutQuizInput = {
    id?: string
    qNumber: number
    question: string
    options: JsonNullValueInput | InputJsonValue
    correctAnswer: string
    explanation?: string | null
    createdAt?: Date | string
    attempts?: EnglishAttemptCreateNestedManyWithoutQuestionInput
  }

  export type EnglishQuestionUncheckedCreateWithoutQuizInput = {
    id?: string
    qNumber: number
    question: string
    options: JsonNullValueInput | InputJsonValue
    correctAnswer: string
    explanation?: string | null
    createdAt?: Date | string
    attempts?: EnglishAttemptUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type EnglishQuestionCreateOrConnectWithoutQuizInput = {
    where: EnglishQuestionWhereUniqueInput
    create: XOR<EnglishQuestionCreateWithoutQuizInput, EnglishQuestionUncheckedCreateWithoutQuizInput>
  }

  export type EnglishQuestionCreateManyQuizInputEnvelope = {
    data: EnglishQuestionCreateManyQuizInput | EnglishQuestionCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type EnglishSessionCreateWithoutQuizInput = {
    id?: string
    score: number
    total: number
    timeTakenMs: number
    createdAt?: Date | string
    attempts?: EnglishAttemptCreateNestedManyWithoutSessionInput
  }

  export type EnglishSessionUncheckedCreateWithoutQuizInput = {
    id?: string
    score: number
    total: number
    timeTakenMs: number
    createdAt?: Date | string
    attempts?: EnglishAttemptUncheckedCreateNestedManyWithoutSessionInput
  }

  export type EnglishSessionCreateOrConnectWithoutQuizInput = {
    where: EnglishSessionWhereUniqueInput
    create: XOR<EnglishSessionCreateWithoutQuizInput, EnglishSessionUncheckedCreateWithoutQuizInput>
  }

  export type EnglishSessionCreateManyQuizInputEnvelope = {
    data: EnglishSessionCreateManyQuizInput | EnglishSessionCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type EnglishQuestionUpsertWithWhereUniqueWithoutQuizInput = {
    where: EnglishQuestionWhereUniqueInput
    update: XOR<EnglishQuestionUpdateWithoutQuizInput, EnglishQuestionUncheckedUpdateWithoutQuizInput>
    create: XOR<EnglishQuestionCreateWithoutQuizInput, EnglishQuestionUncheckedCreateWithoutQuizInput>
  }

  export type EnglishQuestionUpdateWithWhereUniqueWithoutQuizInput = {
    where: EnglishQuestionWhereUniqueInput
    data: XOR<EnglishQuestionUpdateWithoutQuizInput, EnglishQuestionUncheckedUpdateWithoutQuizInput>
  }

  export type EnglishQuestionUpdateManyWithWhereWithoutQuizInput = {
    where: EnglishQuestionScalarWhereInput
    data: XOR<EnglishQuestionUpdateManyMutationInput, EnglishQuestionUncheckedUpdateManyWithoutQuizInput>
  }

  export type EnglishQuestionScalarWhereInput = {
    AND?: EnglishQuestionScalarWhereInput | EnglishQuestionScalarWhereInput[]
    OR?: EnglishQuestionScalarWhereInput[]
    NOT?: EnglishQuestionScalarWhereInput | EnglishQuestionScalarWhereInput[]
    id?: StringFilter<"EnglishQuestion"> | string
    quizId?: StringFilter<"EnglishQuestion"> | string
    qNumber?: IntFilter<"EnglishQuestion"> | number
    question?: StringFilter<"EnglishQuestion"> | string
    options?: JsonFilter<"EnglishQuestion">
    correctAnswer?: StringFilter<"EnglishQuestion"> | string
    explanation?: StringNullableFilter<"EnglishQuestion"> | string | null
    createdAt?: DateTimeFilter<"EnglishQuestion"> | Date | string
  }

  export type EnglishSessionUpsertWithWhereUniqueWithoutQuizInput = {
    where: EnglishSessionWhereUniqueInput
    update: XOR<EnglishSessionUpdateWithoutQuizInput, EnglishSessionUncheckedUpdateWithoutQuizInput>
    create: XOR<EnglishSessionCreateWithoutQuizInput, EnglishSessionUncheckedCreateWithoutQuizInput>
  }

  export type EnglishSessionUpdateWithWhereUniqueWithoutQuizInput = {
    where: EnglishSessionWhereUniqueInput
    data: XOR<EnglishSessionUpdateWithoutQuizInput, EnglishSessionUncheckedUpdateWithoutQuizInput>
  }

  export type EnglishSessionUpdateManyWithWhereWithoutQuizInput = {
    where: EnglishSessionScalarWhereInput
    data: XOR<EnglishSessionUpdateManyMutationInput, EnglishSessionUncheckedUpdateManyWithoutQuizInput>
  }

  export type EnglishSessionScalarWhereInput = {
    AND?: EnglishSessionScalarWhereInput | EnglishSessionScalarWhereInput[]
    OR?: EnglishSessionScalarWhereInput[]
    NOT?: EnglishSessionScalarWhereInput | EnglishSessionScalarWhereInput[]
    id?: StringFilter<"EnglishSession"> | string
    quizId?: StringFilter<"EnglishSession"> | string
    score?: IntFilter<"EnglishSession"> | number
    total?: IntFilter<"EnglishSession"> | number
    timeTakenMs?: IntFilter<"EnglishSession"> | number
    createdAt?: DateTimeFilter<"EnglishSession"> | Date | string
  }

  export type EnglishQuizCreateWithoutQuestionsInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: EnglishSessionCreateNestedManyWithoutQuizInput
  }

  export type EnglishQuizUncheckedCreateWithoutQuestionsInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: EnglishSessionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type EnglishQuizCreateOrConnectWithoutQuestionsInput = {
    where: EnglishQuizWhereUniqueInput
    create: XOR<EnglishQuizCreateWithoutQuestionsInput, EnglishQuizUncheckedCreateWithoutQuestionsInput>
  }

  export type EnglishAttemptCreateWithoutQuestionInput = {
    id?: string
    qNumber: number
    userAnswer: string
    correctAnswer: string
    isCorrect: boolean
    timeTakenMs: number
    createdAt?: Date | string
    session: EnglishSessionCreateNestedOneWithoutAttemptsInput
  }

  export type EnglishAttemptUncheckedCreateWithoutQuestionInput = {
    id?: string
    sessionId: string
    qNumber: number
    userAnswer: string
    correctAnswer: string
    isCorrect: boolean
    timeTakenMs: number
    createdAt?: Date | string
  }

  export type EnglishAttemptCreateOrConnectWithoutQuestionInput = {
    where: EnglishAttemptWhereUniqueInput
    create: XOR<EnglishAttemptCreateWithoutQuestionInput, EnglishAttemptUncheckedCreateWithoutQuestionInput>
  }

  export type EnglishAttemptCreateManyQuestionInputEnvelope = {
    data: EnglishAttemptCreateManyQuestionInput | EnglishAttemptCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type EnglishQuizUpsertWithoutQuestionsInput = {
    update: XOR<EnglishQuizUpdateWithoutQuestionsInput, EnglishQuizUncheckedUpdateWithoutQuestionsInput>
    create: XOR<EnglishQuizCreateWithoutQuestionsInput, EnglishQuizUncheckedCreateWithoutQuestionsInput>
    where?: EnglishQuizWhereInput
  }

  export type EnglishQuizUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: EnglishQuizWhereInput
    data: XOR<EnglishQuizUpdateWithoutQuestionsInput, EnglishQuizUncheckedUpdateWithoutQuestionsInput>
  }

  export type EnglishQuizUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: EnglishSessionUpdateManyWithoutQuizNestedInput
  }

  export type EnglishQuizUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: EnglishSessionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type EnglishAttemptUpsertWithWhereUniqueWithoutQuestionInput = {
    where: EnglishAttemptWhereUniqueInput
    update: XOR<EnglishAttemptUpdateWithoutQuestionInput, EnglishAttemptUncheckedUpdateWithoutQuestionInput>
    create: XOR<EnglishAttemptCreateWithoutQuestionInput, EnglishAttemptUncheckedCreateWithoutQuestionInput>
  }

  export type EnglishAttemptUpdateWithWhereUniqueWithoutQuestionInput = {
    where: EnglishAttemptWhereUniqueInput
    data: XOR<EnglishAttemptUpdateWithoutQuestionInput, EnglishAttemptUncheckedUpdateWithoutQuestionInput>
  }

  export type EnglishAttemptUpdateManyWithWhereWithoutQuestionInput = {
    where: EnglishAttemptScalarWhereInput
    data: XOR<EnglishAttemptUpdateManyMutationInput, EnglishAttemptUncheckedUpdateManyWithoutQuestionInput>
  }

  export type EnglishAttemptScalarWhereInput = {
    AND?: EnglishAttemptScalarWhereInput | EnglishAttemptScalarWhereInput[]
    OR?: EnglishAttemptScalarWhereInput[]
    NOT?: EnglishAttemptScalarWhereInput | EnglishAttemptScalarWhereInput[]
    id?: StringFilter<"EnglishAttempt"> | string
    sessionId?: StringFilter<"EnglishAttempt"> | string
    questionId?: StringNullableFilter<"EnglishAttempt"> | string | null
    qNumber?: IntFilter<"EnglishAttempt"> | number
    userAnswer?: StringFilter<"EnglishAttempt"> | string
    correctAnswer?: StringFilter<"EnglishAttempt"> | string
    isCorrect?: BoolFilter<"EnglishAttempt"> | boolean
    timeTakenMs?: IntFilter<"EnglishAttempt"> | number
    createdAt?: DateTimeFilter<"EnglishAttempt"> | Date | string
  }

  export type EnglishQuizCreateWithoutSessionsInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: EnglishQuestionCreateNestedManyWithoutQuizInput
  }

  export type EnglishQuizUncheckedCreateWithoutSessionsInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: EnglishQuestionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type EnglishQuizCreateOrConnectWithoutSessionsInput = {
    where: EnglishQuizWhereUniqueInput
    create: XOR<EnglishQuizCreateWithoutSessionsInput, EnglishQuizUncheckedCreateWithoutSessionsInput>
  }

  export type EnglishAttemptCreateWithoutSessionInput = {
    id?: string
    qNumber: number
    userAnswer: string
    correctAnswer: string
    isCorrect: boolean
    timeTakenMs: number
    createdAt?: Date | string
    question?: EnglishQuestionCreateNestedOneWithoutAttemptsInput
  }

  export type EnglishAttemptUncheckedCreateWithoutSessionInput = {
    id?: string
    questionId?: string | null
    qNumber: number
    userAnswer: string
    correctAnswer: string
    isCorrect: boolean
    timeTakenMs: number
    createdAt?: Date | string
  }

  export type EnglishAttemptCreateOrConnectWithoutSessionInput = {
    where: EnglishAttemptWhereUniqueInput
    create: XOR<EnglishAttemptCreateWithoutSessionInput, EnglishAttemptUncheckedCreateWithoutSessionInput>
  }

  export type EnglishAttemptCreateManySessionInputEnvelope = {
    data: EnglishAttemptCreateManySessionInput | EnglishAttemptCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type EnglishQuizUpsertWithoutSessionsInput = {
    update: XOR<EnglishQuizUpdateWithoutSessionsInput, EnglishQuizUncheckedUpdateWithoutSessionsInput>
    create: XOR<EnglishQuizCreateWithoutSessionsInput, EnglishQuizUncheckedCreateWithoutSessionsInput>
    where?: EnglishQuizWhereInput
  }

  export type EnglishQuizUpdateToOneWithWhereWithoutSessionsInput = {
    where?: EnglishQuizWhereInput
    data: XOR<EnglishQuizUpdateWithoutSessionsInput, EnglishQuizUncheckedUpdateWithoutSessionsInput>
  }

  export type EnglishQuizUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: EnglishQuestionUpdateManyWithoutQuizNestedInput
  }

  export type EnglishQuizUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: EnglishQuestionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type EnglishAttemptUpsertWithWhereUniqueWithoutSessionInput = {
    where: EnglishAttemptWhereUniqueInput
    update: XOR<EnglishAttemptUpdateWithoutSessionInput, EnglishAttemptUncheckedUpdateWithoutSessionInput>
    create: XOR<EnglishAttemptCreateWithoutSessionInput, EnglishAttemptUncheckedCreateWithoutSessionInput>
  }

  export type EnglishAttemptUpdateWithWhereUniqueWithoutSessionInput = {
    where: EnglishAttemptWhereUniqueInput
    data: XOR<EnglishAttemptUpdateWithoutSessionInput, EnglishAttemptUncheckedUpdateWithoutSessionInput>
  }

  export type EnglishAttemptUpdateManyWithWhereWithoutSessionInput = {
    where: EnglishAttemptScalarWhereInput
    data: XOR<EnglishAttemptUpdateManyMutationInput, EnglishAttemptUncheckedUpdateManyWithoutSessionInput>
  }

  export type EnglishSessionCreateWithoutAttemptsInput = {
    id?: string
    score: number
    total: number
    timeTakenMs: number
    createdAt?: Date | string
    quiz: EnglishQuizCreateNestedOneWithoutSessionsInput
  }

  export type EnglishSessionUncheckedCreateWithoutAttemptsInput = {
    id?: string
    quizId: string
    score: number
    total: number
    timeTakenMs: number
    createdAt?: Date | string
  }

  export type EnglishSessionCreateOrConnectWithoutAttemptsInput = {
    where: EnglishSessionWhereUniqueInput
    create: XOR<EnglishSessionCreateWithoutAttemptsInput, EnglishSessionUncheckedCreateWithoutAttemptsInput>
  }

  export type EnglishQuestionCreateWithoutAttemptsInput = {
    id?: string
    qNumber: number
    question: string
    options: JsonNullValueInput | InputJsonValue
    correctAnswer: string
    explanation?: string | null
    createdAt?: Date | string
    quiz: EnglishQuizCreateNestedOneWithoutQuestionsInput
  }

  export type EnglishQuestionUncheckedCreateWithoutAttemptsInput = {
    id?: string
    quizId: string
    qNumber: number
    question: string
    options: JsonNullValueInput | InputJsonValue
    correctAnswer: string
    explanation?: string | null
    createdAt?: Date | string
  }

  export type EnglishQuestionCreateOrConnectWithoutAttemptsInput = {
    where: EnglishQuestionWhereUniqueInput
    create: XOR<EnglishQuestionCreateWithoutAttemptsInput, EnglishQuestionUncheckedCreateWithoutAttemptsInput>
  }

  export type EnglishSessionUpsertWithoutAttemptsInput = {
    update: XOR<EnglishSessionUpdateWithoutAttemptsInput, EnglishSessionUncheckedUpdateWithoutAttemptsInput>
    create: XOR<EnglishSessionCreateWithoutAttemptsInput, EnglishSessionUncheckedCreateWithoutAttemptsInput>
    where?: EnglishSessionWhereInput
  }

  export type EnglishSessionUpdateToOneWithWhereWithoutAttemptsInput = {
    where?: EnglishSessionWhereInput
    data: XOR<EnglishSessionUpdateWithoutAttemptsInput, EnglishSessionUncheckedUpdateWithoutAttemptsInput>
  }

  export type EnglishSessionUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: EnglishQuizUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type EnglishSessionUncheckedUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnglishQuestionUpsertWithoutAttemptsInput = {
    update: XOR<EnglishQuestionUpdateWithoutAttemptsInput, EnglishQuestionUncheckedUpdateWithoutAttemptsInput>
    create: XOR<EnglishQuestionCreateWithoutAttemptsInput, EnglishQuestionUncheckedCreateWithoutAttemptsInput>
    where?: EnglishQuestionWhereInput
  }

  export type EnglishQuestionUpdateToOneWithWhereWithoutAttemptsInput = {
    where?: EnglishQuestionWhereInput
    data: XOR<EnglishQuestionUpdateWithoutAttemptsInput, EnglishQuestionUncheckedUpdateWithoutAttemptsInput>
  }

  export type EnglishQuestionUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: EnglishQuizUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type EnglishQuestionUncheckedUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateManyQuizSetInput = {
    id?: string
    url: string
    publicId?: string | null
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnswerCreateManyQuizSetInput = {
    id?: string
    qNumber: number
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyQuizSetInput = {
    id?: string
    score: number
    total: number
    timeTakenMs: number
    createdAt?: Date | string
  }

  export type ImageUpdateWithoutQuizSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateWithoutQuizSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyWithoutQuizSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUpdateWithoutQuizSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: AttemptUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutQuizSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: AttemptUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateManyWithoutQuizSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutQuizSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: AttemptUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutQuizSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: AttemptUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateManyWithoutQuizSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttemptCreateManyAnswerInput = {
    id?: string
    sessionId: string
    qNumber: number
    userAnswer: string
    correctAnswer: string
    isCorrect: boolean
    timeTakenMs: number
    createdAt?: Date | string
  }

  export type AttemptUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    userAnswer?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateOneRequiredWithoutAttemptsNestedInput
  }

  export type AttemptUncheckedUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    userAnswer?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttemptUncheckedUpdateManyWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    userAnswer?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttemptCreateManySessionInput = {
    id?: string
    qNumber: number
    userAnswer: string
    correctAnswer: string
    isCorrect: boolean
    timeTakenMs: number
    answerId?: string | null
    createdAt?: Date | string
  }

  export type AttemptUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    userAnswer?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answer?: AnswerUpdateOneWithoutAttemptsNestedInput
  }

  export type AttemptUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    userAnswer?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    answerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttemptUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    userAnswer?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    answerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnglishQuestionCreateManyQuizInput = {
    id?: string
    qNumber: number
    question: string
    options: JsonNullValueInput | InputJsonValue
    correctAnswer: string
    explanation?: string | null
    createdAt?: Date | string
  }

  export type EnglishSessionCreateManyQuizInput = {
    id?: string
    score: number
    total: number
    timeTakenMs: number
    createdAt?: Date | string
  }

  export type EnglishQuestionUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: EnglishAttemptUpdateManyWithoutQuestionNestedInput
  }

  export type EnglishQuestionUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: EnglishAttemptUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type EnglishQuestionUncheckedUpdateManyWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    options?: JsonNullValueInput | InputJsonValue
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnglishSessionUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: EnglishAttemptUpdateManyWithoutSessionNestedInput
  }

  export type EnglishSessionUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: EnglishAttemptUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type EnglishSessionUncheckedUpdateManyWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnglishAttemptCreateManyQuestionInput = {
    id?: string
    sessionId: string
    qNumber: number
    userAnswer: string
    correctAnswer: string
    isCorrect: boolean
    timeTakenMs: number
    createdAt?: Date | string
  }

  export type EnglishAttemptUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    userAnswer?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: EnglishSessionUpdateOneRequiredWithoutAttemptsNestedInput
  }

  export type EnglishAttemptUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    userAnswer?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnglishAttemptUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    userAnswer?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnglishAttemptCreateManySessionInput = {
    id?: string
    questionId?: string | null
    qNumber: number
    userAnswer: string
    correctAnswer: string
    isCorrect: boolean
    timeTakenMs: number
    createdAt?: Date | string
  }

  export type EnglishAttemptUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    qNumber?: IntFieldUpdateOperationsInput | number
    userAnswer?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: EnglishQuestionUpdateOneWithoutAttemptsNestedInput
  }

  export type EnglishAttemptUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    qNumber?: IntFieldUpdateOperationsInput | number
    userAnswer?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeTakenMs?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnglishAttemptUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    qNumber?: IntFieldUpdateOperationsInput | number
    userAnswer?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeTakenMs?: IntFieldUpdateOperationsInput | number
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