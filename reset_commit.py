import subprocess
import os

os.chdir('/vercel/share/v0-project')
result = subprocess.run(['git', 'reset', '--hard', '4a93a49'], capture_output=True, text=True)
print(result.stdout)
print(result.stderr)
