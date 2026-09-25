# RUNcoder_TECHNICAL_KNOWLEDGE_ADDENDUM.md

## 1. Compiler / Runtime
- **C/C++ Compiler:** UNKNOWN (Requires developer verification).
- **Python Version:** UNKNOWN (Requires developer verification).
- **Execution Engine:** Online backend execution service.
- **Evidence:** `src/data/blogPosts.ts` states: "RunCoder is not an offline compiler or interpreter; your code is transmitted to a secure backend execution service that runs the program and returns the console output."

## 2. Execution Architecture
- **Flow:** User writes code (UI) -> Request/API -> Backend Execution Service -> Compiler/Interpreter -> Console Output -> Response (UI).
- **Network Dependency:** Required for ALL code execution.
- **Stdin/Stdout/Stderr:** Handled by the backend execution service and returned in the response.
- **API Details:** UNKNOWN (Private).
- **Timeout/Memory/Limits:** UNKNOWN.

## 3. Project / File Persistence
- **Storage:** Local editing exists (for project/file structure), but code execution relies on the remote backend.
- **Persistence:** Local file editing persists within the browser/app context, but execution requires network to send files/code to the server.
- **Folders/Multiple Files:** Supported (UI supports project tabs).

## 4. Supported Libraries / Packages
- **Standard Libraries:** Supported by backend execution environment.
- **Third-Party Packages:** UNKNOWN (Requires verification).
- **Installation (pip/npm/etc):** Not supported by user code.

## 5. Offline / Online Behavior
- **Local Features:** Text editing, file creation, tab management, project structure navigation.
- **Network-Dependent Features:** Code execution, output retrieval.
- **Behavior:** If offline, the UI functions as a text editor, but execution requests fail.

## 6. Project Management
- **Verified Behavior:** Create project, create file, edit file, rename, delete, folders, multiple files, tabs, save/autosave.
- **Export/Import/Backup/Sync:** UNKNOWN.

## 7. Website Claim Audit
- **VERIFIED CLAIMS:** RunCoder requires internet connection for execution, not an offline compiler.
- **UNVERIFIED CLAIMS:** Specific compiler versions, library support list, backend performance capabilities.
