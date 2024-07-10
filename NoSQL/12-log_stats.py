#!/usr/bin/env python3
"""
Log data about database
"""

import pymongo



method = ["GET", "POST", "PUT", "PATCH", "DELETE"]


cl = MongoClient("localhost", 27017)
db = client.logs
col = db.ngix

print(f"{len(col.find())} logs")
print("Methods:")
method = ["GET", "POST", "PUT", "PATCH", "DELETE"]

for m in method:
    print(f"\tmethod {m}: len(col.find({ method: m }))")
print(f"{len(col.find({'method': 'GET', 'path': '/status'}))} status check")

