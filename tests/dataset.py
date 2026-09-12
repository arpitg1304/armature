"""Compatibility entry point for current V28 export validation."""
import runpy
from pathlib import Path
runpy.run_path(str(Path(__file__).with_name("v28-dataset.py")), run_name="__main__")
