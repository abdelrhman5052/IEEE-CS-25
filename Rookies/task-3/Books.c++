#include <iostream>
#include <vector>
using namespace std;

int getMaxBooks(int numBooks, int maxTime, const vector<int>& readingTimes) {
    int start = 0, end = 0, currentTime = 0, maxBooks = 0;

    while (end < numBooks) {
        
        currentTime += readingTimes[end];
        end++;

        
        while (currentTime > maxTime) {
            currentTime -= readingTimes[start];
            start++;
        }

    
        maxBooks = max(maxBooks, end - start);
    }

    return maxBooks;
}

int main() {
    int numBooks, maxTime;
    cin >> numBooks >> maxTime;

    vector<int> readingTimes(numBooks);
    for (int i = 0; i < numBooks; ++i) {
        cin >> readingTimes[i];
    }

    cout << getMaxBooks(numBooks, maxTime, readingTimes) << endl;

    return 0;
}
