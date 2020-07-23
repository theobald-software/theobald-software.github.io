---
ref: ecs-leave-request-02
layout: page
title: Abwesenheitsantrag genehmigen
description: Abwesenheitsantrag genehmigen
product: erpconnect-services
parent: abwesenheitsantrag
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=abwesenheitsantrag-genehmigen
progressstate: 3
---

Die Anwendung für den Manager zur Genehmigung von Abwesenheiten besteht aus zwei Tabs:

- Meine Abwesenheiten: Dies ist der Arbeitsvorrat des Managers für die gestellten Anträge seiner Mitarbeiter. Hier können Anträge genehmigt oder
     abgelehnt werden.  
- Team Kalender: Hier erhält der Manager einen Überblick über die Abwesenheiten seiner Mitarbeiter.

Oberfläche Genehmigungsszenario:

![bia-manage-01](/img/content/bia-manage-01.png){:class="img-responsive"}

### Genehmigen oder Ablehnen von Anträgen

Ein noch ungenehmigter Abwesenheitsantrag eines Mitarbeiters befindet sich im Status Sent. In diesem Status bekommt der Vorgesetzte den Antrag in seinen Arbeitsvorrat gestellt. Beim Aufruf der Applikation und beim Auffrischen der Anzeige werden neue Anträge angezeigt.  


Genehmigungsszenario:

![bia-manage-02](/img/content/bia-manage-02.png){:class="img-responsive"}

Der Vorgesetzte kann Anträge mit dem Button Genehmigen auf der rechten Seite direkt genehmigen, diese erhalten dann den Status "Approved". Gleichzeitig wird im Hintergrund ein Job in SAP angestoßen, der die genehmigte Abwesenheit direkt in den Personalstammdaten (Infotyp 2001) verbucht. Damit ist der Abwesenheitsantrag abgeschlossen.
 
Mit dem Button *Ablehnen* kann der Vorgesetzte einen Abwesenheitsantrag auch zurückweisen. Er kann dabei optional dem Mitarbeiter eine Notiz zum Ablehnungsgrund zukommen lassen. Im SAP-Customizing kann eingestellt werden, dass das Versenden einer Notiz bei der Ablehnung von Anträgen zwingend erforderlich ist. 

### Teamkalender

Dem Vorgesetzten steht in dem Szenario ebenfalls ein Tab für den Teamkalender zur Verfügung. Der Teamkalender des Managers hat den gleichen Aufbau wie der Teamkalender des Mitarbeiters. Lediglich eine Beantragungsfunktion ist beim Manager nicht enthalten. Ist ein Manager ebenfalls dazu verpflichtet, Abwesenheiten beim nächst höheren Vorgesetzten zu beantragen, dann verwendet er dafür auch die Anwendung für Mitarbeiter.

Teamkalender Manager:


![bia-manage-03](/img/content/bia-manage-03.png){:class="img-responsive"}

