# WhatsApp Contacts Exporter (VCF)

Export your **saved WhatsApp contacts** from WhatsApp Web into a `.vcf` file that you can import into your phone’s Contacts app.

---

## 🚀 How It Works
This script reads WhatsApp Web’s internal **IndexedDB storage**, finds your contacts that are already saved in your phone’s address book, and exports them into a **VCF (vCard)** file.

---

## 📋 Steps to Use

1. Open [WhatsApp Web](https://web.whatsapp.com/) in your browser and log in.  
2. Press **F12** (or right-click → **Inspect**) to open **Developer Tools**.  
3. Go to the **Console** tab.  
4. Copy the entire script from [`script.js`](./script.js).  
5. Paste it into the console and press **Enter**.  
6. A file named **`whatsapp_contacts.vcf`** will be automatically downloaded.  
7. Import this file into your phone’s Contacts app or Google Contacts.

---

## 🛠 Troubleshooting

- **Problem:** Unable to paste into console.  
  **Solution:**  
  - Some browsers block pasting for security.  
  - To allow pasting, click inside the console, then type:  
    ```js
    allow pasting
    ```  
    (or right-click → “Allow paste” if prompted).  
  - Now paste the script again and press **Enter**.

- **Problem:** File didn’t download.  
  **Solution:**  
  - Make sure you are logged into WhatsApp Web.  
  - Refresh the page and try again.  
  - Ensure you copied the **entire script**.

---

## 📂 Output
- The exported file is a **VCF (vCard 3.0)** file.  
- Each contact includes:  
  - **Full Name** (`FN`)  
  - **Mobile Number** (`TEL`)  


