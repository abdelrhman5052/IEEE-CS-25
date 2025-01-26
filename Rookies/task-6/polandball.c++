#include <iostream>
#include <unordered_set>
using namespace std;

int main() {
    int n;
    cin >> n;

    unordered_set<int> uniqueRoots; 
    for (int i = 0; i < n; ++i) {
        int relative;
        cin >> relative;
        uniqueRoots.insert(relative); 
    }

    cout << uniqueRoots.size() << endl; 

    return 0;
}
