// ORIGINALLY FROM CLOUDFLARE WRANGLER:
// https://github.com/cloudflare/wrangler2/blob/main/.github/changeset-version.js
const { execSync } = require("node:child_process");

// This script is used by the `release.yml` workflow to update the version of the packages being released.
// The standard step is only to run `changeset version` but this does not update the pnpm-lock.yaml file.
// So we also run `pnpm install`, which does this update.
// This is a workaround until this is handled automatically by `changeset version`.
// See https://github.com/changesets/changesets/issues/421.
execSync("pnpm changeset version");

// HACK: pnpm 8.x does not support node 14 yet.
// See:https://pnpm.io/installation#compatibility
if (process.version.startsWith("v14")) {
  throw new Error(
    "You have updated node version and so you must now remove the hack below!"
  );
}
execSync("pnpm install --lockfile-only");
