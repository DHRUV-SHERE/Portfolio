from flask import Flask, request, jsonify
import mysql.connector

app = Flask(__name__)

# Database configuration
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'root',
    'database': 'portfolio'
}

# Route to handle contact form submission
@app.route('/submit_contact', methods=['POST'])
def submit_contact():
    data = request.json
    name = data.get('name')
    mobile = data.get('mobile')
    email = data.get('email')
    message = data.get('message')

    try:
        # Connect to the database
        con = mysql.connector.connect(**db_config)
        mycur = con.cursor()

        # Insert the data into the Contact_info table
        query = "INSERT INTO contact_info (name, mobile, email, message) VALUES (%s, %s, %s, %s)"
        mycur.execute(query, (name, mobile, email, message))

        # Commit the transaction
        con.commit()

        return jsonify({'message': 'Contact information submitted successfully!'}), 200

    except mysql.connector.Error as err:
        print(f"Error: {err}")
        return jsonify({'error': str(err)}), 500

    finally:
        if mycur:
            mycur.close()
        if con:
            con.close()

if __name__ == '__main__':
    app.run(debug=True)
