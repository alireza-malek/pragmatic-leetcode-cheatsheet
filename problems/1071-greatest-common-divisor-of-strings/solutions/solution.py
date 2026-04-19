def gcdOfStrings(str1: str, str2: str) -> str:
    # If concatenations in both orders differ, no common divisor exists
    if str1 + str2 != str2 + str1:
        return ""

    # The GCD string length mirrors numeric GCD of the two lengths
    return str1[:gcd(len(str1), len(str2))]

def gcd(a: int, b: int) -> int:
    while b:
        a, b = b, a % b
    return a
