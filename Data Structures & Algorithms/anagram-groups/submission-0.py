class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groupAnagrams = collections.defaultdict(list)
        for chars in strs:
            charStr = "".join(sorted(chars))
            groupAnagrams[charStr].append(chars)
        
        result = []
        for values in groupAnagrams.values():
            result.append(values)

        return result