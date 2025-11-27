#!/usr/bin/env python3
"""
multiple coroutines at the same time with async
"""
wait_random = __import__('0-basic_async_syntax').wait_random
from typing import List
import asyncio


async def wait_n(n: int, max_delay: int) -> List[float]:
    """insert each delay at its correct position to keep the list sorted in ascending order"""
    tasks = []

    for i in range(n):
        tasks.append(wait_random(max_delay))

    delays = []
    
    for task in tasks:
        delay = await task
        idx = 0
        for i in range(len(delays)):
            if delays[i] < delay:
                idx = i + 1
        delays.insert(idx, delay)
    
    return delays
