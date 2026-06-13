function twoSum(nums: number[], target: number): number[] {

    let n = nums.length;
    let result:number[];
    for(let i = 0; i<n-1;i++){
        let diff=target-nums[i];
        //if(diff>-1){
            //console.log(`nums slice: ${nums.slice(i+1)}`);
            let j=findindex(nums.slice(i+1),diff);
            //console.log(`i: ${i} j: ${j} diff: ${diff}`);
            if(j>-1){return [i,j+i+1];}
        //}
        // i++;
    }
    
    function findindex(a: number[], b: number):number{
        let n2=a.length;
        while(n2>0){
            if(a[n2-1]==b){
                console.log(`found ${b} at index ${n2-1}`);
                return n2-1;
            }
            n2--;
        }
        return -1;
    }
    return result;
};
//console.log(`${twoSum([2,7,11,15],9)}`);
//console.log(`${twoSum([3,2,4],6)}`);