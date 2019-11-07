import nltk
import gensim
import json
from nltk.tokenize import word_tokenize

gen_docs = []
mlist = []
with open("arr.json","r") as json_file :
    data = json.load(json_file)

    for movie in data :
        mlist.append(movie['movie'])
        line = movie["key_words"]
        line = line.replace('\n',' ')
        print(line)
        x = input()
        # line = line.replace("\u000",' ')
        gen_docs.append([w.lower() for w in word_tokenize(line)])

# print(gen_docstemp[0][0])
# gen_docs = []
# for gen in gen_?docstemp :
    # gen_docs.append(gen[0])

dictionary = gensim.corpora.Dictionary(gen_docs)
corpus = [dictionary.doc2bow(gen_doc) for gen_doc in gen_docs]

tf_idf = gensim.models.TfidfModel(corpus)

sims = gensim.similarities.Similarity('workdir/',tf_idf[corpus],num_features=len(dictionary))

while (True) :
    line = input()
    query_doc = [w.lower() for w in word_tokenize(line)]
    query_doc_bow = dictionary.doc2bow(query_doc)                                    
    query_doc_tf_idf = tf_idf[query_doc_bow]
    temp = sims[query_doc_tf_idf]
    for i in range(0,len(mlist)) :
        print("{}\t{}".format(temp[i],mlist[i]))
    # x = input()