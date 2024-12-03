#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>
using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<long long> cities(n), towers(m);
    for (int i = 0; i < n; ++i) cin >> cities[i];
    for (int i = 0; i < m; ++i) cin >> towers[i];
    long long r = 0;

         for (int i = 0; i < n; ++i) {
        auto it = lower_bound(towers.begin(), towers.end(), cities[i]);

           long long dist1 = (it != towers.end()) ? abs(cities[i] - *it) : LLONG_MAX;

        long long dist2 = (it != towers.begin()) ? abs(cities[i] - *(it - 1)) : LLONG_MAX;

              long long minDist = min(dist1, dist2);

        r = max(r, minDist);
    }

    cout << r << endl;
    return 0;
}
