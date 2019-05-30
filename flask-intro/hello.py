from flask import Flask, request, render_template, 
app = Flask(__name__)
people = {1:{'fname':'peter', 'lname':'lee','age':20},
		  8:{'fname':'Tom', 'lname':'Thomas','age':31},
		  9:{'fname':'Bob', 'lname':'Bee','age':30}
		 }

@app.route("/")
@app.route("/admin")
@app.route("/admin/")
def hello():
    return "hello world from <h1> Monica </h1>"

@app.route("/info")
# def info():
# 	print('Args:', request.args)
# 	return "Hello World! - info - Monica-info " + request.args.get('monica1','default1')


def info():
	resp = jsonify(people)
	print('---json---:', resp.response)
	return resp, 200


@app.route("/update/")
def updatepage():
    return """<h1> Hello update page!</h1>"""


@app.route("/admin")
@app.route("/admin/")
@app.route("/admin/<myid>")
@app.route("/admin/<myid>/")
def admin(myid=None):
    return "Hello World! - admin v3 - Monica " + str(myid)

@app.route("/admin2/<myid>")
@app.route("/admin2/<myid>/")
def adminnew(myid=None):
    print('people:', people)
    print ('my id is:', int(myid))
    return "Hello World! - admin v4 - Monica " + \
			str(people.get(int(myid),{'fname':'Who Knows'}))

@app.route("/admin3/<myid>")
@app.route("/admin3/<myid>/")
def admin3(myid=None):
    return render_template("person.html",
		testval="We know it works", 
		person=people.get(int(myid),{'fname':'Who Knows'}))


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)


