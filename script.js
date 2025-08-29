let request = indexedDB.open("model-storage");

request.onsuccess = function(event) {
  let db = event.target.result;
  let tx = db.transaction("contact", "readonly");
  let store = tx.objectStore("contact");
  let all = store.getAll();

  all.onsuccess = function() {
    let contacts = all.result;

    // Filter: address book contacts with name
    let filtered = contacts.filter(c => {
      return (
        c.id &&
        c.id.endsWith("@s.whatsapp.net") &&
        c.isAddressBookContact === 1 &&
        c.name &&
        c.name.trim() !== ""
      );
    });

    // Build vCard string
    let vcf = filtered.map(c => {
      let number = c.id.split('@')[0];
      return [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `FN:${c.name}`,
        `TEL;TYPE=CELL:+${number}`,
        "END:VCARD"
      ].join("\n");
    }).join("\n");

    // Trigger download
    let blob = new Blob([vcf], { type: "text/vcard" });
    let url = URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = url;
    a.download = "whatsapp_contacts.vcf";
    a.click();
    URL.revokeObjectURL(url);

    console.log("Exported", filtered.length, "contacts to VCF");
  };
};
