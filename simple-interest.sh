#!/bin/bash

# Simple Interest Calculator
# Formula: Simple Interest = (Principal * Rate * Time) / 100

echo "==================================="
echo "  Simple Interest Calculator"
echo "==================================="

# Prompt user for principal amount
echo -n "Enter Principal amount: "
read principal

# Prompt user for rate of interest
echo -n "Enter Rate of Interest (%): "
read rate

# Prompt user for time period in years
echo -n "Enter Time period (in years): "
read time

# Calculate simple interest
simple_interest=$(( ($principal * $rate * $time) / 100 ))

# Display the result
echo "==================================="
echo "Simple Interest = $simple_interest"
echo "==================================="
