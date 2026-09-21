---
name: deploy-vaundy
description: Publish the Vaundy guide by synchronizing its version, validating the build, creating a scoped release commit, pushing it, and reporting the commit link.
---

# Deploy Vaundy

Use this skill when the user explicitly asks to publish, release, or deploy the current Vaundy guide. It is scoped to this repository and does not create tags, GitHub releases, or other deployment artifacts unless the user separately requests them.

## Release contract

Publishing a version always means:

1. Bump the next patch version unless the user specifies a different semantic version. Keep the version synchronized in:
   - `package.json` (`X.Y.Z`)
   - `package-lock.json` (the root package entries)
   - `src/main.js` (`BUILD = "vX.Y.Z"`)
   - `sw.js` (`CACHE_VERSION = "vX.Y.Z"`)
   - the version example in `README.md`, when present
2. Run `npm run build` and `git diff --check`. Treat a failed build or whitespace check as a release blocker.
3. Stage only the intended current release changes and create one scoped Conventional Commit, normally:

   ```text
   chore(release): publish guide vX.Y.Z
   ```

4. Push the commit to the configured upstream branch.
5. Verify the remote branch points to the new full commit SHA. Report the released version, commit subject, and a clickable commit URL derived from the verified remote URL and full SHA.

## Git safety

- Inspect `git status`, the current branch, and remotes before changing files.
- Preserve existing user changes; do not reset, checkout, clean, or overwrite unrelated work.
- If the worktree contains changes whose release scope is unclear, stop and ask which changes belong in the release instead of staging everything blindly.
- If there is no usable version source, upstream branch, or remote URL, stop and explain the missing prerequisite. Do not claim that publishing succeeded.
- Do not claim a push succeeded until the remote verification confirms the commit.
