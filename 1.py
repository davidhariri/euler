import time
# globals
st = time.time()
s = 0

# locals
i = 0

# solution
while i < 1000:
    if i % 3 == 0 or i % 5 == 0:
        s = s+i

    i = i+1

# prints
print("Solution is: %i" % s)
print("Took %s seconds" % (time.time() - st))
