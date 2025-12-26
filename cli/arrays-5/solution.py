def find_key_pair(codes, target):
    # TODO: Find two indices where codes[i] + codes[j] == target
    return [-1, -1]

if __name__ == "__main__":
    codes = [2, 7, 11, 15]
    target = 22
    result = find_key_pair(codes, target)
    print(f"Keys at: {result} (Expected: [1, 3])")
