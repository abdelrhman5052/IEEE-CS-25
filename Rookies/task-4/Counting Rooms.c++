#include <iostream>
#include <vector>
using namespace std;

void exploreRoom(int row, int col, vector<vector<char>> &grid, vector<vector<bool>> &visited, int rows, int cols) {
    if (row < 0 || row >= rows || col < 0 || col >= cols || visited[row][col] || grid[row][col] == '#') 
        return;

    visited[row][col] = true;

    
    exploreRoom(row + 1, col, grid, visited, rows, cols);
    exploreRoom(row - 1, col, grid, visited, rows, cols);
    exploreRoom(row, col + 1, grid, visited, rows, cols);
    exploreRoom(row, col - 1, grid, visited, rows, cols);
}

int findRoomCount(vector<vector<char>> &grid, int rows, int cols) {
    vector<vector<bool>> visited(rows, vector<bool>(cols, false));
    int roomCount = 0;

    
    for (int i = 0; i < rows; ++i) {
        for (int j = 0; j < cols; ++j) {
            if (grid[i][j] == '.' && !visited[i][j]) {
                roomCount++;
                exploreRoom(i, j, grid, visited, rows, cols);
            }
        }
    }

    return roomCount;
}

int main() {
    int rows, cols;
    cin >> rows >> cols;
    vector<vector<char>> grid(rows, vector<char>(cols));

    for (int i = 0; i < rows; ++i) {
        for (int j = 0; j < cols; ++j) {
            cin >> grid[i][j];
        }
    }

    cout << findRoomCount(grid, rows, cols) << endl;
    return 0;
}
