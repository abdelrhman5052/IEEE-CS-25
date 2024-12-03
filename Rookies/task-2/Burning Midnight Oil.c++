#include <iostream>
using namespace std;

long long calculate(int a, int b) {
    long long total = 0;
    while (a > 0) {
        total += a;
        a /= b; 
    }
    return total;
}

int main() {
    int n, b;
    cin >> n >> b;
    
    int low = 1, high = n, result = n;
    

    while (low <= high) {
        int mid = (low + high) / 2;
        if (calculate(mid, b) >= n) {
            result = mid; 
            high = mid - 1;
        } else {
            low = mid + 1; 
        }
    }
    
    cout << result << endl;
    return 0;
}
