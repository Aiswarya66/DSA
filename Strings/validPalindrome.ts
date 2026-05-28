// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Example:
// Input: s = "aba" Output: true
// Input: s = "abca" Output: true
// Input: s = "abc" Output: false // Constraints: // 1 <= s.length <= 105// s consists of lowercase English letters.
function validPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length-1;
    while(left<right){
        if(s[left]!==s[right]){
            return isPalindrome(s,left+ 1,right)||isPalindrome(s,left,right-1);
        }
        left++;
        right--;
    }

    function isPalindrome(s:string,left:number,right:number):boolean{
        while(left<right){
            if(s[left]!==s[right])
            return false;
        left++;
        right--;
        }
        return true;
    }
    return true;
};
console.log(validPalindrome("abadc"));
console.log(validPalindrome("abad"));