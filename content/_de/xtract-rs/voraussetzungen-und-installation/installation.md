---
layout: page
title: Installation
description: Installation
product: xtract-rs
parent: voraussetzungen-und-installation
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-RS-DE/default.aspx?pageid=installation
---

Die folgende Übersicht zeigt die Dateien, die die Installationsroutine mitbringt und auf dem Zielrechner installiert:

Im Verzeichnis [Programme]\XtractRS\:

**ERPConnect20.dll**<br>
enthält die Backend-Funktionen für den SAP-Zugriff.

**XtractRS.DataExtension.dll**<br>
enthält den Kern der Xtract RS Komponenten.

**XtractRS.License.dll**<br>
enthält Lizenz-Informationen.

__* .txt__<br>
enthält Templates für kundeneigene Funktionsbausteine.

**InstallXtractRS.exe**<br>
Konsolenprogramm für die Installation (verteilen und registrieren der Dlls).

**Gacutil.exe**<br>
nur zur internen Nutzung für die Assembly-Registrierung.

**XtractLicenseManager.exe**<br>
ist ein Programm zum Einspielen und Prüfen Ihrer aktuellen Lizenz.

Alle Dll-Dateien müssen im Global Assembley Cache von .NET 2.0 registriert sein. 

Darüber hinaus ist es noch notwendig, verschiedene der oben genannten Dlls in andere Verzeichnisse zu legen, damit die Visual Studio 2008 Oberfläche sie findet. Das Kopieren und Registrieren der Dlls übernimmt das Konsolenprogramm InstallXtractRS.exe. Es kann durch Doppelklick gestartet werden.