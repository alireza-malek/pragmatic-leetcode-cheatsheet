public class Solution {
    public string GcdOfStrings(string str1, string str2) {
        // If concatenations in both orders differ, no common divisor exists
        if (str1 + str2 != str2 + str1) return "";

        // The GCD string length mirrors numeric GCD of the two lengths
        return str1[..Gcd(str1.Length, str2.Length)];
    }

    private int Gcd(int a, int b) {
        while (b != 0) {
            (a, b) = (b, a % b);
        }
        return a;
    }
}
