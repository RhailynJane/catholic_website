/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as admin from "../admin.js";
import type * as articles from "../articles.js";
import type * as evangelium from "../evangelium.js";
import type * as formulas from "../formulas.js";
import type * as prayers from "../prayers.js";
import type * as references from "../references.js";
import type * as saints from "../saints.js";
import type * as seed from "../seed.js";
import type * as seed2 from "../seed2.js";
import type * as verses from "../verses.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  admin: typeof admin;
  articles: typeof articles;
  evangelium: typeof evangelium;
  formulas: typeof formulas;
  prayers: typeof prayers;
  references: typeof references;
  saints: typeof saints;
  seed: typeof seed;
  seed2: typeof seed2;
  verses: typeof verses;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
