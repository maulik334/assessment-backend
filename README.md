# CoinVault  Take-Home Assessment

CoinVault is a multi-chain staking and governance platform. The shared codebase includes a Next.js frontend and an Express backend. 

This repository is used to evaluate backend engineering candidates. You will extend an existing Node.js / Express application rather than starting from a blank project.

---

## Assessment Task

Build a simple RESTful Notes API inside this project.

Implement full CRUD (Create, Read, Update, Delete) for a Notes resource. Persist notes in an in-memory data structure (array or object). A database is not required.

### Endpoints

| Method   | Path          | Description                    |
|----------|---------------|--------------------------------|
| `POST`   | `/notes`      | Create a new note              |
| `GET`    | `/notes`      | Retrieve all notes             |
| `GET`    | `/notes/:id`  | Retrieve a single note by ID   |
| `PUT`    | `/notes/:id`  | Update an existing note        |
| `DELETE` | `/notes/:id`  | Delete a note                  |

### Constraints

- Work in this repository. Do not create a separate project from scratch.
- Store notes in memory only (for example, an array or dictionary). No database is needed for this task.
- Results should be visible in the console or on a simple frontend page.

---

## Submission

Complete the task by the end of today. Then do one of the following:

1. Share a video demonstration of your work, or
2. Push your solution to a public repository and send the link.

---

## Getting Started

### Prerequisites

- Node.js 20 or later (20 recommended)
- npm

### Installation

```bash
npm install
```

### Run the application

```bash
npm run dev
```

To run only the backend:

```bash
npm run backend
```

---

## Technology Stack

| Area                    | Technologies                                      |
|-------------------------|---------------------------------------------------|
| Frontend                | Next.js, React, TypeScript, Tailwind CSS          |
| UI                      | shadcn/ui                                         |
| Backend                 | Node.js, Express                                  |
| Blockchain (existing)   | ethers.js, Solidity (ERC-20)                      |

---

## Project Structure

```
CoinVault/
├── app/                  # Next.js App Router pages
├── components/           # React components
│   ├── layout/           # Layout components
│   └── ui/               # UI components
├── contracts/            # Smart contract source
├── hooks/                # Custom React hooks
├── lib/                  # Utilities and contract ABIs
│   └── abis/
├── public/               # Static assets
├── styles/               # Global styles
└── backend/              # Express API (add your Notes work here)
```


---

## Existing Platform Context

The broader CoinVault product covers Ethereum staking, rewards, and governance. It currently includes four smart contracts:

1. DepositETH (dETH) — ERC-20 received when depositing ETH
2. StakedETH (sETH) — ERC-20 received when staking dETH
3. Governance — proposal creation, voting, and execution
4. StakingDashboard — statistics and leaderboard

This context is background only. The assessment is the Notes API described above.
