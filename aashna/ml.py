# import libraries
import pandas as pd
import statsmodels.api as sm
from sklearn.model_selection import train_test_split

# import csv file and drop irrelevant columns
df = pd.read_csv("dataset.csv")
df=df.drop(["Date", "Steps", "Distance", "floors", "Calories_Activity"], axis=1)

# create feature and target variables
X = df[['Minutes_of_slow_activity','Minutes_of_moderate_activity','Minutes_of_intense_activity']]
y = df['Calories']

# split into train and test data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.33, random_state = 42)

# create linear regression model
X_train_sm = sm.add_constant(X_train)
lr = sm.OLS(y_train, X_train_sm).fit()

#predict calories using y = b0 + b1 * x1 + b2 * x2 + b3 * x3
def predict_calories(minutes_of_slow_activity, minutes_of_moderate_activity, minutes_of_intense_activity):
  calories = lr.params[0] + lr.params[1] * minutes_of_slow_activity + lr.params[2] * minutes_of_moderate_activity + lr.params[3] * minutes_of_intense_activity
  return f'{(calories*100).round()} Calories'

while True:
  #take user input for minutes of excersise
  slow_activity = input("Enter minutes of slow activity: ")
  moderate_activity = input("Enter minutes of moderate activity: ")
  intense_activity = input("Enter minutes of intense activity: ")

  #call predict calories function and pass in user input as parameters
  predicted_calories = predict_calories(int(slow_activity),int(moderate_activity),int(intense_activity))
  print(predicted_calories)