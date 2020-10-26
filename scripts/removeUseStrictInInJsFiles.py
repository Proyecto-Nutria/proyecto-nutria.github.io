import os

def getFileExtension(filename):
  return filename.split('.')[-1]


'''
  For the given path, get the List of all files in the directory tree 
'''
def getListOfFiles(dirName, extension="", ignore=[]):
  if (os.path.basename(dirName) in ignore):
    return []
  # create a list of file and sub directories 
  # names in the given directory 
  dirsOrFiles = os.listdir(dirName)
  allFiles = list()
  # Iterate over all the entries
  for entry in dirsOrFiles:
    # Create full path
    fullPath = os.path.join(dirName, entry)
    # If entry is a directory then get the list of files in this directory 
    if os.path.isdir(fullPath):
      allFiles += getListOfFiles(fullPath, extension, ignore)
    elif (extension == "" or extension == getFileExtension(fullPath)):
        allFiles.append(fullPath)
              
  return allFiles

def main():
  filenames = getListOfFiles('.', 'js', ['node_modules'])
  for filename in filenames:
    fileContent = ''
    with open(filename, "r") as f:
      fileContent = f.read()
    with open(filename, "w") as f:
      f.write(fileContent.replace("'use strict';\n", ""))

if __name__ == "__main__":
  main()