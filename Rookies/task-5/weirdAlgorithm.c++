#include <iostream>
#include <vector>
#include <ranges>

int main() {
    int n;
    std::cin >> n;  
    
    
    std::vector<int> sequence;
    
    
    while (n != 1) {
        sequence.push_back(n);
        n = (n % 2 == 0) ? n / 2 : 3 * n + 1;  
    }
    sequence.push_back(1);  
    
    
    for (const auto& num : sequence | std::views::transform([](int n) { return std::to_string(n); })) {
        std::cout << num << " ";
    }
    std::cout << "\n";
    
    return 0;
}
