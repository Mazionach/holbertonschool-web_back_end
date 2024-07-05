#!/usr/bin/env python3
"""
Update doc
"""

import pymongo


def update_topics(mongo_collection, name, topics):
    """
    Update doc
    """
    mongo_collection.update_many({"name": name}, {"$set": {"topics": topics}})
