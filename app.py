from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    result = ""
    if request.method == 'POST':
        text = request.form['text']
        if text == text[::-1]:
            result = f"'{text}' is a palindrome!"
        else:
            result = f"'{text}' is not a palindrome."
    return render_template('index.html', result=result)

if __name__ == '__main__':
    app.run(debug=True)
