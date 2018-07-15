# Uhack2018
This project is to use multi-layer neural networks to predict housing price. Due to the time limitaion, deeper model of deep learning is not implemented, such as Triplet Network, GoogLeNet.

## Dataset
In this project, we use the dataset from Kaggle.com for Melbourne Housing Market created by Tony Pino. Thanks for this dataset which contains many features for housing price prediction. Here is the link for dataset:
https://www.kaggle.com/anthonypino/melbourne-housing-market/home

## Data Process
Since quite a few features in the dataset are categorical values, one hot encoding is implemented to handle this problem.

## Model
This model is implemented in Jupyter Notebook, with library of keras and pandas mainly. Due to the limitation of time, we didn't design complex modelling such as triplet network, Googlet. We implement multiple layers with Relu activation function.

Since the output is numeric numbers, we implement regression with mean squared error as metrics rather than traditional binary approach with accuracy as metrics.
