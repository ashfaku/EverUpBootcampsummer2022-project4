from flask import Flask, jsonify, request, render_template
import psycopg2

app = Flask(__name__)

#fill this info in yourself to fit your database information
databaseName = 'postgres'
userName = 'postgres'
passw = 'ripple123'
portNumber = 5432
hoster = 'localhost'

# establishing the connection
conn = psycopg2.connect(
    database = databaseName,
    user = userName,
    password = passw,
    host = hoster,
    port = portNumber
)

# Creating a cursor object using the cursor() method
cursor = conn.cursor()
route = '/'
@app.route(route)

def get_info():
    # sample query for testing purposes
    query = "SELECT item_name, image_url, price, category_name FROM items";
    cursor.execute(query)
    return render_template('index.html', embed=cursor.fetchall())
    
    