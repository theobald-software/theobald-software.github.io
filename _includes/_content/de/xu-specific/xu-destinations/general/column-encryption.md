#### Allgemeines

Sie können Daten sowohl verschlüsselt als auch unverschlüsselt speichern.
Die "Column Encryption" (Spalten-Verschlüsselung) Funktion ermöglicht dem Benutzer eine Verschlüsselung
der Spalten bevor die extrahierten Daten in die Destination hochgeladen werden.
Dadurch kann sichergestellt werden, dass sensible Informationen geschützt sind.

Diese Funktion unterstützt außerdem wahlfreien Zugriff, d.h. dass Daten von jedem beliebigen Startpunkt
aus entschlüsselt werden können.
Da wahlfreier Zugriff einen erheblichen Overhead verursacht, wird empfohlen die Spalten-Verschlüsselung nicht auf den gesamten Datensatz anzuwenden.


#### Weiteres Vorgehen

Der Benutzer muss einen öffentlichem RSA Schlüssel zur Verfügung stellen.
Richten Sie die Spalten Verschlüsselung anhand der folgenden Schritte ein:

1. Wählen Sie die zu verschlüsselnden Spalten unter **Extraction settings > [General settings](https://help.theobald-software.com/en/xtract-universal/getting-started/general-settings) > Encryption** aus.
	![XU_Column_Encryption_01](/img/content/xu/xu-column-encryption-01.png){:class="img-responsive"}
	
 2. Stellen Sie sicher, dass die **Enable column level encryption** Checkbox unter **Extraction settings > General settings > Misc.** ausgewählt ist. 
	![XU_Column_Encryption_02](/img/content/xu/xu-column-encryption-02.png){:class="img-responsive"}

3. Klicken Sie auf **[...]** unter **Destination Details > Column Encryption** um den öffentlichen Schlüssel als .xml-Datei zu importieren.
	
4. Führen Sie die Extraktion aus.
	
5. Warten Sie bis XtractUniversal die verschlüsselten Daten und die "metadata.json" Datei zur Destination hochgeladen hat.
	
6. Triggern Sie manuell oder automatisch Ihre Entschlüsselungsroutine. 
	
#### Entschlüsselung

Die Entschlüsselung ist abhängig von der Destination.
Beispiele für eine Implementierung Azure Storage, AWS S2 und lokale CVS Dateien 

The decryption depends on the destination environment. Implementation samples for Azure 
Storage, AWS S3 and local flat file CSV environments are provided at 
[GitHub](https://github.com/theobald-software/xu-column-decryption). 
Included are the cryptographic aspect, which is open source and also the interface to read 
the CSV data and "metadata.json" which is not open source.

#### Technical Information
The encryption is implemented as a hybrid cryptographic system. This means that a randomized AES session key is created when starting the extraction. The data is then encrypted via the [AES-GCM](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf) algorithm using the session key. <br>
The implementation uses the recommended length of 96 bits for the IV.
To guarantee random access, each cell gets its own IV/nonce and MAC (The MAC is the authenticity token in GCM providing a signature for the data).
In the resulting (encrypted) data set, the encrypted cells are assembled like that:
```
    IV|ciphertext|MAC
```
where the IV is encoded as 7-Bit integer.
The session key is then encrypted with with the RSA public key provided by the user. This encrypted session key is uploaded to the destination as a "metadata.json" file, including a list of the encrypted columns and some formatting information of the destination.