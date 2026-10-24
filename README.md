# Canadian Amature Radio Study Guide and Reference

©️ Kevin W. Brown 2026

**Current Android release: 2.3.12 (242).**

[Download the APK](https://github.com/kevb1540/canadian_amateur_radio_guide/raw/refs/heads/main/releases/v2.3.12/Canadian_Amature_Radio_Study_Guide_and_Reference.apk) · [Download the source ZIP](https://github.com/kevb1540/canadian_amateur_radio_guide/raw/refs/heads/main/releases/v2.3.12/Canadian_Amature_Radio_Study_Guide_and_Reference_Source.zip) · [Release checksums](releases/v2.3.12/SHA256SUMS)

An Android app with offline study content for the Canadian **Basic Amateur Radio Operator Certificate**,
with **Basic with Honours** as the study target. The app name uses Kevin’s requested
spelling, “Amature.” Study content uses the standard spelling “amateur.”

The launcher icon and top-left header logo use matching antenna artwork with a
red maple leaf in the bottom-right corner. The header image is bundled for
offline use; its source copy matches the launcher icon exactly. See
branding-edit.json for the image-edit prompt and asset provenance.

In **Apply this lesson to the exam**, each official question starts with its
answer and worked explanation hidden. Choose **Show Answer** to reveal only
that question, then **Hide Answer** to close it. Reopening a lesson starts with
all its answers hidden; this does not change saved scores or progress.

## Lesson highlights

Select text within a lesson, long-press to open Android’s text-selection menu,
and choose **Highlight**. The selected passage uses your chosen highlighter colour with dark text.
Copy and the other standard Android selection actions remain available.
Choose **Highlighter Colour** from the same selection menu to choose from
**Yellow, Green, Cyan, Blue, Purple, Pink, Orange, and Red**. The choice is saved
per user and applies to the next text highlighted. Existing marks keep their
colours; selecting a saved passage again and choosing Highlight can recolour it.
The browser preview offers the same two actions in a small selection toolbar.

Highlights save with the signed-in user’s progress and return when that user
reopens the lesson. They remain separate between profiles and are included in
both encrypted User backups and progress .carprog backups. Importing a progress
backup merges distinct highlights without duplicating repeated imports.
Older progress without highlights still loads normally. Existing highlights
without a stored colour display in yellow. Full User backups retain both the
colour preference and all coloured passages. Progress backups include both;
merging keeps the current user’s preference and colours on conflicting anchors.

Text anchors exclude action-button labels and remain stable when Show Answer /
Hide Answer is toggled. Selected hidden answers are not accidentally included.
Overlapping passages in the same colour render continuously. A newer colour
covers only its selected span, keeping the surrounding earlier colours. If authored text
changes in a future release, quotes are checked before a mark is restored; an
ambiguous mismatch is skipped rather than highlighting unrelated text.

Android selection uses the native ActionMode callback with Callback2 position
delegation. Physical long-press behavior still needs a device check. References:
https://developer.android.com/reference/android/view/ActionMode.Callback
https://developer.android.com/reference/android/view/ActionMode.Callback2

## Install on your Android phone

1. Download `Canadian_Amature_Radio_Study_Guide_and_Reference.apk`.
2. Open it from your phone’s Files / Downloads app and choose **Install**, or
   **Update** if the previous version is already installed. Keep the app
   installed to retain your scores and notes.
3. If Android asks, allow that Files app to install the downloaded APK.
4. Launch **Canadian Amature Radio Study Guide and Reference**.

Requires Android 8.0 or newer and an updated Android System WebView. ARM, ARM64
and x86 devices use the same APK. All lessons, questions, definitions and labs
are bundled. The APK does not require a Python app or server for studying. It opens to local user login; email recovery uses Kevin’s built-in service address after each user verifies their email.

This is a directly installable development build, not a Google Play release.
The current signing identity matches the earlier Maplewave development build.
The full app label may be shortened by an Android launcher; Settings and the
app itself display the full title.

All exported user, progress and pre-update recovery backups use the **.carprog**
extension and the name `<username>_<YYYY-MM-DD>.carprog`, for example
**Kevin_2026-10-17.carprog**. The date uses the device’s local calendar date.
Spaces and Unicode names are kept; characters unsafe in filenames become
underscores. The selected user’s name is used even for an export before login.
File contents, JSON formatting and encryption are unchanged. Only
.carprog files can be imported through either the user or progress controls.
Files with other extensions are rejected before their contents are read.
Android exports request a generic binary document type so the file picker keeps
the custom extension; the saved UTF-8 bytes remain exactly as before.

## Formula guide

Open **Home → Formula & reference desk** and tap any of the **16 formula cards**.
Each opens a dedicated offline page with the formula’s definition, every letter’s
name and units, symbol names (including Greek letters), rearrangements for the
other variables, a worked example, and useful tips and common mistakes.
Section shortcuts jump to the part you need. Related-formula buttons and links
to the existing interactive labs help connect the ideas. Publisher references
are included on the relevant pages and require internet only when opened.

The on-screen **All formulas** button and Android Back return to the same
position in the formula list. The persistent Glossary remains available without
losing the formula page. Formula lookup does not change study progress.

## User profiles and login

**Delete User** is available on the selected user’s password page before login
and in **Profile settings**. Deletion does **not** require a password, including
for a user whose password has been forgotten. A separate confirmation displays
the selected name and avatar and explains what will be removed. **Cancel** or
Android Back keeps the user.

Confirming removes that user’s encrypted profile, avatar, optional call sign,
notes, highlights, scores, unfinished tests and other study progress from the
active profile vault on this device, then returns to the login screen. Other
users and exported backup files are kept. A previously exported complete User
.carprog backup can restore the deleted profile using its export-time password.
Email recovery is not a cloud profile backup. Deletion works offline.

A failed storage write leaves the saved profile and current session intact.
Deleting the last user leaves Add New User available; a new profile starts fresh.

Use **Export User** for the complete encrypted backup: it includes the avatar,
optional call sign, username, email, password protection, recovery configuration
and every saved study field, including lesson highlights, scores, active tests,
chapter and personal notes, drafts, exercises, lab values/checks and language settings. Exported user
backups restore the entire profile; the separate progress-only option remains
available for merging study work.

**Profile settings** includes an optional **Call sign** field. Save, edit, or
clear it at any time after signing in. It appears beneath your name while
studying and stays encrypted with that user’s profile and user backups.
Existing profiles begin with this field blank.

Every cold launch opens **Choose your user profile**. Select your name beside
its avatar, then enter your password on a page showing the selected user.
**Add New User** asks for a profile name, password/confirmation and email.
Choose an avatar from files or take a photo using the camera. Avatars are
cropped to a square and resized; an initials avatar is used when none is set.

Profile settings highlights unverified email recovery with a bold red heading,
a red exclamation mark and red status text. The Profile button shows a red
exclamation mark until that user has both verified recovery email and an avatar
image. Recovery text returns to its normal style after verification; initials
are a placeholder and do not count as a chosen image. A bold red **Select an
Avatar Image** prompt appears in Profile settings until a custom image is
chosen. The Profile exclamation is enlarged and bold while setup is incomplete.

Each user has separate scores, tests, notes, drafts, exercises, lab settings
and question language. **Profile → Sign out** returns to the user list. The
first user you create receives existing version-2 progress; other users start
fresh. Existing work is encrypted before the old shared progress file is removed.

Before login, the selected user's page offers **Export User** and **Import
User**. Export requires that user's password and saves an encrypted profile
with its name, avatar, protected credentials and full progress. Import asks for
the password used when exporting; the imported user keeps that login password.
A duplicate user is never overwritten: supply a different name to import a
separate copy. Backups remain protected by their original export-time password.

**Lost password** uses an emailed one-time reset code, followed by choosing a
new password. The app has Kevin’s recovery origin built in:
**https://radio-recovery.kevb1540.workers.dev**. Users are never asked to enter a
service address. Each profile still enables recovery by verifying its own email
under Profile settings. Verified legacy profiles keep their original recovery
record until reenrolled, so their recovery keys are not silently redirected.

This release was tested with local recovery fixtures, not live email delivery.
The Cloudflare/D1/Brevo service code and its deployment guide are included in
[Email_Recovery_Setup.md](Email_Recovery_Setup.md). The Python/SMTP alternative
remains in recovery_service/. Local study and password login work offline.

Profiles use PBKDF2-HMAC-SHA256 (600,000 iterations) to protect a random profile
key and AES-256-GCM for progress. Names and avatars are visible on the login
page by design; emails, study data and registration secrets are inside the
encrypted payload. Plaintext passwords are never stored. The vault supports
up to 50 users and a combined 64 MiB saved file; export backups regularly.

The legacy **Export progress backup** option remains available after login for
compatibility and emergency recovery. It contains unencrypted study data and
omits the user's profile/password; use **Export User** for protected transfers.

## What is included

- **12 chapters**, including **100 detailed topic lessons** with over 15,000 words
  of concept teaching, worked calculations, self-check exercises, chapter notes,
  and tests. Every one of the 984 possible test questions has explicit teaching
  material in its mapped lesson.
- **984 official ISED Basic questions**, effective July 15, 2025, downloaded
  from ISED on October 14, 2026 and rechecked byte-for-byte on October 15, 2026.
  English and French question wording is included;
  lesson text and navigation are in English.
- Full **100-question practice exams**, drawing exactly one question from each
  of the 100 official topic groups. Basic passes at 70%; Honours starts at 80%.
  Practice scores do not award a certificate.
- Quick mixed tests, focused chapter tests, immediate-feedback study mode,
  review flags, and practice drawn from previously missed questions.
- Saved test history: date, time, score, question IDs, answer ordering and chosen
  answers. Compare latest and best results, see changes in percentage points,
  and review any attempt. Tests with feedback are labelled separately.
- An unfinished test saves after each answer and resumes after reopening.
- **223 glossary definitions**, with searchable terms, categories and examples.
  A persistent **Glossary** button opens a lookup over every screen, including
  tests, labs and notes, without losing the current place or input.
  Requested entries include VOX, CTCSS, DCS, gain, OWNID, FM, NFM, AM, CW and USB.
- A separate **mode definitions and examples** page, formula desk, Canadian band
  overview, official references and examiner links.
- **Eight interactive labs** described below.
- **Personal Notes** with required titles, editable reminders, full-text search,
  confirmation before deletion, and automatically saved unfinished drafts.
- JSON progress export and merge import, using Android’s document picker.
- **APK updates** with package, version and signing-certificate checks.
- **Source-owner credits** from the “References & question-bank attribution”
  footer, with Crown copyright, the ISED question bank, government publishers,
  manufacturer references and direct original-source links.

## Chapter route

1. Your Canadian certificate
2. Your first contact
3. Electricity you can calculate
4. Components & tuned circuits
5. Waves, modes & modulation
6. Build the station in your mind
7. Antennas that make sense
8. Feedlines, SWR & antenna tuning
9. How signals travel
10. Keep your signal clean
11. A safe, reliable station
12. Put it all together

Each test selects official questions from the chapter’s mapped syllabus topics.
Chapter 12 deliberately uses mixed questions from the complete bank. Random
question and answer order changes between attempts, so use the review pages to
understand mistakes rather than memorizing answer letters.

## Chapter test labels

The Learn chapter list shows **PASSED** when that user’s best submitted chapter
test is 70–79%, or **PASSED WITH HONORS** in bold gold text at 80% or higher.
The label appears beside the chapter name and uses saved test history, so an
older passing result remains earned after a lower-scoring retry. It also works
with existing saved results and restored backups. Study-mode attempts,
unfinished tests, full practice exams and simply marking a reading complete do
not award a chapter label. Results below 70% do not receive a pass label.

## How lessons now match their tests

The version-2.2.0 readings were rebuilt around all **100 official Basic topic
groups**. Each topic starts with an original concept explanation, tables or
worked calculations as appropriate, followed by contextual examples making all
question-specific details explicit. The 984-question file and official answer
ordering are unchanged, preserving the meaning of historical saved answers.

False-statement questions are labelled **False statement to select** and explain
the true rule. Numeric feedback includes units, substitution and the result for
the worked cases. Answer review and bank entries open the precise topic lesson,
rather than the start of a generic chapter.

**Read → Lessons and tested topics** gives a topic index in each chapter.
Chapter 12 is explicitly cumulative: its 10-question test can draw from the
complete bank and its prerequisite index links all 100 lessons in chapters
1–11. Full practice exams still select one question from each official topic.
The earlier reference to a 124-question custom pool has been removed.

The source includes `lesson-coverage-report.json` with question counts and topic
IDs by chapter. `scripts/lesson_content.py` contains the authored teaching notes;
`python3 scripts/align_lessons.py` recompiles them and rejects missing topics or
question mappings. It does not change the official question bank.

## Your first antenna tuning experiment

Open **Labs → Tune a dipole**.

1. Start at **14.2 MHz** with **11.5 m total tip-to-tip wire** and the matching
   circuit bypassed. The simulated resonance is near **12.43 MHz**, below target.
2. Choose **Watch a guided tune**. The wire shortens to about **10.070 m total**
   and the SWR minimum moves toward 14.2 MHz.
3. Try changing the length yourself. A longer wire moves the dip lower;
   a shorter wire moves it higher. Each dipole leg is half the displayed length.
4. Choose **Try an LC match**. The load changes to a deliberately detuned wire
   and a 25 Ω model feed resistance. Adjust the inductor and capacitor, or choose
   **Show a worked LC solution**.
5. Compare the bare SWR with the SWR seen by the radio. The ideal LC network can
   give a good radio-side match while the wire’s natural resonance stays put.
6. Choose **New wire challenge**, tune toward 7.1 MHz without the network, and
   use **Check my wire tuning** for feedback.

The wire model is one fundamental series-resonant mode, fixed resistance and
Q = 6, using resonance ≈ 143 / length(m) MHz. The starting 50 Ω resistance
isolates the effect of length; a real dipole’s feed resistance is not always
50 Ω. The matching components are ideal and the bench omits coax loss.
The SWR chart is capped at 10:1; numeric readouts show larger mismatch.

For practical work, the lab also explains measurement-plane calibration with
an analyser or NanoVNA and changing both dipole legs equally. The app neither
connects to nor transmits from radio hardware.

## Other interactive labs

| Lab | Change | Observe / practise |
| --- | --- | --- |
| Ohm’s law bench | Voltage and resistance | Current and resistor heating |
| LC resonance | Inductance and capacitance | Resonance and reactance; 7.1 MHz challenge |
| Wavelength & wire | Frequency | Wavelength, dipole and quarter-wave lengths |
| Modulation scope | AM/FM/CW/SSB and control level | Conceptual waveforms and AM overmodulation |
| Gain & feedline loss | Output power, line loss, antenna gain | Antenna power, heat and EIRP |
| Day & night paths | Time, frequency, illustrative solar activity | Qualitative HF propagation window |
| Repeater workbench | Receive frequency, offset and CTCSS | Simulated repeater access |

Propagation is a teaching illustration, not a live prediction. Mode waveforms
compress the carrier-to-audio frequency ratio. Each lab states its assumptions.

## Glossary details

Tap **Glossary** in the header from any screen, even after scrolling down a
long lesson. Search in the overlay and use **Close**, Android Back or Escape
to return to the same page, scroll position, test question, lab settings or note.
Opening the overlay does not grade, submit, restart or discard a test. The
glossary remains available in practice tests; attempt a full test without
consulting references when you want a realistic readiness check.

For the full glossary page and categories, use **Home → Glossary & definitions**.
Entries link to related labs where appropriate. The mode definitions page
compares FM, NFM, AM, CW, USB, LSB, SSB and WFM.

Examples of distinctions explained:

- CTCSS and DCS provide squelch/access signalling, not privacy or encryption.
- USB means **upper sideband** in a radio-mode menu; a computer connector uses
  the same abbreviation for **Universal Serial Bus**.
- OWNID is manufacturer-specific. On the Retevis RT95 it displays the current
  channel’s DTMF or 5-tone calling ID. It is not automatically an amateur call sign
  or a DMR Radio ID.
- Antenna gain, RF gain, AF gain and microphone gain refer to different functions.

## Common on-air language

**Glossary & definitions → On-air terms & phrases** opens a new offline section
with **61 expressions in six topics**: calling and contacts, Q codes, signal
reports, voice phrases and spelling, repeaters and nets, and signing off.
The Mode definitions page links to the same section.

Every term includes its meaning, an example, and a usage note. Q-code entries
show question and statement forms; voice and Morse usage are distinguished.
Search also understands common alternatives, such as “five by nine” and
“net control”. Topic filters narrow the list. Expand a term to read it.
A 26-letter phonetic spelling table and short conversation examples are included.

All 61 terms are also available in the full glossary, its **On-air language**
category, the reference-desk glossary, and the persistent quick lookup. The
combined glossary has 223 unique entries. Existing definitions, categories,
manufacturer references and examples are preserved. Quick lookup during a test
keeps the current question, answer, flags, notes and progress in place.
Publisher references open externally; all authored content works offline.

## Personal Notes

Tap **Notes** in the bottom navigation, or **Home → Open Personal Notes**.
Choose **New note**, enter a title and your reminder, then choose **Save note**.
The title is required: blank or whitespace-only titles cannot be saved.
Titles can contain up to 200 characters and note text up to 100,000 characters.
A title alone can also serve as a short reminder.

Open a saved note to read or edit its full text. Search matches both titles and
text, and the list shows most recently updated notes first. **Delete** asks for
confirmation. Editing retains the note’s identity and creation date.

An unfinished draft is saved as you type, including when its title is still
blank. Drafts are separate from saved notes. Leave the page or close the app,
then use **Continue draft** to resume. **Save note** is required before the draft
becomes a saved note. Starting a different note asks before replacing a draft;
**Discard draft** leaves existing saved notes in place.

Notes and the current draft are included in progress exports, pre-update
recovery copies, and normal compatible app updates. A backup import combines
distinct notes without duplicating the same note. The currently saved version
wins when that note also exists in the imported backup, and the current draft
takes priority over an imported draft.

Version 2.1.0 adds these fields to the existing version-2 progress format.
Saved scores, chapter notes, exercises, and unfinished tests from version 2.0.0
load without changes; older version-2 backups remain importable.

## Keeping scores and backups

Progress is stored atomically in private app data. A submitted attempt stays in
history; the app does not remove older scores to make the latest one look better.
The missed-question list uses each question’s most recent submitted answer.

Use **Profile → Export User** for an encrypted profile backup, or
**Home → Backup & settings → Export progress backup** for a legacy progress-only
backup. Choose a destination
in Android’s document picker. Before uninstalling, clearing app data or changing
phones, make an export. Those actions can remove local progress.

**Import / merge a backup** validates a version-2 JSON export, merges attempts
by their unique IDs and preserves current notes when the same chapter has notes
in both copies. A current unfinished test takes priority over an imported one.
Version-1 Python workbook backups have a different schema and are not imported
by this version. They remain separate from the version-2 Android progress.

The legacy progress JSON is unencrypted; an exported User backup protects its
credentials and progress with the profile password. The app makes no automatic
cloud progress transfers. Reference links open in your usual browser.

## Updating the app

When a newer build is available:

1. Keep the existing app installed.
2. Export a progress backup.
3. Open **Backup & settings → Install an updated APK** and select the newer APK.
4. The app checks the package ID, a strictly higher version code and the signing
   certificate. A private pre-update progress recovery copy is created.
5. Confirm the update. If Android asks, allow installs from this app, then return
   to continue in Android’s package installer.

You can instead open the newer APK in Files and select **Update**. Both methods
use Android’s normal package replacement, retaining private app data. A different
package ID or signing key is not a compatible update. The app rejects older or
same-version files in its own update picker.

After an update has been initiated through its picker, Settings can export the
current user’s pre-update snapshot as an encrypted User backup. Enter the
password used by that snapshot. Other users are excluded. An external Files-based update relies
on the manual export you make first. The in-app update recovery copy now contains
the encrypted profile vault; it is private and is not a replacement for individual
user exports. Older plaintext pre-update copies are removed when legacy progress
is successfully claimed and encrypted by the first profile.

There is **no automatic update feed configured**. A new APK must be built and
provided. Bundled lessons and questions update with the APK. A future release
that changes the progress schema or question-bank identity must include an
explicit migration and preserve historical answer interpretation.

### Stable update identity for developers

- Package ID: `ca.kevin.maplewave`
- Current version name: `2.3.12`
- Current version code: `242`
- Signing certificate SHA-256:
  `fa5c815a87afdc21b8f7a319f9dc1da676b27e166445049f0977bf1d3990cd74`
- Keep the same keystore for updates. Increment the version code for every new
  installed release. The original signing key is kept privately and is excluded
  from this public repository and its downloadable source ZIP. Keep a private
  backup of it; a different signing key cannot update the existing app.

The optional `REQUEST_INSTALL_PACKAGES` permission is used only for the
user-selected APK update flow. The app uses Internet permission only for user-configured HTTPS email recovery;
it does not request broad file access or direct camera permission. Camera capture
is delegated to the device camera app through a temporary content-URI grant. Android’s document picker handles backups and APK
selection. The non-exported update provider grants the installer read access
to the one verified cached APK.

## Source and build

The Android shell is **Java**, with offline **HTML/CSS/JavaScript** screens.
Encrypted profiles are written through a narrow Java bridge to an `AtomicFile`.
A synchronous native AES-GCM checkpoint preserves edits during Android lifecycle
pauses; ordinary browser saves use Web Crypto. Native Java never stores a profile
password or sends study progress to the recovery service.
The RF and quiz calculations are separate pure JavaScript functions.

```
app/src/main/java/ca/kevin/maplewave/  Android shell and update provider
app/src/main/assets/                 Lessons, question bank, UI and RF models
scripts/prepare_data.py              Official bank conversion and chapter mapping
scripts/enrich_course.py             Glossary and workbook table normalization
scripts/lesson_content.py            Original notes for all 100 official topics
scripts/align_lessons.py             Lesson compilation and exhaustive coverage audit
scripts/check_lesson_coverage.py     Build preflight rejecting uncovered questions
scripts/build_apk.py                 Direct Android SDK/ECJ build
tests/core.test.cjs                  Bank, exam, storage and RF checks
tests/profiles.test.cjs              Encryption, migration and profile separation
tests/profiles-ui.test.cjs           Login, avatars, transfer and reset UI
tests/delete-user-ui.test.cjs        Password-free deletion, cancellation and failures
tests/native_crypto.test.cjs         Native/Web Crypto checkpoint compatibility
recovery_service/server.py          Optional HTTPS-proxied SMTP recovery backend
tests/test_recovery_service.py       Code expiry, replay, ownership and mail failures
tests/ui.test.cjs                    Browser-based phone/tablet UI flows
tests/formulas-ui.test.cjs           All formula lessons, links and phone layouts
tests/onair-ui.test.cjs              On-air terms, search, quick lookup and layouts
tests/highlights-ui.test.cjs         Eight colours, overlays and backup restoration
tests/android_smoke.py               Actual Android emulator smoke workflow
```

### Android Studio

Open this directory in Android Studio and sync the Gradle project. It uses
Android Gradle Plugin 8.13.0, JDK 17 and compile/target SDK 36. Install those tools
through Android Studio if needed. The first sync requires downloads. There are
no external app runtime libraries. For a compatible personal update, restore
the original private keystore at `android_development/debug.keystore` before
building. This ignored key is excluded from the repository and source ZIP. The included Gradle 8.13 wrapper downloads its distribution on first use. You can also build with `./gradlew assembleDebug` (`gradlew.bat assembleDebug` on Windows). The wrapper retains its Gradle / Apache 2.0 notices in `GRADLE_WRAPPER_LICENSE.txt`.

### Direct SDK build

Install Android SDK platform 36 and build-tools 36.0.0, plus Eclipse ECJ 3.39.0.
The build script uses Python 3 only to orchestrate the tools; the APK contains
no Python interpreter. Restore the original private keystore at
`android_development/debug.keystore` before building. Set `ANDROID_HOME`, `ANDROID_JAR`,
`ANDROID_BUILD_TOOLS`, and `ECJ_JAR` for your tool locations, then run:

```bash
python3 scripts/build_apk.py
```

For the next compatible release:

```bash
APP_VERSION_CODE=242 APP_VERSION_NAME=2.3.12 python3 scripts/build_apk.py
```

The direct builder first checks every question against its matching teaching
material and rejects missing or mismatched lessons. It then verifies the APK
signature and zip alignment. The
`build-info.json` file records the produced version and checksum.

### Checks

```bash
node --test tests/core.test.cjs tests/profiles.test.cjs tests/native_crypto.test.cjs
python3 tests/test_recovery_service.py
node tests/ui.test.cjs
node tests/profiles-ui.test.cjs
node tests/formulas-ui.test.cjs
node tests/onair-ui.test.cjs
node tests/highlights-ui.test.cjs
```

UI checks require Playwright and a Chromium binary; set `CHROME_BIN` to its path.
The UI test starts its own local server. This is a test harness for the bundled
screens, not a server required by the installed app. The Android smoke harness
requires the separately installed emulator, image and ADB listed in its source.

## Official materials and copyright

The footer **References & question-bank attribution** opens a dedicated source
credits page. The official question bank is **Government of Canada (Crown
copyright)** material published by ISED. Kevin’s copyright notice covers the
original app code and independently written teaching material. Each government
and manufacturer reference is credited to its publisher, with a link to the
original source; the RT95 manual’s mirror host is identified separately.

The official bank is **Basic Qualification Question Bank for Amateur Radio
Operator Certificate Examinations**, by **Innovation, Science and Economic
Development Canada (ISED)**. It is a non-commercial reproduction of the source
version available from:

- https://ised-isde.canada.ca/site/amateur-radio-operator-certificate-services/en/downloads
- https://apc-cap.ic.gc.ca/datafiles/amat_basic_quest.zip
- https://ised-isde.canada.ca/site/amateur-radio-operator-certificate-services/sites/default/files/documents/amateur_basic_questions_en_2025-07-15.pdf

Question and answer wording is retained, with answer positions randomized.
The official correct answer is taken from the ISED-delimited record. Conversion
checks verify 984 unique question IDs, four answer options per language and all
100 topic groups. Full exams follow ISED’s one-question-per-topic structure.
See `bank-info.json` in the app assets for the source hash and retrieval date.

ISED’s reproduction terms:
https://ised-isde.canada.ca/site/ised/en/terms-and-conditions

This independent app is not produced or endorsed by ISED. It teaches the Basic
syllabus and does not provide an Advanced course or grant operating authority.
Use current official sources for operating decisions and future bank changes.
See `COPYRIGHT.txt` for original-content and third-party notices.
