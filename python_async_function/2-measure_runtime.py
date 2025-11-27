#!/usr/bin/env python3
"""measure_time function with integers n and max_delay as
arguments that measures the total execution time"""
wait_n = __import__('1-concurrent_coroutines').wait_n
import asyncio
import time

def measure_time(n: int, max_delay: int) -> float:
    """measure time function"""
    start = time.time()
    asyncio.run(wait_n(n, max_delay))
    end = time.time()

    total_time = end - start
    return total_time/n
