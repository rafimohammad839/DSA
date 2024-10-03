# Leetcode 332. Reconstruct Itineray

from collections import defaultdict
from typing import List

def findItinerary(tickets: List[List[str]]) -> List[str]:
    adj = defaultdict(list)
    tickets.sort(reverse=True)
    
    for src, dest in tickets:
      adj[src].append(dest)

    res = []

    def dfs(src):
        
      while adj[src]:
        next_dest = adj[src].pop()
        dfs(next_dest)
      res.append(src)

    dfs("JFK")
    
    return res[::-1]


tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
print(findItinerary(tickets))
