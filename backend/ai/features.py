# AI Feature Engineering (Placeholder)
# Future Goal: Convert raw invoice data into numeric vectors for risk scoring models.

def extract_features(invoice_data: dict) -> list[float]:
    """
    Convert invoice dictionary to feature vector.
    Example features: amount, buyer_history_score, industry_risk, days_since_last_invoice
    """
    # Placeholder implementation
    features = [
        float(invoice_data.get("amount", 0)),
        1.0, # Placeholder for buyer score
        0.0  # Placeholder for risk factor
    ]
    return features
