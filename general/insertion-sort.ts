/**
 * @description takes a list of unsorted numbers and uses the insertion sort algorithm
 * it loops over the list. For each element it will loop over the already passed element and check, 
 * if the current element is already in the correct order. It will reversely traversy to sort the elements
 * @param array list of unsorted numbers
 */
function insertionSort(array:number[]) {	

	for(let i = 0; i < array.length; i++){
		for(let j = i; j>0; j--){
			if(array[j] < array[j-1]) swap(array,j,j-1)
		}
	}
	return array;
}

function swap(array:number[], indexA:number, indexB:number):void{
	let temp = array[indexA];
	array[indexA] = array[indexB];
	array[indexB] = temp;
}