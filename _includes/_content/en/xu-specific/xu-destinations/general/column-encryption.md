#### General

The "Column Encryption" feature enables users to encrypt columns in the extracted data set 
before uploading them to the destination.
By encrypting the columns you can ensure the safety of sensitive information.
You can store data in its encrypted form or decrypt it right away.

The feature also supports random access, meaning that the data is decryptable at any starting point. 
Since random access has a significant overhead, it is not recommended to use column encryption for encrypting the whole data set.

#### How to proceed

{: .box-note }
**Note:** The user must provide an RSA public key. 


1. Select the columns to encrypt under **Extraction settings > [General settings](https://help.theobald-software.com/en/xtract-universal/getting-started/general-settings) > Encryption**.
	![XU_Column_Encryption_01](/img/content/xu/xu-column-encryption-01.png){:class="img-responsive"}
	
 2. Make sure the **Enable column level encryption** checkbox is activated under **Extraction settings > General settings > Misc.**. 
	![XU_Column_Encryption_02](/img/content/xu/xu-column-encryption-02.png){:class="img-responsive"}

3. Click **[...]** in **Destination Details > Column Encryption** to import the public key as an .xml file.
	
4. Run the extraction.
	
5. Wait for XtractUniversal to upload the encrypted data and the "metadata.json" file to the destination.
	
6. Manually or automatically trigger your decryption routine. 
	
#### Decryption

The decryption depends on the destination environment. 
Implementation samples for Azure Storage, AWS S3 and local flat file CSV environments are provided at [GitHub](https://github.com/theobald-software/xu-column-decryption). 
Included are the cryptographic aspect, which is open source and also the interface to read the CSV data and "metadata.json" which is not open source.

#### Technical Information

The encryption is implemented as a hybrid cryptosystem. 
This means that a randomized AES session key is created when starting the extraction. 
The data is then encrypted via the [AES-GCM](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf) algorithm with the session key. <br>
The implementation uses the recommended length of 96 bits for the IV.
To guarantee random access, each cell gets its own IV/nonce and Message Authentication Code (MAC).
The MAC is the authenticity token in GCM providing a signature for the data.
In the resulting encrypted data set, the encrypted cells are assembled like this:
```
    IV|ciphertext|MAC
```
The IV is encoded as 7-Bit integer.
The session key is then encrypted with the RSA public key provided by the user. 
This encrypted session key is uploaded to the destination as a "metadata.json" file, including a list of the encrypted columns and formatting information of the destination.