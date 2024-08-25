# Leetcode 2149. Rearrange Array Elements by Sign

def rearrangeElements(nums):
    n = len(nums)
    res = [0] * n
    pos, neg = 0, 1
    
    pos_count = sum(1 for num in nums if num > 0)
    neg_count = n - pos_count
    
    if abs(pos_count - neg_count) > 1:
        raise ValueError("The input array does not have a balanced number of positive and negative numbers.")
    
    for i in range(n):
        if nums[i] > 0:
            res[pos] = nums[i]
            pos += 2
        else:
            res[neg] = nums[i]
            neg += 2
    
    return res


print(rearrangeElements([-3, 1, -2, -5, 2, 4]))