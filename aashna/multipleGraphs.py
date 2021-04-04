import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("dataset.csv")
del df["Date"]

colors = ["green", "red", "blue", "orange", "purple", "black", "yellow", "brown"]
counter = 0
for i in df.columns[1:]:
   plt.figure(figsize=(20, 5))
   plt.plot(df["Calories"].sort_values(), df[i].sort_values(), color = colors[counter])
   plt.title(i)
   plt.ylabel(i)
   plt.xlabel("Calories")
   plt.show()
   counter+=1
