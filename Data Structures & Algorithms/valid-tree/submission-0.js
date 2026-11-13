class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length > n - 1) {
            return false
        }

        const adj = Array.from({ length: n }, () => [])
        for (const [u, v] of edges) {
            adj[u].push(v)
            adj[v].push(u)
        }

        const dfs = (node, parent) => {
            if (visited.has(node)) {
                return false
            }

            visited.add(node)
            for (const nei of adj[node]) {
                if (nei === parent) {
                    continue
                }
                if (!dfs(nei, node)) {
                    return false
                }
            }
            return true
        }

        const visited = new Set()
        return dfs(0, -1) && visited.size === n
    }
}
