---
ref: xu-google-cloud-storage-01
layout: page
title: Requirements
description: Requirements
product: xtract-universal
parent: google-cloud-storage
permalink: /:collection/:path
weight: 1
lang: en_GB
---

### Prerequisites
- Google account
- Google Cloud Platform (GCP) subscrition (trial version offered)
- Project ("My First Project" is pre-defined)
- Google Cloud Storage (GCS) bucket for data extractions

### GCP console
The GCP console allows configuring of all resources and services. 
To get to the overview dashboard, navigate to the [Google Cloud Storage](https://cloud.google.com/storage) page and click **[Console]** or **[Go to console]**. 

To access all settings and services use the navigation menu on the upper left side.

![xu-google-cloud-req-01](/img/content/xu/googlecloudstorage/xu-google-cloud-req-01.png){:class="img-responsive"}
 
### To set up OAuth 2.0
Xtract Universal uses OAuth 2.0 for authentication with the Google servers.
To enable the OAuth 2.0 protocol configure an OAuth flow with the required access permissions to Xtract Universal.

{: .box-note }
**Note**: Google initially classifies third-party applications generally as unsafe and issues a warning. 
The verification process is optional. Official app verification involves ongoing charges.

1. In the navigation menu, select **APIs & Services > Credentials** .
![xu-google-cloud-req-02](/img/content/xu/googlecloudstorage/xu-google-cloud-req-02.png){:class="img-responsive"}
2. In the "Credentials" section select **Create Credentials > OAuth client ID**.
![xu-google-cloud-req-03](/img/content/xu/googlecloudstorage/xu-google-cloud-req-03.png){:class="img-responsive"}
3. Click **[Configure consent screen]**. The "Configure consent screen" is processed with the OAuth flow that is started when a connection is established in the Designer (see [Connection](./connection#gcs-settings)).
![xu-google-cloud-req-04](/img/content/xu/googlecloudstorage/xu-google-cloud-req-04.png){:class="img-responsive"}
4. If your account belongs to an organization, you can restrict the usage of Xtract Universal in combination with GCS to your organization. To do so, select “internal” in the “User Type” option.  The restriction option is only available, if you are a [GSuite](https://gsuite.google.com/) user. <br>
Alternatively you can allow any user with access to the OAuth credentials to grant Xtract Universal the permission to write data to your GCS buckets. To do so, select "external" in the “User Type” option. <br> 
Click **[Create]** to continue.
![xu-google-cloud-req-05](/img/content/xu/googlecloudstorage/xu-google-cloud-req-05.png){:class="img-responsive"}
5. In the "App information" section enter an app name of your choice. <br>
"Support email" and "Developer contact information" are also mandatory fields. Click **[Save and continue]** to get to the next section. <br>
![xu-google-cloud-req-06](/img/content/xu/googlecloudstorage/xu-google-cloud-req-06.png){:class="img-responsive"}
![xu-google-cloud-req-07](/img/content/xu/googlecloudstorage/xu-google-cloud-req-07.png){:class="img-responsive"}
6. In the following section click **[Add or remove scopes]**.
Xtract Universal needs read and write permissions for its operations, which are configured in the "Scopes" section.
![xu-google-cloud-req-08](/img/content/xu/googlecloudstorage/xu-google-cloud-req-08.png){:class="img-responsive"}
7. Enter `https://www.googleapis.com/auth/devstorage.read_write` under **Manually add scopes** and click **[Add to table]**.
![xu-google-cloud-req-09](/img/content/xu/googlecloudstorage/xu-google-cloud-req-09.png){:class="img-responsive"}
The newly added scope is the first entry in the table. Click **[Update]** to create the entry. 
![xu-google-cloud-req-10](/img/content/xu/googlecloudstorage/xu-google-cloud-req-10.png){:class="img-responsive"}
8. Click **[Continue]** when the "Verfification required" dialogue is prompted. <br>
![xu-google-cloud-req-11](/img/content/xu/googlecloudstorage/xu-google-cloud-req-11.png){:class="img-responsive"}
9. Confirm twice with **[Save and continue]**. Click **[Back to dashboard]** to return to the dashboard.      
![xu-google-cloud-req-12](/img/content/xu/googlecloudstorage/xu-google-cloud-req-12.png){:class="img-responsive"}
![xu-google-cloud-req-13](/img/content/xu/googlecloudstorage/xu-google-cloud-req-13.png){:class="img-responsive"}
![xu-google-cloud-req-14](/img/content/xu/googlecloudstorage/xu-google-cloud-req-14.png){:class="img-responsive"}
10. Return to the "Credentials" menu, click **[Create credentials]** and select "OAuth client ID". <br>
Select "Desktop app" as application type, give the app a name of your choice and click **[Create]**.
![xu-google-cloud-req-15](/img/content/xu/googlecloudstorage/xu-google-cloud-req-15.png){:class="img-responsive"}
11. Your OAuth client is now created. <br>
The "Client ID" and the "Client secret" are needed for the destination configuration in Xtract Universal (see [Connection](./connection)).
![xu-google-cloud-req-16](/img/content/xu/googlecloudstorage/xu-google-cloud-req-16.png){:class="img-responsive"}

