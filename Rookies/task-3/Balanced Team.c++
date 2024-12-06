#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int studentCount;
    cin >> studentCount;
    vector<int> skillLevels(studentCount);
    for (int i = 0; i < studentCount; ++i) cin >> skillLevels[i];

    sort(skillLevels.begin(), skillLevels.end());
    int maxTeamSize = 0, start = 0;

    for (int end = 0; end < studentCount; ++end) {
        while (skillLevels[end] - skillLevels[start] > 5) start++;
        maxTeamSize = max(maxTeamSize, end - start + 1);
    }

    cout << maxTeamSize << endl;
    return 0;
}
