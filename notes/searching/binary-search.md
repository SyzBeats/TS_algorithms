# Binary search

> binary search is a searching technique that follows the divide and concer strategy, which means to break down a bigger problem in smaller chunks and solve them individually
> before merging them together.

## Requirements

- Elements of an array have to be in sorted order.

Lets imagine the following array:

## Approach

```js
// sorted array of length 15
const array = [1, 14, 24, 35, 44, 57, 64, 71, 79, 80, 85, 99, 105, 144, 190];
```

### index pointers

- low: `index` = 0
- high: `index` = n-1
- key: 44

### Algorithm:

get the middle value with:

```
mid = (low + high) / 2
```

#### Steps

1. get the middle value
2. check if `array[mid] === key`
3. if `array[mid]` > `key`, continue search left
   - high = `mid-1`
4. if `array[mid]` < `key`, continue search right
   - low = `mid+1`
5. repeat steps 1 - 4 until `array[mid] === key`
