#include <iostream>
#include <queue>
#include <vector>
#include <string>
#include <climits>
using namespace std;

struct Position {
    int row, col;
};

bool isValidMove(int row, int col, int rows, int cols, const vector<vector<char>> &maze) {
    return row >= 0 && row < rows && col >= 0 && col < cols && maze[row][col] != '#';
}

void calculateMonsterTimes(const vector<Position> &monsterPositions, const vector<vector<char>> &maze, vector<vector<int>> &monsterTimes, int rows, int cols) {
    queue<Position> monsterQueue;

    for (const auto &monster : monsterPositions) {
        monsterQueue.push(monster);
        monsterTimes[monster.row][monster.col] = 0;
    }

    vector<pair<int, int>> directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
    while (!monsterQueue.empty()) {
        auto [currentRow, currentCol] = monsterQueue.front();
        monsterQueue.pop();

        for (const auto &[dRow, dCol] : directions) {
            int newRow = currentRow + dRow, newCol = currentCol + dCol;
            if (isValidMove(newRow, newCol, rows, cols, maze) && monsterTimes[newRow][newCol] == INT_MAX) {
                monsterTimes[newRow][newCol] = monsterTimes[currentRow][currentCol] + 1;
                monsterQueue.push({newRow, newCol});
            }
        }
    }
}

pair<bool, string> findEscapePath(Position start, const vector<vector<char>> &maze, const vector<vector<int>> &monsterTimes, int rows, int cols) {
    queue<Position> playerQueue;
    vector<vector<int>> playerTimes(rows, vector<int>(cols, INT_MAX));
    vector<vector<Position>> parent(rows, vector<Position>(cols, {-1, -1}));
    vector<vector<char>> moveLabels(rows, vector<char>(cols, ' '));

    playerQueue.push(start);
    playerTimes[start.row][start.col] = 0;

    vector<pair<int, int>> directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
    vector<char> moveChars = {'U', 'D', 'L', 'R'};

    while (!playerQueue.empty()) {
        auto [currentRow, currentCol] = playerQueue.front();
        playerQueue.pop();

        
        if (currentRow == 0 || currentRow == rows - 1 || currentCol == 0 || currentCol == cols - 1) {
            string path = "";
            while (currentRow != start.row || currentCol != start.col) {
                path += moveLabels[currentRow][currentCol];
                auto [prevRow, prevCol] = parent[currentRow][currentCol];
                currentRow = prevRow;
                currentCol = prevCol;
            }
            reverse(path.begin(), path.end());
            return {true, path};
        }

        for (int i = 0; i < 4; ++i) {
            int newRow = currentRow + directions[i].first, newCol = currentCol + directions[i].second;
            if (isValidMove(newRow, newCol, rows, cols, maze) && playerTimes[newRow][newCol] == INT_MAX &&
                playerTimes[currentRow][currentCol] + 1 < monsterTimes[newRow][newCol]) {
                playerTimes[newRow][newCol] = playerTimes[currentRow][currentCol] + 1;
                parent[newRow][newCol] = {currentRow, currentCol};
                moveLabels[newRow][newCol] = moveChars[i];
                playerQueue.push({newRow, newCol});
            }
        }
    }

    return {false, ""};
}

int main() {
    int rows, cols;
    cin >> rows >> cols;
    vector<vector<char>> maze(rows, vector<char>(cols));
    Position playerStart;
    vector<Position> monsters;

    for (int i = 0; i < rows; ++i) {
        for (int j = 0; j < cols; ++j) {
            cin >> maze[i][j];
            if (maze[i][j] == 'A') {
                playerStart = {i, j};
            } else if (maze[i][j] == 'M') {
                monsters.push_back({i, j});
            }
        }
    }

    vector<vector<int>> monsterTimes(rows, vector<int>(cols, INT_MAX));
    calculateMonsterTimes(monsters, maze, monsterTimes, rows, cols);

    auto [escaped, escapePath] = findEscapePath(playerStart, maze, monsterTimes, rows, cols);

    if (escaped) {
        cout << "YES" << endl;
        cout << escapePath.size() << endl;
        cout << escapePath << endl;
    } else {
        cout << "NO" << endl;
    }

    return 0;
}
