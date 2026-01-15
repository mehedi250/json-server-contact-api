# JSON Server API

A simple **JSON Server** backend for managing contacts.  
This project is ideal for **React/Vue/Angular demos, portfolio projects, or learning CRUD APIs**.  

---

## 🚀 Features

- Create, Read, Update, Delete (CRUD) contacts
- Built with [json-server](https://github.com/typicode/json-server)
- Runs locally or hosted on platforms like [Render](https://render.com)
- Easy to integrate with any frontend app

---

## 📁 Project Structure

```
json-server-api/
├── db.json         # Database file (stores contacts)
├── server.js       # Main server file
├── package.json    # Project config
├── package-lock.json
└── .gitignore      # Files to ignore in Git
```

---

## 💻 Installation

1. Clone the repo:

```bash
git clone https://github.com/YOUR_USERNAME/json-server-api.git
cd json-server-api
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm start
```

4. Open in browser:

```
http://localhost:3000/contacts
```

---

## 🌐 API Endpoints

| Method | Endpoint            | Description               |
|--------|-------------------|---------------------------|
| GET    | `/contacts`       | List all contacts         |
| GET    | `/contacts/:id`   | Get a single contact      |
| POST   | `/contacts`       | Create a new contact      |
| PUT    | `/contacts/:id`   | Update a contact          |
| PATCH  | `/contacts/:id`   | Partial update            |
| DELETE | `/contacts/:id`   | Delete a contact          |

**Example contact structure:**
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "0123456789"
}
```

---

## ⚙️ Deployment on Render

1. Push the repo to GitHub.
2. Go to [Render Dashboard](https://dashboard.render.com) → **New → Web Service**.
3. Connect your GitHub repo.
4. Configure:
   - Environment: `Node`
   - Start Command: `npm start`
5. Deploy!  
   Your API will be live at:  
   `https://your-json-server-api.onrender.com/contacts`

---

## ⚠️ Notes

- Render Free Tier may **sleep after 15 min** of inactivity
- Data is stored in `db.json` — may reset on redeploy
- Perfect for **learning, testing, and portfolio projects**, but not production-grade

---

## 🤝 Contributing

Feel free to submit PRs or issues.  
This is an open-source project for learning and experimentation.

---

## 📄 License

MIT License
