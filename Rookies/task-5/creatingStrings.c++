#include <iostream>
#include <set>
#include <algorithm>
using namespace std;

int main()
{
    string str;
    cin >> str;

    set<string> uniquePermutations;

    sort(str.begin(), str.end());

    do
    {
        uniquePermutations.insert(str);
    } while (next_permutation(str.begin(), str.end()));

    cout << uniquePermutations.size() << endl;

    for (const string &permutation : uniquePermutations)
    {
        cout << permutation << endl;
    }

    return 0;
}
