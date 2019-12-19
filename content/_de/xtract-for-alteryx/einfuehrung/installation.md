---
ref: xfa-introduction-02
layout: page
title: Installation und Erste Schritte
description: Installation und Erste Schritte
product: xtract-for-alteryx
parent: einfuehrung
permalink: /:collection/:path
weight: 3
lang: de_DE
---

Das Installationsprogramm ist eine branchenübliche Installationsroutine, die alle nötigen Dateien in das Programmverzeichnis kopieret 
und im Windows-Programmenü einen Menüeintrag mit einigen Shortcuts anlegt.<br>
Das Setup installiert die Visual C++ 2005 Laufzeit-Bibliothek (Runtime library).  

## Installation und erste Schritte

Die Installation erfolgt durch das mitgelieferte Installationsprogramm in den Standardordner *C:\Program Files\XtractForAlteryx*. <br>
Während der Installation werden bestimmte Bibliotheken und Programmartefakte in die Alteryx-Installation auf derselben Maschine abgelegt, um die Komponenten später in der Alteryx-UI verfügbar zu machen. <br>
Diese Installation in der Zielumgebung erledigt das Programm *XtractForAlteryxPluginInstaller.exe*. Es wird vom Setup-Programm unter der Haube angestoßen. <br>
In der Log-Datei *XtractForAlteryxSetup.txt* kann exakt nachgelesen werden, welche Modifikationen am System vorgenommen wurden und ob bei der Installation Fehler aufgetreten sind.<br>
Wenn Sie nach der Installtion Alteryx starten, stehen die XfA-Komponenten in einem eigenen Reiter in der Toolbox innerhalb der Alteryx-UI zur Verfügung und können wie üblich per Drag & Drop auf den Workflow gezogen werden.<br>
Falls sie den Reiter nicht gleich sehen, scrollen sie bei den Toolbox-Reitern weiter nach rechts. Er versteckt sich bestimmt dort.

![Designer](/img/content/xtract_for_alteryx_tools.png){:class="img-responsive"}

**Empfehlung**<br>
Stellen Sie sicher, dass vor der Installation von Xtract For Alteryx der Alterxy Designer auf Ihrem Rechner geschlossen ist.
Durch dieses Vorgehen wird sicher gestellt, dass die XfA Komponenten im Alteryx Designer verfügbar sind und angezeigt werden können.

