func gcdOfStrings(str1, str2 string) string {
    // If concatenations in both orders differ, no common divisor exists
    if str1+str2 != str2+str1 {
        return ""
    }
    // The GCD string length mirrors numeric GCD of the two lengths
    return str1[:gcd(len(str1), len(str2))]
}

func gcd(a, b int) int {
    for b != 0 {
        a, b = b, a%b
    }
    return a
}
