#!/usr/bin/env python3
"""
Insert a doc
"""

import pymongo


def insert_school(mongo_collection, **kwargs):
    """
    Insert a doc
    """
    return mongo_collection.insert(kwargs)
