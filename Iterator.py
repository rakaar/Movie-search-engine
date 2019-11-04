import os

import PyPDF2
from summa import keywords
import json

from googletrans import Translator
translator = Translator()

scripts = []
for file in os.listdir('scripts-data'):
    scripts.append(file)
hindi_ones = ['Rockstar.pdf', 'Nil Battey Sannata.pdf', 'NEERJA.pdf', 'Highway.pdf',  'Pink.pdf', 'JabWeMet.pdf', 'Queen.pdf', 'Raman Raghav 2_0.pdf']

# print(scripts)
final_list = []
# for script in scripts:
#     pdfFileObj = open(script, 'rb')
#     pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
#     numPages = pdfReader.numPages
#     for page_num in range(1, numPages + 1):
#         pageObj = pdfReader.getPage(page_num)
#         text = pageObj.extractText()
#         keyWords = keywords.keywords(text)
#         movies_with_keywords.append(keyWords)

for script in scripts:
    pdfFileObj = open(script, 'rb')
    movie_name = script[:-4]
    print('movie name 1st time ', movie_name)
    pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
    print('movie name 2nd time ', movie_name)
    numPages = pdfReader.numPages
    movie_with_keywords = []
    for page_num in range(1, numPages):
        pageObj = pdfReader.getPage(page_num)
        text = pageObj.extractText()
        try:
            if script in hindi_ones:
                text = translator.translate(text).text
            keyWords = keywords.keywords(text)
        except:
            continue
        movie_with_keywords.append(keyWords)
    final_list.append({'movie': movie_name,'key_words': movie_with_keywords})

print(len(final_list))
in_json = json.dumps(final_list)
js_file = open('arr.js', 'w')
js_file.write(in_json)
js_file.close()