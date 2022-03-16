from flask import Flask, jsonify, request, render_template , send_from_directory
import redis
from aiogram import Bot, Dispatcher
import asyncio
from flask_cors import CORS

db = redis.Redis(
    host='',
    port=1,
    password='')

bot = Bot(token="")
dispatcher = Dispatcher(bot)



async def send_message(message):
    await bot.send_message(1, message)

app = Flask(__name__, static_folder="build/static", template_folder="build")

CORS(app)

@app.route('/')
@app.route('/makePost')
@app.route('/admin')
def hello():
    return render_template('index.html')


@app.route("/manifest.json")
def manifest():
    return send_from_directory('./build', 'manifest.json')


@app.route('/logo192.png')
def logo1():
    return send_from_directory('./build' , 'logo192.png')


@app.route('/logo512.png')
def logo2():
    return send_from_directory('./build', 'logo512.png')

@app.route('/api/posts')
def posts():
    result = {
        "posts": {
            
        }
    }
    for key in db.keys():
        result['posts'][key.decode("utf-8")] = db.get(key).decode("utf-8")
    return jsonify(result)

@app.route('/api/makePost')
def makePost():
    if request.args.get('nick') == None:
        return jsonify({"result" : "No nick provided"})
    elif request.args.get('comment') == None:
        return jsonify({"result": "No comment provided"})
    elif db.__contains__(str(request.args.get('nick'))):
        return jsonify({"result" : "Nick already in use."})
    else:
        db.set(str(request.args.get('nick')) , str(request.args.get('comment')))
        asyncio.run(send_message(f"New post made by {request.args.get('nick')} that says {request.args.get('comment')}"))
        return jsonify({"result" : "Success"})

@app.route('/api/num')
def num():
    return jsonify({"result" : db.dbsize()})

@app.route('/delete_all')
def delete():
    if request.args.get('key') == "KEY":
        for i in db.keys():
            db.delete(i)
        return jsonify({"result" : "All gone"})
    else:
        return jsonify({"result" : "Err"})

if __name__ == '__main__':
    app.run(use_reloader=True, port=8080, threaded=True)
