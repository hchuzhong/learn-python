import xml.etree.ElementTree as ET

data = '''
<stuff>
	<users>
		<user x="3">
			<name>xixi</name>
			<id>001</id>
        </user>
		<user x="9">
			<name>haha</name>
			<id>004</id>
        </user>
    </users>
</stuff>
'''

stuff = ET.fromstring(data)
list = stuff.findall('users/user')
print('user count:', len(list))

for item in list:
    print('name', item.find('name').text)
    print('id', item.find('id').text)
    print('attr x', item.get('x'))