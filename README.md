# Bussiness_on_bot_task1

The use of social media has increased over the past two years due to Covid-19 pandemic.The main objective of this analysis is to understand public sentiment. A lot of people have used social media as a medium to express their feelings and emotions where some people conveyed sad messages while others shared positive content. People have also used social media to seek medical help related to vaccines and others. Analyzing these type of data posted on social media might help us analyze and solve many issues related to the pandemic. In this analysis I have used classification in Machine Learning algorithms to find out whether the sentiment portrayed by the tweets in Twitter are positive or negative.

 The first thing is to import the necessary libraries for the initial process which is to load the dataset.

 Then I went through the dataset to see if there are any missing or null values present.

 Next comes the pre - processing of the data. The tweets in the dataset has a lot of unwanted characters present in it which might complicate the model fitting process

 The text cleaning process involves lowering case and removing hyperlinks / urls, punctuations, whitespace, mentions, newline,numbers etc. Further text pre-processing includes removing stopwords, lemmatizing the words in the tweets and tokenizing the sentences which is done using Natural Language Processing.

 The data conatins large amount of data in text format which might be difficult for the machine to understand what the texts mean. To solve this problem all the text data must be converted into machine readable format.To do this, I used the bag of words in keras which basically converts text into a vector.

 There are two categories for the sentiment attribute in the dataset which is 'Positive' and 'Negative'. In order for the machine to understand what those two catgories mean I used labelencoder to label these two categories where Positive will be assigned the value '1' and Negative the value '-1'.

 In feature selection, I selected the vectorized values for the independant variable and the Sentiment attribute for the dependent variable.

 Next I used train_test_split in scikit learn to split the data for training and testing for model building.

 The Machine learning models for binary classification that I used here are Naive Bayes, Decision tree and random forest classifier. Out of these three Naive Bayes performed well.

