#!/usr/bin/env python3
"""
function named index_range that takes two integer arguments
"""


def index_range(page, page_size) -> tuple:
    """index_range return tuple"""
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)
