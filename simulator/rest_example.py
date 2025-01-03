from flask import Flask, jsonify, request

app = Flask(__name__)

# Sample data for demonstration
vehicles = [
    {'id': 1, 'make': 'Toyota', 'model': 'Camry', 'year': 2020, 'ecu_diagnostics': {'engine': 'OK', 'brakes': 'OK'}, 'services': {}},
    {'id': 2, 'make': 'Honda', 'model': 'Civic', 'year': 2019, 'ecu_diagnostics': {'engine': 'OK', 'transmission': 'Needs attention'}, 'services': {}},
    {'id': 3, 'make': 'Ford', 'model': 'F-150', 'year': 2022, 'ecu_diagnostics': {'engine': 'Needs attention', 'brakes': 'OK'}, 'services': {}}
]

# Sample data for UDS diagnostics
uds_diagnostics = {'uds_service_1': 'OK', 'uds_service_2': 'Needs attention', 'uds_service_3': 'OK'}

# Endpoint to get UDS diagnostics information
@app.route('/uds-diagnostics', methods=['GET'])
def get_uds_diagnostics():
    return jsonify({'uds_diagnostics': uds_diagnostics})

# Endpoint to update UDS diagnostics information
@app.route('/uds-diagnostics', methods=['PUT'])
def update_uds_diagnostics():
    diagnostics_data = request.json
    uds_diagnostics.update(diagnostics_data)
    return jsonify({'message': 'UDS diagnostics updated successfully'})

# Endpoint to get a list of vehicles and their ECU diagnostics information
@app.route('/vehicles', methods=['GET'])
def get_vehicles():
    return jsonify({'vehicles': vehicles})

# Endpoint to get details about a specific vehicle
@app.route('/vehicles/<int:vehicle_id>', methods=['GET'])
def get_vehicle(vehicle_id):
    vehicle = next((v for v in vehicles if v['id'] == vehicle_id), None)
    if vehicle:
        return jsonify({'vehicle': vehicle})
    else:
        return jsonify({'message': 'Vehicle not found'}), 404

# Endpoint to update ECU diagnostics information for a specific vehicle
@app.route('/vehicles/<int:vehicle_id>/ecu-diagnostics', methods=['PUT'])
def update_ecu_diagnostics(vehicle_id):
    vehicle = next((v for v in vehicles if v['id'] == vehicle_id), None)
    if vehicle:
        diagnostics_data = request.json
        vehicle['ecu_diagnostics'] = diagnostics_data
        return jsonify({'message': 'ECU diagnostics updated successfully'})
    else:
        return jsonify({'message': 'Vehicle not found'}), 404

# Endpoint to get a list of diagnostic services for a specific vehicle
@app.route('/vehicles/<int:vehicle_id>/services', methods=['GET'])
def get_vehicle_services(vehicle_id):
    vehicle = next((v for v in vehicles if v['id'] == vehicle_id), None)
    if vehicle:
        return jsonify({'services': vehicle['services']})
    else:
        return jsonify({'message': 'Vehicle not found'}), 404

# Endpoint to update diagnostic services for a specific vehicle
@app.route('/vehicles/<int:vehicle_id>/services', methods=['PUT'])
def update_vehicle_services(vehicle_id):
    vehicle = next((v for v in vehicles if v['id'] == vehicle_id), None)
    if vehicle:
        services_data = request.json
        vehicle['services'] = services_data
        return jsonify({'message': 'Vehicle services updated successfully'})
    else:
        return jsonify({'message': 'Vehicle not found'}), 404

if __name__ == '__main__':
    app.run(debug=True, port=8080)
