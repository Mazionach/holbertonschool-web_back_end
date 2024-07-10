#!/usr/bin/env python3
"""
Get doc list by topic
"""
import pymongo



def schools_by_topic(mongo_collection, topic):
    """
    Get schools by topic
    """
    return list(mongo_collection.find({"topic": topic}))
