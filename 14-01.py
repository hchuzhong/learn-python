class PartyAnimal:
    x = 0

    def __init__(self):
        print('here is the constructor')

    def party(self):
        self.x = self.x + 1
        print('so far:', self.x)
    
    def __del__(self):
        print('here is the destructor:', self.x)

an = PartyAnimal()
an.party()
an.party()
an = 42
print('check an:', an)