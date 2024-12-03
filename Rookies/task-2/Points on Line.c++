#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    long long d, count = 0;
    cin >> n >> d;

    vector<long long> x(n);
    
    for (int i = 0; i < n; ++i) cin >> x[i];

    for (int i = 0, j = 0; i < n; ++i) {
        while (j < n && x[j] - x[i] <= d) ++j;
        long long m = j - i - 1;
        if (m >= 2) count += m * (m - 1) / 2;
    }

    cout << count << endl;
    return 0;
}
