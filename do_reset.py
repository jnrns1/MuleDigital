#!/usr/bin/env python3
import subprocess
import os

# Check where we are
print("[v0] Current directory:", os.getcwd())
print("[v0] Files in current directory:", os.listdir('.')[:5])

# Git reset to 4a93a49
try:
    result = subprocess.run(['git', 'reset', '--hard', '4a93a49'], capture_output=True, text=True)
    print("[v0] Git reset output:", result.stdout)
    if result.stderr:
        print("[v0] Git errors:", result.stderr)
    if result.returncode == 0:
        print("[v0] Successfully reset to commit 4a93a49")
    else:
        print("[v0] Git reset failed with return code:", result.returncode)
except Exception as e:
    print(f"[v0] Exception: {e}")
