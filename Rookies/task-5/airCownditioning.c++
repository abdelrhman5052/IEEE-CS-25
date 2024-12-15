#include <iostream>
#include <vector>
#include <climits>
using namespace std;


struct Cow {
    int start, end, cooling;
};

struct AirConditioner {
    int start, end, power, cost;
};

bool isValid(vector<int>& cooling, vector<Cow>& cows) {
    for (const Cow& cow : cows) {
        for (int i = cow.start; i <= cow.end; i++) {
            if (cooling[i] < cow.cooling) {
                return false;
            }
        }
    }
    return true;
}

int main() {
    int N, M;
    cin >> N >> M;

    vector<Cow> cows(N);
    vector<AirConditioner> airConditioners(M);

    
    for (int i = 0; i < N; i++) {
        cin >> cows[i].start >> cows[i].end >> cows[i].cooling;
    }

    
    for (int i = 0; i < M; i++) {
        cin >> airConditioners[i].start >> airConditioners[i].end >> airConditioners[i].power >> airConditioners[i].cost;
    }

    int minCost = INT_MAX;

    
    for (int mask = 0; mask < (1 << M); mask++) {
        vector<int> cooling(101, 0); 
        int cost = 0;


        for (int i = 0; i < M; i++) {
            if (mask & (1 << i)) {   
                const AirConditioner& ac = airConditioners[i];
                for (int j = ac.start; j <= ac.end; j++) {
                    cooling[j] += ac.power;
                }
                cost += ac.cost;
            }
        }

        
        if (isValid(cooling, cows)) {
            minCost = min(minCost, cost);
        }
    }

    
    cout << minCost << endl;

    return 0;
}
