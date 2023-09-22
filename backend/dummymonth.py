import pandas as pd
import numpy as np

# Set the number of rows you want in the dataset
num_rows = 10000

# Create a dictionary to store the data
data = {
    'Product_ID': np.arange(1, num_rows + 1),
    'Month': np.random.choice(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], num_rows),
    'Price': np.random.uniform(10, 100, num_rows),
    'Production_Cost': np.random.uniform(5, 50, num_rows),
    'Production_Quantity': np.random.randint(100, 1000, num_rows),
    'Marketing_Expenses': np.random.uniform(0, 20, num_rows)
}

# Calculate profit based on the formula: (Price - Production Cost) * Production Quantity - Marketing Expenses
data['Profit'] = (data['Price'] - data['Production_Cost']) * data['Production_Quantity'] - data['Marketing_Expenses']

# Create a DataFrame
df = pd.DataFrame(data)

# Save the DataFrame to a CSV file
df.to_csv('dummy_dataset_with_month.csv', index=False)

print("Dummy dataset with", num_rows, "rows including 'Month' has been created and saved as 'dummy_dataset_with_month.csv'.")
