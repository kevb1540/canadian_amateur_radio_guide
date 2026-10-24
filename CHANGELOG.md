# Version 2.3.12 — 24 October 2026

- Added Delete User on the selected user’s pre-login password page and in
  Profile settings. No password is required to delete a user.
- Added a confirmation identifying the selected user and the data being
  removed, with Cancel and Android Back retaining the profile.
- Deletion removes only that profile from the local vault and clears its
  signed-in key and study state. Other users and exported backups remain.
  Pending saves cannot recreate it, and failed writes leave it intact.
- Retained all 2.3.11 features and original copyright. Version code is 242;
  the signing identity is unchanged. All 163 automated checks passed.
  Physical Android installation remains untested.

# Version 2.3.11 — 17 October 2026

- Added On-air terms & phrases to Glossary & definitions and Mode definitions:
  61 common expressions in six groups, with meanings, examples, usage notes,
  and question/statement forms for Q codes. Added phonetics and sample contacts.
- Made all on-air terms searchable in the full glossary, reference desk and
  quick lookup. The On-air language filter includes all 61, including existing
  terms; the combined glossary contains 223 unique definitions.
- Preserved existing definitions, course content, question bank, profiles,
  coloured highlights, formula lessons and chapter test achievements.
- Built a compatible signed update, version code 241. See VALIDATION.md.

# Version 2.3.10 — 17 October 2026

- Made all 16 formula cards open dedicated offline teaching pages with definitions,
  variables and units, named symbols, rearrangements, examples, tips, related
  formulas and links to the existing labs. Back restores the formula list position.
- Added Highlighter Colour alongside Highlight in the Android lesson selection
  menu and browser selection toolbar. The picker offers Yellow, Green, Cyan,
  Blue, Purple, Pink, Orange and Red, with a saved preference per user.
- Stored each mark’s colour in encrypted progress and .carprog backups. Kept
  older yellow marks compatible, preserved surrounding colours when selections
  overlap, and allowed selected passages to be recoloured without duplicates.
- Added PASSED and bold gold PASSED WITH HONORS beside chapter names, using
  the best submitted chapter test at 70% and 80% respectively. Existing history
  counts; study mode, unfinished tests and full-exam results do not award labels.
- Retained all prior features, copyright and the compatible signing identity.
  Increased the Android version code to 240. See VALIDATION.md for checks.

# Version 2.3.9 — 17 October 2026

- Built a fresh signed APK update with version code 239.
- Retained lesson highlights, encrypted user backups, the built-in recovery
  address and all other 2.3.8 functionality.
- Re-ran all 128 automated checks and verified update identity, signatures,
  alignment and bundled assets. Physical Android installation remains untested.

# Version 2.3.8 — 17 October 2026

- Added Highlight to the Android lesson text-selection menu. Selected text is
  yellow with dark lettering; the browser preview has a selection toolbar.
- Saved lesson highlights per user and included them in both progress and User
  .carprog backups. Added validation, legacy defaults and deduplicating merges.
- Kept marks anchored across navigation, reopen and answer-visibility changes,
  with quote checking, overlap handling and failed-save rollback.
- Built in https://radio-recovery.kevb1540.workers.dev and removed editable
  recovery-address fields. Email verification remains required per user.
- Preserved existing features, profiles, passwords, course content, backup
  naming and signing identity. Version code is 238; all 128 checks passed.
  Physical Android long-press and live recovery email delivery are untested.

# Version 2.3.7 — 17 October 2026

- Named backups <username>_<YYYY-MM-DD>.carprog using the backed-up user's name
  and the device's local calendar date, including exports before login and
  pre-update recovery exports. Safe spaces and Unicode names are preserved.
- Routed Android progress exports through the same named-backup path as User
  exports. Kept backup content, formatting, encryption and .carprog-only imports.
- Confirmed full User backups restore the avatar, optional call sign, account
  details, password protection and every populated study-progress field;
  clarified the complete User backup option in the app and README.
- Retained all existing study, profile and recovery features; increased the
  signed update version code to 237. Passed 116 checks and verified signatures,
  ZIP alignment and assets. Physical Android installation remains untested.

# Version 2.3.6 — 17 October 2026

- Changed all exported backup filenames to .carprog while preserving the
  existing file contents, JSON formatting and encrypted user-backup format.
- Restricted user and progress imports to .carprog only. Browser and Android
  paths reject other extensions before reading contents; invalid selections
  clear a previously selected user backup.
- Retained the lesson Show Answer / Hide Answer controls and optional encrypted
  profile call sign, together with existing passwords, avatars, progress and
  email recovery setup. Increased the signed update version code to 236.
- Passed all 116 checks, including real .carprog download/restore and wrong-
  extension rejection. Verified APK identity, signatures, alignment and assets.
  Physical Android installation and document pickers remain untested.

# Version 2.3.5 — 17 October 2026

- Added Show Answer / Hide Answer boxes beneath each question in Apply this
  lesson to the exam. Every answer and its worked explanation starts hidden;
  each control works independently and supports keyboard activation.
- Added an optional Call sign field in Profile Settings. Users can save, edit
  or remove it. It appears beneath their name while studying and stays private
  in the encrypted profile and user backup.
- Preserved existing profiles, passwords, study progress, course content,
  recovery setup and branding; increased the update version code to 235.
- Passed all 114 automated checks and verified signing, version increase,
  unchanged native DEX, bundled assets and ZIP alignment. Physical Android
  installation remains untested.

# Version 2.3.4 — 17 October 2026

- Changed the icon's bottom-right maple leaf to red, preserving its antenna design.
- Replaced the header's old symbol with a bundled copy of the same updated icon.
- Added PNG content typing in the native asset loader, with no text encoding for
  binary images, so the logo loads offline inside the installed app.
- Preserved profile warnings, progress formats, package and signing identity;
  increased the version code to 234.
- Passed all 109 automated checks; header/native icon pixels, signing and ZIP
  alignment verified. Physical Android installation remains untested.

# Version 2.3.3 — 17 October 2026

- Added a bold red Select an Avatar Image prompt in Profile settings when the
  user has no chosen image. It disappears after an image is selected and saved.
- Enlarged the red Profile exclamation to 24 px with heavy bold weight; it keeps
  the existing requirement for verified recovery email and an avatar image.
- Retained the package, signing identity, native implementation, profile format,
  study content and saved progress; increased the version code to 233.
- Passed all 109 automated checks, with expanded avatar-prompt assertions and
  enlarged badge styling checks; signing and ZIP alignment verified. Physical
  Android installation remains untested.

# Version 2.3.2 — 17 October 2026

- Highlighted incomplete email recovery in Profile settings with a bold red
  heading, a red exclamation mark to its left, and red disabled-recovery text.
  Verification restores the previous heading and status appearance.
- Added a red exclamation mark beside Profile until the signed-in user has
  both verified recovery email and a chosen avatar image. Default initials
  remain incomplete; warnings update per user and on return from settings.
- Preserved the profile format, native implementation, study data and update
  signing identity; increased the APK version code to 232.
- Kept placeholder banner avatars round and passed all 109 automated checks,
  including per-user warning state and persistence checks. Signing and ZIP
  alignment verified; physical Android installation remains untested.

# Version 2.3.1 — 16 October 2026

- Built a new update installer with version code 231 and the same package and
  development signing identity as 2.3.0.
- Clarified the app's email recovery address field: use the deployed HTTPS
  origin without /health or /v1; email credentials and master keys stay on the
  recovery service. The Cloudflare endpoint remains user-configurable.
- Retained local user profiles, encrypted progress and user transfers, avatars,
  email reset integration, all lessons and tests, glossary, notes and credits.
- Included the Cloudflare/D1/Brevo deployment files and guide in the source.
- Passed all 107 automated checks; signing, version increase, bundled assets
  and ZIP alignment verified. Physical Android installation remains untested.

# Cloudflare hosting addition — 16 October 2026

- Added a standalone Cloudflare module Worker, persistent D1 schema and Brevo
  transactional email integration, compatible with APK 2.3.0; no APK changes.
- Added dashboard setup, approved-recipient settings, a browser-local master-key
  generator, database request/mail budgets and atomic code replacement/use.
- Preserved the Python/SMTP service and its original self-hosting instructions.
- Passed 17 local Worker checks with SQLite and intercepted Brevo HTTP,
  including the existing app profile module's recovery flow. Live deployment
  and email delivery require setup in Kevin's accounts.

# Version 2.3.0 — 16 October 2026

- Added a startup user list with avatars and an Add New User form requiring a
  profile name, password/confirmation and email. Each user's password page shows
  the selected identity; study pages identify the signed-in user and offer logout.
- Encrypted each user's progress separately; migrated existing shared progress
  into the first created profile and kept all other users independent.
- Added avatar selection from files and Android camera capture, plus avatar and
  password changes in Profile settings.
- Added password-authenticated encrypted user export/import before login,
  including credentials, avatar and progress. Duplicate imports use a named copy.
- Included verified-email password reset integration and a self-hosted SMTP
  recovery service. Email delivery needs a configured HTTPS service and SMTP
  account; it is not preconfigured. Passwords are never emailed or stored in
  plaintext. Added Email_Recovery_Setup.md.
- Kept pre-update snapshot export scoped to the current user and preserved
  the legacy progress JSON option for compatibility/emergency recovery.
- Retained the package/signing identity, official content, lessons, glossary,
  titled notes, tests, scores and labs. Added Internet permission for recovery;
  camera/files use system activities without broad storage or camera permission.
- Passed 89 automated checks. Actual Android installation, camera/pickers and
  live SMTP delivery remain untested.

# Version 2.2.1 — 16 October 2026

- Routed the attribution footer to a dedicated source-owner credits page.
- Identified the official question bank as Government of Canada (Crown
  copyright) material published by ISED, with original bank and rights links.
- Credited every government and manufacturer reference, including the IC-T10
  source and the RT95 manual's separate manufacturer and mirror host.
- Distinguished Kevin's original app and teaching material from source rights.
- Preserved the questions, lessons, glossary overlay, notes and saved progress;
  retained the package and signing identity with version code 221.
- Passed 26 core and 35 browser checks; native installation remains untested.

# Version 2.2.0 — 15 October 2026

- Replaced the brief readings with 100 detailed topic lessons: over 15,000
  words of concept teaching, plus tables, worked examples and all tested facts.
- Every official question is mapped to an explicit contextual teaching example.
- Review feedback links the exact topic; worked calculation and false-statement
  feedback explain the actual question rather than a generic chapter reminder.
- Marked chapter 12 as cumulative and linked every prerequisite topic. Removed
  the stale claim about an old 124-question question pool.
- Added a persistent glossary overlay on every screen; lookup preserves tests,
  page position, antenna settings and unfinished note drafts.
- Kept official questions, scoring, data storage, package and signing identity.
- 26 core and 34 browser checks passed; native installation remains untested.

# Version 2.1.0 — 14 October 2026

- Added Personal Notes to Home and the main navigation.
- Each saved note requires a title; notes support editing, search and deletion
  with confirmation.
- Unfinished drafts save separately and resume after reopening the app.
- Progress backups and merge imports now include personal notes and drafts.
- Existing version-2.0.0 scores and chapter notes continue to load.
- Kept the package ID and signing key; increased the version code to 210.
- Fixed direct-build version overrides to update the actual APK manifest.
- Passed 20 core and 24 browser checks; APK signatures and alignment verified.
  Native Android installation still requires a phone check.
