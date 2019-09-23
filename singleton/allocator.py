class Database:
    _instance = None

    def __new__(cls, *args):
        if not cls._instance:
            cls._instance = super(Database, cls)\
                .__new__(cls, *args)
        return cls._instance

    def __init__(self):
        print('Loading pdatabase')



if __name__ == '__main__':
    d1 = Database()
    d2 = Database()
    print(d1 == d2)

