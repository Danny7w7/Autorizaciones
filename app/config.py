import os

class Config:
    SQLALCHEMY_DATABASE_URI = "mysql+mysqldb://root:@localhost/autorizacion"
    SQLALCHEMY_TRACK_MODIFICATIONS = False