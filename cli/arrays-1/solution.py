def get_access_code(logs):
    return logs[2]
if __name__ == "__main__":
    # Local test
    logs = [10, 20, 30, 40, 50]
    result = get_access_code(logs)
    print(f"Result: {result} (Expected: 30)")
