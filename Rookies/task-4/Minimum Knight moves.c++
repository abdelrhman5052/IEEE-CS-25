#include <iostream>
#include <queue>
#include <vector>
using namespace std;

pair<int, int> toCoordinates(const string &square) {
    return {square[0] - 'a', square[1] - '1'};
}


bool isValid(int x, int y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
}


int minMoves(const string &start, const string &end) {
    if (start == end) return 0;

    vector<pair<int, int>> knightMoves = {{2, 1}, {1, 2}, {-1, 2}, {-2, 1}, {-2, -1}, {-1, -2}, {1, -2}, {2, -1}};
    auto [startX, startY] = toCoordinates(start);
    auto [endX, endY] = toCoordinates(end);

    queue<pair<int, int>> q;
    vector<vector<bool>> visited(8, vector<bool>(8, false));

    q.push({startX, startY});
    visited[startX][startY] = true;

    int steps = 0;
    while (!q.empty()) {
        int size = q.size();
        steps++;
        while (size--) {
            auto [x, y] = q.front();
            q.pop();
            for (auto [dx, dy] : knightMoves) {
                int newX = x + dx, newY = y + dy;
                if (newX == endX && newY == endY) return steps;
                if (isValid(newX, newY) && !visited[newX][newY]) {
                    visited[newX][newY] = true;
                    q.push({newX, newY});
                }
            }
        }
    }
    return -1; 
}

int main() {
    int testCases;
    cin >> testCases;
    while (testCases--) {
        string start, end;
        cin >> start >> end;
        cout << minMoves(start, end) << endl;
    }
    return 0;
}
