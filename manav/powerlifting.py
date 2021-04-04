import pandas as pd
import numpy as np
from keras.models import Sequential
from keras.layers import Dense
from keras.wrappers.scikit_learn import KerasRegressor
from sklearn.model_selection import cross_val_score
from sklearn.model_selection import KFold
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline

X = pd.DataFrame(np.genfromtxt('out.csv', delimiter=',')[:10000, :2])
Y = pd.DataFrame(np.genfromtxt('out.csv', delimiter=',')[:10000, 2:3])

print(X.head())
# output_data = np.array([[0, 0, 1], [0, 1, 0], [1, 0, 0]]) # cloth


# define base model
def baseline_model():
	# create model
	model = Sequential()
	model.add(Dense(2, input_dim=2, kernel_initializer='normal', activation='relu'))
	model.add(Dense(1, kernel_initializer='normal'))
	# Compile model
	model.compile(loss='mean_squared_error', optimizer='adam')
	return model


# evaluate model
estimator = KerasRegressor(build_fn=baseline_model, epochs=100, batch_size=32, verbose=1)
# kfold = KFold(n_splits=3)
results = cross_val_score(estimator, X, Y)
print("Baseline: %.2f (%.2f) MSE" % (results.mean(), results.std()))