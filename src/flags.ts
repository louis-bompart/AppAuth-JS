/*
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* Global flags that control the behavior of App Auth JS. */
export class Flags {
  /* Logging turned on ? */
  private static readonly DEFAULT_IS_LOG = true;
  private static _IS_LOG: boolean;
  public static get IS_LOG(): boolean {
    return this._IS_LOG ?? Flags.DEFAULT_IS_LOG;
  }

  public static set IS_LOG(v: boolean) {
    this._IS_LOG = v;
  }

  /* Profiling turned on ? */
  private static readonly DEFAULT_IS_PROFILE = false;
  private static _IS_PROFILE: boolean;
  public static get IS_PROFILE(): boolean {
    return this._IS_PROFILE ?? Flags.DEFAULT_IS_PROFILE;
  }

  public static set IS_PROFILE(v: boolean) {
    this._IS_PROFILE = v;
  }
}
