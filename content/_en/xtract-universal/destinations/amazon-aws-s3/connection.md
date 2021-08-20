---
ref: xu-amazon-aws-s3-02
layout: page
title: Connection
description: Connection
product: xtract-universal
parent: amazon-aws-s3
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=connection5
---

{% include _content/en/xu-specific/destinations/general/connection.md %}	 

### Destination Details

![XU_S3_DestinationDetails](/img/content/XU_S3_DestinationDetails.png){:class="img-responsive"}

### S3 Settings

#### Connection

**Inherit Credentials from IAM role**<br>
The credentials and permissions of the IAM role assigned to the [EC2 instance](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html), on which Xtract Universal is running is be used for authentication. 

**Access key ID and Secret key**<br>
Preferable authentication method towards Amazon AWS. Determine the values via AWS Identity and Access Management ([IAM](https://console.aws.amazon.com/iam/home#/home)).
More information is available in the official [AWS documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html).

**Connect**<br>
After entering Access key ID and Secret key, click **[Connect]**. After successfully connecting, select bucket name and region.

#### Bucket

**Bucket name and Region**<br>
Select a bucket and a region of the bucket's location. The SAP data is extracted into the particular bucket.

{: .box-note }
**Note:** The drop-down menus list **all** available buckets and regions, make sure to select the correct combination of bucket & region. Validate the connectivity to the selected bucket by clicking **[Test Connection)**.

**Test Connection**<br>
Validates the right combination of bucket and region. Insures bucket's accessibility from Xtract Universal using the entered access keys.


#### Server-side encryption

Choose how to encrypt data after uploading them to S3.<br>

{: .box-note }
**Note:** The setting "Server-side encryption" does not relate to transport encryption between Xtract Universal and S3. By default, the channel for sending data to S3 is always encrypted. 

- **None**<br>
 [Server-sided](https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html) encryption of data not active.

- **SSE-S3**<br>
Encrypts data using the by default available S3 user account encryption key ([S3 Managed Encryption Keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html)).

- **SSE-KMS und Key ID**<br>
Encryption using a custom encryption key created on AWS ([AWS Key Management Services](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html)). The key can be created on the [AWS website](https://console.aws.amazon.com/iam/home#/encryptionKeys/.)

#### Misc

All settings in *Misc* are optional.

**Folder Path**<br>
Enter the directory to upload files into.

**File Owner**<br>
If you upload files as an AWS user of an Account A to an Account B, you can select the option "Bucket Owner".
Without a declared owner, uploaded files cannot be opened directly.

### File Format

**File type**<br>
Select the required file format. You can choose between *Parquet* and *CSV*.
![AWS S3](/img/content/xu/XU_S3_DestinationDetails2.png){:class="img-responsive"}

#### CVS Settings

The settings for file type *CSV* correspond to the [Flat File CSV settings](../csv-flat-file).

#### Parquet Settings

**Compatibility mode**<br>
You can choose between *Pure* and *Spark* for the compatibility mode.
Spark does not support the data types used in pure mode, so other data types need to be used.

| SAP | Pure | Spark |
|------|-------------|-------|
| INT1 | UINT_8 | INT16 |
| TIMS | TIME_MILLIS | UTF8 |

![AWS S3 compability](/img/content/xu/xu_S3_dest_comp_mode.png){:class="img-responsive"}

### Column encryption
{% include _content/en/xu-specific/destinations/general/column-encryption.md %}

### Connection Retry

Connection retry is a built-in function of the AWS S3 destination. 
The retry function is automatically activated.

Connection retry is a functionality that prevents extractions from failing in case of transient connection interruptions to AWS S3. 
For more general information about retry strategies in an AWS S3 environment go to the official [AWS Help](https://docs.aws.amazon.com/general/latest/gr/api-retries.html).

Xtract Universal follows an exponential retry strategy. The selected exponential strategy results in 7 retry attempts and an overall timespan of 140 seconds. 
If a connection is not established during the timespan of 140 seconds, the extraction fails.


