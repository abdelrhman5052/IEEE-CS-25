#include <iostream>
#include <vector>
using namespace std;


const int N = 8;


bool isSafe(int row, int col, vector<vector<char>>& board, vector<bool>& cols, vector<bool>& diag1, vector<bool>& diag2) {
    return board[row][col] == '.' && !cols[col] && !diag1[row - col + N - 1] && !diag2[row + col];
}

void solve(int row, vector<vector<char>>& board, vector<bool>& cols, vector<bool>& diag1, vector<bool>& diag2, int& count) {
    if (row == N) {
        
        count++;
        return;
    }

    for (int col = 0; col < N; col++) {
        if (isSafe(row, col, board, cols, diag1, diag2)) {
        
            cols[col] = diag1[row - col + N - 1] = diag2[row + col] = true;


            solve(row + 1, board, cols, diag1, diag2, count);

        
            cols[col] = diag1[row - col + N - 1] = diag2[row + col] = false;
        }
    }
}

int main() {
    vector<vector<char>> board(N, vector<char>(N));
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            cin >> board[i][j];
        }
    }

    
    vector<bool> cols(N, false);        
    vector<bool> diag1(2 * N - 1, false); 
    vector<bool> diag2(2 * N - 1, false); 

    int count = 0;

    
    solve(0, board, cols, diag1, diag2, count);


    cout << count << endl;

    return 0;
}
