#!/usr/bin/env python3
"""
Update doc
"""

import pymongo


def def schools_by_topic(mongo_collection, topic):
    """
    Update doc
    """
    mongo_collection.update_many({"name": name},
                                 {"$set": {"topics": topics}})
