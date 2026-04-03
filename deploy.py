import subprocess
import os

os.chdir('.')
result = subprocess.run(['vercel', '--prod'], capture_output=True, text=True)
print("[v0] stdout:", result.stdout)
print("[v0] stderr:", result.stderr)
print("[v0] returncode:", result.returncode)
