---
ref: ecs-sin-nis-tr-configuring-the-solution-01
layout: page
title: Reiseantrag
description: Reiseantrag
product: erpconnect-services
parent: konfiguration
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=konfiguration
---

Der Workflow für den Reiseantrag ist folgendermaßen aufgebaut:

1. **Beantragung durch den Mitarbeiter**: Der Mitarbeiter füllt über das Nintex Forms Formular alle für den Reiseantrag benötigten Informationen wie Reiseziel, Reiseland, Startzeit, Endzeit, Grund usw. ein und sichert das Dokument. Der Workflow startet anschließend automatisch. 
2. **Automatischer Start des Workflows**: Als erster Schritt wird im Workflow geprüft, ob in dem List-Item bereits eine Reisenummer generiert wurde. Nur wenn dies nicht der Fall ist startet der Workflow. Die nachträgliche Bearbeitung bereits genehmigter Reiseanträge ist in diesem Workflow nicht vorgesehen. 
3. **Workflow durchläuft Genehmigungsprozess**: In mehreren Stadien wird nun ein Genehmigungsprozess durchlaufen, im Zuge dessen die geschätzten Kosten für Flüge, Hotelkosten und sonstige Kosten zusammengerechnet und an den Vorgesetzten übermittelt werden. Erst nach der Genehmigung durch den Vorgesetzten wird der Reiseantrag im SAP System verbucht und eine Reisenummer erzeugt.   
 
Die einzelnen Workflow Stadien werden im Folgenden näher erläutert:

**Submitted (Übertragen)**

Im ersten Workflow-Stadium *Submitted*  wird das Status Feld der SharePoint-Liste auf Submitted  gesetzt und eine EMail-Benachrichtigung an den Workflow-Initiator versendet. Anschließend springt der Workflow in das nächste Stadium.

![ECS-Nintex-TravelScenarios25](/img/content/ECS-Nintex-TravelScenarios25.png){:class="img-responsive"}

In der *Send notification* Workflow Action ist der Initiator des Workflows als Empfänger hinterlegt. Damit der EMail-Versand funktioniert, muss ein SMTP-Server auf dem Rechner konfiguriert sein und in den globalen Nintex Workflow-Einstellungen der EMail-Versand eingerichtet sein. Der Betreff- und Benachrichtigungstext sind individuell konfigurierbar. Im Beispiel wurde über ein Referenzfeld das Reiseziel in den Benachrichtungstext integriert.   

!ECS-Nintex-TravelScenarios26[](/img/content/ECS-Nintex-TravelScenarios26.png){:class="img-responsive"}

**Recalculating (Neuberechnung)**

Im zweiten Workflow-Stadium Recalculating werden die Kosten für Flüge, Hotels und andere Kosten, die der Mitarbeiter im Nintex Forms-Formular angegeben hat, zusammengerechnet und über einen integrierten Währungskonverter nach US-Dollar konvertiert, falls die Angaben in einer anderen Währung sind. Der Gesamtbetrag wird in der Workflow-Variable TotalUSD gespeichert und das Feld TotalUSD der SharePoint-Liste aktualisiert. Anschließend springt der Workflow in das nächste Stadium. 


![ECS-Nintex-TravelScenarios27](/img/content/ECS-Nintex-TravelScenarios27.png){:class="img-responsive"}

Falls sich der Workflow nach dem Importieren eventuell nicht publizieren lässt, kann das daran liegen, dass die User Defined Action *Get Detail Rows* nochmals neu gesichert werden muss. Öffnen Sie die in diesem Fall Konfigurationsmaske der Action und sichern diese nochmals. Unter Umständen muss auch das Quell-Feld (Source Field) nochmals neu zugewiesen werden (z.B. bei Flugkosten das Feld *Flights*).

In der Action werden die Kosten und die Währung für Flüge, Hotel und sonstige Kosten, die der Mitarbeiter im Nintex Forms-Formular aufgegeben hat, ermittelt und in Collection-Variablen gesichert. Die nachfolgenden Workflow-Actions *For Each Amount* und *Get its Currency*  holen Sich die Informationen zu Betrag und Währung aus den jeweiligen Collection-Variablen und sichern die Einzelwerte in Variablen.   

![ECS-Nintex-TravelScenarios28](/img/content/ECS-Nintex-TravelScenarios28.png){:class="img-responsive"}

Die User Defined Action *Convert to USD* berechnet anschließend aus der Kombination der Variablen für die Menge (ThisAmt) und die Währung (*ThisCurr*) den Betrag in US-Dollar um und speichert den Wert in einer Variablen (ThisAmtUSD). 


![ECS-Nintex-TravelScenarios34](/img/content/ECS-Nintex-TravelScenarios34.png){:class="img-responsive"}

Die Kalkulation zur Gesamtsumme erfolgt dann über die Workflow Action *Add to TotalUSD*:            

![ECS-Nintex-TravelScenarios35](/img/content/ECS-Nintex-TravelScenarios35.png){:class="img-responsive"}

Nachdem alle Kosten für Flüge, Hotels und sonstige Kosten berechnet wurden, wird das Feld Total USD  in der SharePoint Liste mit der Workflow-Variable *TotalUSD* aktualisiert und der Workflow wechselt in das nächste Stadium *Manager Approval*.  


**Manager Approval (Genehmigung durch den Vorgesetzten)**

Im nächsten Workflow-Stadium *Manager Approval* wird der Reiseantrag zur Genehmigung an den Vorgesetzten übermittelt und das Status-Feld auf *Under Review* gesetzt. Genehmigt der Vorgesetzte den Antrag, springt der Workflow weiter in das Stadium Approved, bei einer Ablehnung in das Stadium *Submitter Revisions*.  


![ECS-Nintex-TravelScenarios36](/img/content/ECS-Nintex-TravelScenarios36.png){:class="img-responsive"}

Die *Review Request* Workflow Action können Sie gemäß Ihren Anforderungen konfigurieren. Standardmäßig geht der Antrag an den Manager, der aus dem Active Directory ermittelt wird.<br>
In den Benachrichtigungstext sind über Referenzen verschiedene Informationen zum Reiseantrag integriert worden (Antragsteller, Gesamtbetrag, Reisezweck, etc.).  


![ECS-Nintex-TravelScenarios37](/img/content/ECS-Nintex-TravelScenarios37.png){:class="img-responsive"}

**Submitter Revisions (Überarbeitungen des Antragstellers)**

Im Falle eines abgelehnten Reiseantrags springt der Workflow in das Stadium Submitter Revisions. Der Antragsteller bekommt hier die Möglichkeit, den Antrag nochmals zu bearbeiten, wenn z.B. die Kosten zu hoch angesetzt wurden.

![ECS-Nintex-TravelScenarios38](/img/content/ECS-Nintex-TravelScenarios38.png){:class="img-responsive"}

Die Workflow-Action Offer Chance to Revise können Sie individuell nach Ihren Anforderungen konfigurieren. Standardmäßig geht die Workflow Task an den Antragsteller. Dieser kann dann entweder den Antrag zurückziehen (Withdraw), damit ist der Workflow dann beendet, oder er kann den Antrag ändern und erneut übermitteln (*Resubmit*), dann springt der Workflow wieder zurück in das Stadium *Recalculating*. 

![ECS-Nintex-TravelScenarios39](/img/content/ECS-Nintex-TravelScenarios39.png){:class="img-responsive"}

**Withdrawn (Zurückziehen des Antrags)**

Zieht ein Antragsteller einen Antrag zurück, wird das Status-Feld der SharePoint Liste auf Withdrawn gesetzt und der Workflow beendet.

![ECS-Nintex-TravelScenarios50](/img/content/ECS-Nintex-TravelScenarios50.png){:class="img-responsive"}

**Approved (Genehmigt)**

Im Stadium **Approved**  landet der Workflow, wenn der Vorgesetzte den Antrag genehmigt hat. Das Status-Feld wird auf Approved gesetzt und der Initiator erhält eine EMail-Benachrichtigung, dass sein Antrag genehmigt wurde.

![ECS-Nintex-TravelScenarios40](/img/content/ECS-Nintex-TravelScenarios40.png){:class="img-responsive"}

Die Benachrichtigungs Action können Sie nach Ihren Anforderungen konfigurieren. 

![ECS-Nintex-TravelScenarios41](/img/content/ECS-Nintex-TravelScenarios41.png){:class="img-responsive"}

Anschließend wird das Action Set *Get Personell Number* aufgerufen. Über diese Abfolge an Workflow Actions wird die SAP Personalnummer des Antragstellers aus dem Active Directory mit einer LDAP-Query ermittelt. Die Personalnummer wird zwingend für die SAP Integration benötigt und es es ist nicht praktikabel, dass der Mitarbeiter diese manuell aufgibt. Als Alternative zur Pflege im Active Directory wäre dies jedoch auch möglich. 

![ECS-Nintex-TravelScenarios42](/img/content/ECS-Nintex-TravelScenarios42.png){:class="img-responsive"}

Die Personalnummer ist im vorliegenden Szenario im Feld Office (physicalDeliveryOfficename) in den Benutzerangaben des Active Directory hinterlegt. Denkbar wäre, dafür auch ein benutzerdefiniertes Feld zu verwenden. 


![ECS-Nintex-TravelScenarios43](/img/content/ECS-Nintex-TravelScenarios43.png){:class="img-responsive"}

Nachdem die Personalnummer ermittelt und in der Workflow-Variable PersonellNumber gesichert wurde, erfolgt die SAP-Integration des Workflows mit der Theobald Software Custom Action *Call SAP-Function*. Die grundsätzliche Funktionsweise der Custom Action ist in der Online-Hilfe ausführlich hier beschrieben.

Es wird zunächst über eine Bedingung geprüft, ob das Feld Percentage in der SharePoint Liste gefüllt ist. Ist dies der Fall wurde eine alternative Kontierung aufgegeben und der SAP Funktionsbaustein muss mit weiteren Parametern befüllt werden. Es ist daher die Custom Action zweimal mit unterschiedlichen Eingabeparametern aufgeführt. 

In der Custom Action wird der SAP Funktionsbaustein **Z_FITP_CREATE_TRIP_FROM_REQUES** zur Anlage eines Reiseantrags aufgerufen. Es handelt sich dabei um einen Z-Baustein, der erst auf Ihrem SAP-System implementiert werden muss. Die Eingabeparameter werden über Verlinkungen zur SharePoint-Liste hergestellt. Teilweise sind auch fixe Eingabeparameter hinterlegt (z.B. MOREI = 01).

Folgende Ein- und Ausgabeparameter sind gesetzt:  

**Input**

	    MOREI 							=  01

**Changings**

	    WA_REQ_HEAD.PERNR 				= Insert Reference -> Workflow Variables -> PersonellNumber
        WA_REQ_HEAD.REQUESTVRS			= 99
        WA _REQ_HEAD.PLAN 				= R
        WA_REQ_HEAD.LOCATION_END 		= Insert Reference -> Item Properties -> Travel Destination
        WA_REQ_HEAD.COUNTRY_END 		= Insert Reference -> Item Properties -> Country (Inline Function Substring wird genutzt, um lediglich die ersten beiden Stellen zu erhalten)
        WA_REQ_HEAD.REQUEST_REASON 	= Insert Reference -> Item Properties -> Purpose
        WA_REQ_HEAD.DATE_BEG			= Insert Reference -> Item Properties -> Trip Start (Inline Function FormatDate wird zur Formatierung des Datumsformats verwendet)
        WA_REQ_HEAD.TIME_BEG			= Insert Reference -> Item Properties -> Trip Start Time (Inline Function Replace wird zur Formatierung verwendet) 
        WA_REQ_HEAD.DATE_END			= Insert Reference -> Item Properties -> Trip End (Inline Function FormatDate wird zur Formatierung des Datumsformats verwendet)
        WA_REQ_HEAD.TIME_END			= Insert Reference -> Item Properties -> Trip End Time (Inline Function Replace wird zur Formatierung verwendet)
        WA_REQ_HEAD.ACTIVITY_TYPE		= Insert Reference -> Item Properties -> Activity Tipe (Inline Function Substring wird genutzt, um lediglich die erste Stelle zu erhalten)
        WA_REQ_HEAD.ESTIMATED_COST   	= Insert Reference -> Workflow Variables -> TotalUSD
        WA_REQ_HEAD.CURRENCY			= USD
        WA_REQ_HEAD.STATUS				= 2     

**Tables (nur bei Bedingung erfüllt Percentage> 0)**  	 

	    Table Input  						= T_REQ_ACCOUNT
        PERNR	 						= Insert Reference -> Workflow Variables -> PersonellNumber 
            REQUESTVRS						= 99 
	    PLAN_REQUEST					= R 
	    ACCOUNT						= 01 
	    PERCENT						= Insert Reference -> Item Properties -> Percentage
            BUKRS 							= 1000 
	    KOSTL							= Insert Reference -> Item Properties -> Alternative Account Assignment
            

**Output**	 

	    output.WA_HEAD.REINR				= Workflow Variables -> TripNumber



![ECS-Nintex-TravelScenarios44](/img/content/ECS-Nintex-TravelScenarios44.png){:class="img-responsive"}

Einzelne Eingabeparameter werden mit Inline Funktionen, die Nintex Workflow bereitstellt,  in das korrekte SAP-Format formatiert (z.B. Country, Trip Start, Trip End, etc.).

![ECS-Nintex-TravelScenarios45](/img/content/ECS-Nintex-TravelScenarios45.png){:class="img-responsive"}

Als Output wird die Reisenummer in die Workflow-Variable *TripNumber* gesichert.

![ECS-Nintex-TravelScenarios46](/img/content/ECS-Nintex-TravelScenarios46.png){:class="img-responsive"}

Bei der Variante mit alternativer Kontierung wird zusätzlich die Tabelle **T_REQ_ACCOUNT** mit Eingabewerten bedient, ansonsten sind die Einstellungen identisch. 

![ECS-Nintex-TravelScenarios47](/img/content/ECS-Nintex-TravelScenarios47.png){:class="img-responsive"}

Nachdem die Funktion erfolgreich durchlaufen wurde, wird das Feld Trip *Number* in der SharePoint-Liste aktualisiert und als letzter Schritt ein Item in der SharePoint-Liste *Travel Expenses* angelegt, über die dann zum erzeugten Reiseantrag Reisekosten erfasst werden können.  

![ECS-Nintex-TravelScenarios49](/img/content/ECS-Nintex-TravelScenarios49.png){:class="img-responsive"}
