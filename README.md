# TaskFlow — Simple Task Manager

A beginner-friendly, responsive task manager built using HTML, CSS, and vanilla JavaScript.

## Features

- Add, edit, complete and delete tasks
- Set priority and optional due date
- Search and filter tasks (all, active, completed)
- Track total, active and completed counts
- Save tasks locally in your browser using localStorage
- Responsive layout for mobile and desktop
- Automated GitHub Actions test workflow

## Requirements

Node.js 18 or newer. No third-party dependencies or API keys required.

## Run locally

```bash
npm start
```

Open http://127.0.0.1:3000 in your browser. Stop the server with Ctrl+C.

## Tests

```bash
npm test
```

GitHub Actions automatically runs the test suite on pushes and pull requests.

## File structure

- `index.html`: main page
- `style.css`: page styling
- `app.js`: task manager functionality
- `server.js`: simple local Node HTTP server
- `tests/server.test.js`: basic server integration test
- `package.json`: start and test scripts
- `.github/workflows/test.yml`: continuous integration
- `.gitignore` and `LICENSE`: repo setup

## Notes

Tasks are stored only in the current browser; they are not shared between devices or user accounts.

MIT licensed.