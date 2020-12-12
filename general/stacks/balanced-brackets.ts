/**
 * this algorithms checks if a string has a balanced set of opening and closing brackets
 * @param string string of brackets
 */

function balancedBrackets(string:string) {
    
    // stack to store the brackets
	let charStack = [];
	let matchMap = new Map;
	
	matchMap.set("}","{");
	matchMap.set(")","(");
	matchMap.set("]","[");
	
	let charArray = string.split("");
	
	for(let char of charArray){
        
        // check if opening a bracket. Store in the stack
		if(["{", "[", "("].includes(char)){
			charStack.push(char);
		} else if(! ["}", "]", ")"].includes(char)){
			// skip if non bracket char ...
        }
        // check if the current opening char matches the corresponding closing bracket
		else {
            
			let c = charStack.pop();
			let m = matchMap.get(char);
			if(c !== m) return false;
		}
	}
	return charStack.length === 0;
}
