# 📝 Permalist App  

A full-stack **ToDo application** built with **Node.js, Express, PostgreSQL, and EJS**.  
It lets users add, edit, and delete tasks, with all data stored in a PostgreSQL database.  

---

## 🚀 Features
- ➕ Add new tasks  
- ✏️ Edit existing tasks  
- ❌ Delete tasks  
- 💾 Persistent storage with PostgreSQL  
- 🎨 Server-side rendering with EJS templates  

---

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js  
- **Database**: PostgreSQL  
- **Templating**: EJS  
- **Styling**: CSS (static assets)  

---

## ⚙️ Setup Instructions  

### 1. Clone the Repository  
```bash
git clone https://github.com/yourusername/permalist-app.git
cd permalist-app
2. Install Dependencies
bash
Copy code
npm install
3. Configure Environment Variables
Create a .env file in the root folder and add your PostgreSQL credentials:

env
Copy code
DB_USER=your_postgres_username
DB_HOST=localhost
DB_NAME=permalist
DB_PASSWORD=your_postgres_password
DB_PORT=5432
4. Setup Database
Run the following SQL commands in your PostgreSQL database:

sql
Copy code
CREATE DATABASE permalist;

\c permalist

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255)
);
5. Start the Application
bash
Copy code
node index.js
Server will start at:
👉 http://localhost:3000

📸 Demo Screenshots
<img width="1920" height="900" alt="Screenshot (602)" src="https://github.com/user-attachments/assets/8d84b8a7-cdb0-442d-99fa-6e0862c6c54e" />


📂 Project Structure
csharp
Copy code
permalist-app/
│-- index.js        # Main server file
│-- package.json    # Dependencies and scripts
│-- views/          # EJS templates
│-- public/         # CSS, images, static files
│-- .env.example    # Example environment variables
│-- README.md       # Project documentation
🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

📜 License
This project is open-source and available under the MIT License.

