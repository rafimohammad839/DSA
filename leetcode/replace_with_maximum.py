# Leetcode 1299. Replace Elements with Greatest Element on Right Side
def replaceElements(arr):
    maxi = float("-inf")
    n = len(arr)
    ret = [0] * n

    for i in range(n - 1, -1, -1):
        ret[i] = -1 if i == n - 1 else maxi
        maxi = max(maxi, arr[i])
    
    return ret

print(replaceElements([17,18,5,4,6,1]))