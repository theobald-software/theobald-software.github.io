---
ref: ecs-leave-request-01
layout: page
title: Abwesenheitsantrag stellen
description: Abwesenheitsantrag stellen
product: erpconnect-services
parent: abwesenheitsantrag
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=abwesenheitsantrag-stellen
progressstate: 3
---

Die Anwendung für den Mitarbeiter zur Beantragung von Abwesenheiten besteht aus drei Tabs:

- Übersicht: Hier erhält der Mitarbeiter einen Überblick über seine Zeitkontingente. 
- Meine Abwesenheiten: Hier kann der Mitarbeiter Abwesenheiten beantragen und erhält einen Überblick über bereits gestellte Anträge.
- Team Kalender: Hier erhält der Mitarbeiter einen Überblick über die Abwesenheiten seiner Teamkollegen. 

![bia-leave-1](/img/content/bia-leave-1.png){:class="img-responsive"}

Anlage und Anzeige von Abwesenheitsanträgen

Die Anwendung ermöglicht dem Mitarbeiter Abwesenheitsanträge zu erfassen und mit oder ohne Notiz (z.B. Abwesenheitsgründe) an den Vorgesetzten zu übermitteln. Ein neuer Antrag wird über den Tab *Meine Abwesenheiten* mit dem Button *Neuen Antrag* anlegen erstellt. Es erscheint ein Popup-Fenster, in dem die erforderlichen Informationen für den Antrag (z.B. Abwesenheitsart, Zeitraum) hinterlegt werden können. 

![bia-leave-2](/img/content/bia-leave-2.png){:class="img-responsive"}

Bei der Genehmigerfindung ziehen dabei die entsprechenden Einstellungen im SAP-System. Standardmäßig gehen Anträge über den Workflow an den Linienvorgesetzten der Organisationseinheit des Mitarbeiters. Validiert der Mitarbeiter mit dem Button Validieren seine Eingaben, dann wird der Linienvorgesetzte des Mitarbeiters im Feld Manager angezeigt und der Antrag kann versendet werden.

Datenvalidierung:


![bia-leave-3](/img/content/bia-leave-3.png){:class="img-responsive"}

Die zu beantragenden Abwesenheiten werden im SAP-Customizing definiert. Standardmäßig gehört zu den auswählbaren Abwesenheitsarten der Urlaub, aber es sind eine Vielzahl weiterer Anwendungsmöglichkeiten denkbar, wie z.B. Krankheit (mit oder ohne Attest), Kur, Gleitzeitausgleich, Dienstreise- und Dienstgang.      

Beantragt ein Mitarbeiter eine Abwesenheit, dann werden diese in einen Workflow mit verschiedenen Genehmigungsstaús übergeben. Technisch gesehen, werden die Abwesenheitsanträge in einer SAP-Datenbanktabelle abgelegt, wo Sie jederzeit pro Mitarbeiter oder über den kompletten Personalbestand SAP-seitig ausgewertet werden können. Im Webservice-Szenario bekommt der Mitarbeiter seine Anträge mit dem jeweiligen Genehmigungsstatus als Übersicht unter *Meine Abwesenheiten* angezeigt. 
Anträge können dort bearbeitet oder gelöscht werden. Standardmäßig funktioniert das Ändern und Löschen von Abwesenheiten nur für Abwesenheiten, die in der Zukunft liegen und nicht für zurückliegende Einträge, dies sind aber Einstellungen, die im SAP-Customizing hinterlegt sind und abgeändert werden können. 


Meine Abwesenheiten:

![bia-leave-4](/img/content/bia-leave-4.png){:class="img-responsive"}

### Teamkalender

Über den Tab "Teamkalender" bekommt der Mitarbeiter eine Kalenderübersicht mit den Abwesenheiten seiner Teammitglieder angezeigt. Der angezeigte Zeitraum kann beliebig angepasst werden (Wochen-, Monats-, oder Jahressicht). Sowohl für bereits abgeschlossene als auch künftige Zeiträume kann darüber abgerufen werden, welche Abwesenheiten der Mitarbeiter selbst oder die Teamkollegen bereits beantragt haben. Der Mitarbeiter hat damit immer einen aktuellen Überblick über die Abwesenheitssituation im Team und kann seine Abwesenheitsplanung darauf ausrichten.  


![bia-leave-5](/img/content/bia-leave-5.png){:class="img-responsive"}

Zusätzlich zur reinen Anzeige der Abwesenheiten im Team hat der Mitarbeiter auch die Möglichkeit, im *Teamkalender* mit einem Doppelklick auf den gewünschten Kalendertag, Abwesenheiten zu beantragen.  Auch hier erscheint das Popup-Fenster für die Beantragung von Abwesenheiten. Der im Kalender per Mausklick ausgewählte Tag wird dabei direkt ins Antragsfenster übernommen. 


Teamkalender Datumsauswahl über den Kalender:

![bia-leave-6](/img/content/bia-leave-6.png){:class="img-responsive"}

Abwesenheitsbeantragung über den Teamkalender:

![bia-leave-7](/img/content/bia-leave-7.png){:class="img-responsive"}

### Kontingentübersicht

Über den Tab *Übersicht* erhält der Mitarbeiter eine Zusammenfassung seiner Zeitkontingente, das sind die Abwesenheiten, die mit einem Kontingent verknüpft sind. Die Maske enthält sowohl eine Auflistung der angelegten Zeitkonten, als auch eine grafische Darstellung als Diagramm.


Kontingentübersicht:

![bia-leave-8](/img/content/bia-leave-8.png){:class="img-responsive"}

Üblicherweise handelt es sich beim Urlaub um eine Abwesenheit, die von einem Kontingent abträgt. Beantragt ein Mitarbeiter für fünf Tage Urlaub und bekommt diese genehmigt, dann wird das Kontingent von z.B. dreißig Tagen auf fünfundzwanzig Tage reduziert. In der Kontingentübersicht bekommt der Mitarbeiter dann genau aufgelistet, wieviel Tage bereits genehmigt wurden und wieviel Restkontingent für den festgelegten Abtragungszeitraum noch zur Verfügung stehen. 

### Menüleiste

Über die Menüleiste können verschiedene Einstellungen am Service vorgenommen werden.

![bia-leave-9](/img/content/bia-leave-9.png){:class="img-responsive"}

Mit dem Lupensymbol kann das Zeitintervall, auf welches sich die einzelnen Tabs beziehen, geändert werden. Standardmäßig ist der aktuelle Stichtag voreingestellt. Um im Tab *Meine Abwesenheiten* oder im Team Kalender Einträge außerhalb des aktuellen Datums zu sehen, muss das Intervall angepasst und beispielsweise auf das aktuelle Kalenderjahr abgeändert werden (01.01.YYYY – 31.12.YYYY). 

Zeitraumauswahl:

![bia-leave-10](/img/content/bia-leave-10.png){:class="img-responsive"}

Mit den Tabs "Übersicht neu laden" und "Teamkalender" neu laden wird dann der entsprechende Tab mit dem angepassten Datum neu aufgerufen.

Übersicht neu laden:


![bia-leave-11](/img/content/bia-leave-11.png){:class="img-responsive"}

Teamkalender neu laden:

![bia-leave-12](/img/content/bia-leave-12.png){:class="img-responsive"}

Mit dem Button *Einstellungen* können verschiedene technische Konfigurationen am Service vorgenommen werden. 

Einstellungen:

![bia-leave-13](/img/content/bia-leave-13.png){:class="img-responsive"}

Für den Service Leave Request und Leave Approval sind im Grunde nur die Felder *user.Personal number* und *view.language* relevant. 

Unter *user-Personal Number* kann man die Personalnummer des Mitarbeiters bzw. Antragsstellers (oder im Genehmigungsszenario des Managers bzw. Genehmigers) setzen, auf den sich der Service beziehen soll. 

Unter *view.language* kann die Anwendungssprache des Szenarios von Deutsch (DE) auf Englisch (EN) und umgekehrt abgeändert werden. Diese Einstellung betrifft aber nur die Spalten im Szenario, die Daten die aus SAP kommen, werden in der Sprache ausgegeben, in der die ECS Service Applikation konfiguriert ist. 

Mit *OK* werden die Daten bestätigt und mit *Speichern* bzw. *Speichern und neu laden* die Eingaben gesichert und die Anwendung neu geladen. Mit Standardwerte setzt man die Eingaben wieder auf die Standardwerte zurück. Mit Schließen wird die Konfigurationsmaske wieder geschlossen. 

![bia-leave-14](/img/content/bia-leave-14.png){:class="img-responsive"}

