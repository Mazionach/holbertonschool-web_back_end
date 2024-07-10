#!/usr/bin/env python3
"""
Log data about database
"""

from pymongo import MongoClient



method = ["GET", "POST", "PUT", "PATCH", "DELETE"]


cl = MongoClient("localhost", 27017)
db = cl.logs
col = db.ngix

print(f"{col.count_documents()} logs")
print("Methods:")
method = ["GET", "POST", "PUT", "PATCH", "DELETE"]

for m in method:
    print(f"\tmethod {m}: col.count_documetns({ method: m })")
print(f"{col.count_documents({'method': 'GET', 'path': '/status'})} status check")

