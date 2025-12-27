// C++ Runner Template
// This file is provided by CodeQuest - DO NOT MODIFY
// Your solution goes in solution.cpp

#include <iostream>
#include <string>
#include <sstream>
#include "nlohmann/json.hpp"

using json = nlohmann::json;

// Forward declaration - user implements this in solution.cpp
json solve(json input);

int main() {
    // Read input from stdin
    std::stringstream buffer;
    buffer << std::cin.rdbuf();
    json input = json::parse(buffer.str());
    
    // Call user's solution
    json output = solve(input);
    
    // Output result as JSON
    std::cout << output.dump() << std::endl;
    
    return 0;
}
