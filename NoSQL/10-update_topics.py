#!/usr/bin/env python3
"""
Update doc
"""

import pymongo


def insert_school(mongo_collection, **kwargs):
    """
    Update doc
    """
    mongo_collection.update_many({"name": name},
                                 {"$set": {"topics": topics}})
