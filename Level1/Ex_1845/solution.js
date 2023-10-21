function solution(nums) {    
    const monSet = new Set(nums.sort());
    const canSelect = nums.length/2;
    return canSelect > monSet.size? monSet.size: canSelect;
}