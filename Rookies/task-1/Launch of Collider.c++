#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n; 
    string directions;
    cin >> directions; 
    int prevPos, currPos;
    int minTime = -1;

    






    for (int i = 0; i < n; i++) {
        cin >> currPos; 
        if (i > 0 && directions[i-1] == 'R' && directions[i] == 'L') {
            int time = (currPos - prevPos) / 2;
            if (minTime == -1 || time < minTime) {
                minTime = time;
            }
        }
        prevPos = currPos;
    }

    cout << minTime << endl;  
    return 0;
}
