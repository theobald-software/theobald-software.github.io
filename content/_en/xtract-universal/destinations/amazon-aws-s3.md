---
ref: destinations-22
layout: page
title: Amazon S3
description: Amazon S3
product: xtract-universal
parent: destinations
childidentifier: amazon-aws-s3
permalink: /:collection/:path
weight: 22
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=amazon-aws-s3
progressstate: 5
---

The following section describes data extraction to the [Amazon S3](https://aws.amazon.com/s3/) cloud storage.<br>
For more information on Amazon S3, see [Getting Started with Amazon S3](https://aws.amazon.com/s3/getting-started/).

## Requirements

- Existing Amazon Web Services (AWS) Account.
- **Either** the "[Access Keys](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html)" (consisting of "access key ID" and "secret access key") of your AWS user at hand.<br> **Or** an IAM role attached to the [EC2 instance](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html) Xtract Universal is running on.
- Existing S3 bucket, in which you can upload data.
- Sufficient permissions for list, read and write activities on S3. You must grant these rights in the user policy, but you can limit them to certain buckets. In the following example, the set permissions work in our environment.

### Permissions
![IAM_permissions_for_S3_destination](/img/content/xu/S3_desination_IAM_permissions.png){:class="img-responsive"}

{: .box-note }
**Note:** Xtract Universal uses so called [Multipart](https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html) upload for uploading data to S3. Data extracted from SAP is uploaded to S3 not as one big chunk of data but in smaller parts. These parts are buffered on the S3 side. If the extraction is successful, those parts are assembled by S3 into one file. While the extraction is still running this file is not visible on S3.

### Extraction failed
In case the extraction fails, for example because of an exception in the Xtract Universal software, Xtract Universal will take care that the already uploaded parts will be deleted from S3. In case of an "uncontrolled" extraction failure, for example due to network issues, Xtract Universal won't be able to delete those uploaded parts from S3.

We would therefore recommend to change the settings on S3 in a way that will trigger the automatic deletion of unused multiparts, e.g. after a day. You will find this setting by selecting a bucket and opening the "Management" tab. Select "Lifecycle" and "Add lifecycle rule" and create a rule for deleting unused multiparts.

![S3_Multipart_Rule](/img/content/S3_Multipart_Rule.png){:class="img-responsive"}


## Connection

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

The settings for file type *CSV* correspond to the [Flat File CSV settings](./csv-flat-file).

#### Parquet Settings

The following compatibility modes are available:
- *Pure* 
- *Spark* 
- *BigQuery*

Spark does not support the data types used in pure mode, so other data types need to be used. <br>
In spark mode special characters and spaces are replaced with an underscore `_`.

| SAP | Pure / BigQuery | Spark |
|------|-------------|-------|-------|
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


## Settings

### Opening the Destination Settings
1. Create or select an existing extraction (see also [Getting Started with Xtract Universal](../getting-started/define-a-table-extraction)).
2. Click **[Destination]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

### Destination Settings

![XU_S3_DestinationEinstellungen](/img/content/XU_S3_DestinationEinstellungen.png){:class="img-responsive"}

{% include _content/en/xu-specific/destinations/general/file-name.md %}

{: .box-note }
**Note:** If the name of an object does not begin with a letter, it will be prefixed with an ‘x’, e.g. an object by the name `_namespace_tabname.csv` will be renamed `x_namespace_tabname.csv` when uploaded to the destination.
This is to ensure that all uploaded objects are compatible with Azure Data Factory, Hadoop and Spark, which require object names to begin with a letter or give special meaning to objects whose names start with certain non-alphabetic characters. 

{% include _content/en/xu-specific/destinations/general/file-name-script-expressions.md %}

{% include _content/en/xu-specific/destinations/general/column-name-style.md %}

{% include _content/en/xu-specific/destinations/general/date-conversion.md %}

### Folder

Enter a folder name without slashes here if you want the extraction to be extracted to a folder within an S3 bucket.<br>
Subfolders are also supported and can be entered as follows: `Folder/Subfolder1/Subfolder2/` <br>

{% include _content/en/xu-specific/destinations/general/folder-script-expressions.md %}


{% include _content/en/xu-specific/destinations/general/compression.md %}

{% include _content/en/xu-specific/destinations/general/file-splitting.md %}

## Related Links
- [Amazon AWS: Getting Started - Backup & Restore with AWS](https://aws.amazon.com/backup-restore/getting-started/?nc1=h_ls)
- [Amazon S3: Getting Started with Amazon S3](https://aws.amazon.com/s3/getting-started/)
- [Amazon EC2: Getting Started with Amazon EC2](https://aws.amazon.com/ec2/getting-started/)
- [Amazon Documentation: Amazon EC2 security groups for Linux instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html)
- [Amazon Documentation: Security best practices in IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)
- [Amazon Documentation: Overview of managing access](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-overview.html)
