# Dataset Export Utility (Placeholder)
# Future Goal: Export labeled invoice data (Invoice -> Status) for model training.

import csv

def export_to_csv(invoices, filename="training_data.csv"):
    """
    Exports list of invoice objects to CSV for AI training.
    """
    with open(filename, mode='w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(["id", "amount", "buyer", "status", "risk_score"])
        
        for invoice in invoices:
            writer.writerow([
                invoice.id, 
                invoice.amount, 
                invoice.buyer_name, 
                invoice.status,
                invoice.risk_score
            ])
