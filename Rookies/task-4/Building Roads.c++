#include <iostream>
#include <vector>
using namespace std;

class UnionFind {
public:
    UnionFind(int n) {
        parent.resize(n + 1);
        size.resize(n + 1, 1);
        for (int i = 1; i <= n; ++i) {
            parent[i] = i;
        }
    }
    
    int find(int a) {
        if (parent[a] != a) {
            parent[a] = find(parent[a]); 
        }
        return parent[a];
    }

    void unite(int a, int b) {
        int rootA = find(a);
        int rootB = find(b);
        
        if (rootA != rootB) {
            
            if (size[rootA] > size[rootB]) {
                parent[rootB] = rootA;
                size[rootA] += size[rootB];
            } else {
                parent[rootA] = rootB;
                size[rootB] += size[rootA];
            }
        }
    }

private:
    vector<int> parent;
    vector<int> size;
};

int main() {
    int n, m;
    cin >> n >> m;

    UnionFind uf(n);

    
    for (int i = 0; i < m; ++i) {
        int a, b;
        cin >> a >> b;
        uf.unite(a, b);
    }

    
    vector<vector<int>> components(n + 1);
    for (int i = 1; i <= n; ++i) {
        int root = uf.find(i);
        components[root].push_back(i);
    }

    
    vector<int> componentLeaders;
    for (int i = 1; i <= n; ++i) {
        if (uf.find(i) == i) {
            componentLeaders.push_back(i);
        }
    }

    
    int newRoadsCount = componentLeaders.size() - 1;
    cout << newRoadsCount << endl;

    for (int i = 1; i < componentLeaders.size(); ++i) {
        cout << componentLeaders[i - 1] << " " << componentLeaders[i] << endl;
    }

    return 0;
}
