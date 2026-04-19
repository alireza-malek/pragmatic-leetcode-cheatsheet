class Solution {
    public String gcdOfStrings(String str1, String str2) {
        // If concatenations in both orders differ, no common divisor exists
        if (!(str1 + str2).equals(str2 + str1)) return "";

        // The GCD string length mirrors numeric GCD of the two lengths
        return str1.substring(0, gcd(str1.length(), str2.length()));
    }

    private int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}
