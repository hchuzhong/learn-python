import json

data = '''
[
    {
        "id" : "123",
        "x" : "1",
        "name" : "Jack"
    },
    {
        "id" : "456",
        "x" : "3",
        "name": "Mark"
    }
]'''

info = json.loads(data)
print('user count:', len(info))

for item in info:
    print("id:", item['id'])
    print("x:", item['x'])
    print("name:", item['name'])