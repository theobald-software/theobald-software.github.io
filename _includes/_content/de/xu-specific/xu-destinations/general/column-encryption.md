#### Allgemeines

Sie können Daten sowohl verschlüsselt als auch unverschlüsselt speichern.
Die "Column Encryption" (Spalten-Verschlüsselung) ermöglicht Ihnen eine Verschlüsselung
der Spalten bevor die extrahierten Daten in die Destination hochgeladen werden.
Dadurch kann sichergestellt werden, dass sensible Informationen geschützt sind.

Diese Funktion unterstützt außerdem wahlfreien Zugriff, d.h. dass Daten von jedem beliebigen Startpunkt
aus entschlüsselt werden können.
Da wahlfreier Zugriff einen erheblichen Overhead verursacht, wird empfohlen die Spalten-Verschlüsselung nicht auf den gesamten Datensatz anzuwenden.


#### Weiteres Vorgehen

{: .box-note }
**Hinweis:** TDer Benutzer muss einen öffentlichem RSA Schlüssel zur Verfügung stellen. 


1. Wählen Sie die zu verschlüsselnden Spalten unter **Extraction settings > [General settings](https://help.theobald-software.com/en/xtract-universal/getting-started/general-settings) > Encryption** aus.
	![XU_Column_Encryption_01](/img/content/xu/xu-column-encryption-01.png){:class="img-responsive"}
	
 2. Stellen Sie sicher, dass die **Enable column level encryption** Checkbox unter **Extraction settings > General settings > Misc.** ausgewählt ist. 
	![XU_Column_Encryption_02](/img/content/xu/xu-column-encryption-02.png){:class="img-responsive"}

3. Klicken Sie unter **Destination Details > Column Encryption** auf **[...]**, um den öffentlichen Schlüssel als .xml-Datei zu importieren.
	
4. Führen Sie die Extraktion aus.
	
5. Warten Sie bis XtractUniversal die verschlüsselten Daten und die "metadata.json" Datei auf die Destination hochgeladen hat.
	
6. Triggern Sie manuell oder automatisch Ihre Entschlüsselungsroutine. 
	
#### Entschlüsselung

Die Entschlüsselung ist abhängig von der Destination.
Beispiele für eine Implementierung mit Azure Storage, AWS S3 und lokalen CVS Dateien finden Sie in [GitHub](https://github.com/theobald-software/xu-column-decryption).
Die Beispiele beinhalten sowohl Kryptografie ald auch ein Interface, um "metadata.json" und CSV Daten zu lesen.
Der kryptografische Aspekt ist Open Source, das Interface nicht.

#### Technische Informationen

Die Verschlüsselung ist als Hybridverschlüsselung implementiert.
Das bedeutet, dass ein zufälliger AES Session Key (Sitzungsschlüssel) generiert wird sobald eine Extraktion ausgeführt wird.
Die Daten werden dann über den [AES-GCM](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf) Algorithmus in Kombination mit dem Session Key verschlüsselt.<br>
Die Implementierung verwendet die empfohlene Länge von 96 bits für den Initialisierungsvektor (IV).
Um den wahlfreien Datenzugriff zu garantieren, erhält jede Zelle seinen eigenen IV/nonce und einen Message Authentication Code (MAC).
Der MAC ist ein Authentifizierungstoken in GCM.
Im daraus resultierenden Datenset sind die Zellen wie folgt verschlüsselt: 
```
    IV|ciphertext|MAC
```
mit IV als 7-Bit Integer.
Der Session Key wird daraufhin mit dem öffentlichen RSA Schlüssel des Benutzers verschlüsselt
und zusammen mit einer Liste verschlüsselter Spalten und Formatinformation als "metadata.json" Datei auf die Destination hochgeladen.
