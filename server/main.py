from flask import Flask, jsonify
from flask_cors import CORS
import random

# Initialize Flask app
app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

# Generate a random algebraic equation
@app.route("/equation", methods=["GET"])
def generate_equation():
    try:
        while True: # Loop until a valid equation is generated
            try:
                '''
                General format of the equation:
                ax [operation] b[variable] = c
                where:
                - x is a random integer which the user will solve for
                - a and b are random integers
                - c is then calculated using a, b, and x (ensures whole numbers)
                - variable can be either '' (no variable) or 'x'
                - operation can be either '+' or '-'
                '''
                x = random.randint(1, 10)  
                a = random.randint(1, 20)
                b = random.randint(1, 20)
                
                variable = random.choice(['', 'x']) 
                operation = random.choice(['+', '-'])

                # Form the equation based on the operation and variables
                if operation == '+' and variable == '':
                    c = a * x + b
                    print(f"{a}x + {b} = {c}, x = {x}")
                elif operation == '+' and variable == 'x':
                    c = (a + b) * x
                    print(f"{a}x + {b}x = {c}, x = {x}")
                elif operation == '-' and variable == '':
                    c = a * x - b
                    print(f"{a}x - {b} = {c}, x = {x}")
                elif operation == '-' and variable == 'x':
                    c = (a - b) * x
                    print(f"{a}x - {b}x = {c}, x = {x}")
                return jsonify({
                        "a": a,
                        "b": b,
                        "c": c,
                        "x": x,
                        "variable": variable,
                        "operation": operation
                    })      
            except Exception as e:
                print(f"Error generating equation: {e}")
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Create the Flask app
def create_app():
    return app

if __name__ == "__main__":
    app.run()