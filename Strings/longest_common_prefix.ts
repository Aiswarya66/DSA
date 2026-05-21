/*Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Constraints:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty. */
function longestCommonPrefix(strs: string[]): any {
    let stringcount = strs.length;
    let j=stringcount-1;
    let i = 0;
    let leastcount=strs[0].length;
    let match = '';
    while(j>0){
  //i has least string count
        if(leastcount>strs[j].length){
            leastcount=strs[j].length;
            // match =strs[j];
            // leastcount = j;
        }
        j--;
    }

    i=0;
    
    while(i<stringcount &&j<leastcount){
        let initial = strs[0][j]
        let invl = 0;
        while(i<stringcount){
            if(strs[i][j]!=initial){
                invl++;
                console.log(`invl: ${invl}`);
                break;
            }
            i++;
        }
        
        if(invl>0){
            console.log(`match ${match} init ${initial}`)
            break;
        }else{
        match+=initial;
        j++;
        i=0;
        }
        
    }
    

    // let l1 = strs[0].length;
    // let i=0;
    // for (i in Range(l1)){}

    // j=i-1;
    // while(j>0){
 
    //     if(strs[0][0]==strs[])
    //     j--;

    // }



    return match;
    
};


