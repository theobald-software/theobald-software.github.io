### RFC_READ_TABLE Restrictions
Especially with older SAP releases you may encounter a few restrictions when using the SAP standard function module (RFC_READ_TABLE) for table extraction:

- The overall length of all columns to be extracted must not exceed 512 bytes.
- Depending on the SAP version there may be other restrictions. 
  It is not possible to extract data from tables that contain one or more columns of the data type f (FLTP, floating point), DEC (decimal, e.g. for percentage) or x (RAW, LRAW).
- Poor extraction performance with larger tables.

If the above-mentioned restrictions hinder your work, install the Theobald Software custom function module *Z_THEO_READ_TABLE* on your SAP system. 


### Installing the ABAP Framework Z_THEO_READ_TABLE 
<!--- YW, 03.02.2021  -> Fabian: Den Abschnitt würde ich überarbeiten und etwas klarer gestalten. Es gibt zwei Transporte, einen für SAP Systeme >= 7.40 SP5, und einen für Systeme  mit kleinerer Version. Punkt. Den Abschnitt auch nicht mit einer Note und einer Warning beginnen. "Faulty custom module import" weglassen, das klingt seltsam. Eigentlich die komplette Warning weglassen, wenn wir oben erklären, welcher Baustein auf welchem System eingespielt werden soll und weiter unten, dass es auf 7.00 Systemen Probleme geben kann. --->
<!--- Fas, 03.02.2021 -> Yogen: Diesen Abschnitt habe ich nicht angefasst oder überarbeitet. Die Inhalte wurden von Maia erstellt. Also da es bis Anfang April eine Lösung für die 700 Systeme geben wird, möchte ich hier nicht tätig werden.
<!--- When importing the Z_THEO_READ_TABLE-before_740SP05 on older SAP releases a syntax error may occur. Contact Theobald Software support and send the dedicated error message text.
Was genau ist damit gemeint? Schreib doch konkret, dass es auf 7.00-Systemen, oder welche das sind, einen Fehler beim Import geben kann und man sich an den Support wenden soll? Das würde dich dann in eine Note packen.--->

{: .box-note}
**Note:** Take a look at the README.txt in the installation directory (e.g.,`C:\Program Files\XtractProduct\ABAP\README.txt`) before installing any custom function modules.

{: .box-warning}
**Warning! Faulty custom module import**
The transport request version must comply with the SAP_ABA version, otherwise an error occurs during the import procedure.
For older SAP releases, use the older transport request: Z_THEO_READ_TABLE-before_740SP05.

When importing the Z_THEO_READ_TABLE-before_740SP05 on older SAP releases a syntax error may occur. Contact Theobald Software support and send the dedicated error message text.

- Z_THEO_READ_TABLE-before_740SP05.zip contains version 1.x (till 1.11) of Z_THEO_READ_TABLE - the single custom function module.
- Z_THEO_READ_TABLE.zip contains version 2.x of Z_THEO_READ_TABLE - the custom function module, a number of ABAP classes and other DDIC objects.  
![Z_THEO_READ_TABLE_SE80](/img/content/Z_THEO_READ_TABLE_SE80.png){:class="img-responsive" }
