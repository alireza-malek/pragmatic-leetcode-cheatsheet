class Solution {
    public:
        string gcdOfStrings(string str1, string str2) {
            // If concatenations in both orders differ, no common divisor exists
            if (str1 + str2 != str2 + str1) return "";
    
            // The GCD string length mirrors numeric GCD of the two lengths
            return str1.substr(0, gcd(str1.size(), str2.size()));
        }
    
    private:
        int gcd(int a, int b) {
            while (b) {
                int temp = b;
                b = a % b;
                a = temp;
            }
            return a;
        }
    };
    