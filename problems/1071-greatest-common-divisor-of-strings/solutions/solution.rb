def gcd_of_strings(str1, str2)
  # If concatenations in both orders differ, no common divisor exists
  return "" if str1 + str2 != str2 + str1

  # The GCD string length mirrors numeric GCD of the two lengths
  str1[0, gcd(str1.length, str2.length)]
end

def gcd(a, b)
  a, b = b, a % b while b != 0
  a
end
