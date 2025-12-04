#!/usr/bin/env python3
"""
function that lists all documents in a collection
"""


def list_all(mongo_collection):
    if mongo_collection is None:
        return []
    else:
        return list(mongo_collection.find())
