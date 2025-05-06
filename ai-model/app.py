from flask import Flask, request, jsonify
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
import pickle

app = Flask(__name__)
model = pickle.load(open("model.pkl", "rb"))
vectorizer = pickle.load(open("vectorizer.pkl", "rb"))

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    desc = data['description']
    vector = vectorizer.transform([desc])
    pred = model.predict(vector)
    return jsonify({"category": pred[0]})

if __name__ == '__main__':
    app.run(port=5001)
