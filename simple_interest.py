#!/usr/bin/env python3

# Simple Interest Calculator
# Formula: Simple Interest = (Principal * Rate * Time) / 100

def calculate_simple_interest(principal, rate, time):
    return (principal * rate * time) / 100

def main():
    print("===================================")
    print("  Simple Interest Calculator")
    print("===================================")
    
    try:
        principal = float(input("Enter Principal amount: "))
        rate = float(input("Enter Rate of Interest (%): "))
        time = float(input("Enter Time period (in years): "))
        
        simple_interest = calculate_simple_interest(principal, rate, time)
        
        print("===================================")
        print(f"Simple Interest = {simple_interest}")
        print("===================================")
    
    except ValueError:
        print("Error: Please enter valid numbers.")

if __name__ == "__main__":
    main()
