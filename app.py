from flask import Flask, render_template, request, redirect, url_for, session
import sqlite3
app = Flask(__name__)
app.secret_key = "demain-secret-key"
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
# ---------------- MAIN ----------------
@app.route("/main")
def main():
    return render_template("main.html")
#----------------- THEME --------------
@app.route("/theme")
def theme():
    return render_template("theme.html")
#----------------- POSTCARD ------------
@app.route("/postcard")
def postcard():
    return render_template("postcard.html")
#----------------- DETAILS --------------
@app.route("/details")
def details():
    return render_template("details.html")
#----------------MY CAPSULES -------------
@app.route("/mycapsules")
def mycapsules():
    return render_template("mycapsules.html")
#-------------GOODBYE-------------------
@app.route("/goodbye")
def goodbye():
    return render_template("goodbye.html")
# ---------------- LOGIN ----------------
@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form["email"]
        password = request.form["password"]
        conn = get_db()
        user = conn.execute(
            """
            SELECT * FROM users
            WHERE email = ? AND password = ?
            """,
            (email, password)
        ).fetchone()
        conn.close()
        if user:
            session["user_id"] = user["id"]
            session["username"] = user["name"]
            return redirect(url_for("main"))
        else:
            return "Invalid email or password."
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