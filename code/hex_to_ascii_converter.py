def hex_to_ascii(hex_string):
    """
    Convert hexadecimal string to ASCII string.
    """
    hex_list = hex_string.split()  # Splitting the hexadecimal string into a list
    ascii_string = ""  # Empty string for storing ASCII translation
    for hex_value in hex_list:
        try:
            decimal_value = int(hex_value, 16)  # Converting hexadecimal value to decimal
            ascii_character = chr(decimal_value)  # Converting decimal value to ASCII character
            ascii_string += ascii_character  # Adding ASCII character to the ASCII string
        except ValueError:
            print(f"Oops! Invalid hexadecimal value '{hex_value}'")
            return None
    return ascii_string

uds_request = "22 F1 90"  # UDS request to read the software version
uds_response = "62 F1 90 56 33 43 54 30 52 56 33 48 31 43 4C 33 31 32 33 34"

print("____________________________")
print("UDS Request to the Target ECU:")
print("Request:", uds_request, "\nRequest: Read Software-Version")

print("____________________________")
print("UDS Response from the Target ECU:")
print("Response:",  hex_to_ascii(uds_response[6:]), "\nPositive response from ECU")  # Only converting the latter part of the UDS response to ASCII
