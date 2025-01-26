#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

int directions[4][2] = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};

int bfs(const vector<vector<int>>& grid, vector<vector<bool>>& visited, int x, int y, int n, int m) {
    queue<pair<int, int>> q;
    q.push({x, y});
    visited[x][y] = true;
    int volume = 0;

    while (!q.empty()) {
        auto [cx, cy] = q.front();
        q.pop();
        volume += grid[cx][cy]; 

        
        for (int i = 0; i < 4; ++i) {
            int nx = cx + directions[i][0];
            int ny = cy + directions[i][1];

            
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && !visited[nx][ny] && grid[nx][ny] > 0) {
                visited[nx][ny] = true;
                q.push({nx, ny});
            }
        }
    }

    return volume;
}

int main() {
    int t;
    cin >> t;

    while (t--) {
        int n, m;
        cin >> n >> m;

        vector<vector<int>> grid(n, vector<int>(m));
        vector<vector<bool>> visited(n, vector<bool>(m, false));

    
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < m; ++j) {
                cin >> grid[i][j];
            }
        }

        int maxVolume = 0;

    
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < m; ++j) {
                if (grid[i][j] > 0 && !visited[i][j]) {
                    
                    maxVolume = max(maxVolume, bfs(grid, visited, i, j, n, m));
                }
            }
        }

        cout << maxVolume << endl; 
    }

    return 0;
}
