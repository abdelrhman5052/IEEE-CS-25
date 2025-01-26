#include <iostream>
#include <vector>
using namespace std;

int n, m;
vector<int> cats;
vector<vector<int>> adj;  

int dfs(int node, int parent, int consecutiveCats) {
    
    if (cats[node] == 1) {
        consecutiveCats++;
    } else {
        consecutiveCats = 0;  
    }


    if (consecutiveCats > m) {
        return 0;
    }

    
    bool isLeaf = true;
    int count = 0;
    for (int neighbor : adj[node]) {
        if (neighbor != parent) {
            isLeaf = false;
            count += dfs(neighbor, node, consecutiveCats);
        }
    }

    
    if (isLeaf) {
        return 1;
    }

    return count;
}

int main() {
    cin >> n >> m;
    cats.resize(n);
    adj.resize(n);

    
    for (int i = 0; i < n; i++) {
        cin >> cats[i];
    }

    
    for (int i = 0; i < n - 1; i++) {
        int u, v;
        cin >> u >> v;
        u--; v--;  
        adj[u].push_back(v);
        adj[v].push_back(u);
    }

    cout << dfs(0, -1, 0) << endl;

    return 0;
}
