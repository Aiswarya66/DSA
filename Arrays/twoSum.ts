function twoSum(nums: number[], target: number): number[] {

    let n = nums.length;
    const tMap:Record<number,number> = Object.create(null);
    for(let i=0;i< n; i++){
        const complement=target-nums[i];
        const t = tMap[complement];
        if(t!= undefined){
            return [i, t]
        }
        tMap[nums[i]]=i;
    }
    return [];
};
//console.log(`${twoSum([2,7,11,15],9)}`);
//console.log(`${twoSum([3,2,4],6)}`);
