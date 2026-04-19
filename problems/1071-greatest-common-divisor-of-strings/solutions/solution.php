function gcdOfStrings(string $str1, string $str2): string {
    // If concatenations in both orders differ, no common divisor exists
    if ($str1 . $str2 !== $str2 . $str1) return "";

    // The GCD string length mirrors numeric GCD of the two lengths
    return substr($str1, 0, gcd(strlen($str1), strlen($str2)));
}

function gcd(int $a, int $b): int {
    while ($b !== 0) {
        [$a, $b] = [$b, $a % $b];
    }
    return $a;
}
