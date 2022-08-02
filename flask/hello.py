from flask import Flask, jsonify, request, render_template
import psycopg2

app = Flask(__name__)

#fill this info in yourself to fit your database information
databaseName = ''
userName = ''
passw = ''
portNumber = ;
hoster = 'localhost'

# establishing the connection
conn = psycopg2.connect(
    database = databaseName,
    user = userName,
    password = passw,
    host = hoster,
    port = portNumber
)
cursor = conn.cursor()
  
# Creating a cursor object using the cursor() method
cursor = conn.cursor()
@app.route('/')
def home_page():
    # sample query for testing purposes
    query = "SELECT * FROM items"
    cursor.execute(query)
    return render_template('index.html', embed=cursor.fetchall())
    
    