def divisors_of(n: int) -> list[int]:
    # Returns the list of even divisors, given an integer n
    divs = [1]

    # NOTE: Exploits that sqrt(n) is a natural breakpoint in finding the pairs of divisors
    divs = []
    for i in range(1, int(n**0.5) + 1):
        if n % i == 0:
            divs.append(i)
            if i != n // i:
                divs.append(n // i)
    return divs
