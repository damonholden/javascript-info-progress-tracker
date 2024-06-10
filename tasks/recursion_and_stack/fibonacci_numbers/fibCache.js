// This solution is much more performant than fib() because it utilizes caching to ensure that fibonacci values are only calculated once.

export function fibCache(n, cache = {}) {
    if (n < 3) {
        return 1
    }

    let val1
    let val2

    if (cache[n-1]) {
        val1 = cache[n-1]
    } else {
        val1 = fibCache(n - 1, cache)
        cache[n-1] = val1
    }

    if (cache[n-2]) {
        val2 = cache[n-2]
    } else {
        val2 = fibCache(n - 2, cache)
        cache[n-2] = val2
    }

    
    return val1 + val2
}

