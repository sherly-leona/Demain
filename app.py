from flask import Flask, render_template, request, redirect, url_for
import sqlite3
app = Flask(__name__)
# ---------------- DATABASE ----------------
def get_db():
    conn = sqlite3.connect("database.db")
    conn.row_factory = sqlite3.Row
    return conn
def init_db():
    conn = get_db()
    conn.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
    """)
    conn.commit()
    conn.close()
# ---------------- HOME ----------------
@app.route("/")
def home():
    return render_template("index.html")
# ---------------- LOGIN ----------------
@app.route("/login")
def login():
    return render_template("login.html")
# ---------------- REGISTER ----------------
@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        name = request.form["name"]
        email = request.form["email"]
        password = request.form["password"]
        conn = get_db()
        try:
            conn.execute(
                """
                INSERT INTO users (name, email, password)
                VALUES (?, ?, ?)
                """,
                (name, email, password)
            )
            conn.commit()
        except sqlite3.IntegrityError:
            conn.close()
            return "Email already registered."
        conn.close()
        return redirect(url_for("login"))
    return render_template("register.html")
# ---------------- START APP ----------------
if __name__ == "__main__":
    init_db()
    app.run(debug=True)