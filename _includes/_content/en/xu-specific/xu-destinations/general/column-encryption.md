#### General
The "Column encryption" feature enables the user to encrypt columns in the extracted data set, containing sensitive information before uploading it to the destination. Furthermore, the user can decide whether to store the data in its encrypted form or decrypt it right away. 
The feature also supports random access, meaning that the data is decryptable at any starting point. Since random access has a significant overhead, it is not recommended to use column encryption for encrypting the whole data set.

#### How to proceed
The user must provide the RSA public key.

Set up column encryption with the following steps:
    1. Select the columns to encrypt in the **Extraction settings > [General settings](https://help.theobald-software.com/en/xtract-universal/getting-started/general-settings) > Encryption**.
	 ![XU_Column_Encryption_01](/img/content/xu/xu-column-encryption-01.png){:class="img-responsive"}
    2. Make sure the encryption feature is enabled in by ticking extraction settings -> General settings -> Enable column level encryption.
	![XU_Column_Encryption_02](/img/content/xu/xu-column-encryption-02.png){:class="img-responsive"}
    3. In the "Destination Details" section "Column Encryption", click on the "..."-Button to import the public key as xml.
    4. Run the extraction.
    5. Wait for XtractUniversal to upload the encrypted data and the "metadata.json" file to the destination.
    6. Manually or automatically trigger your decryption routine. 
#### Decryption
The decryption depends on the destination environment. Theobald Software GmbH provides implementation samples for Azure Storage, AWS S3 and local flat file CSV environments. Included are the cryptographic aspect, which is open source and also the interface to read the CSV data and "metadata.json" which is not open source.
The templates for the decryption can be found at [GitHub](https://github.com/theobald-software/xu-column-decryption).

#### Technical Information
The encryption is implemented as a hybrid cryptograchic system. This means that a randomized AES session key is created when starting the extraction. The data is then encrypted via the [AES-GCM](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf) algorithm using the session key.
The implementation uses the recommended length of 96 bits for the IV.
To guarantee random access, each cell gets its own IV/nonce and MAC (The MAC is the authenticity token in GCM providing a signature for the data).
In the resulting (encrypted) data set. The encrypted cells are assembled like so:
```
    IV|ciphertext|MAC
```
where the IV is encoded as 7-Bit integer.
The session key is then encrypted with with the RSA public key provided by the user. This encrypted session key is uploaded to the destination as a metadata.json file, including a list of the encrypted columns and some formatting information of the destination.