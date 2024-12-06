#include <iostream>
#include <vector>
using namespace std;

int main() {
    int totalBars;
    cin >> totalBars;

    vector<int> eatingTimes(totalBars);
    for (int& time : eatingTimes) cin >> time;

    int aliceIndex = 0, bobIndex = totalBars - 1, aliceTime = 0, bobTime = 0;

    while (aliceIndex <= bobIndex) {
        if (aliceTime <= bobTime) aliceTime += eatingTimes[aliceIndex++];
        else bobTime += eatingTimes[bobIndex--];
    }

    cout << aliceIndex << " " << totalBars - aliceIndex << endl;
    return 0;
}
