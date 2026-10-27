
from multiprocessing import Pool
import os

def dgim(stream):
    buckets = []
    for t, bit in enumerate(stream, start=1):
        # Remove expired buckets
        buckets = [b for b in buckets if b[1] > t - len(stream)]

        if bit == 1:
            buckets.insert(0, [1, t])

            while True:
                sizes = {}
                for i, b in enumerate(buckets):
                    sizes.setdefault(b[0], []).append(i)

                merged = False
                for size, idx in sizes.items():
                    if len(idx) > 2:
                        i, j = idx[-2], idx[-1]
                        buckets[i] = [size * 2, buckets[i][1]]
                        buckets.pop(j)
                        merged = True
                        break

                if not merged:
                    break

    if not buckets:
        return 0

    return sum(b[0] for b in buckets) - buckets[-1][0] // 2


def worker(chunk):
    return dgim(chunk)


if __name__ == "__main__":
    stream = [1, 0, 1, 1, 0, 1, 0, 1,
              1, 0, 1, 1, 0, 0, 1, 1]

    chunks = [stream[i:i+4] for i in range(0, len(stream), 4)]

    with Pool(min(len(chunks), os.cpu_count() or 1)) as pool:
        results = pool.map(worker, chunks)

    print("DGIM Estimated Count:", sum(results))
    print("Actual Count:", sum(stream))
