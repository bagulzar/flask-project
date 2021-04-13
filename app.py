import json
import mysql.connector

from flask import Flask, make_response, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

mydb = mysql.connector.connect(
  host="141.45.91.40",
  user="s0569643",
  password="44hl797L",
  database="s0569643_haroundb",
  auth_plugin='mysql_native_password'
)

@app.route('/server/get-members/', methods=['GET'])
def get_members():
    response = {}
    try:
        members = []
        mycursor = mydb.cursor()
        mycursor.execute("SELECT Mitglieds_id, Vorname,Nachname,Stelle,Abteilung FROM Mitglied")
        result = mycursor.fetchall()
        for x in result:
            member = {}
            member['id'] = x[0]
            member['Vorname'] = x[1]
            member['Nachname'] = x[2]
            member['Stelle'] = x[3]
            member['Abteilung'] = x[4]
            members.append(member)
        response['mitglied'] = members
        response = make_response(json.dumps(response))
        response.headers['Content-type'] = 'application/json'
        response.status_code = 200
    except Exception as e:
        print(e)
        response = make_response(json.dumps(response))
        response.headers['Content-type'] = 'application/json'
        response.status_code = 400
    return response

@app.route('/server/get-customers/', methods=['GET'])
def get_customers():
    response = {}
    try:
        customers = []
        mycursor = mydb.cursor()
        mycursor.execute("SELECT Kunden_ID, Vorname,Nachname,Email,Telefonnummer FROM Kunde")
        result = mycursor.fetchall()
        for x in result:
            customer = {}
            customer['id'] = x[0]
            customer['Vorname'] = x[1]
            customer['Nachname'] = x[2]
            customer['Email'] = x[3]
            customer['Telefonnummer'] = x[4]
            customers.append(customer)
        response['kunde'] = customers
        response = make_response(json.dumps(response))
        response.headers['Content-type'] = 'application/json'
        response.status_code = 200
    except Exception as e:
        print(e)
        response = make_response(json.dumps(response))
        response.headers['Content-type'] = 'application/json'
        response.status_code = 400
    return response

@app.route('/server/get-exchange/', methods=['GET'])
def get_exchange():
    response = {}
    try:
        exchanges = []
        mycursor = mydb.cursor()
        mycursor.execute("SELECT Exchange_ID, ExchangeType, Kunden_ID, Mitglieds_ID, To_City, To_Country, Departure_Date, Return_Date FROM Exchange")
        result = mycursor.fetchall()
        for x in result:
            exchange = {}
            exchange['id'] = x[0]
            exchange['ExchangeType'] = x[1]
            exchange['Kunden_ID'] = x[2]
            exchange['Mitglieds_ID'] = x[3]
            exchange['To_City'] = x[4]
            exchange['To_Country'] = x[5]
            exchange['Departure_Date'] = str(x[6])
            exchange['Return_Date'] = str(x[7])
            exchanges.append(exchange)
        response['exchange'] = exchanges
        response = make_response(json.dumps(response))
        response.headers['Content-type'] = 'application/json'
        response.status_code = 200
    except Exception as e:
        print(e)
        response = make_response(json.dumps(response))
        response.headers['Content-type'] = 'application/json'
        response.status_code = 400
    return response

@app.route('/server/get-products/', methods=['GET'])
def get_products():
    response = {}
    try:
        products = []
        mycursor = mydb.cursor()
        mycursor.execute("SELECT ExchangeTyp,Preis,Dauer FROM ExchangeProgramm")
        result = mycursor.fetchall()
        for x in result:
            product = {}
            product['ExchangeTyp'] = x[0]
            product['Preis'] = x[1]
            product['Dauer'] = x[2]
            products.append(product)
        response['exchangeProgramm'] = products
        response = make_response(json.dumps(response))
        response.headers['Content-type'] = 'application/json'
        response.status_code = 200
    except Exception as e:
        print(e)
        response = make_response(json.dumps(response))
        response.headers['Content-type'] = 'application/json'
        response.status_code = 400
    return response

@app.route('/server/get-wins/', methods=['GET'])
def get_wins():
    response = {}
    try:
        products = []
        mycursor = mydb.cursor()
        mycursor.execute("select e1.ExchangeType, sum(e2.Preis) from Exchange e1, ExchangeProgramm e2 where e2.ExchangeTyp = e1.ExchangeType group by ExchangeType")
        result = mycursor.fetchall()
        for x in result:
            product = {}
            product['ExchangeTyp'] = str(x[0])
            product['Preis'] = str(x[1])
            products.append(product)
        response['exchangeTypeWins'] = products
        products = []
        mycursor.execute("select sum(e2.Preis) from Exchange e1, ExchangeProgramm e2 where e2.ExchangeTyp = e1.ExchangeType")
        result = mycursor.fetchall()
        for x in result:
            product = {}
            product['sum'] = str(x[0])
            products.append(product)
        response['exchangeSum'] = products
        print(response)
        response = make_response(json.dumps(response))
        response.headers['Content-type'] = 'application/json'
        response.status_code = 200
    except Exception as e:
        print(e)
        response = make_response(json.dumps(response))
        response.headers['Content-type'] = 'application/json'
        response.status_code = 400
    return response

@app.route('/server/add-customer/', methods=['POST'])
def add_customer():
    response = {}
    try:
        json_request = request.get_json()
        kunden_id = json_request['id']
        first_name = json_request['firstName']
        last_name = json_request['lastName']
        email = json_request['email']
        telephone = json_request['telephone']
        mycursor = mydb.cursor()
        where_clause_id = (kunden_id, )
        mycursor.execute("SELECT * FROM Kunde WHERE Kunden_ID = %s", where_clause_id)
        result = mycursor.fetchall()
        if len(result) > 0:
            response['description'] = 'Customer already exists'
            response = make_response(json.dumps(response))
            response.headers['Content-type'] = 'application/json'
            response.status_code = 409
        else:
            sql = "INSERT INTO Kunde (Kunden_ID, Vorname, Nachname, Email, Telefonnummer) VALUES (%s, %s, %s, %s, %s)"
            val = (kunden_id, first_name, last_name, email, telephone)
            mycursor.execute(sql, val)
            mydb.commit()
            response['description'] = 'Customer added successfully'
            response = make_response(json.dumps(response))
            response.headers['Content-type'] = 'application/json'
            response.status_code = 200
    except Exception as e:
        print(e)
        response = make_response(json.dumps(response))
        response.headers['Content-type'] = 'application/json'
        response.status_code = 400
    return response

@app.route('/server/delete-customer/', methods=['POST'])
def delete_customer():
    response = {}
    try:
        json_request = request.get_json()
        kunden_id = json_request['id']
        mycursor = mydb.cursor()
        sql = "DELETE FROM Exchange WHERE Kunden_ID = %s"
        val = (kunden_id, )
        mycursor.execute(sql, val)
        mydb.commit()
        sql = "DELETE FROM Kunde WHERE Kunden_ID = %s"
        val = (kunden_id, )
        mycursor.execute(sql, val)
        mydb.commit()
        response['description'] = 'Customer/Exchange deleted successfully'
        response = make_response(json.dumps(response))
        response.headers['Content-type'] = 'application/json'
        response.status_code = 200
    except Exception as e:
        print(e)
        response = make_response(json.dumps(response))
        response.headers['Content-type'] = 'application/json'
        response.status_code = 400
    return response

@app.route('/server/add-exchange/', methods=['POST'])
def add_exchange():
    response = {}
    try:
        json_request = request.get_json()
        exchange_id = json_request['id']
        exchange_type = json_request['type']
        kunden_id = json_request['kundenID']
        mitglied_id = json_request['mitgliedID']
        city = json_request['city']
        country = json_request['country']
        departure_date = json_request['departure']
        return_date = json_request['return']
        mycursor = mydb.cursor()
        where_clause_id = (kunden_id, )
        mycursor.execute("SELECT * FROM Kunde WHERE Kunden_ID = %s", where_clause_id)
        result = mycursor.fetchall()
        if len(result) == 0:
            response['description'] = 'Customer does not exist'
            response = make_response(json.dumps(response))
            response.headers['Content-type'] = 'application/json'
            response.status_code = 404
            return response
        where_clause_id = (mitglied_id, )
        mycursor.execute("SELECT * FROM Mitglied WHERE Mitglieds_id = %s", where_clause_id)
        result = mycursor.fetchall()
        if len(result) == 0:
            response['description'] = 'Member does not exist'
            response = make_response(json.dumps(response))
            response.headers['Content-type'] = 'application/json'
            response.status_code = 404
            return response
        sql = "INSERT INTO Exchange (Exchange_ID, ExchangeType, Kunden_ID, Mitglieds_ID, To_City, To_Country, Departure_Date, Return_Date) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
        val = (exchange_id, exchange_type, kunden_id, mitglied_id, city, country, departure_date, return_date)
        mycursor.execute(sql, val)
        mydb.commit()
        response['description'] = 'Exchange added successfully'
        response = make_response(json.dumps(response))
        response.headers['Content-type'] = 'application/json'
        response.status_code = 200
    except Exception as e:
        print(e)
        response = make_response(json.dumps(response))
        response.headers['Content-type'] = 'application/json'
        response.status_code = 400
    return response

@app.route('/server/add-member/', methods=['POST'])
def add_member():
    response = {}
    try:
        json_request = request.get_json()
        mitglied_id = json_request['id']
        first_name = json_request['firstName']
        last_name = json_request['lastName']
        stelle = json_request['stelle']
        abteilung = json_request['abteilung']
        mycursor = mydb.cursor()
        where_clause_id = (mitglied_id, )
        mycursor.execute("SELECT * FROM Mitglied WHERE Mitglieds_id = %s", where_clause_id)
        result = mycursor.fetchall()
        if len(result) > 0:
            response['description'] = 'Member already exists'
            response = make_response(json.dumps(response))
            response.headers['Content-type'] = 'application/json'
            response.status_code = 409
        else:
            sql = "INSERT INTO Mitglied (Mitglieds_id, Vorname, Nachname, Stelle, Abteilung) VALUES (%s, %s, %s, %s, %s)"
            val = (mitglied_id, first_name, last_name, stelle, abteilung)
            mycursor.execute(sql, val)
            mydb.commit()
            response['description'] = 'Member added successfully'
            response = make_response(json.dumps(response))
            response.headers['Content-type'] = 'application/json'
            response.status_code = 200
    except Exception as e:
        print(e)
        response = make_response(json.dumps(response))
        response.headers['Content-type'] = 'application/json'
        response.status_code = 400
    return response

@app.route('/server/delete-member/', methods=['POST'])
def delete_member():
    response = {}
    try:
        json_request = request.get_json()
        mitglied_id = json_request['id']
        mycursor = mydb.cursor()
        sql = "DELETE FROM Mitglied WHERE Mitglieds_id = %s"
        val = (mitglied_id, )
        mycursor.execute(sql, val)
        mydb.commit()
        response['description'] = 'Member deleted successfully'
        response = make_response(json.dumps(response))
        response.headers['Content-type'] = 'application/json'
        response.status_code = 200
    except Exception as e:
        print(e)
        response = make_response(json.dumps(response))
        response.headers['Content-type'] = 'application/json'
        response.status_code = 400
    return response

if __name__ == "__main__":
    app.run(host = '0.0.0.0', port = 8080)
