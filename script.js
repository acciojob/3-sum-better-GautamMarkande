function threeSum(arr, target) {
// write your code here
	let closestSum = Infinity;
	arr = arr.sort((a,b)=> a-b);

	for(let i = 0; i<arr.length; i++){
		let left = i+1;
		let right = arr.length-1;

		while(left<right){
			let sum = arr[i] + arr[left] + arr[right];

			if(Math.abs(sum-target)<Math.abs(closestSumum-target)){
				closestSum = sum;
			}
			if(sum>target){
				right--;
			}
			else{
				left++;
			}
		}
	}
  return closestSum;
}

module.exports = threeSum;
