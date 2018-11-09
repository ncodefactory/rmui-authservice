# rmui-authservice

## You must add .env file in you service home directory with settings:

PORT=your_preferred_listening_port_for_server
TOKEN_SECRET='your_secret_fot_JWT'
TOKEN_EXPIRES_IN=number_of_seconds_until_the_token_expires
ENCODER_SECRET='your_secret_for passwd_encoder'
MTNS_AND_TNS_FILES_DIRECTORY='path_to_directory_with maat.tns and tnsnames.ora files'
