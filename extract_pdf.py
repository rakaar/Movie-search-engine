import PyPDF2
# from summa import keywords
from googletrans import Translator
# # pdf file object
# # you can find find the pdf file with complete code in below
pdfFileObj = open('Pink.pdf', 'rb')
# # pdf reader object
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)

# # number of pages in pdf
# # print(pdfReader.numPages)

# # a page object
pageObj = pdfReader.getPage(5)

# # extracting text from page.
# # this will print the text you can also save that into String
text = pageObj.extractText()
translator = Translator()
trans = translator.translate(text).text
print(trans)

# # print(text)


# # Now the key words
# keyWords = keywords.keywords(text)
# print(keyWords)

# import json
# a = ['name', 'name', 'name']
# aa = json.dumps(a)

# js_file = open('arr.js', 'w')
# js_file.write(aa)
# js_file.close()

