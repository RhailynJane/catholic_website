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
import type * as checkSaints from "../checkSaints.js";
import type * as checkSaints2 from "../checkSaints2.js";
import type * as checkSaints3 from "../checkSaints3.js";
import type * as checkSaints4 from "../checkSaints4.js";
import type * as checkSaints5 from "../checkSaints5.js";
import type * as evangelium from "../evangelium.js";
import type * as formulas from "../formulas.js";
import type * as getAllSaints from "../getAllSaints.js";
import type * as prayers from "../prayers.js";
import type * as references from "../references.js";
import type * as saints from "../saints.js";
import type * as seed from "../seed.js";
import type * as seed10 from "../seed10.js";
import type * as seed11 from "../seed11.js";
import type * as seed12 from "../seed12.js";
import type * as seed13 from "../seed13.js";
import type * as seed14 from "../seed14.js";
import type * as seed15 from "../seed15.js";
import type * as seed16 from "../seed16.js";
import type * as seed17 from "../seed17.js";
import type * as seed18 from "../seed18.js";
import type * as seed2 from "../seed2.js";
import type * as seed3 from "../seed3.js";
import type * as seed4 from "../seed4.js";
import type * as seed5 from "../seed5.js";
import type * as seed6 from "../seed6.js";
import type * as seed7 from "../seed7.js";
import type * as seed8 from "../seed8.js";
import type * as seed9 from "../seed9.js";
import type * as verses from "../verses.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  admin: typeof admin;
  articles: typeof articles;
  checkSaints: typeof checkSaints;
  checkSaints2: typeof checkSaints2;
  checkSaints3: typeof checkSaints3;
  checkSaints4: typeof checkSaints4;
  checkSaints5: typeof checkSaints5;
  evangelium: typeof evangelium;
  formulas: typeof formulas;
  getAllSaints: typeof getAllSaints;
  prayers: typeof prayers;
  references: typeof references;
  saints: typeof saints;
  seed: typeof seed;
  seed10: typeof seed10;
  seed11: typeof seed11;
  seed12: typeof seed12;
  seed13: typeof seed13;
  seed14: typeof seed14;
  seed15: typeof seed15;
  seed16: typeof seed16;
  seed17: typeof seed17;
  seed18: typeof seed18;
  seed2: typeof seed2;
  seed3: typeof seed3;
  seed4: typeof seed4;
  seed5: typeof seed5;
  seed6: typeof seed6;
  seed7: typeof seed7;
  seed8: typeof seed8;
  seed9: typeof seed9;
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
