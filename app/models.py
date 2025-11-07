from . import db
from datetime import datetime

class Authorization(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, default=datetime.now)
    code = db.Column(db.String(100))

    def __repr__(self):
        return f"<Authorization {self.nombre}>"
