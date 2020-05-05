---
ref: ecs-leave-request-03
layout: page
title: Anwendungsbeispiel
description: Anwendungsbeispiel
product: erpconnect-services
parent: abwesenheitsantrag
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=anwendungsbeispiel
---

Als Anwendungsbeispiel soll ein Urlaubsantrag gestellt und vom Manager genehmigt werden. Anschließend soll in SAP überprüft werden, ob die Daten ordnungsgemäß verbucht wurden. 
    
Öffnen Sie zunächst das Szenario für den Mitarbeiter und passen Sie in der Menüleiste den Zeitraum auf das laufende Jahr an:

![bia-manage-04](/img/content/bia-manage-04.png){:class="img-responsive"}

Überprüfen Sie anschließend die Konfigurationseinstellungen für den Mitarbeiter. Hinterlegen Sie eine passende SAP Personalnummer im Feld user.PersonalNumber. Für die Personalnummer müssen Abwesenheitskontingente generiert sein und sie muss für die Zuordnung zu einem Genehmiger ins Organisationsmanagement eingebunden sein.  

![bia-manage-05](/img/content/bia-manage-05.png){:class="img-responsive"}

Legen Sie anschließend über den Tab *Meine Abwesenheiten* oder Team Kalender eine neue ein- oder mehrtägige Abwesenheit an. Verwenden Sie die Abwesenheitsart Urlaub, dann lässt sich auch gleich die Kontingentabtragung im Tab *Übersicht* nachvollziehen. 

Validieren Sie vor dem Abschicken Ihre Daten. Ein Urlaub darf beispielsweise nur für die Zukunft beantragt werden. 

![bia-manage-06](/img/content/bia-manage-06.png){:class="img-responsive"}

Überprüfen Sie ob der neue Antrag unter *Meine Abwesenheiten* aufgeführt ist. Er müsste dort im Status gesendet auftauchen. 

![bia-manage-07](/img/content/bia-manage-07.png){:class="img-responsive"}

Öffnen Sie, bevor Sie zum Szenario für die Genehmigung von Abwesenheiten wechseln, den Tab Übersicht und schauen Sie sich den Kontingentstand an. Im Beispiel stehen im Status ungenehmigt noch zwei Urlaubsanträge.

![bia-manage-08](/img/content/bia-manage-08.png){:class="img-responsive"}

Wechseln Sie danach zum Szenario für die Genehmigung von Abwesenheiten. Überprüfen Sie zunächst in den Konfigurationseinstellungen, ob die Personalnummer des Genehmigers hinterlegt ist.

![bia-manage-09](/img/content/bia-manage-09.png){:class="img-responsive"}

Passen Sie anschließend wieder das Zeitintervall für die Anwendung auf das laufende Kalenderjahr an, damit Sie den Antrag angezeigt bekommen. Wechseln Sie danach zum Tab meine Abwesenheiten. 

![bia-manage-10](/img/content/bia-manage-10.png){:class="img-responsive"}

Der eben gestellte Antrag ist nun im Arbeitsvorrat des Managers aufgeführt und kann genehmigt werden. Genehmigen Sie den Antrag.

![bia-manage-11](/img/content/bia-manage-11.png){:class="img-responsive"}

Der Antrag verschwindet anschließend aus dem Arbeitsvorrat.

![bia-manage-12](/img/content/bia-manage-12.png){:class="img-responsive"}

Wechseln Sie anschließend zum Szenario für den Mitarbeiter und aktualisieren Sie die Seite. Dort müsste nun unter *Meine Abwesenheiten*, der Antrag im Status genehmigt stehen. 

![bia-manage-13](/img/content/bia-manage-13.png){:class="img-responsive"}

Ob die Abwesenheit auch tatsächlich in SAP verbucht wurde, lässt sich zum einen überprüfen, indem Sie auf den Tab *Übersicht* wechseln. Dort ist jetzt nur noch ein Tag ungenehmigter Urlaub aufgeführt. Dies bedeutet, dass die Abwesenheit ordnungsgemäß in SAP verbucht wurde, denn nur in diesem Fall trägt eine Abwesenheit von einem Kontingent ab. 


![bia-manage-14](/img/content/bia-manage-14.png){:class="img-responsive"}

Auf der anderen Seite können Sie dies im SAP System überprüfen. Wechseln Sie zur SAP-Startseite und rufen Sie die Anzeige von Personalstammdaten mit der Transaktion PA20 auf.

![bia-manage-15](/img/content/bia-manage-15.png){:class="img-responsive"}

Geben Sie die Personalnummer des Antragstellers im Feld Personalnr ein und bestätigen Sie die Eingabe mit Return.

![bia-manage-16](/img/content/bia-manage-16.png){:class="img-responsive"}

Wechseln Sie anschließend zum Infotyp 2001 für Abwesenheiten und rufen Sie mit dem Übersichtsbutton die hinterlegten Einträge auf.

![bia-manage-17](/img/content/bia-manage-17.png){:class="img-responsive"}

Sie sehen, dass dort ein Datensatz für das von Ihnen gewählte Datum angelegt wurde.

![bia-manage-18](/img/content/bia-manage-18.png){:class="img-responsive"}

Wechseln Sie anschließend mit der gleichen Vorgehensweise zum Infotyp 2006 für Kontingente und wählen den Satz mit dem Urlaubsanspruch für das aktuelle Jahr aus. 

![bia-manage-19](/img/content/bia-manage-19.png){:class="img-responsive"}

Wie Sie dort sehen können, wurden insgesamt 6 Urlaubstage vom Gesamtanspruch von 30 Tagen abgetragen. Dies sind die genehmigten Urlaube, die in diesen Abtragungszeitraum fallen. 

![bia-manage-20](/img/content/bia-manage-20.png){:class="img-responsive"}

Dies deckt sich mit der Anzeige im Szenario in Tab *Übersicht* (Genehmigt bis...). 

![bia-manage-21](/img/content/bia-manage-21.png){:class="img-responsive"}

Damit wurde nun auch erfolgreich auf SAP-Seite überprüft, ob alle Daten ordnungsgemäß verarbeitet und in den entsprechenden Infotypen verbucht wurden.
 