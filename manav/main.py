from keras.models import Sequential
from keras.layers import Dense
import numpy as np
from keras.optimizers import SGD
import csv
import pandas as pd

# load csv
filename = "openpowerlifting.csv"
print("opening file")
raw_data = open(filename, 'rt')
print("opened file")
reader = csv.reader(raw_data, delimiter=',', quoting=csv.QUOTE_NONE)
rows = list(reader)

inputDataArr = []
outputDataArr = []
totalData = []

for i in range(len(rows)):
    if (i == 0): continue # ignore header row
    if (not (len(rows[i]) == 37)):
        print("Malformed entry, row %s: %s" % (i, rows[i]))
    else:
        try:
            sex = float(0 if rows[i][1] == 'M' else 1) # M = 0; F = 1
            age = float(rows[i][4])

            squat1Kg = float(rows[i][9])
            if (squat1Kg < 0): 
                continue

            inputDataArr.append([sex, age])
            outputDataArr.append([squat1Kg])

            totalData.append([sex, age, squat1Kg])
        except:
            continue

with open("out.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerows(totalData)
 
# # Build dataset
# input_data = np.array(inputDataArr)
# print(input_data.shape)
# output_data = np.array(outputDataArr)
# print(output_data.shape)
 
# seed = 7
# np.random.seed(seed)
 
# model = Sequential()
# model.add(Dense(8, input_dim=2, activation='sigmoid'))
# model.add(Dense(256, input_dim=2, activation='sigmoid'))
# model.add(Dense(1, activation='softmax'))
 
# # model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])
# model.compile(optimizer='adam',loss='mean_squared_error')
 
# # Fit the model
# model.fit(input_data, output_data, epochs=100, batch_size=10, verbose=1, validation_split=0.1)
 
# # evaluate the model
# loss, accuracy = model.evaluate(input_data, output_data)
 
# # calculate predictions
# predictions = model.predict(np.array([[1, 29]]))
# print (np.round(predictions))