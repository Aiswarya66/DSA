function romanToInt(s: string): number {
    const map:{[key:string]:number}={
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000,
    }
    let l=s.length;
    let result=0;
    let prevValue =0;
    while(l>0){
        if(map[s[l-1]]<prevValue){
            result-=map[s[l-1]];
        }else{result+=map[s[l-1]];}
        prevValue=map[s[l-1]];
        l--;
    }
    return result;
    
};
console.log(romanToInt("IVII"));