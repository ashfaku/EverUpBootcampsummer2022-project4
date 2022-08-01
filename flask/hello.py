from flask import Flask, jsonify, request, render_template
app = Flask(__name__)
@app.route('/')
def home_page():
    example_embed='This string is from python'
    return render_template('../index.html', embed=example_embed)