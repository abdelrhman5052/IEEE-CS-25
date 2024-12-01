#include <iostream>
using namespace std;

int main() {
    char direction; 
    string typed_message, original_message = "";
    cin >> direction >> typed_message; 
    
    string keyboard = "qwertyuiopasdfghjkl;zxcvbnm,./";  
    
    for (char c : typed_message) {
        int idx = keyboard.find(c);  
        original_message += (direction == 'L') ? keyboard[idx + 1] : keyboard[idx - 1];  
    }
    
    cout << original_message << endl; 
    return 0;
}
