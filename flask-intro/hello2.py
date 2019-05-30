from flask import Flask
app = Flask(__name__)

@app.route('/')
def homepage():
    return """<h1>Hello world!</h1>"""

@app.route("/admin")
def adminpage():
    return """<h1>Hello admin page!</h1>"""


if __name__ == '__main__':
    app.run(use_reloader=True)