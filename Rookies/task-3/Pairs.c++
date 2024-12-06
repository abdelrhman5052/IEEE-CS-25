#include <iostream>
#include <unordered_set>
#include <vector>
using namespace std;

int countPairs(int k, const vector<int>& arr) {
    unordered_set<int> seenNumbers;
    int count = 0;

    for (int num : arr) {
        if (seenNumbers.count(num + k)) {
            count++;
        }
        if (seenNumbers.count(num - k)) {
            count++;
        }
        seenNumbers.insert(num);
    }

    return count;
}

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> arr(n);
    
    for (int i = 0; i < n; ++i) {
        cin >> arr[i];
    }

    cout << countPairs(k, arr) << endl;
    return 0;
}
