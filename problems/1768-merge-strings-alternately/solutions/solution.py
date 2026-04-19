def mergeAlternately(word1: str, word2: str) -> str:
    result = []
    max_len = max(len(word1), len(word2))

    for i in range(max_len):
        # Append from word1 if index is still valid
        if i < len(word1):
            result.append(word1[i])
        # Append from word2 if index is still valid
        if i < len(word2):
            result.append(word2[i])

    return "".join(result)
