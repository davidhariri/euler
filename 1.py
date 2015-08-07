import time
# globals
st = time.time()

# locals
s = 0
i = 0

while i < 1000:
    if i % 3 == 0 or i % 5 == 0:
        s = s+i

    i = i+1

# final prints
print("Solution is: %i" % s)
print("Took %s seconds" % (time.time() - st))
