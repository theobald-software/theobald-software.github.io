---
ref: ecs-sin-nis-tr-configuring-the-solution-02
layout: page
title: Reisekostenabrechnung
description: Reisekostenabrechnung
product: erpconnect-services
parent: konfiguration
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=konfiguration_reisekostenabrechnung
---

Der Workflow für die Reisekostenabrechnung ist folgendermaßen aufgebaut. 

1. **Beantragung durch den Mitarbeiter oder Sachbearbeiter**: Der Mitarbeiter oder ein Sachbearbeiter trägt im Nintex Forms Formular alle für die Reisekostenabrechnung benötigten Informationen ein und sendet den Antrag zur Genehmigung. Falls bereits ein Reiseantrag vorangegangen ist, müssen nur noch wenige Informationen eingetragen werden und lediglich die Kosten zur bestehenden Reise erfasst werden. Grundsätzlich ist auch die Erfassung eines Reisekostenantrags unabhängig von einem vorhergehenden Reiseantrag möglich. 
2. **Berechnung der Reisekosten**: Nach der Belegerfassung startet der Workflow automatisch und berechnet zunächst die Gesamtkosten für die erfassten Reisekosten. Der integrierte Währungskonverter rechnet die Beträge automatisch in die Zielwährung um.
3. **Workflow durchläuft Genehmigungsprozess**: In mehreren Stadien wird nun ein Genehmigungsprozess durchlaufen, im Zuge dessen der richtige Genehmiger für die Höhe der beantragten Reisekosten ermittelt wird und nach erfolgreicher Genehmigung die Reisekosten im SAP System verbucht werden.
Der Workflow-Ablauf wird im Weiteren näher erläutert:

**Add Expense Costs to Total (Gesamtkosten des Reisekostenantrags ermitteln)**

Zu Beginn des Workflows findet mit dem Action Set *Add Expense Costs to Total* eine Berechnung der Gesamtkosten aus den aufgegebenen Einzelposten (z.B. TAXI - Taxi, etc.) statt. 

![ECS-Nintex-TravelExpenses1](/img/content/ECS-Nintex-TravelExpenses1.png){:class="img-responsive"}

Die Einzelposten (Expense Types) werden mit der Workflow Action Get Form Detail Rows aus dem Nintex Forms Formular ermittelt und in Collection Variablen gesichert. Die nachfolgenden Workflow-Actions *For Each Expense Type, Get its amount* und *Get its Currency*  holen Sich diese Informationen wiederum aus den Collection-Variablen und sichern die Einzelwerte in Variablen.   

![ECS-Nintex-TravelExpenses2](/img/content/ECS-Nintex-TravelExpenses2.png){:class="img-responsive"}

Mit der User Defined Action Convert to USD findet zudem eine Umrechnung der Gesamtkosten in US-Dollar statt. Der Gesamtbetrag wird dann in der Variable *TotUSD* gepeichert.

Mit den parallel ablaufenden Actions QueryXML wird aus den Informationen zu Reisekosten, Betrag und Währung eine XML-Datei erzeugt, die später bei der Verbuchung nach SAP als XML-Input verwendet wird. Da das XML-Input je nachdem ob ein neuer Antrag gestellt wird, oder ein bestehender Reiseantrag weiterbearbeitet wird, anders aufgebaut ist, werden in zwei parallelen Aktionen zwei unterschiedliche XML-Input-Dateien erzeugt.   


![ECS-Nintex-TravelExpenses3](/img/content/ECS-Nintex-TravelExpenses3.png){:class="img-responsive"}

Der komplette Aufbau der XML-Input Dateien *XMLInputReceiptsNewTrip* und *XMLInputReceipts* erfolgt dabei in zwei Schritten, da diese Dateien aus mehreren Teilstücken zusammengesetzt werden müssen. Das Ergebnis wird jeweils in der Workflow Historie dokumentiert und der Gesamtbetrag für die Reisekosten wird in der Spalte *Gran Total* der SharePoint Liste aktualisiert. 

![ECS-Nintex-TravelExpenses4](/img/content/ECS-Nintex-TravelExpenses4.png){:class="img-responsive"}

Damit ist der erste Teil des Workflows beinahe beendet. Anschließend werden noch zwei Workflow-Variablen gesetzt, die für den weiteren Ablauf benötigt werden und der Workflow geht in den Genehmigungsteil über. 


![ECS-Nintex-TravelExpenses5](/img/content/ECS-Nintex-TravelExpenses5.png){:class="img-responsive"}

**Determine Next Approver**

Im Genehmigungs-Stadium *Determine Next Approver* wird der nächste Genehmiger für die Reisekosten ermittelt. Das Feld Review Status  der SharePoint Liste wird dabei zunächst auf *Determining Reviewer* gesetzt. 

![ECS-Nintex-TravelExpenses6](/img/content/ECS-Nintex-TravelExpenses6.png){:class="img-responsive"}

Anschließend wird mit der User Defined Action *Get User Info* der Vorgesetzte des Antragstellers ermittelt und das Ergebnis in die Workflow-Variable *Reviewer* gesichert. 

![ECS-Nintex-TravelExpenses9](/img/content/ECS-Nintex-TravelExpenses9.png){:class="img-responsive"}

Mit der Query List Action *Get this reviewer's approval limit*  wird anschließend aus der SharePoint-Liste Approver das Genehmigungs-Limit des Vorgesetzten ermittelt. 

![ECS-Nintex-TravelExpenses23](/img/content/ECS-Nintex-TravelExpenses23.png){:class="img-responsive"}

![ECS-Nintex-TravelScenarios11](/img/content/ECS-Nintex-TravelScenarios11.png){:class="img-responsive"}

Ist kein Genehmigungslimit gepflegt wird der Workflow direkt beendet. Falls ein Genehmigungs-Limit gefunden wird, wechselt der Workflow ins nächste Stadium *Request Approval*.

![ECS-Nintex-TravelExpenses7](/img/content/ECS-Nintex-TravelExpenses7.png){:class="img-responsive"}

**Request Approval**

Im Stadium *Request Approval*  wird zunächst das *Review Status* Feld der SharePoint-Liste auf *Reviewing* gesetzt.

![ECS-Nintex-TravelExpenses10](/img/content/ECS-Nintex-TravelExpenses10.png){:class="img-responsive"}

Anschließend wird mit der *Get Approval* Action der Genehmigungsantrag an den unter *Determine Next Approver* ermittelten Genehmiger gestellt. Diese Action können Sie jederzeit an Ihre individuellen Anforderungen anpassen. 

![ECS-Nintex-TravelExpenses11](/img/content/ECS-Nintex-TravelExpenses11.png){:class="img-responsive"}

Lehnt der Manager den Antrag ab, wechselt der Workflow in das Stadium *Process Rejection*. 

Genehmigt der Vorgesetzte den Antrag, dann wird mit der Action Calculate Date der Genehmigungszeitpunkt ermittelt und die Listen-Felder *Reviewed On, Reviewed By* und *Review Status* aktualisiert. Der Genehmigungsstatus ist zu diesem Zeitpunkt Approved provisionally (Provisorisch Genehmigt).

Anschließend wird geprüft, ob das Genehmigungslimit des Genehmigers hoch genug ist, um den Antrag zu genehmigen. 

![ECS-Nintex-TravelExpenses13](/img/content/ECS-Nintex-TravelExpenses13.png){:class="img-responsive"}

![ECS-Nintex-TravelExpenses12](/img/content/ECS-Nintex-TravelExpenses12.png){:class="img-responsive"}

Ist dies der Fall wechselt der Workflow in den Status *Process Approval*. Ist dies nicht der Fall geht der Workflow zurück in den Status *Determine Next Approver*, um den nächst höheren Vorgesetzten mit entsprechendem Genehmigungslimit zu ermitteln.


**Process Approval**

Im Workflow-Stadium Process Approval erfolgt die Verbuchung der beantragten Reisekosten ins SAP System. 

![ECS-Nintex-TravelExpenses14](/img/content/ECS-Nintex-TravelExpenses14.png){:class="img-responsive"}

Zunächst erfolgt eine E-Mail Benachrichtigung an den Antragsteller, dass sein Reisekostenantrag genehmigt wurde. Die Benachrichtigung können Sie individuell konfigurieren.

![ECS-Nintex-TravelExpenses15](/img/content/ECS-Nintex-TravelExpenses15.png){:class="img-responsive"}

Anschließend wird der das Feld *ReviewStatus* auf *Approved* gesetzt und die Verbuchung nach SAP wird initiiert.
Zunächst wird mit einer Bedingung geprüft, ob bereits eine Reisenummer existiert oder nicht. Falls nicht, handelt es sich um einen unabhängigen Reisekostenantrag, für den ein anderer SAP-Funktionsbaustein verwendet wird, wie bei der Weiterbearbeitung einer bereits bestehenden Reisenummer. Anschließend wird nochmals jeweils geprüft, ob eine alternative Kontierung aufgegeben wurde oder nicht. Je nachdem müssen die Eingangsparameter für den SAP-Funktionsbaustein anders gesetzt werden.  

![ECS-Nintex-TravelExpenses25](/img/content/ECS-Nintex-TravelExpenses25.png){:class="img-responsive"}

**Unabhängiger Reisekostenantrag (Bedingung Reisenummer gesetzt nicht erfüllt)**

Im Falle eines unabhängigen Reisekostenantrags wird in der Call SAP Function Action der SAP Standard-Funktionsbaustein ***BAPI_TRIP_CREATE_FROM_DATA***
aufgerufen. Mit diesem Funktionsbaustein werden die beantragten Reisekosten im SAP System verbucht. Als Eingabeparameter werden die Angaben in der SharePoint-Liste und einige fixe Parameter verwendet.

![ECS-Nintex-TravelExpenses17](/img/content/ECS-Nintex-TravelExpenses17.png){:class="img-responsive"}

Folgende Ein- und Ausgabeparameter sind gesetzt:

**Input parameters**

            EMPLOYEENUMBER			= Insert Reference -> Workflow Variables -> PersonellNumber
            FRAMEDATA.DEP_DATE		= Insert Reference -> Item Properties -> Trip Start (Inline Function FormatDate wird zur Formatierung des Datumsformats verwendet)
            FRAMEDATA.ARR_DATE		= Insert Reference -> Item Properties -> Trip End (Inline Function FormatDate wird zur Formatierung des Datumsformats verwendet)	
            FRAMEDATA.CUSTOMER		= Insert Reference -> Item Properties -> Purpose
            FRAMEDATA.LOCATION		= Insert Reference -> Item Properties -> Travel Destination 
            FRAMEDATA.COUNTRY 		= Insert Reference -> Item Properties -> Country (Inline Function Substring wird genutzt, um lediglich die ersten beiden Stellen zu erhalten)
            FRAMEDATA.T_SCHEMA		= 01
            STATUS.APPROVED		= 3
            	
**Tables (nur bei Bedingung erfüllt Percentage> 0)**
            
            Table Input				= COSTDIST_TRIP			
            
            PERC_SHARE 				   = Insert Reference -> Item Properties -> Percentage
            	COMP_CODE				= 1000
            COST_CENTER			= Insert Reference -> Item Properties -> Alternative Account Assignment
            
**Tables (bei beiden Varianten gesetzt)**
            
            Additional XML Table input	= XMLInputReceiptsNewTrip
            	
**Output**	 

    	    output.TRIPNUMBER 		= Workflow Variables -> TripNumber
	    output.RETURN.MESSAGE	= Workflow Variables -> SAP Return Message


Entscheidend für die Verbuchung der Einzelposten für die Reisekosten ist hier der zusätzliche XML-Input, der dynamisch im ersten Workflow-Schritt erzeugt und in der Variable *XMLInputReceiptsNewTrip* gespeichert wurde.  

![ECS-Nintex-TravelExpenses18](/img/content/ECS-Nintex-TravelExpenses18.png){:class="img-responsive"}

**Auf bestehender Reisenummer aufbauender  Reisekostenantrag (Bedingung Reisenummer gesetzt ist erfüllt)**

Im Falle eines Reisekostenantrags, der auf einer bestehenden Reisenummer aufbaut,  wird in der Call SAP Function Action der Funktionsbaustein ***Z_HRTV_IF_MODIFY_TRIP*** aufgerufen. Es handelt sich um einen Z-Baustein, der erst auf Ihrem SAP-System implementiert werden muss. 

Mit diesem Funktionsbaustein werden die beantragten Reisekosten im SAP System für eine bereits bestehende Reisenummer verbucht. Als Eingabeparameter werden die Angaben in der SharePoint-Liste und einige fixe Parameter verwendet.

![ECS-Nintex-TravelExpenses19](/img/content/ECS-Nintex-TravelExpenses19.png){:class="img-responsive"}

Folgende Ein- und Ausgabeparameter sind gesetzt:

**Input parameters**

	    EMPLOYEENUMBER			= Insert Reference -> Workflow Variables -> PersonellNumber
	    FRAMEDATA.DEP_DATE		= Insert Reference -> Item Properties -> Trip Start (Inline Function FormatDate wird zur Formatierung des Datumsformats verwendet)
        FRAMEDATA.ARR_DATE		= Insert Reference -> Item Properties -> Trip End (Inline Function FormatDate wird zur Formatierung des Datumsformats verwendet)	
        FRAMEDATA.CUSTOMER		= Insert Reference -> Item Properties -> Purpose
        FRAMEDATA.LOCATION		= Insert Reference -> Item Properties -> Travel Destination 
        FRAMEDATA.COUNTRY 		= Insert Reference -> Item Properties -> Country (Inline Function Substring wird genutzt, um lediglich die ersten beiden Stellen zu erhalten)
        FRAMEDATA.T_SCHEMA		= 01
        STATUS.APPROVED		= 3
        TRIPNO					= Insert Reference -> Item Properties -> TripNumber
        	

**Tables (nur bei Bedingung erfüllt Percentage> 0)**
            	    
        Table Input				= COSTDIST_TRIP		
        PERC_SHARE 			= Insert Reference -> Item Properties -> Percentage
        COMP_CODE				= 1000
        COST_CENTER			= Insert Reference -> Item Properties -> Alternative Account Assignment 
            

**Tables (bei beiden Varianten gesetzt)**
            
            Additional XML Table input	= XMLInputReceipts
            XML output table 			= RETURN
            XML output variable		= SAP Return Message
            Auch hier ist der entscheidende Punkt für die Anlage der Reisekosten-Belege der zusätzliche XML Input über die Variable XMLInputReceipts.

![ECS-Nintex-TravelExpenses20](/img/content/ECS-Nintex-TravelExpenses20.png){:class="img-responsive"}

Als nächster Schritt wird bei der Anlage einer unabhängigen Reisekostenabrechnung noch die Reisenummer im Feld *Trip Number* der SharePoint Liste aktualisiert.

![ECS-Nintex-TravelExpenses26](/img/content/ECS-Nintex-TravelExpenses26.png){:class="img-responsive"}

Anschließend wird für beide Varianten noch der Funktionsbaustein ***Z_BAPI_TRIP_CHANGE_STATUS***aufgerufen. Es handelt sich um einen Z-Baustein, der erst auf Ihrem SAP-System implementiert werden muss. Mit diesem Funktionsbaustein wird der Status des kompletten Reiseantrags auf genehmigt gesetzt. Dies bedeutet im SAP System, dass die Reisekosten zur Verrechnung ans Finanzwesen übergeleitet werden können.  

![ECS-Nintex-TravelExpenses27](/img/content/ECS-Nintex-TravelExpenses27.png){:class="img-responsive"}

Folgende Ein- und Ausgabeparameter sind gesetzt:

**Input parameters**

	    ACCOUNT_NEW			= 1
        APPROVED_NEW			= 2
        EMPLOYEENUMBER 		= Insert Reference -> Workflow Variables -> PersonellNumber	
        TRIPNUMBER				= Insert Reference -> Item Properties -> TripNumber
            

**Output**

	   output.RETURN.MESSAGE 	= RetMessChangeStatus


Anschließend wird noch das Feld Expensed der SharePoint-Liste auf Yes gesetzt und der Workflow ist beendet. 



**Process Rejection (Ablehnung eines Reiseantrags)**

Im Stadium Process Rejection landen Anträge, die abgelehnt wurden. 

![ECS-Nintex-TravelExpenses21](/img/content/ECS-Nintex-TravelExpenses21.png){:class="img-responsive"}

Der Antragsteller bekommt eine Benachrichtigung, dass sein Antrag abgelehnt wurde.

![ECS-Nintex-TravelExpenses28](/img/content/ECS-Nintex-TravelExpenses28.png){:class="img-responsive"}

Anschließend wird das aktuelle Datum ermittelt und im Feld Reviewed On neu gesetzt sowie das Feld Review Status auf Rejected gesetzt. 
Der Workflow ist damit beendet. 