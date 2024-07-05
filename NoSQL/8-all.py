#!/usr/bin/env python3
"""
List all docs using pymongo
"""

import pymongo


def list_all(mongo_collection):
    r = []

    if mongo_collection:
        r = list(mongo_collection.find())
    return r
