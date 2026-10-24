# Validation for version 2.3.12

**163 automated checks passed on 24 October 2026. All suites ran for this release.**

| Suite | Passed |
| --- | ---: |
| Course, quiz, progress and RF core | 32 |
| Profile encryption, transfer and deletion | 15 |
| Native / Web Crypto compatibility | 1 |
| Python recovery service | 7 |
| Study flows and chapter badges | 40 |
| Profile and email recovery browser flows | 15 |
| Password-free deletion browser flows | 6 |
| Eight-colour highlights and backups | 12 |
| Formula detail pages | 8 |
| On-air terminology and glossary integration | 9 |
| Cloudflare Worker recovery | 17 |
| Cloudflare setup UI | 1 |

- Deleting a user requires no password, before login or in Profile settings.
  The confirmation identifies the selected user and contains no password input.
  Cancel and Android Back retain the exact saved vault.
- Deleting a locked user preserves the other user’s full encrypted record and
  work. The user remains deleted after reload. An exported User backup still
  restores that profile, including its avatar, call sign, highlights and work.
- Deleting the signed-in user flushes pending writes, removes its vault entry,
  zeroes the in-memory key and clears private study state. Lifecycle saves
  cannot recreate it. Deleting the last user still permits new profiles without
  reclaiming previously migrated/deleted progress.
- A simulated storage failure leaves both the saved vault and signed-in session
  intact; cancellation and retry work. Invalid or repeated deletions fail safely.
- Inspected the 393 px confirmation screenshot. Layout checks cover 320/393 px
  phones, landscape 852×393 and tablet 800×1280 without horizontal overflow.
- Existing profiles, backups, recovery, highlights, tests, notes, glossary,
  formulas and on-air terms passed regression. Question data and teaching
  content are byte-identical to the supplied 2.3.11 source.
- Physical Android installation, native menus, camera/document providers and
  live external email delivery remain untested. Local recovery fixtures were
  used. Package identity, signatures, alignment and assets are checked during
  packaging; see apk-update-verification.json for the resulting evidence.

Earlier release records follow as history.

# Validation for version 2.3.11

**154 automated checks passed on 17 October 2026. All suites ran for this release.**

| Suite | Passed |
| --- | ---: |
| Course, quiz, progress and RF core | 32 |
| Profile encryption, isolation and transfer | 12 |
| Native / Web Crypto compatibility | 1 |
| Python recovery service | 7 |
| Study flows and chapter badges | 40 |
| Profile and email recovery browser flows | 15 |
| Eight-colour highlights and backups | 12 |
| Formula detail pages | 8 |
| On-air terminology and glossary integration | 9 |
| Cloudflare Worker recovery | 17 |
| Cloudflare setup UI | 1 |

- Added 61 on-air terms in six groups, with meanings, examples and usage notes.
  Q-code entries include question/statement forms. Spelling and conversation
  references are included offline, with optional external publisher links.
- The merged glossary has 223 unique entries. Existing definitions, categories,
  nonempty examples, references and related-lab links are retained. The On-air
  language category includes all 61 entries, including 20 existing terms.
- Both Glossary & definitions and Mode definitions open the new section.
  Search, topic filters, empty results, Android Back and unsigned reference
  access were exercised. Every on-air term is available in quick lookup.
- Quick lookup and reference browsing retain the current test, answer, flags,
  scores, notes and highlighter preference. No progress schema changes.
- Checked phone widths 320/393, landscape 852×393 and tablet 800×1280, including
  long entries, all topics expanded, and the 26-word spelling table. Inspected
  phone screenshots and kept search ahead of optional operating tips.
- Verified all current assets in APK 2.3.11 (241), unchanged native code, existing
  package/signing identity, ZIP alignment and signature compatibility with
  2.3.10 (240). Official questions and authored course lessons are unchanged.
- Physical Android installation, device menus, camera/document pickers, and
  live external email delivery remain untested. Local recovery fixtures were
  used. Previously documented native long-press limits still apply.

See validation-summary.json, apk-update-verification.json and the UI reports.
Earlier release records follow as history.

# Validation for version 2.3.10

**145 automated checks passed on 17 October 2026. All suites ran for this release.**

| Suite | Passed |
| --- | ---: |
| Course, quiz, progress and RF core | 32 |
| Profile encryption, isolation, migration and transfer | 12 |
| Native Java / Web Crypto checkpoint compatibility | 1 |
| Python recovery service | 7 |
| Browser study flows, including chapter badges | 40 |
| Profile, avatar, transfer and email-reset browser flows | 15 |
| Eight-colour lesson highlighting and backup restoration | 12 |
| Formula detail pages and navigation | 8 |
| Cloudflare Worker recovery | 17 |
| Cloudflare setup page in Chromium | 1 |

- Every existing formula has a dedicated offline page covering its definition,
  letters and units, named symbols, inverse forms, worked example and tips.
  Verified all 16 pages at 320 px and 393 px phone widths, in landscape, and on
  a tablet. Related pages, labs, keyboard actions, Back position and glossary
  preservation work without external requests or changes to study progress.
- Highlight and Highlighter Colour are added to Android's native ActionMode
  callback. The picker offers eight named, accessible colours. The callback
  compiles against Android SDK 36, and the selection-to-picker bridge was
  exercised in Chromium, including ActionMode cleanup and Back cancellation.
- Verified each colour, per-user saved preference, readable dark text, old
  colourless highlights defaulting to yellow, overlap colours, recolouring
  without duplicate anchors, failed-save rollback, profile isolation, and
  reopening. Progress .carprog and encrypted User .carprog transfers retain
  coloured marks; full User restore also retains the colour preference.
- Learn lists PASSED from a best submitted chapter test of 70%, and bold gold
  PASSED WITH HONORS from 80%. Existing history works. Lower later attempts do
  not remove an earned label; study attempts, incomplete tests, full exams and
  reading-complete markers cannot award it. Verified reopening and layouts.
- All 984 official questions, 100 topic lessons, profiles and encryption code,
  copyright, icon and recovery-service configuration are preserved.
- APK 2.3.10 (240) keeps package ca.kevin.maplewave and the existing signing
  certificate, verified against 2.3.9 (239). Verified APK v2/v3 signatures,
  ZIP alignment, and every bundled asset against the final source files.
- Physical Android installation, native long-press/menu behavior, device camera
  and document pickers, and live external email delivery remain untested.

See validation-summary.json, apk-update-verification.json and the UI reports.
Earlier release records follow as history.

# Validation for version 2.3.9

**128 automated checks passed on 17 October 2026.** All suites were run again
for this signed update build: core 29, profiles 12, native crypto compatibility
1, Python recovery 7, study browser flows 38, profile browser flows 15,
highlight browser flows 8, Cloudflare Worker 17 and setup browser flow 1.

The APK is version 2.3.9 (239), with the same package and signing certificate as
2.3.8 (238). APK signatures, 16 KiB ZIP alignment and every bundled asset were
verified. Native DEX is byte-identical to 2.3.8. The only changed app asset is
the browser version fallback; lessons, all 984 official questions, saved
highlights, profiles, backup behavior and the fixed recovery origin are retained.

Physical Android installation, the native long-press menu, camera/document
providers and live email delivery remain untested. Browser selection tests
simulate the Android bridge; recovery tests use local fixtures without sending
production email. See the current JSON reports for details.

Previous release validation follows.

# Validation for version 2.3.8

**128 automated checks passed on 17 October 2026.** All suites were run for this
release; highlight browser checks were repeated after native visibility sync.

| Suite | Passed |
| --- | ---: |
| Course, progress, highlights and RF core | 29 |
| Profiles, full backups and fixed recovery origin | 12 |
| Native Java / Web Crypto compatibility | 1 |
| Python recovery service | 7 |
| Browser study and progress backup flows | 38 |
| Profile, avatar, call sign, transfer and recovery browser flows | 15 |
| Highlight selection, persistence, isolation and both backup types | 8 |
| Cloudflare Worker recovery | 17 |
| Cloudflare setup page in Chromium | 1 |

- Native WebView wraps both startActionMode overloads. It adds Highlight to the
  existing selection menu, preserves other actions, delegates Callback2 content
  positioning, and follows valid lesson selections through asynchronous checks
  and selection-change notifications. Stale/closed callbacks are ignored.
- Browser checks exercise real DOM selections and a fallback Highlight toolbar,
  yellow marks with dark text, overlapping paragraphs without nested marks,
  source-text preservation and stable anchors across Show Answer / Hide Answer.
  The Android JavaScript bridge and visibility notification are simulated.
- Each user's highlights stay in their encrypted progress. Tests cover reopen,
  isolation, duplicate imports, malformed anchors, failed-write rollback and
  rejection of selections outside lessons. An actual phone screenshot was not
  taken; inspected a Chromium phone-layout screenshot of the yellow highlights.
- Progress .carprog exports retain highlights and merge distinct ones. An actual
  encrypted User export/import restores highlights with the avatar, call sign,
  password and other saved data on a fresh browser context. Core/profile checks
  retain all existing populated progress fields with the new optional field.
- Recovery is preconfigured to https://radio-recovery.kevb1540.workers.dev.
  There are no editable service-origin fields. Each user still verifies their
  email. Local fixture enrol/verify/reset checks use that configured origin
  with intercepted requests; no production recovery email was sent.
- Existing verified recovery records are retained until reenrolled; private
  profile keys are not silently moved to another service.
- The optional highlights field defaults to empty for old progress without a
  schema change. Backup formatting, names and .carprog-only imports remain.
  Official question and course files, icons, native cryptography and server code
  remain unchanged. Lesson coverage remains 984 questions / 100 topics.
- APK 2.3.8 (238) retains the package/certificate and increases the version.
  Signatures, ZIP alignment and every bundled asset are verified.
- Physical Android installation, native long-press menu positioning, camera and
  document providers, and live external email delivery remain untested.

Android API references used for the selection-menu implementation:
https://developer.android.com/reference/android/view/ActionMode.Callback
https://developer.android.com/reference/android/view/ActionMode.Callback2

See the JSON verification and browser reports. Previous release notes follow.

# Validation for version 2.3.7

**116 automated checks passed on 17 October 2026.** All suites were run for this
release; profile data and browser checks were rerun after expanding the full
backup audit.

| Suite | Passed |
| --- | ---: |
| Course, quiz, progress and RF core | 26 |
| Profile encryption, complete backup, call sign and isolation | 11 |
| Native Java / Web Crypto compatibility | 1 |
| Python recovery service | 7 |
| Browser study, lesson answer and progress backup flows | 38 |
| Profile, filename, avatar, call sign, user transfer and reset browser flows | 15 |
| Cloudflare Worker recovery | 17 |
| Cloudflare setup page in Chromium | 1 |

- Backup filenames use <username>_<YYYY-MM-DD>.carprog, with the device's local
  calendar date. Actual downloads verify Kevin and Casey filenames, including
  Kevin's selected-user export before login. Native progress exports now use
  the same named-backup route as encrypted User exports.
- Current-user, selected-user and pre-update profile exports use the backed-up
  profile's name. The native save dialog receives this supplied filename;
  safe spaces and Unicode are preserved, with unsafe filename characters
  replaced by underscores.
- The complete encrypted User backup restores the avatar, optional call sign,
  username, email, original password protection, profile timestamps, ownership
  token, recovery record and every progress field. The data check populates
  score history, completed chapters, chapter notes, titled notes, a draft,
  exercise responses, lab values/checks, an unfinished test and language.
  It compares the entire restored private payload and public profile record.
- Actual browser export/import also compares the entire restored study state,
  avatar, call sign and email after password authentication. The separate
  progress-only export remains available for merging study work.
- Backup JSON serialization, encryption, profile module, core logic, native
  UTF-8 writer, Android import validation and internal storage are unchanged.
  Only .carprog imports remain accepted. Wrong extensions and stale selections
  still pass the existing rejection checks without altering saved work.
- The lesson answer controls, glossary, notes, profile warnings, avatars and
  local recovery checks passed regression. Questions, teaching content and
  icon/logo remain unchanged.
- Verified version 2.3.7 (237), previous package and certificate, APK signatures,
  ZIP alignment, every source asset and matching header/native icon pixels.
- Physical Android installation, native document providers/camera and live
  email delivery remain untested. Recovery checks use local intercepted mail.

See apk-update-verification.json, validation-summary.json and browser reports.
Previous release notes are retained below as history.

# Validation for version 2.3.6

**116 automated checks passed on 17 October 2026.** All suites were run for this
release. The browser suites were run again after strict import enforcement.

| Suite | Passed |
| --- | ---: |
| Course, quiz, progress and RF core | 26 |
| Profile encryption, isolation, call signs, migration and transfer | 11 |
| Native Java / Web Crypto checkpoint compatibility | 1 |
| Python recovery service | 7 |
| Browser study flows, lesson answers and progress backups | 38 |
| Profile, call sign, user backup, avatar, warning and reset browser flows | 15 |
| Cloudflare Worker recovery | 17 |
| Cloudflare setup page in Chromium | 1 |

- User, progress and pre-update recovery exports use .carprog filenames.
  Browser downloads assert the exact extension. Progress export text exactly
  matches the previous two-space JSON serialization of the current state;
  encrypted user envelopes retain their previous JSON formatting and schema.
- Only .carprog files are accepted for user and progress imports. Input controls
  advertise that extension alone; filename checks reject .json, .txt, duplicate
  suffixes such as .carprog.json, and bridge input without a filename. Invalid
  user selections clear a previously selected backup. Saved work stays intact.
- Real .carprog exports import with the same notes, scores, unfinished test,
  avatar, call sign and password. Repeated progress merges do not duplicate
  notes or attempts. Both browser suites finish without JavaScript errors.
- Android checks the document provider's display filename before opening its
  contents and passes the verified name to JavaScript. Export uses a generic
  binary document type so a provider can preserve the .carprog extension.
  The existing UTF-8 writer, payload formats, internal .json storage names,
  core validation/merge code and profile cryptography are unchanged.
- Every one of the 984 lesson exam questions still starts with its correct
  answer and worked explanation hidden. Independent Show Answer / Hide Answer
  controls, keyboard activation, focus retention and glossary behavior passed.
- Optional call signs can be saved, edited and cleared, stay encrypted per user,
  and survive user transfer, reopening and password reset. Existing profiles
  and the previous avatar/recovery warnings remain supported.
- APK 2.3.6 (236) has the existing package and signing certificate and a higher
  version code. Verified signatures, ZIP alignment and exact bundled assets.
  Official questions, teaching content, icon/logo and recovery code are unchanged.
- Physical Android installation, document-provider behavior, camera pickers and
  live external email delivery remain untested. Android code compiled successfully;
  filename-validation ordering and limited source changes were also inspected.

See apk-update-verification.json, validation-summary.json and browser reports.
Previous release notes are retained below as history.

# Validation for version 2.3.5

**114 automated checks passed on 17 October 2026. All suites were run for this release.**

| Suite | Passed |
| --- | ---: |
| Course, quiz, progress and RF core | 26 |
| Profile encryption, isolation, call signs, migration and transfer | 11 |
| Native Java / Web Crypto checkpoint compatibility | 1 |
| Python recovery service | 7 |
| Browser study flows and lesson answer controls | 37 |
| Profile, call sign, avatar, warnings, transfer and email reset in Chromium | 14 |
| Cloudflare Worker recovery | 17 |
| Cloudflare setup page in Chromium | 1 |

- Every one of the 984 lesson exam questions starts with its answer hidden.
  Show Answer reveals that question's correct answer and worked explanation;
  Hide Answer closes both. Questions remain visible throughout.
- Browser checks exercise two separate question controls, their exact labels,
  ARIA expansion state, controlled answer IDs, Enter/Space activation and focus
  retention. Toggling keeps the existing lesson DOM and saved progress intact.
- The glossary preserves open answers. Reopening a lesson starts hidden again.
  Both expanded answers and the new profile form fit phones, landscape and
  tablets. Inspected actual shown/hidden answer and call sign screenshots.
- Profile Settings offers an optional Call sign field with save, edit and clear.
  Saved values are trimmed and capitalized and appear in the signed-in banner.
  The field is private in the existing encrypted payload, isolated per user,
  and retained through user export/import, reopening and password recovery.
- Older encrypted profiles that have no callSign field still load with it blank.
  Failed writes and invalid/oversized values retain the saved call sign and
  progress. Password algorithms, vault schema, progress format and native code
  are unchanged; the profile module adds the optional encrypted field.
- APK 2.3.5 (235) uses the previous package and certificate with a higher version
  code. Verified APK signatures, ZIP alignment, every bundled asset against
  source, and identical native classes.dex compared with 2.3.4.
- Questions, teaching content, core module, icon/logo and recovery-service code
  remain byte-identical. Existing notes, scores, glossary, profile warnings,
  avatars, encrypted transfers and recovery tests passed regression.
- Physical Android installation, camera/document pickers and live external
  email delivery remain untested. Recovery tests use intercepted HTTP or a
  test mailbox and do not verify a deployed account's configuration.

See apk-update-verification.json, validation-summary.json and browser reports.
Previous release notes are retained below as history.

# Validation for version 2.3.4

**109 automated checks passed on 17 October 2026. All suites were run for this release.**

| Suite | Passed |
| --- | ---: |
| Course, quiz, progress and RF core | 26 |
| Profile encryption, isolation, migration and transfer | 9 |
| Native Java / Web Crypto checkpoint compatibility | 1 |
| Python recovery service | 7 |
| Browser study flows | 35 |
| Profile, avatar, warning, transfer and email-reset browser flows | 13 |
| Cloudflare Worker recovery | 17 |
| Cloudflare setup page in Chromium | 1 |

- The existing icon was edited with the built-in image tool to give its corner
  maple leaf a vivid red color. The prompt and asset paths are in branding-edit.json.
- The header loads a bundled PNG copy of that same artwork. Browser checks decode
  it, verify its image/png response and compare it to the native icon source.
- After APK resource compilation, the native icon and header PNG have identical
  decoded pixels. Red leaf pixels are confined to the bottom-right region.
  The launcher bitmap is in drawable-nodpi to avoid automatic density upscaling.
- Inspected login, study and settings phone screenshots. Existing UI tests cover
  320 px phones, landscape and tablets without overflow or script errors.
- The native loader now returns image/png with null character encoding for PNG
  assets. Other native profile/storage behavior and the progress format are
  unchanged; the Java/Web Crypto checkpoint compatibility test passes.
- APK 2.3.4 (234) matches the previous package and signing certificate and has a
  higher version code. Signing, ZIP alignment and bundled assets are verified.
- Existing avatar/recovery warnings, encrypted user transfers, notes, course
  content, quizzes and glossary passed regression. Official questions and
  teaching content remain byte-identical.
- Physical Android installation, launcher masking, camera/document pickers and
  live external email delivery remain untested. Local recovery tests use
  intercepted HTTP or a test mailbox. Recovery-service configuration is retained.

See apk-update-verification.json, validation-summary.json and browser reports.
Android resource-response reference: https://developer.android.com/reference/android/webkit/WebResourceResponse
Previous release notes are retained below as history.

# Validation for version 2.3.3

**109 automated checks passed on 17 October 2026. All suites were run for this release.**

| Suite | Passed |
| --- | ---: |
| Course, quiz, progress and RF core | 26 |
| Profile encryption, isolation, migration and transfer | 9 |
| Native Java / Web Crypto checkpoint compatibility | 1 |
| Python recovery service | 7 |
| Browser study flows | 35 |
| Profile, avatar, warning, transfer and email-reset browser flows | 13 |
| Cloudflare Worker recovery | 17 |
| Cloudflare setup page in Chromium | 1 |

- Extended existing profile-flow checks for the exact Select an Avatar Image
  prompt, red text and bold weight while no image is set. A profile with an
  existing image has no prompt; email verification alone keeps it visible.
  Saving an image removes it immediately and it remains absent after reload.
- Verified the Profile exclamation is heavy bold and more than 1.75 times the
  label font size. CSS uses 24 px at the standard 16 px root size and weight 900.
  Its original requirement for verified recovery plus a chosen image remains.
- Inspected phone screenshots of the missing-image prompt, enlarged Profile
  mark and completed settings page. No overflow on 320 and 393 px prompt pages;
  existing responsive study/profile checks also cover landscape and tablet.
- APK 2.3.3 (233) matches the previous package and signing certificate and has a
  higher version code. Signing, ZIP alignment and bundled assets are verified.
- Native code, compiled classes.dex, profile crypto/storage, saved-progress
  schema, official questions, teaching content and recovery service are unchanged.
- Physical Android installation, camera/document pickers and live external email
  delivery remain untested. Local recovery tests use intercepted HTTP or a test
  mailbox. The existing recovery-service address remains user-configurable.

See apk-update-verification.json, validation-summary.json and browser reports.
Previous release notes are retained below as history.

# Validation for version 2.3.2

**109 automated checks passed on 17 October 2026. All suites were run for this release.**

| Suite | Passed |
| --- | ---: |
| Course, quiz, progress and RF core | 26 |
| Profile encryption, isolation, migration and transfer | 9 |
| Native Java / Web Crypto checkpoint compatibility | 1 |
| Python recovery service | 7 |
| Browser study flows | 35 |
| Profile, avatar, warning, transfer and email-reset browser flows | 13 |
| Cloudflare Worker recovery | 17 |
| Cloudflare setup page in Chromium | 1 |

- Browser tests verified the bold red recovery heading, red exclamation to its
  left, red disabled status, and normal styling after email verification.
- Checked all four verified-email/avatar combinations using real user flows.
  Merely requesting a verification code does not clear warnings. A verified
  profile without an avatar keeps its Profile mark; an avatar alone also keeps
  it. Completing both removes the mark, including after reload and user changes.
- Placeholder initials remain round in the banner. Screen-reader Profile labels
  identify missing setup; the decorative exclamation is hidden from speech.
- Inspected phone screenshots of pending recovery, verified recovery without an
  avatar, the remaining Profile mark and completed setup. The warning page fits
  320 and 393 px screens; existing responsive tests cover landscape and tablet.
- APK 2.3.2 (232) has the same package and signing certificate as 2.3.1 (231).
  Android tools verify signing and ZIP alignment; bundled assets match source.
- Native code, compiled classes.dex, profile crypto/storage and saved-progress
  schema are unchanged. Questions and teaching content are byte-identical.
- Physical Android installation, camera/document pickers and live external email
  delivery remain untested. Recovery tests use intercepted HTTP or a local test
  mailbox. The existing recovery-service address remains user-configurable.

See apk-update-verification.json, validation-summary.json and the browser reports.
Previous release notes are retained below as history.

# Validation for version 2.3.1

**107 automated checks passed on 16 October 2026. All suites were rerun for this APK update.**

| Suite | Passed |
| --- | ---: |
| Course, quiz, progress and RF core | 26 |
| Profile encryption, isolation, migration and transfer | 9 |
| Native Java / Web Crypto checkpoint compatibility | 1 |
| Python recovery service | 7 |
| Browser study flows | 35 |
| Profile, avatar, transfer and email-reset browser flows | 11 |
| Cloudflare Worker recovery | 17 |
| Cloudflare setup page in Chromium | 1 |

- APK version 2.3.1, code 231, package `ca.kevin.maplewave`; minimum API 26,
  target API 36. Android tools verify the APK's signing and ZIP alignment.
- The signing certificate matches the previous 2.3.0 APK. Its version code is
  greater, so the new file passes the existing app's identity/version checks.
- Every bundled asset matches the release source. Only the displayed fallback
  version and email service setup wording changed in the web assets.
- Native Java sources and compiled `classes.dex` are unchanged from 2.3.0.
  The profile crypto/storage module and saved-progress schema are unchanged.
  The original official question file is byte-identical.
- The study and profile browser suites cover saved scores, notes, drafts,
  unfinished tests, profile migration/isolation, password changes, user backups
  and email verification/reset. Responsive layout checks include 320 px phones.
- Local recovery tests intercept outgoing email or use a test mailbox. A live
  Cloudflare deployment, external Brevo delivery, actual Android installation,
  camera and system document pickers have not been exercised on a physical phone.
- Update the existing app instead of uninstalling it or clearing data. Email
  recovery still uses the HTTPS address configured by the user in the app.

See `apk-update-verification.json`, `validation-summary.json` and the UI reports.
The previous release's validation notes are retained below as history.

# Validation for version 2.3.0

**89 automated checks passed on 16 October 2026.**

The subsequent Cloudflare hosting addition passed **18 further checks**:
17 Worker/service checks and one Chromium setup-page check. These are new
hosting checks; the original 89 APK checks below were not rerun for this
source-only addition. App assets, native code, package and APK are unchanged.

## Cloudflare hosting addition

- Executed the supplied SQL against real SQLite through a D1-compatible test
  adapter. Intercepted outbound Brevo HTTP locally; no real emails were sent.
- Verified registration ownership, encrypted stored keys, code hashing,
  verification, expiry, five wrong guesses, cooldowns, resend invalidation,
  persistent request/mail budgets, registration capacity and provider failures.
- Concurrent code consumption returns exactly one recovery key. Concurrent
  enrolment keeps the winning address/key attached to its own challenge.
  Pending replacements preserve previously verified recovery until verified.
- The unchanged app profile module completed enrol/verify/reset/login against
  the Worker and retained titled notes, completed lessons and an unfinished test.
- Chromium generated distinct 32-byte keys on the setup page without network
  requests or script errors; layout fits 320, 393 and 800 pixel widths. The
  setup page was also inspected visually.
- No live Cloudflare account, production Worker runtime or actual Brevo email
  delivery was exercised. `/health` checks settings/tables, not provider delivery.
  Complete profile email verification in Kevin's configured app to test that.
- Details are in `cloudflare-validation-report.json`. The existing APK remains
  version 2.3.0 (230); no reinstall is required for the hosting setup.

## Original APK checks

| Suite | Passed |
| --- | ---: |
| Course, quiz, progress and RF core | 26 |
| Profile encryption, isolation, migration and transfer | 9 |
| Native Java / Web Crypto checkpoint compatibility | 1 |
| Email recovery service | 7 |
| Existing browser study flows | 35 |
| Profile, avatar, transfer and email-reset browser flows | 11 |

## Profiles and migration

- Every browser reload/cold launch starts locked at the user list. Study
  navigation cannot enter private pages before authentication. User names and
  avatars are visible; email and study data remain encrypted.
- The first created profile receives existing version-2 progress. The old
  plaintext progress file is removed only after the encrypted vault saves.
  A failed write leaves the original intact. Another profile starts fresh.
- Wrong passwords fail, repeated failures are throttled, and a password change
  invalidates the old local password while retaining progress.
- Profiles have separate notes, drafts, scores, active tests, flags, language
  and lab settings. Signing out clears private state and pending UI material.
- Passwords are never stored as plaintext. AES-256-GCM protects profile keys
  and payloads; PBKDF2-HMAC-SHA256 uses 600,000 iterations and random salts.
- Pre-login export requires the chosen user's password and includes only that
  user. Import preserves name, avatar, password protection and progress. Wrong
  backup passwords and malformed/tampered packets fail before saving. Duplicate
  users require a new name and are not overwritten.
- Pre-update recovery export filters to the authenticated user's snapshot and
  verifies the snapshot password; another user's snapshot is rejected.

## Avatars and Android integrations

- File images are cropped/resized to square JPEG avatars. Browser file selection
  and native camera callback routing preserve entered creation fields. Avatars
  render to the left of user names and identify the selected password page.
- Android uses ACTION_OPEN_DOCUMENT for images and ACTION_IMAGE_CAPTURE with
  a temporary, non-exported content-provider URI for full camera output. Native
  image handling applies orientation and resizes the result to 256×256.
- No direct camera or broad storage permission is added. INTERNET permission
  supports configured email recovery; the optional APK installer permission
  remains. WebView content continues to load exclusively from bundled assets.
- The native AES-GCM checkpoint compiles and decrypts correctly through Web
  Crypto, including Unicode; mismatched associated data and short keys fail.
  This test uses the desktop JVM, not an Android device.

## Email recovery

- A real local Python recovery service was exercised through the app's recovery
  request/callback protocol using a test-only mailbox. Verification, requesting
  a reset, rejecting a wrong code and setting a new password preserved the
  user's note and unfinished test. Normal login is required after reset.
- The service also passed expiry, single-use/replay, five wrong guesses,
  ownership checks, header-injection validation, rate limiting and delivery-
  failure tests. Recovery keys are encrypted in the database; code hashes are
  keyed. Neither profile passwords nor study progress are sent to the service.
- The APK requires a trusted HTTPS origin, refuses redirects and uses Android's
  TLS verification. SMTP secrets and the service master key stay on the server.
- **No live HTTPS recovery service or SMTP account is preconfigured.** A user
  must configure a service and verify their email before reset email works.
  The app states when recovery is disabled. See Email_Recovery_Setup.md.
- External SMTP delivery and real Android HTTPS/camera/document-picker flows
  were not exercised. No physical phone was available; the camera callback in
  browser tests is simulated. The service is a personal deployment reference,
  not a production security audit or a hosted service.

## Existing study features and layout

- All 984 official questions still map to 100 detailed topic lessons; each
  correct selection appears in its rendered teaching example. Questions,
  teaching content and RF models are unchanged from version 2.2.1.
- All twelve chapters, cumulative topic links, worked/false-statement feedback,
  chapter tests, 100-topic exams and eight interactive labs pass regression.
- Titled Personal Notes, failed-write preservation, drafts, legacy progress
  export/merge, scores and saved answers pass after profile authentication.
- The persistent glossary remains available on study and login/profile screens;
  it retains quiz answers, flags, scroll, note drafts and antenna settings.
- Login, selected-user password, creation, export, import, recovery and study
  pages fit 320×740, 393×852, 852×393 and 800×1280 without horizontal overflow
  or browser script errors. Login/password layouts were inspected visually.
- Source-owner attribution and every original reference link remain intact.

## Package identity and limits

- Version 2.3.0, code 230, package ca.kevin.maplewave; minimum API 26, target 36.
- The signing key matches version 2.2.1, and Android tools verify signatures
  and ZIP alignment. All bundled assets are compared with the source files.
- Profile storage uses a new encrypted envelope around the unchanged version-2
  study-progress schema. Automatic cloud progress sync is not implemented.
- Install with **Update** over the existing app. Do not uninstall or clear app
  data. Native installation and Android lifecycle/device behavior still need
  verification on a phone; browser checks do not substitute for that.
