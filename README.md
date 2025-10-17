

A simple **Express.js** backend that returns user information, the current timestamp, and a random cat fact fetched from an external API.

---

## 🚀 Features

- Returns JSON data with your user info and a cat fact.
- Redirects `/` → `/me`.
- Uses `axios` for API calls.
- Handles request timeouts and API errors gracefully.
- Logs all HTTP requests with `morgan`.

---

## 🧰 Tech Stack

- **Node.js**
- **Express**
- **Axios**
- **Dotenv**
- **Morgan**

---

## ⚙️ Setup Instructions

### 1. Clone this repository

```bash
git clone https://github.com/<your-username>/backend-stage-zero.git
cd backend-stage-zero
```

### 2. Install dependencies

Make sure you have Node.js (v16 or later) installed.  
Then run:

```bash
npm install
```

This installs:

- `express` – for building the server
- `axios` – for making API requests
- `dotenv` – for environment variables
- `morgan` – for logging requests

---

## 🧾 Environment Variables

Create a `.env` file in the project root:

```
API_URL=https://catfact.ninja/fact

```

You can replace the `API_URL` with any other API endpoint that returns a `fact` property.

---

## ▶️ Run Locally

Start the server:

```bash
npm start
```

Then open your browser at:

```
http://localhost:3000
```

This will redirect you to:

```
http://localhost:3000/me
```

You’ll see a response like:

```json
{
	"status": "success",
	"user": {
		"email": "azamegbesamuel@gmail.com",
		"name": "Ehizojie Samuel Azamegbe",
		"stack": "Nodejs/Express"
	},
	"timestamp": "2025-10-16T22:53:17.123Z",
	"fact": "Cats sleep for 70% of their lives."
}
```

---

## 🧩 Scripts

| Command       | Description               |
| ------------- | ------------------------- |
| `npm start`   | Starts the Express server |
| `npm install` | Installs all dependencies |

---

## 🌐 Deployment

This project can be deployed easily on:

- **Railway**
- **Render**
- **Vercel (as serverless)**

For Railway:

1. Connect your GitHub repo.
2. Add your environment variable (`API_URL`).
3. Deploy — Railway will auto-detect your start script.

---

## 💡 Author

**Ehizojie Samuel Azamegbe**

📧 Email: [azamegbesamuel@gmail.com](mailto:azamegbesamuel@gmail.com)  
💻 Stack: Node.js / Express.js
