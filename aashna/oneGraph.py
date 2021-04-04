import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("dataset.csv")
del df["Date"]

colors = ["green", "red", "blue", "orange", "purple", "black", "yellow", "brown"]
counter = 0
plt.figure(figsize=(20, 5))
for i in df.columns[1:]:
   plt.plot(df["Calories"].sort_values(), df[i].sort_values(), color = colors[counter], label = i)
   plt.title(i)
   plt.ylabel(i)
   plt.legend()
   plt.xlabel("Calories")
   counter += 1

plt.show()
