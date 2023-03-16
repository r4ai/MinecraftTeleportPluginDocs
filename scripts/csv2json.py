"""
Converts all csv files in the data directory to json files.
"""

import csv
import json
import glob
import subprocess

ROOT_DIR = subprocess.check_output(
    ['git', 'rev-parse', '--show-toplevel']).decode('utf-8').strip()

for filename in glob.glob(f'{ROOT_DIR}/data/**/*.csv', recursive=True):
    with open(filename, 'r', encoding='UTF-8') as f:
        reader = csv.DictReader(f)
        rows = list(reader)

    with open(filename.replace('.csv', '.json'), 'w', encoding='UTF-8') as f:
        json.dump(rows, f, ensure_ascii=False, indent=2)

    print(f"Converted {filename} to json")
