#!/usr/bin/env python3

import os
import sys
import fileinput
import io
import platform

nom = 0
aliases = 0

def Main():
    if sys.platform == 'win32':
        clear = lambda: os.system('cls')
        clear()
    else:
        clear = lambda: os.system('clear')
        clear()
    GenerationModule()

def GenerationModule():
    print("Création d'un nouveau Générateur pour le bot.")
    print("                                     --- V0.1")
    global n 
    global a
    n = input("Nom du Module : ")
    a = input("Aliases du Module :")
    if len(n) > 0 :
        global nom
        nom = 1
    if len(a) > 0 :
        global aliases
        aliases = 1
    LectureFichier()

def LectureFichier(): 
    f = io.open("./commands/Gen/Modele.js", mode="r", encoding="utf-8")
    global filedata
    filedata = f.read()
    RemplaceFile()

def RemplaceFile():
    if nom :
        #print(filedata)
        global newdata
        newdata = filedata.replace("nom", n).replace("/* name", "name").replace(n + "\", */", n + "\" ,")
        if aliases : 
            newdata = newdata.replace("diminutif", a).replace("/* aliases", "aliases").replace(a + "\"], */", a + "\"],")
        WriteNewFile()
    if not nom :
        Main()

def WriteNewFile():
    f = io.open("./commands/Gen/" + n.capitalize() + ".js", mode="x", encoding="utf-8")
    f.write(newdata)
    f.close()
    print("Le générateur nommé " + n + ".js a été crée avec success.")
    print("\n")
    print("Il vous reste plus qu'a modifié dans inscription_gen et le rajouté a votre DB mysql")

Main()

        