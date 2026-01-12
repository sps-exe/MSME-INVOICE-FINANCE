# MSME Finance AI Module

This directory contains the foundation for the future ML-powered risk engine.

## Contents
- `features.py`: Logic to convert raw invoice data into model-ready feature vectors.
- `dataset_export.py`: Utilities to export database records into CSVs for training.

## Roadmap
1. Collect data (Manual & Rule-based decisions).
2. Export data using `dataset_export.py`.
3. Train `scikit-learn` or `XGBoost` model.
4. Integrate model into `features.py` to replace rules.
