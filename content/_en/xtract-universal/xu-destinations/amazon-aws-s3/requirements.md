---
ref: xu-amazon-aws-s3-01
layout: page
title: Requirements
description: Requirements
product: xtract-universal
parent: amazon-aws-s3
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=requirements6
---

You'll need:
- an Amazon Web Services (AWS) Account.
- **Either** the "[Access Keys](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html)" (consisting of "access key ID" and "secret access key") of your AWS user at hand. **Or** an IAM role attached to the [EC2 instance](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html) Xtract Universal is running on.
- an S3 bucket, in which you can upload data.
- Sufficient permissions for list, read and write activities on S3. Please grant these rights in the User Policy. You can limit these rights to certain buckets only. The permissions in below screenshot worked in our environment.
![IAM_permissions_for_S3_destination](img/content/xu/S3_desination_IAM_permissions.png){:class="img-responsive"}

**Note:**<br>
Xtract Universal uses so called [Multipart](https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html) upload for uploading data to S3. Data extracted from SAP is uploaded to S3 not as one big chunk of data but in smaller parts. These parts are buffered on the S3 side. If the extraction is successful, those parts are assembled by S3 into one file. While the extraction is still running this file is not visible on S3.

In case the extraction fails, for example because of an exception in the Xtract Universal software, Xtract Universal will take care that the already uploaded parts will be deleted from S3. In case of an "uncontrolled" extraction failure, for example due to network issues, Xtract Universal won't be able to delete those uploaded parts from S3.

We would therefore recommend to change the settings on S3 in a way that will trigger the automatic deletion of unused multiparts, e.g. after a day. You will find this setting by selecting a bucket and opening the "Management" tab. Select "Lifecycle" and "Add lifecycle rule" and create a rule for deleting unused multiparts.

![S3_Multipart_Rule](/img/content/S3_Multipart_Rule.png){:class="img-responsive"}