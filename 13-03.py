import json

data = '''
{
    "name" : "Chuck",
    "age" : "7",
    "phone" : {
        "type" : "intl",
        "number" : "+1 555-2368"
    },
    "email" : {
        "hide" : true
    }
}'''

info = json.loads(data)
print('Name:', info['name'])
print('Age:', info['age'])
print('Hide:', info['email']['hide'])