let popup1, popup2, popup3
window.addEventListener("DOMContentLoaded", function () {
  popup2 = window.typeformEmbed.makePopup(
    "https://admin.typeform.com/to/cVa5IG",
    {
      hideHeaders: true,
      hideFooter: true,
    }
  )
})

document.getElementById("bt-popup").addEventListener("click", function () {
  popup2.open()
})
