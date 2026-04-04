#!/usr/bin/env python3
import subprocess
import os

try:
    result = subprocess.run(['git', 'reset', '--hard', '4a93a49'], capture_output=True, text=True, cwd='.')
    print("[v0] Reset output:", result.stdout)
    if result.stderr:
        print("[v0] Errors:", result.stderr)
    print("[v0] Reset completed successfully to commit 4a93a49")
except Exception as e:
    print(f"[v0] Error: {e}")
