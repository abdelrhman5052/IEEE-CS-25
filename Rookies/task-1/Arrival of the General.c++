#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n;
    cin >> n; 
    vector<int> heights(n);
    

    for (int i = 0; i < n; i++) {
        cin >> heights[i];
    }
    
    int maxHeight = *max_element(heights.begin(), heights.end());
    int minHeight = *min_element(heights.begin(), heights.end());

    int maxIndex = -1, minIndex = -1;
    
    for (int i = 0; i < n; i++) {
        if (heights[i] == maxHeight && maxIndex == -1) {
            maxIndex = i;
        }
        if (heights[i] == minHeight) {
            minIndex = i;
        }
    }
    int moves = maxIndex + (n - 1 - minIndex);
    
    
    if (maxIndex > minIndex) {
        moves -= 1;
    }
    cout << moves << endl;

    return 0;
}
