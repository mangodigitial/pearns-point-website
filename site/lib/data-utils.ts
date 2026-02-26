/**
 * Deep-merge CMS data over hardcoded defaults.
 * - Objects merge recursively
 * - Arrays replace entirely (CMS array wins)
 * - null / undefined values in override are skipped (default preserved)
 */
export function deepMerge<T extends Record<string, unknown>>(
  base: T,
  override?: Record<string, unknown> | null
): T {
  if (!override) return base

  const result = { ...base } as Record<string, unknown>

  for (const key of Object.keys(override)) {
    const overrideVal = override[key]

    // Skip null/undefined — keep the default
    if (overrideVal === null || overrideVal === undefined) continue

    const baseVal = result[key]

    // If both are plain objects, recurse
    if (
      typeof baseVal === 'object' &&
      baseVal !== null &&
      !Array.isArray(baseVal) &&
      typeof overrideVal === 'object' &&
      overrideVal !== null &&
      !Array.isArray(overrideVal)
    ) {
      result[key] = deepMerge(
        baseVal as Record<string, unknown>,
        overrideVal as Record<string, unknown>
      )
    } else {
      // Arrays replace entirely; primitives replace
      result[key] = overrideVal
    }
  }

  return result as T
}
