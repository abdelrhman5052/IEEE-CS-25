#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

long long countPairs(int n, int l, int r, vector<int>& a) {
    sort(a.begin(), a.end());
    long long count = 0;

    for (int i = 0; i < n; ++i) {
        
        count += upper_bound(a.begin() + i + 1, a.end(), r - a[i]) -
                 lower_bound(a.begin() + i + 1, a.end(), l - a[i]);
    }

    return count;
}

int main() {
    int t, n, l, r;
    cin >> t;
    while (t--) {
        cin >> n >> l >> r;
        vector<int> a(n);
        for (int& x : a) cin >> x;
        cout << countPairs(n, l, r, a) << endl;
    }
    return 0;
}
