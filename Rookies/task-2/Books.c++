#include <iostream>
#include <vector>
using namespace std;

int handle(int n, int t, const vector<int>& a) {
    int start = 0, currentS = 0, maxB = 0;
    
    for (int end = 0; end < n; ++end) {
        currentS += a[end];  
        
        
        while (currentS > t) {
            currentS -= a[start];
            start++;
        }
        
        
        maxB = max(maxB, end - start + 1);
    }
    
    return maxB;
}

int main() {
    int n, t;
    cin >> n >> t;  
    
    vector<int> a(n);
    for (int i = 0; i < n; ++i) {
        cin >> a[i];  
    }
    
    cout << handle(n, t, a) << endl;  
    
    return 0;
}
