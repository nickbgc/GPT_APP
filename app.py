from flask import Flask, render_template, request, redirect, url_for
import plotly
import plotly.graph_objs as go
import json

app = Flask(__name__)

# Sample data set
sample_data = {
    'NvPulse': {'Acceptance Rate %': 45, 'Reply Rate %': 30, 'Profile Views': 15, 'Total Leads': 10},
    'GeoBlox': {'Unique Visitors': 200, 'Captured MAIDs': 150, 'Devices Matched': 100, 'Foot Traffic': 50},
    'SiteSeePixl': {'Unique Visitors': 300, 'Pages Viewed': 250, 'Repeat Visits': 200, 'Total Contacts': 150},
    'Nguage': {'Google Ad Performance': 400, 'Meta Ad Performance': 350, 'Emails Sent': 300, 'Emails Opened': 250}
}

@app.route('/')
def index():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']

    if username == 'nick@nvatomate.com' and password == '$ugaRand$pic3':
        return redirect(url_for('dashboard'))
    else:
        return "Invalid credentials. Please try again."


@app.route('/dashboard')
def dashboard():
    # Create charts based on sample data
    charts_json = {}
    for product, kpis in sample_data.items():
        labels = list(kpis.keys())
        values = list(kpis.values())
        if product == 'NvPulse':
            chart = go.Pie(labels=labels, values=values)
        else:
            chart = go.Pie(labels=labels, values=values)
        charts_json[product] = json.dumps([chart], cls=plotly.utils.PlotlyJSONEncoder)

    return render_template('dashboard.html', **charts_json)

if __name__ == '__main__':
    app.run(debug=True)
