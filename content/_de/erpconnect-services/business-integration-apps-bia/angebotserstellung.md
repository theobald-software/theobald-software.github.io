---
ref: ecs-business-integration-apps-03
layout: page
title: Angebotserstellung
description: Angebotserstellung
product: erpconnect-services
parent: business-integration-apps-bia
childidentifier: angebotserstellung
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=angebotserstellung
progressstate: 3
---

**SAP Quotation** ist eine mit ERPConnect Services entwickelte Business Integration App für SharePoint.
Die App ermöglicht es, Angebote für Materialien oder Dienstleistungen im SAP-System zu erfassen oder sich über eine Suchfunktion bereits angelegte Datensätze anzeigen zu lassen. Während die SAP-Transaktion zur Angebotserstellung aus mehreren Eingabeebenen und Tabs besteht, ist der Aufbau der Business Integration App möglichst einfach gehalten. Es sind die für eine Angebotserstellung unbedingt notwendigen Eingabefelder vorhanden. Damit ist es auch SAP-fremden Anwendern ohne Schulungsaufwand möglich, Datensätze zu erfassen, die dann von den SAP-Spezialisten weiterbearbeitet werden können.


Die Lösung wird als Installer-Paket ausgeliefert und kann damit bequem auf Ihrem SharePoint Server installiert werden.

### Aufbau der App

Die Anwendung besteht aus einer einzigen Eingabemaske mit einer überschaubaren Anzahl an Feldern. Im Hauptbereich sind die für eine Angebotserstellung zwingend erforderlichen Eingabefelder aufgeführt und im unteren Bildschirmbereich können dem Angebot entsprechende Materialpositionen hinzugefügt werden. Über die Menüleiste am unteren Rand besteht zudem die Möglichkeit, sich über eine einfache Suchfunktion bereits angelegte Angebote anzeigen zu lassen.

![ECS-BIA-SAPQuotation1](/img/content/ECS-BIA-SAPQuotation1.png){:class="img-responsive"}

### Durchführung einer Angebotserstellung


Zur Erstellung eines neuen Angebots müssen alle Muss-Felder der Eingabeoberfläche mit Daten hinterlegt werden. Beim Klicken in die Eingabefelder wird der User über die Schaltflächen informiert, ob es sich um ein erforderliches Feld handelt oder nicht. Es werden dabei alle Felder angesprochen, die auch in der SAP-Anwendung zwingend für die Anlage eines Angebots benötigt werden. 

![ECS-BIA-SAPQuotation2](/img/content/ECS-BIA-SAPQuotation2.png){:class="img-responsive"}

Bei den Eingaben muss es sich um gültige Werte im SAP-System handeln. Für einzelne Eingabefelder steht dabei eine Wertehilfe für die Dateneingabe zur Verfügung. Es kann dabei komfortabel ohne zusätzliches Suchfenster direkt im Eingabefeld beliebig nach einem SAP-Schlüssel oder dem Langtext gesucht werden.   

![ECS-BIA-SAPQuotation3](/img/content/ECS-BIA-SAPQuotation3.png){:class="img-responsive"}

Über den Button *Neue Position* hinzufügen werden die Materialpositionen definiert, die man mit diesem Angebot verknüpfen möchte. Auch hier steht eine Suchhilfe für die in SAP hinterlegten Materialien zur Verfügung.

![ECS-BIA-SAPQuotation4](/img/content/ECS-BIA-SAPQuotation4.png){:class="img-responsive"}

Es ist möglich, mehrere Positionen zu dem Angebot hinzuzufügen. Wurden alle Eingaben getätigt, sichert man das Angebot mit dem Diskettensymbol. Es findet dabei eine Validierung der Daten statt. Ungültige Angaben lassen sich nicht sichern und es wird eine Fehlermeldung im Service ausgegeben. Nach erfolgreichem Sichern werden die Daten im SAP-System dann auf die entsprechenden Tabellen (z.B. VBAP und VBAK) und Datenbanken weggeschrieben.

Datenvalidierung nach Sicherung der Daten:

![ECS-BIA-SAPQuotation5](/img/content/ECS-BIA-SAPQuotation5.png){:class="img-responsive"}

Erfolgreiche Anlage eines Datensatzes:

![ECS-BIA-SAPQuotation6](/img/content/ECS-BIA-SAPQuotation6.png){:class="img-responsive"}

### Angebotsanzeige


Neben der Erstellung neuer Angebote bietet der Service auch die Möglichkeit, über die eindeutig zugewiesene Belegnummer des Vertriebsdokuments, nach bereits angelegten Angeboten zu suchen und sich diese anzeigen zu lassen. Der Service vereint damit eine Anlage- und Auswertungsfunktion, was ihn vielfältig nutzbar macht.<br>   
Zur Anzeige eines Angebots klickt man in der Menüleiste im unteren Bildschirmbereich der Anwendung auf das Lupensymbol und gibt dort die Belegnummer ein, für die man sich das Angebot anzeigen lassen möchte.  


Anzeige von Angeboten:

![ECS-BIA-SAPQuotation7](/img/content/ECS-BIA-SAPQuotation7.png){:class="img-responsive"}

Anzeige bestimmter Belegnummern:

![ECS-BIA-SAPQuotation8](/img/content/ECS-BIA-SAPQuotation8.png){:class="img-responsive"}

Die weiteren Felder der Menüleiste beinhalten Funktionen wie z.B. das Zurücksetzen der Eingabefelder, die Neuanlage eines Angebotes, falls man sich im Anzeigemodus befindet, oder die Auflistung der letzten SAP-Meldungen bei der Datenvalidierung.

![ECS-BIA-SAPQuotation9](/img/content/ECS-BIA-SAPQuotation9.png){:class="img-responsive"}

### Anwendungsbeispiel

Mit dem Button *Eingabefelder zurücksetzen* in der Menüleiste werden die Eingabefelder mit beispielhaften Testdaten befüllt, mit denen ein Angebot angelegt werden kann. 

Eingabefelder zurücksetzen:

![ECS-BIA-SAPQuotation10](/img/content/ECS-BIA-SAPQuotation10.png){:class="img-responsive"}

Sichern Sie die Einstellungen mit dem Diskettensymbol. Das Angebot wird daraufhin angelegt und eine Belegnummer erzeugt.

Anlage einer neuen Belegnummer:


![ECS-BIA-SAPQuotation11](/img/content/ECS-BIA-SAPQuotation11.png){:class="img-responsive"}

Um die Belegnummer nochmal zu notieren und sich den Eintrag beispielsweise in SAP anzuschauen, kann diese über den Button *Letzte SAP Nachricht* in der Menüleiste nochmals aufgerufen werden.

Aufrufen der letzten SAP-Nachricht:

![ECS-BIA-SAPQuotation12](/img/content/ECS-BIA-SAPQuotation12.png){:class="img-responsive"}

![ECS-BIA-SAPQuotation13](/img/content/ECS-BIA-SAPQuotation13.png){:class="img-responsive"}

Mit der Transaktion VA23 kann man sich das angelegte Angebot dann in SAP anschauen. Öffnen Sie über das Transaktionsfenster die Transaktion VA23.


Transaktion VA23:

![ECS-BIA-SAPQuotation14](/img/content/ECS-BIA-SAPQuotation14.png){:class="img-responsive"}

Klicken Sie in der folgenden Einstiegsmaske auf Angebote.


Einstieg Angebote anzeigen:

![ECS-BIA-SAPQuotation15](/img/content/ECS-BIA-SAPQuotation15.png){:class="img-responsive"}

In der darauffolgenden Eingabemaske geben Sie die Eckdaten zu dem Angebot ein, dass Sie eben angelegt haben: Auftraggeber, Material und Gültig-ab-Datum (= Gültigkeitsdatum im Service). 

![ECS-BIA-SAPQuotation16](/img/content/ECS-BIA-SAPQuotation16.png){:class="img-responsive"}

Bestätigen Sie die Eingaben mit Enter und Sie erhalten eine Angebotsliste zu diesen Eckdaten. 

Liste Angebote:

![ECS-BIA-SAPQuotation17](/img/content/ECS-BIA-SAPQuotation17.png){:class="img-responsive"}

Alternativ können Sie über die Einstiegsmaske der Transaktion VA23 auch direkt die Belegnummer eingeben und sich die Detailinformationen dazu anzeigen lassen. 

Einstieg Angebote anzeigen:

![ECS-BIA-SAPQuotation18](/img/content/ECS-BIA-SAPQuotation18.png){:class="img-responsive"}

Sie landen beim Betätigen der Buttons *Verkauf, Positionsübersicht* und *Besteller* immer in der Übersichtsmaske für die Anzeige von Angeboten aber in unterschiedlichen Tabs mit unterschiedlichen Informationen.


Übersichtsmaske Angebote anzeigen:

![ECS-BIA-SAPQuotation19](/img/content/ECS-BIA-SAPQuotation19.png){:class="img-responsive"}

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
