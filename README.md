# 🔐 HashGuard

<p align="center">
  <b>A modern client-side cryptographic file security toolkit for generating hashes, verifying file integrity, and comparing files securely.</b>
</p>

<p align="center">
  Built with React, TypeScript, Vite, and modern UI technologies.
</p>

---

## 📌 Overview

HashGuard is a privacy-focused cybersecurity tool that allows users to generate cryptographic hashes, verify file integrity, and compare files directly inside the browser.

Unlike traditional online hashing tools, HashGuard processes files locally on the user's device, ensuring that files are never uploaded to external servers.

The project was built to explore:

- Cryptographic hashing concepts
- File integrity verification
- Digital forensics workflows
- Secure client-side processing
- Modern React architecture

---

# ✨ Features

## 🔹 Cryptographic Hash Generation

Generate secure fingerprints of files using multiple hashing algorithms.

Supported algorithms:

- SHA-256
- SHA-384
- SHA-512
- SHA-1
- MD5

Features:

✅ Drag & drop file upload  
✅ Multiple algorithm selection  
✅ Instant hash generation  
✅ Copy generated hashes  
✅ File metadata display  
✅ Hash generation statistics  


---

## 🔹 File Integrity Verification

Verify whether a file has been modified by comparing its generated hash with a trusted hash.

Workflow:


Upload File
↓
Generate Hash
↓
Compare With Expected Hash
↓
Integrity Result


Capabilities:

- Hash matching
- Modification detection
- Verification status
- Algorithm-based comparison


---

## 🔹 File Comparison

Compare two files using cryptographic fingerprints.

Workflow:


File A
|
↓
Generate Hash

File B
|
↓
Generate Hash

Compare Results


Features:

- Dual file upload
- Hash-based comparison
- Identical/different detection


---

## 🔹 Hash History

Track previously generated hashes locally.

Features:

- Browser local storage
- Timestamp tracking
- Algorithm information
- File details
- Offline access


---

# 🛡 Security & Privacy

HashGuard follows a privacy-first approach.

Files are processed locally:


User File

↓

Browser Memory

↓

Cryptographic Processing

↓

Generated Hash


No files are uploaded to external servers.

This makes HashGuard useful for:

- File integrity checks
- Security learning
- Digital forensics practice
- Malware analysis experiments


---

# ⚙️ Tech Stack

## Frontend

| Technology | Purpose |
|---|---|
| React 19 | UI development |
| TypeScript | Type-safe programming |
| Vite | Development and build tooling |
| Tailwind CSS v4 | Styling framework |
| shadcn/ui | UI component system |
| Framer Motion | Animations |
| React Router | Navigation |
| React Dropzone | File uploads |
| Lucide React | Icons |


## Cryptography

| Technology | Purpose |
|---|---|
| CryptoJS | Hashing operations |
| SHA Algorithms | Cryptographic fingerprints |
| MD5 | Legacy hashing support |
| Browser APIs | Client-side processing |


---

# 🏗 Project Architecture


HashGuard

Frontend
│
├── React Components
│
├── Hash Engine
│
├── Verification Engine
│
├── Comparison Engine
│
├── History Storage
│
└── UI System


---

# 📂 Folder Structure


HashGuard
│
├── frontend
│
│ ├── src
│ │
│ │ ├── app
│ │ │
│ │ ├── components
│ │ │ ├── hash
│ │ │ ├── verify
│ │ │ ├── compare
│ │ │ ├── history
│ │ │ ├── upload
│ │ │ └── ui
│ │ │
│ │ ├── lib
│ │ │ ├── hash.ts
│ │ │ ├── verify.ts
│ │ │ └── compare.ts
│ │ │
│ │ ├── pages
│ │ ├── store
│ │ ├── hooks
│ │ └── utils
│ │
│ ├── package.json
│ └── vite.config.ts
│
├── README.md
├── LICENSE
└── .gitignore


---

# 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/ha4saah/HashGuard.git

Navigate:

cd HashGuard/frontend

Install dependencies:

npm install

Start development server:

npm run dev

Application:

http://localhost:5173
💻 Available Commands

Development:

npm run dev

Production build:

npm run build

Preview:

npm run preview

Lint:

npm run lint
🔬 How Hashing Works

A cryptographic hash converts any input into a fixed-length fingerprint.

Example:

document.pdf

      ↓ SHA-256

9f86d081884c7d65...

Even the smallest modification creates a completely different output.

Hashing is widely used in:

Digital signatures
Password storage
File verification
Malware analysis
Digital forensics
🔮 Future Roadmap

Planned improvements:

 PDF forensic reports
 Export hash reports
 JSON/CSV export
 Hash searching
 Duplicate detection
 File entropy analysis
 Malware metadata extraction
 VirusTotal API integration
 Desktop version using Electron
👩‍💻 Author

Hafsah Younis

Cybersecurity Student
Security Research Enthusiast
Frontend Developer

📄 License

Licensed under the MIT License.