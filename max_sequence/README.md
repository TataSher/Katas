# Maximum subarray sum Kata

## Instructions

The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

```
maxSequence [-2, 1, -3, 4, -1, 2, 1, -5, 4]
-- should be 6: [4, -1, 2, 1]
```

Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.


Input                                            |  Output
max_sequence([11])                               | 11
max_sequence([1, 2 ,3])                          | 6
max_sequence([-32])                              | 0
max_sequence([-1, -2, -3])                       | 0
max_sequence([])                                 | 0
max_sequence([1, -1])                            | 1
max_sequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])    | 6
max_sequence([-2, 1, -7, 4, -10, 2, 1, 5, 4])    | 12