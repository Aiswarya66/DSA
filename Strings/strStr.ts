// Find the Index of the First Occurrence in a String
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

function strStr(haystack: string, needle: string): number {

    
    let l= haystack.length;
    let n=needle.length;

    if(n==0) return 0;

    for(let i=0;i<=l-n;i++){
        let j=0;
        while(haystack[i+j]==needle[j] && j<n){
            j++;
        }
        if(j==n) return i;
    }


return -1;
    
};

/*
using for loop
function strStr(haystack: string, needle: string): number {
    if (needle.length == 0) return 0;

    let l = haystack.length;
    let n = needle.length;

    for (let i = 0; i <= l - n; i++) { // Fix: Use `<=` instead of `<`
        if (haystack[i] == needle[0]) {
            let match = true;
            for (let j = 0; j < n; j++) {
                if (haystack[i + j] != needle[j]) {
                    match = false; // Mark as mismatch
                    break; // Exit the inner loop
                }
            }
            if (match) return i; // If all characters match, return the index
        }
    }

    return -1; // If no match is found, return -1
}
    */